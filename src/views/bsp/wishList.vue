<template>
  <div style="width:90%;margin:0px auto">
    <el-table :data="wishListData" width="100%">

      <el-table-column type="selection" />

      <el-table-column align="center" label="image" width="160" prop="image">
        <template scope="scope">
          <img :src="scope.row.image" width="100" height="100" @click="showDetail">
        </template>
      </el-table-column>

      <el-table-column
        prop="productname"
        label="Product Name"
        show-overflow-tooltip
      />

      <el-table-column
        prop="price"
        label="Price"
        show-overflow-tooltip
      />

      <el-table-column
        prop="id"
        label="sku"
        show-overflow-tooltip
      />
    </el-table>

  </div>

</template>

<script>
export default {
  name: 'WishList',
  data() {
    return {
      wishListData: [{
        productname: 'Cola',
        price: '￥3',
        image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3450121606,1183124297&fm=26&gp=0.jpg',
        id: '0001'
      },
      {
        productname: 'Nongfu Spring',
        price: '￥75',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593672093486&di=997ecf1797afcac4587a86a1bbafb217&imgtype=0&src=http%3A%2F%2F15992611.s21i.faiusr.com%2F2%2FABUIABACGAAgoKuQ0wUo1p6n9AYwuQM46wI.jpg',
        id: '0002'
      }]
    }
  },
  methods: {
    showDetail(rowData) {
      this.$router.push({
        path: '/productDetail'
      })
    }
  }
}
</script>

<style scoped>

</style>
