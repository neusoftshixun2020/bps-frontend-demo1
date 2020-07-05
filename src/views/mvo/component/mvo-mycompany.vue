<template>
  <div class="app-container">

    <el-col :span = '20' class = 'toolbar'>
      <p v-text ='head'></p>
      <!-- <el-button type = 'primary' size="small" @click="searchProByName(proName)">Search</el-button> -->
    </el-col>

    <div class="ProductTable">
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        fit
        border
        highlight-current-row
        width="80%"
      >

        <el-table-column align="center" label="Company Name(CN)" >
          <template slot-scope="scope" >
            {{ scope.row.name_cn }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="Company Name(EN)" >
          <template slot-scope="scope" >
            {{ scope.row.name_en }}
          </template>
        </el-table-column>


          <el-table-column  align="center" label="GMC Report Type">
            <template slot-scope="scope">
              {{ scope.row.gmc_report_type }}
            </template>
          </el-table-column>

          <el-table-column  align="center" label="GMC Report Url">
            <template slot-scope="scope">
              {{ scope.row.gmc_report_url }}
            </template>
          </el-table-column>


        <el-table-column  align="center" label = 'Operations' >
             <el-button type = 'primary' size="small" @click = 'EditBtn'>edit</el-button>
          <!-- <template slot-scope="scope">
            <el-button type = 'info' size="mini">edit</el-button>
            <el-button type = 'danger' size="mini" @click.native ='deleteRecord(scope.row,scope.$index)'>delete</el-button>

          </template> -->
        </el-table-column>

      </el-table>

    </div>

    <div style="margin:20px;margin-left:10px">
      Brand Information
    </div>
    <div class="BrandTable">
      <el-table
        ref="multipleTable1"
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        fit
        border
        highlight-current-row
        width="80%"
      >
        <el-table-column type="selection" />

        <el-table-column align="center" label="Brand Name(EN)" >
          <template slot-scope="scope" >
            {{ scope.row.name_en }}
          </template>
        </el-table-column>

          <el-table-column align="center" label="image"  >
          <template slot-scope="scope">
            <img :src="scope.row.image" width="30" height="30" >
          </template>
        </el-table-column>

        <el-table-column  align="center" label = 'Operations' >       
          <template slot-scope="scope">
            <el-button type = 'info' size="mini" @click.native ="edit(scope.row)">edit</el-button>
            <el-button type = 'danger' size="mini" @click.native ='deleteRecord(scope.row,scope.$index)'>delete</el-button>
          </template>
        </el-table-column>

      </el-table>
      
    </div>
        <br>
      <el-button type="primary" @click="addBrand" style="margin-left:90px">Add</el-button>
    

    <!--添加company弹窗-->
    <el-dialog title='Edit Company Information' :visible.sync = 'dialogVisible' width = '50%' :close-on-lick-modal = 'false'>
      <el-form :model = 'ProductData'  ref = 'ProductData' label-width = '0px' class = ''>

        <el-form-item label="Company Name(CN)" label-width="130px"  prop='sid'>
          <el-col :span="8">
            <el-input type='text' v-model='ProductData.name_cn'  autocomplete='off' placeholder='Title'>
            </el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="Company Name(EN)" label-width="130px"  prop='sid'>
          <el-col :span="8">
            <el-input type='text' v-model='ProductData.name_en'  autocomplete='off' placeholder='Title'>
            </el-input>
          </el-col>
        </el-form-item>

         <el-form-item label="Brief Introdution"  label-width="130px">
      <el-input
        v-model="ProductData.decription"    
        :autosize="{ minRows: 8, maxRows: 8}"
        type="textarea"
        placeholder="enter"
      />
    </el-form-item>

        <el-form-item label="GMC Report Type" label-width="130px" >
         <el-col :span="8">
            <el-input type='text' v-model='ProductData.gmc_report_type'  autocomplete='off' placeholder='Type'>
            </el-input>
          </el-col>
        </el-form-item>
         <el-form-item label="GMC Report Url" label-width="130px" >
         <el-col :span="8">
            <el-input type='text' v-model='ProductData.gmc_report_url'  autocomplete='off' placeholder='Url'>
            </el-input>
          </el-col>
        </el-form-item>

        <!-- <el-form-item label="Main Picture" label-width="130px" prop='sname'>
          <el-input type='text' v-model='ProductData.image' autocomplete='off' placeholder='main picture'>
          </el-input>
        </el-form-item> -->

      </el-form>
      <span slot = 'footer' class = 'dialog-footer'>
          <el-button type = 'primary' size='small' @click="addRecord">Save</el-button>
          <el-button type = 'danger' size='small' @click.native = "dialogVisible = false, ProductData = {
                     name_cn:'',
                    name_en:'',
                    gmc_report_type :'',
                    gmc_report_url:'' }">Close</el-button>
       </span>
    </el-dialog>

 <!--添加brand弹窗-->
    <el-dialog title='Add Brand' :visible.sync = 'dialogVisible1' width = '50%' :close-on-lick-modal = 'false'>
      <el-form :model = 'BrandData'  ref = 'BrandData' label-width = '0px' class = ''>

        <el-form-item label="Brand Name(EN)" label-width="130px"  prop='sid'>
          <el-col :span="8">
            <el-input type='text' v-model='BrandData.name_cn'  autocomplete='off' placeholder='Title'>
            </el-input>
          </el-col>
        </el-form-item>

         <el-form-item label-width="130px" >
         <div class="divcss5">Recommended image size 160*80 JPG/PNG format</div>
        </el-form-item>

        <el-form-item label="Brand Logo" label-width="130px" prop='sname'>    
            <el-input type='text' v-model='BrandData.image_url' autocomplete='off' placeholder='Image'>
          </el-input>      
          <br>
            <el-button style="width:150px" @click="chooseImage">Choose Image</el-button>
            <el-button style="width:150px" type="danger" @click="uploadImage">Upload Image</el-button>
        </el-form-item>

      </el-form>
      <span slot = 'footer' class = 'dialog-footer'>
          <el-button type = 'primary' size='small' @click="addRecord1">Save</el-button>
          <el-button type = 'danger' size='small' @click.native = "dialogVisible1 = false, BrandData = {
                    name_en:'',           
                    image_url:'' }">Close</el-button>
       </span>
    </el-dialog>


