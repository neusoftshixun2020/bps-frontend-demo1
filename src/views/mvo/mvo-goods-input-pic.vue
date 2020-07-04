<template>
  <div class="app-container">

    <el-col :span = '20' class = 'toolbar'>
      <p v-text ='head'></p>
      <el-input type='text' v-model='proName' autocomplete='off' placeholder='please enter the product name' style='width:20%' ></el-input>
      <el-button type = 'primary' size="small" @click="searchProByName(proName)">Search</el-button>
      <el-button type = 'primary' size="small" @click = 'addBtn'>添加</el-button>
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
        <el-table-column type="selection" />

        <el-table-column align="center" label="Product ID" >
          <template slot-scope="scope" >
            {{ scope.row.id }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="Product Name" >
          <template slot-scope="scope" >
            {{ scope.row.productname }}
          </template>
        </el-table-column>

          <el-table-column  align="center" label="Category">
            <template slot-scope="scope">
              {{ scope.row.category }}
            </template>
          </el-table-column>

        <el-table-column align="center" label="image"  >
          <template slot-scope="scope">
            <img :src="scope.row.image" width="30" height="30" >
          </template>
        </el-table-column>

          <el-table-column label="state"  align="center">
            <template slot-scope="scope">
              <el-tag>
                {{ scope.row.state }}
              </el-tag>
            </template>
          </el-table-column>

        <el-table-column  align="center" label = 'Operations' >
          <template slot-scope="scope">
            <el-button type = 'info' size="mini">edit</el-button>
            <el-button type = 'danger' size="mini" @click.native ='deleteRecord(scope.row,scope.$index)'>delete</el-button>
<!--            <el-button type = 'primary' size="mini" >store</el-button>-->
          </template>
        </el-table-column>

      </el-table>

    </div>

    <!--添加信息弹窗-->
    <el-dialog title='添加商品' :visible.sync = 'dialogVisible' width = '50%' :close-on-lick-modal = 'false'>
      <el-form :model = 'ProductData'  ref = 'ProductData' label-width = '0px' class = ''>

        <el-form-item label="Product Title" label-width="130px"  prop='sid'>
          <el-col :span="8">
            <el-input type='text' v-model='ProductData.title'  autocomplete='off' placeholder='Title'>
            </el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="Category" label-width="130px" >
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"></el-cascader>
          <el-cascader
            v-model="value2"
            :options="options2"
            @change="handleChange"></el-cascader>
        </el-form-item>

        <el-form-item label="Main Picture" label-width="130px" prop='sname'>
          <el-input type='text' v-model='ProductData.image' autocomplete='off' placeholder='main picture'>
          </el-input>
        </el-form-item>

      </el-form>
      <span slot = 'footer' class = 'dialog-footer'>
          <el-button type = 'primary' size='small' @click="addRecord">Save</el-button>
          <el-button type = 'danger' size='small' @click.native = "dialogVisible = false, ProductData = {
                     title:'',
                    first_category:'',
                    second_category:'',
                    image:'' }">Close</el-button>
       </span>
    </el-dialog>

  </div>

</template>



<script>
import { fetchList,AddRecord } from '@/api/product-input-pic'
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
      head:'Product Name',

      ProductData:{
          title:'',
          first_category:'',
          second_category:'',
          image:'',
          operationFlag:'add'
      },
      value:'',
      options:[{
                value:'ele-pro',
                label:'electronic product'},
              {
                value:'drinks',
                 label:'drinks'},
              {
                value:'food',
                label:'food'}
              ],
      value2:'',
      options2:[{
        value:'ele-pro',
        label:'electronic product'},
        {
          value:'drinks',
          label:'drinks'},
        {
          value:'food',
          label:'food'}
      ]
    }
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
    addBtn(){
      this.dialogVisible=true

    },
    addRecord(){
      AddRecord(this.ProductData).then(res => {
        this.$message({
          message: '添加成功',
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
    },
    edit(){
      this.dialogVisible=true
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




</style>
