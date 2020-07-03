<template>
  <div style="margin:20px">
    <h1 style="color: #2679b5;">
      MVO
      <small>
        <i class="icon-double-angle-right" /> Company Information
      </small>
    </h1>
    <br>
    <div style="margin:20px;margin-left:20px;color: #2679b5;">
      Company Information
    </div>

    <div style="width:90%;margin:0px auto">

      <el-table :data="comanyList" width="100%">
        <el-table-column
          prop="man_id"
          label="Company ID"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column
          prop="name_cn"
          label="Brand Name(CN)"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column
          prop="name_en"
          label="Brand Name(EN)"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column
          prop="gmc_report_type"
          label="GMC Report Type"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="gmc_report_url"
          label="GMC Report Url"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column label="operations" align="center">
          <template slot-scope="scope" label="operations">
            <el-button type="primary" @click="updateManufacturer(scope.row)">edit</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>

    <div style="margin:20px;margin-left:20px;color: #2679b5;">
      Brand Information
    </div>

    <div style="width:90%;margin:0px auto">

      <el-table :data="brandList" width="100%">

        <el-table-column type="selection" align="center" />

        <el-table-column
          prop="name_cn2"
          label="Brand Name(CN)"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="name_en2"
          label="Brand Name(EN)"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column align="center" label="image" width="160" prop="image">
          <template slot-scope="scope">
            <img :src="scope.row.image" width="100" height="100">
          </template>
        </el-table-column>

        <el-table-column label="operations" align="center">
          <template slot-scope="scope">
            <el-button type="info" @click="modifyBrand(scope.row)">Modify</el-button>
            <el-button type="warning" @click="deleteBrandS(scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>

      <br>
      <el-button size="mini" type="primary" @click="addBrand(scope.row)">Add</el-button>
    </div>

    <el-dialog title="teacher record" :visible.sync="dialogVisible" width="50%" :close-on-lick-modal="false">
      <el-form ref="addFormData" :model="addFormData" :rules="teacherRule" label-width="0px" class="">
        <el-form-item prop="name_en2">
          <el-input v-model="addFormData.name_en2" type="text" autocomplete="off" placeholder="tname" />
        </el-form-item>
        <el-form-item prop="image_url ">
          <span>
            <template slot-scope="scope">
              <img :src="scope.row.image" width="100" height="100">
            </template>
            <el-button style="width:150px" @click="chooseImage">Choose Image</el-button>
            <el-button style="width:150px" type="danger" @click="uploadImage">Upload Image</el-button>
          </span>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click.native="dialogVisible = false, addFormData = { name_en2: '', image_url:''}">Close</el-button>
        <el-button type="primary" @click.native="updateBrand">Submit</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>
export default {
  data() {
    return {
      comanyList: [],
      brandList: [],
      dialogVisible: false,
      tidVisible: false,
      scondition: '',
      addFormData: {
        name_en: '',
        name_cn: '',
        name_en1: '',
        name_cn1: '',
        decription: '',
        gmc_report_url: '',
        gmc_report_type: '',
        image_url: '',
        operationFlag: 'modify'
      },
      teacherRule: {
        tname: [{
          required: true,
          message: "tname shouldn't be null",
          trigger: 'blur'
        }]
      }
    }
  },
  mounted: function() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$store.dispatch('GetManufacturer').then((result) => {
        this.comanyList = result.data
      })
      this.$store.dispatch('GetBrandByFilter').then((result) => {
        this.brandList = result.data
      })
    },
    chooseImage: {

    },
    uploadImage: {

    },
    updateManufacturer: {

    },
    addBrand() {
      this.addFormData = {
        tid: '',
        tname: '',
        tgender: '',
        tduty: '',
        tresearch: '',
        tuniversity: '',
        tspecialty: '',
        operationFlag: 'add'
      }
      this.dialogVisible = true
      this.tidVisible = true

      this.$refs.addFormData.validate(valid => {
        if (valid) {
          console.log('the parameter is invalid')
          this.$store.dispatch('AddBrand', this.addFormData).then((result) => {
            if (result.data.data) {
              this.$message({
                type: 'info',
                message: `Add operation succeeded`
              })
            } else {
              this.$message({
                type: 'info',
                message: `Add operation failed`
              })
            }
            this.dialogVisible = false
            this.loadData()
          })
        } else {
          console.log('the image is invalid')
          return false
        }
      })
    },
    modifyBrand(rowData) {
      this.addFormData = Object.assign({}, rowData)
      this.dialogVisible = true
      this.tidVisible = false
      this.addFormData.operationFlag = 'modify'
    },

    updateBrand() {
      this.$refs.addFormData.validate(valid => {
        if (valid) {
          console.log('the parameter is invalid')
          this.$store.dispatch('UpdateBrand', this.addFormData).then((result) => {
            if (result.data.data) {
              this.$message({
                type: 'info',
                message: `update operation succeeded`
              })
            } else {
              this.$message({
                type: 'info',
                message: `update operation failed`
              })
            }
            this.dialogVisible = false
            this.loadData()
          })
        } else {
          console.log('the image is invalid')
          return false
        }
      })
    },
    deleteBrandS(rowData) {
      this.$confirm('Are you sure to delete the record?', 'Record Delete', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteTeacher', rowData.tid).then((result) => {
          if (result.data.data) {
            this.$message({
              type: 'info',
              message: `delete operation succeeded`
            })
          } else {
            this.$message({
              type: 'info',
              message: `delete operation failed`
            })
          }
          this.loadData()
        })
      }).catch(() => {
      })
    }
  }
}

</script>

<style>
.flex{
    display: flex;
    height: 600px;
    flex-direction: column;

}
</style>