<!--添加brand弹窗-->
    <el-dialog title='Edit Brand' :visible.sync = 'dialogVisible2' width = '50%' :close-on-lick-modal = 'false'>
      <el-form :model = 'BrandData'  ref = 'BrandData' label-width = '0px' class = ''>

        <el-form-item label="Brand Name(EN)" label-width="130px"  prop='sid'>
          <el-col :span="8">
            <el-input type='text' v-model='BrandData.name_cn'  autocomplete='off' placeholder='Title'>
            </el-input>
          </el-col>
        </el-form-item>

         <el-form-item label-width="130px" >
         <div class="divcss5">Recommended image size 160*80 JPG/PNG format</div>
        </el-form-item>

        <el-form-item label="Brand Logo" label-width="130px" prop='sname'>    
            <el-input type='text' v-model='BrandData.image_url' autocomplete='off' placeholder='Image'>
          </el-input>      
          <br>
            <el-button style="width:150px" @click="chooseImage">Choose Image</el-button>
            <el-button style="width:150px" type="danger" @click="uploadImage">Upload Image</el-button>
        </el-form-item>

      </el-form>
      <span slot = 'footer' class = 'dialog-footer'>
          <el-button type = 'primary' size='small' @click="addRecord">Save</el-button>
          <el-button type = 'danger' size='small' @click.native = "dialogVisible2 = false, BrandData = {
                    name_en:'',           
                    image_url:'' }">Close</el-button>
       </span>
    </el-dialog>
  </div>

</template>



<script>
import { fetchList,AddRecord,EditRecord } from '@/api/product-input-pic'
import { DeleteRecord } from '@/api/product-input-pic'

export default {
  name: 'MergeHeader',
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      proName:'',
      dialogVisible:false,
      dialogVisible1:false,
      dialogVisible2:false,
      head:'Company Information',

      ProductData:{
          name_cn:'',
          name_en:'',
          decription:'',
          gmc_report_type:'',
          gmc_report_url:'',
          operationFlag:'add'
      },
       BrandData:{     
          name_en:'',
          image_url:'',
          operationFlag:'add'
      },
      value:'',
      options:[{
                value:'1',
                label:'amazon'},
              {
                value:'2',
                 label:'ebay'}
              ]}
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchList().then(response => {
        this.list = response.data.items
        // console.log("response:"+response)
        // console.log("response.data:"+response.data)
        // console.log("response.data.items:"+response.data.items)
        this.listLoading = false
      })
    },
    EditBtn(){
      this.dialogVisible=true
      this.BrandData.operationFlag="modify"

    },
    addBrand(){
     this.dialogVisible1=true
    },

    edit(row){
         this.dialogVisible2=true
         EditRecord(this.BrandData).then(res => {
        this.$message({
          message: 'change sucessfully',
          type: 'success'
        })
        this.fetchData()
      }).catch(() => {});
    },
    addRecord(){

      AddRecord(this.ProductData).then(res => {
        this.$message({
          message: 'add sucessfully',
          type: 'success'
        })
        this.fetchData()
      }).catch(() => {})
    },
addRecord1(){
      AddRecord(this.BrandData).then(res => {
        this.$message({
          message: 'add sucessfully',
          type: 'success'
        })
        this.fetchData()
      }).catch(() => {})
    },

    deleteRecord(row){
      console.log("进入删除")
      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      })
        .then(() => {
          const para = { id: row.id }
          console.log("删除的id:"+para)
          DeleteRecord(para).then(res => {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.fetchData()
          })
        })
        .catch(() => {})
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    handleChange(value) {
      console.log(value);
    }
    

  }
}
</script>


<style scoped>
  #wishListDetailContainer {
    margin: 20px 20px 20px 20px
  }


  .ProductTable {
    margin-top: 50px;
    margin-left: 80px;
    margin-right: 80px;
  }

.BrandTable {
    margin-top: 50px;
    margin-left: 80px;
    margin-right: 80px;
  }

.divcss5{ color:#F00} 

</style>
