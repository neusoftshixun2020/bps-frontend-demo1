<template>
  <el-container id="main-content" class="clearfix">
    <el-header>
      <div class="page-header position-relative">
        <h1 style="color: #2679b5;">
          MVO
          <small>
            <i class="icon-double-angle-right" /> My Information
          </small>
        </h1>
      </div>
    </el-header>
    <el-main>
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" class="ruleForm">
    
    <el-form-item label="Company Name(Chinese)" prop="name_cn" style="margin-left:20px;">
      <el-input v-model="ruleForm.name_cn" style="width:200px" />
    </el-form-item>

    <el-form-item label="Company Name(English)" prop="name_en" style="margin-left:20px;">
      <el-input v-model="ruleForm.name_en" style="width:200px" />
    </el-form-item>

    <el-form-item label="Brief Introdution" prop="description" style="margin-left:20px;">
      <el-input
        v-model="ruleForm.description"
        style="width:800px"
        :autosize="{ minRows: 8, maxRows: 8}"
        type="textarea"
        placeholder="enter"
      />
    </el-form-item>

    <el-form-item label="GMC Report Type "  style="margin-left:20px;" prop='gmc_report_type'>
      <!-- <el-cascader
            v-model="options.value"
            :options="options"></el-cascader> -->
       <el-input v-model="ruleForm.gmc_report_type" style="width:200px" />
    </el-form-item>
    <el-form-item label="GMC Report Url" prop="gmc_report_url" style="margin-left:20px;">
      <el-input v-model="ruleForm.gmc_report_url" style="width:200px" />
    </el-form-item>
    <el-form-item style="margin-left:20px;">
      <el-button style="width:150px" @click="resetForm('ruleForm')">cancel</el-button>
      <el-button style="width:150px" type="danger" @click.native = 'submitForm'>save</el-button>
    </el-form-item>
  </el-form>
    </el-main>
</el-container>
</template>

<script>
export default {
 data() {
    return {
      ruleForm: {
        name_cn: '',
        name_en: '',
        decription: '',
        gmc_report_type: '',
        gmc_report_url: ''
      },
      // options:[{
      //           value:'1',
      //           label:'TUV'},
      //         {
      //           value:'2',
      //            label:'UL'}
      //         ],
      rules: {
        name_cn: [{ required: true, message: 'Chinese name can not be null', trigger: 'blur' }],
        name_en: [{ required: true, message: 'English name can not be null', trigger: 'blur' }],
        options: [{ required: true, message: 'options can not be null', trigger: 'blur' }]
      }

    }
  },
  methods: { 
    submitForm(){
       this.$refs.ruleForm.validate(valid => {
        if(valid) {
          console.log('valid');
          this.$store.dispatch('AddManufacturer',this.ruleForm).then((result) => {
            console.log(result.code)
            if (result.code==200){
              this.$message({
                type: 'info',
                message: `add operation succeeded`
              })
               this.$router.push({path: '/mvo-mycompany'})
            }else{
              this.$message({
                type: 'info',
                message: `add operation failed`
              })
            }
           
          })
        } else {
          console.log('the parameter is invalid');
          return false
        }
      })
    }
   ,
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style>
 .main-content {
        border:1px solid red;
        padding-left: 7px;
        padding-right: 7px;
    }
    .el-header {
        margin: 0 0 12px;
        border-bottom: 1px dotted #e2e2e2;
    }
.flex{
    display: flex;
    height: 600px;
    flex-direction: column;
}
.div{
        margin: 0;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 20px;
        color: #333;
        background-color: #fff;

    }

</style>
