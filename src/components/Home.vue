<template>
  <div>
    <div><button @click="logout()" type="button" class="btn btn-secondary">Logout</button></div>
   <div><span class="badge badge-pill badge-danger"> Giỏ hàng: {{order}}</span></div>
  <div>
     <button class="btn btn-primary" @click="themSanPham()">Thêm sản phẩm</button>

     <div id="add-product-form" v-if="themSP">

         <form>
           <div class="form-group">
             <label>Tên:</label>
           <input class="form-control" v-model="productNew.ten"/>
         </div>

         <div class="form-group">
           <label> Hình</label>
           <input class="form-control" v-model="productNew.hinh"/>
         </div>

         <div class="form-group">
           <label>
           Giá:</label>
           <input class="form-control" v-model="productNew.gia"/>
         </div>
         <button class="btn btn-primary" @click="addSanPhamMoi()">Thêm sản phẩm</button>
         </form>


       </div>

       </div>

<div class="row">

    <div class="col-md-3 col-sm-6 col-xs-12" v-for="product, index in products">
      <div class="div-boxFood">

      <div>{{product.ten}}
         <button class="btn btn-primary" @click="chitiet(index)">Chi tiết</button>
       </div>

  <img width="200" height="200" v-bind:src="product.hinh">
  <div>{{product.gia}}</div>  <div>
  <button class="btn btn-primary" @click="xoaFood(product)">X</button>
    <button id="add-item" class="btn btn-primary" @click="addOrder()">Thêm vào giỏ hàng</button>
</div>
<hr />
</div></div>
   </div>



  </div>
</template>
<script>
export default {
  data: function() {
    return {
      themSP: false,
      order: 0,
      productNew: {},
      products: [
        {
          product_id: 0,
          ten: "Pizza",
          hinh:
            "https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-maddy-default-e1479167621575.png",
          gia: "100$"
        },
        {
          product_id: 1,
          ten: "Chicken",
          hinh:
            "http://chuthapdo.org.vn/wp-content/uploads/2015/04/cach-lam-mon-ga-ran-ngon-1.jpg",
          gia: "100$"
        },
        {
          product_id: 2,
          ten: "Hot dog",
          hinh:
            "http://lamdh.vinawebsite.vn/12983/wp-content/uploads/2016/11/Hotdog-3.jpg",
          gia: "100$"
        },
        {
          product_id: 3,
          ten: "Beef Steak",
          hinh: "https://i.ytimg.com/vi/lS_lzYfmIPE/maxresdefault.jpg",
          gia: "100$"
        }
      ]
    };
  },
  created: function() {
    var that = this;

    var product_data = window.localStorage.getItem("product_data");
    if (product_data == null) {
      product_data = JSON.stringify([]);
    }
    var product_array = JSON.parse(product_data);
    that.products = product_array;
    that.order = JSON.parse(window.localStorage.getItem("number_of_cart"));
  },
  methods: {
    logout: function() {
      var that = this;
      that.$router.push("/");
    },
    addSanPhamMoi: function() {
      var that = this;
      var product_data = window.localStorage.getItem("product_data");
      if (product_data == null) {
        product_data = JSON.stringify([]);
      }
      var product_array = JSON.parse(product_data);

      product_array.push(that.productNew);

      product_data = JSON.stringify(product_array);
      window.localStorage.setItem("product_data", product_data);
      that.product = product_array;
      that.productNew = {};
    },
    xoaFood: function(products) {
      var that = this;
      var index = that.products.indexOf(products);
      that.products.splice(index, 1);
      var product_array = JSON.stringify(that.products);
      window.localStorage.setItem("product_data", product_array);
      that.order = JSON.parse(window.localStorage.getItem("product_data"));
    },
    addOrder: function() {
      var that = this;
      that.order++;
      console.log(that.cart);
      window.localStorage.setItem("number_of_cart", JSON.stringify(that.order));
    },
    chitiet: function(index) {
      var that = this;
      that.$router.push({ path: "/chitiet/" + index });
    },
    themSanPham: function(index) {
      var that = this;
      that.themSP = true;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div-boxFood{
  border: 1px solid red;
  margin: 10px;
}
</style>
