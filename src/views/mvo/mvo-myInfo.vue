<template>

  <div style="margin:20px">
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
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
