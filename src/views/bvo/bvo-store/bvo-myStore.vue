<template>
  <el-container id="main-content" class="clearfix">
    <el-main id="page-content" iv class="clearfix">
      <div class="goodscontent">
        <p>My stores</p>
        <div class="store">
          <h3 class="blue">amamzon</h3>
          <p>store_001</p>
          <p>store_002</p>
          <p>store_003</p>
        </div>
        <div class="store">
          <h3 class="blue">ebay</h3>
          <p>store_001</p>
          <p>store_002</p>
          <p>store_003</p>
        </div>

        <div style="text-align: right">
          <el-button class="btn btn-primary addshop" @click="go">Add a new store</el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push({
        path: '/bvo-storeAdd'
      })
    }
  }
}
</script>

<style>
.el-container {
  margin: 0;
  background: #fff;
  padding: 8px 20px 24px;
}
.el-main {
  padding-bottom: 0;
  background-color: #e4e6e9;
  font-family: "Open Sans";
  font-size: 13px;
  min-height: 100%;
}
.store {
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 20px 0 20px 0;
  padding-left: 3%;
}
.p {
  line-height: 40px;
  color: #666;
  border-top: 1px solid #ccc;
}
.btn-primary {
    background-color: #2283c5!important;
    border-color: #2283c5;
}
.btn {
    display: inline-block;
    padding: 0 12px 1px;
    line-height: 32px;
    color: #FFF!important;
    font-size: 14px;
    background-image: none!important;
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
input, button, select, textarea {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.div{
    padding-bottom: 0;
    background-color: #e4e6e9;
    font-family: 'Open Sans';
    font-size: 13px;
    min-height: 100%;
}
.el-button{
    color: #2283c5;
}
</style>
