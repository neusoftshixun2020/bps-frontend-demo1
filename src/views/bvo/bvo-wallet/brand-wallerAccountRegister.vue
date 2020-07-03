<template>
  <div>
    <el-container>
      <el-header>
        <h1 style="color: #2679b5;">品牌商<small><i class="icon-double-angle-right" /> 钱包账号注册</small></h1>
      </el-header>
      <el-main>
        <div class="Register">
          <div><label class="green">账号:</label><input type="text"></div>
          <div><label class="green">邮箱:</label><input type="text"></div>
          <div><label class="green">密码:</label><input type="password"></div>
          <button class="btn  btn-success save" @click="gotoWallet">注册</button>
        </div>
      </el-main>
    </el-container>

  </div>

</template>

<script>

export default {
  methods: {
    gotoWallet() {
      this.$router.push({
        path: '/brand-gmcwallerAcount'
      })
    }
  }
}
</script>

<style>
    .el-container {
        padding-left: 7px;
        padding-right: 7px;
    }
    .el-header {

        margin: 0 0 12px;
        border-bottom: 1px dotted #e2e2e2;
    }
    .Register {
        width: 50%;
        margin: auto;
    }
    .green {
        color: #69aa46!important;
    }
    .btn-success {
        background-color: #87b87f!important;
        border-color: #87b87f;
    }
    .btn {
        display: inline-block;
        padding: 0 12px 1px;
        line-height: 32px;
        color: #FFF!important;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.25)!important;
        font-size: 14px;
        background-image: none!important;
        background-color: #abbac3!important;
        border: 5px solid #abbac3;
        border-radius: 0!important;
        box-shadow: none!important;
        -moz-transition: all .1s ease-in-out;
        -webkit-transition: all .1s ease-in-out;
        -o-transition: all .1s ease-in-out;
        -ms-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
        cursor: pointer;
        vertical-align: middle;
        margin: 0;
        position: relative;
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
