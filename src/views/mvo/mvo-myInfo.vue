<template>

  <!-- <div style="margin:20px">
    <h1 style="color: #2679b5;">
      MVO
      <small>
        <i class="icon-double-angle-right" /> My Information
      </small>
    </h1>
    <br>
    <div class="flex">
      <span>
        Company Name：
        <el-input style="width:200px" placeholder />
      </span>
      <br>
      <span>Brief Introduction:</span>
      <br>
      <el-input
        v-model="textarea2"
        style="width:800px"
        :autosize="{ minRows: 8, maxRows: 8}"
        type="textarea"
        placeholder="enter"
      />
      <br>
      <span>
        GMC Report Type：
        <el-input style="width:200px" placeholder />
      </span>
      <br>
      <span>
        GMC Report Url：
        <el-input style="width:200px" placeholder />
      </span>
      <br>
      <el-button style="width:150px" type="danger">save</el-button>
    </div>
  </div> -->
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" class="ruleForm">
    <!-- <el-form-item label="MVO" style="margin:20px;margin-left:20px;color: #2679b5">
      <small>
        <i class="icon-double-angle-right" /> My Information
      </small>
  </el-form-item> -->
       <el-form-item label-width="130px" label="MVO"  style="margin:20px;margin-left:20px;color: #2679b5">
         <div >My Information</div>
        </el-form-item>


    <el-form-item label="Company Name(Chinese)" prop="name_cn" style="margin-left:20px;">
      <el-input v-model.number="ruleForm.name_cn" style="width:200px" />
    </el-form-item>

    <el-form-item label="Company Name(English)" prop="name_en" style="margin-left:20px;">
      <el-input v-model.number="ruleForm.name_en" style="width:200px" />
    </el-form-item>

    <el-form-item label="Brief Introdution" prop="decription" style="margin-left:20px;">
      <el-input
        v-model="ruleForm.decription"
        style="width:800px"
        :autosize="{ minRows: 8, maxRows: 8}"
        type="textarea"
        placeholder="enter"
      />
    </el-form-item>

    <el-form-item label="GMC Report Type "  style="margin-left:20px;">
       <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"></el-cascader>
    </el-form-item>
    <el-form-item label="GMC Report Url" prop="gmc_report_url" style="margin-left:20px;">
      <el-input v-model.number="ruleForm.gmc_report_url" style="width:200px" />
    </el-form-item>
    <el-form-item style="margin-left:20px;">
      <el-button style="width:150px" @click="resetForm('ruleForm')">cancel</el-button>
      <el-button style="width:150px" type="danger" @click="submitForm('ruleForm')">save</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
export default {
 data() {
    return {
      ruleForm: {
        name_cn: '',
        name_en: '',
        decription: '',
        gmc_report_url: '',
        gmc_report_type: ''
      },
      value:'',
      options:[{
                value:'1',
                label:'amazon'},
              {
                value:'2',
                 label:'ebay'}
              ],
      rules: {
        name_cn: [{ required: true, message: 'Chinese name can not be null', trigger: 'blur' }],
        name_en: [{ required: true, message: 'English name can not be null', trigger: 'blur' }],
        options: [{ required: true, message: 'options can not be null', trigger: 'blur' }]
      }

    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({
            path: '/mvo-mycompany'
          })
          //  this.$router.push({
          //   path: '/mvo-company'
          // })
          /* 在这里进行跨域请求*/
          this.axios({
            method: 'post',
            url: '/api/user/addOrUpdateManufacturer'
          })
            .then(function(res) {
              console.log(res)
            })
            .catch(function(err) {
              console.log(err)
            })
          /* 在这里进行跨域请求*/
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
