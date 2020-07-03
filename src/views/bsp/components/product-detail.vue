<template>
  <div id="wishListDetailContainer">
    <div style="overflow: hidden; width: 100%">
      <span style="width: 600px; float: left">
        <img :src="product.image" style="width: 400px; height: 400px">
      </span>
      <!--      <span style="width: 200px; float: left">-->
      <div class="info">
        <div class="productproperty" style="font-weight: 700; font-size: 22px;">{{ product.productname }}</div>
        <div class="productproperty" style="color: red">{{ product.price }}</div>
        <div class="productproperty">sku: {{ product.sku }}</div>
        <div class="productproperty">brand: {{ product.brand }}</div>
        <div class="productproperty">Stock in US: {{ product.stock }}</div>

        <div style="margin-top: 20px">
          <el-row style="width: 1000px">
            <el-button type="primary" size="small" class="productproperty">Dropship Now</el-button>
            <el-button type="primary" size="small" class="productproperty">Add to Wish List</el-button>
          </el-row>
        </div>
      </div>
      <!--      </span>-->
    </div>
    <div>
      <div class="wishlistTitle">Item Description</div>
      <el-tabs v-model="activeName" type="border-card" style="font-size: 20px; width: 800px">
        <el-tab-pane label="ebay description" name="first"><div class="productproperty">{{ product.ebayDescription }}</div></el-tab-pane>
        <el-tab-pane label="Amazon description" name="second"><div class="productproperty">{{ product.amazonDescription }}</div></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishListDetail',
  data() {
    return {
      product: {
        productname: 'Cola',
        price: '￥3',
        sku: '2545464471',
        image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3450121606,1183124297&fm=26&gp=0.jpg',
        brand: 'Coka Cola',
        stock: 32,
        ebayDescription: '我是可乐',
        amazonDescription: '我也是可乐'
      },
      activeName: 'first'
    }
  }
}
</script>

<style scoped>
  #wishListDetailContainer {
    margin: 20px 20px 20px 20px
  }

  .productproperty{
    margin-top: 25px;
    margin-right: 10px;
    font-size: 18px;
  }

  .wishlistTitle {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .info{
    margin-top: 48px;
    margin-left: 10px;
    font-size: 18px;
  }

</style>
