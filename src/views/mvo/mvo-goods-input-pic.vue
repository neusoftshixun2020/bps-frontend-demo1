<template>
  <div class="app-container">

    <el-col :span="20" class="toolbar">
      <p v-text="head" />
      <el-input v-model="sCondition" type="text" autocomplete="off" placeholder="please enter the product name" style="width:20%" />
      <el-button type="primary" size="small" @click="search(sCondition)">Search</el-button>
      <el-button type="primary" size="small" @click="addBtn">添加</el-button>
    </el-col>

    <div class="ProductTable">
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        element-loading-text="Loading"
        fit
        border
        highlight-current-row
        width="80%"
      >
        <el-table-column type="selection" />

        <el-table-column align="center" label="Product ID">
          <template slot-scope="scope">
            {{ scope.row.PRC_ID }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="Product Name">
          <template slot-scope="scope">
            {{ scope.row.TITLE }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="Category">
          <template slot-scope="scope">
            {{ scope.row.CATEGORY_NAME }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="image">
          <template slot-scope="scope">
            <img :src="scope.row.image" width="30" height="30">
          </template>
        </el-table-column>

        <el-table-column label="state" align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.state }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column align="center" width="250px" label="Operations">
          <template slot-scope="scope">
            <el-button type="info" size="mini" @click="edit(scope.row)">edit</el-button>
            <el-button type="danger" size="mini" @click="deleteRecord(scope.row,scope.$index)">delete</el-button>

            <el-button v-if="scope.row.state=='待入仓'" type="primary" size="mini" round @click="changeState(scope.row)">入仓</el-button>

            <el-button v-else-if="scope.row.state=='待上架'" type="primary" size="mini" round @click="changeState(scope.row)">上架</el-button>

            <el-button v-else-if="scope.row.state=='上架中'" type="primary" size="mini" round @click="changeState(scope.row)">下架</el-button>

            <el-button v-else type="primary" size="mini" round :style="{ display: 'none' }" />

          </template>
        </el-table-column>

      </el-table>

      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change"
      />

    </div>

    <!--添加信息弹窗-->
    <el-dialog title="添加商品" :visible.sync="visible" width="50%" :close-on-lick-modal="false">
      <el-form ref="ProductData" :model="ProductData" label-width="0px" class="">

        <el-form-item label="Product Title" label-width="130px" prop="sid">
          <el-col :span="8">
            <el-input v-model="ProductData.TITLE" type="text" autocomplete="off" placeholder="Title" />
          </el-col>
        </el-form-item>

        <el-form-item label="Category" label-width="130px">
          <el-cascader
            v-model="ProductData.CATEGORY_NAME"
            :options="options"
            @change="handleChange"
          />
          <el-cascader
            v-model="ProductData.SECOND_CATEGORY"
            :options="options2"
            @change="handleChange"
          />
        </el-form-item>

        <el-form-item label="Main Picture" label-width="130px">
          <el-input v-if="false" v-model="ProductData.image" />
          <el-upload
            ref="upload"
            class="avatar-uploader"
            :show-file-list="false"
            action="/index/upload"
            :before-upload="beforeUpload"
            :on-change="handleChange"
            :auto-upload="false"
            :data="ProductData"
          >
            <img v-if="ProductData.image" :src="ProductData.image" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="saveBtn">Save</el-button>
        <el-button
          type="danger"
          size="small"
          @click.native="visible = false, ProductData = {
            TITLE:'',
            CATEGORY_NAME:'',
            SECOND_CATEGORY:'',
            image:'' }"
        >Close</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>

export default {
  name: 'MergeHeader',
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      sCondition: '',
      head: 'Product Name',
      operation: '',

      total: 0, // 默认数据总数
      pagesize: 7, // 每页的数据条数
      currentPage: 1, // 默认开始页面

      visible: false,

      ProductData: {
        PRC_ID: '',
        TITLE: '',
        CATEGORY_NAME: '',
        SECOND_CATEGORY: '',
        state: '',
        image: '',
        width: '',
        height: '',
        imageName: '',
        operationFlag: 'add'
      },

      options: [{
        value: 'electronic product',
        label: 'electronic product' },
      {
        value: 'drinks',
        label: 'drinks' },
      {
        value: 'food',
        label: 'food' },
      {
        value: 'electric appliance',
        label: 'electric appliance'
      }
      ],
      value2: '',
      options2: [{
        value: 'electronic product',
        label: 'electronic product' },
      {
        value: 'drinks',
        label: 'drinks' },
      {
        value: 'food',
        label: 'food' }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    current_change: function(currentPage) {
      this.currentPage = currentPage
    },
    fetchData() {
      this.listLoading = true
      this.$store.dispatch('FetchList').then((result) => {
        this.list = result.data
        this.total = this.list.length
        this.listLoading = false
      })
    },
    addBtn() {
      this.ProductData = {
        PRC_ID: '',
        TITLE: '',
        CATEGORY_NAME: '',
        SECOND_CATEGORY: '',
        image: '',
        operationFlag: 'add'
      }
      this.visible = true
    },
    saveBtn() {
      if (this.ProductData.operationFlag === 'add') {
        this.$store.dispatch('AddRecord', this.ProductData).then((result) => {
          if (result.data) {
            this.fetchData()
          } else {
            this.$message({
              type: 'info',
              message: '未查询到相关记录！'
            })
          }
        })
      } else {
        this.$store.dispatch('UpdateRecord', this.ProductData).then((result) => {
          if (result.data) {
            this.fetchData()
          } else {
            this.$message({
              type: 'info',
              message: '更新失败！'
            })
          }
        })
      }
      this.visible = false
    },
    deleteRecord(row) {
      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      })
        .then(() => {
          this.$store.dispatch('DeleteRecord', row.PRC_ID).then((result) => {
            if (result.data) {
              console.log('result:' + result.data.data)
              this.$message({
                type: 'info',
                message: '删除成功！'
              })
            } else {
              this.$message({
                type: 'info',
                message: '删除失败！'
              })
            }
            this.fetchData()
          })
        })
        .catch(() => {
        })
    },

    changeState(row) {
      // 改变状态，传给后端商品ID和商品当前状态，后端进行判断，并在数据库进行相应的更新
      const para = { 'PRC_ID': row.PRC_ID, 'state': row.state }
      this.$store.dispatch('ChangeState', para).then((result) => {
        if (result.data) {
          console.log('result:' + result.data.data)
          this.$message({
            type: 'info',
            message: '操作成功！'
          })
        } else {
          this.$message({
            type: 'info',
            message: '操作失败！'
          })
        }
        this.fetchData()
      })
    },
    // formatJson(filterVal, jsonData) {
    //   return jsonData.map(v => filterVal.map(j => {
    //     if (j === 'timestamp') {
    //       return parseTime(v[j])
    //     } else {
    //       return v[j]
    //     }
    //   }))
    // },
    edit(rowData) {
      this.ProductData = {
        PRC_ID: rowData.PRC_ID,
        TITLE: rowData.TITLE,
        CATEGORY_NAME: rowData.CATEGORY_NAME,
        image: rowData.image,
        operationFlag: 'update'
      }
      this.visible = true
    },
    search() {
      this.listLoading = true
      this.$store.dispatch('SearchRecord', this.sCondition).then((result) => {
        if (result.data) {
          this.list = result.data
        } else {
          this.$message({
            type: 'info',
            message: '查询失败！'
          })
        }
      })
    },
    /**
     * 图片上传
     * @param res
     * @param file
     */
    handleChange(file, fileList) {
      this.ProductData.image = URL.createObjectURL(file.raw)

      const img = new Image()
      img.src = this.ProductData.image

      //   let type = this.formData.iconFile.type.split('/')[1];
      /*
      this.ProductData.width = img.width
      console.log("url:"+this.ProductData.image)
      console.log("width:"+this.ProductData.width)
      console.log("height:"+img.height)*/
    },

    beforeUpload(file) {
      return true
    }
  }

}
</script>

<style scoped>
  .ProductTable {
    margin-top: 100px;
    margin-left: 70px;
    margin-right: 70px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>

