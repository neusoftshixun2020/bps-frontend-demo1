<template>
  <div style="margin-left:10px">
    <br>
    <br>

    <span>
      name：
      <el-input v-model="search_username" style="width:200px" placeholder @input="search" />
    </span>
    <el-button type="danger" icon="el-icon-search" />
    <el-button type="danger" plain icon="el-icon-plus" @click="dialogVisible = true">add</el-button>

    <br>
    <br>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" sortable label="ID" />
      <el-table-column prop="name" label="name" />
      <el-table-column prop="price" label="price" />
      <el-table-column prop="num" label="number" />
      <el-table-column prop="sku" label="sku" />

      <el-table-column label="operation">
        <template>
          <el-button type="danger" size="mini">delete</el-button>
          <el-button type="danger" size="mini">change</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Add" :visible.sync="dialogVisible" width="30%">
      <br>
      <br>
      <span>name：</span>
      <el-input style="width:300px" placeholder />
      <br>
      <br>
      <span>price：</span>
      <el-input style="width:300px" />
      <br>
      <br>
      <span>number：</span>
      <el-input style="width:300px" placeholder />
      <br>
      <br>
      <span>sku：</span>
      <el-input style="width:300px" />
      <br>
      <br>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">canceal</el-button>
        <el-button type="danger" @click="dialogVisible = false">sure</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 1, name: 'joy', price: 34, num: 8888, sku: 'GM001031' }
      ],
      orginTableData: [],
      dialogVisible: false
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style>
.container{
  margin-left:20px;

}
.top {
  display: flex;
  flex-direction: row;
  width: 20%;
  font-size: 15px;
  font-weight: bold;
  justify-content: space-between;
}
</style>
