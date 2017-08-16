<template>
  <div>
<button class="btn btn-primary" @click="quayve()">Quay về</button>
  <div>ID_SANPHAM {{$route.params.product_id}}
        <div class="div-boxFood">
        <div>{{chitietSP.ten}}
         </div>
    <img width="200" height="200" v-bind:src="chitietSP.hinh">
    <div>{{chitietSP.gia}}</div>  <div>
      <button class="btn btn-primary" @click="nutsuaSP()">Sửa</button>
  </div>

  <div v-if="suaSP">
  <form>
        <div class="form-group">
          <label>Name Food:</label>
          <input v-model="chitietSP.ten" type="text"/>
        </div>
        <div class="form-group">
          <label>Image Food:</label>
          <input v-model="chitietSP.hinh" type="text"/>
        </div>
        <div class="form-group">
          <label>Price Food:</label>
          <input v-model="chitietSP.gia" type="text"/>
        </div>
        <button @click="editComplete()">Edit</button>
      </form>
    </div>


</div>

   </div>
 </div>
</template>
<script type="text/javascript">
export default {
  data: function() {
    return {
      chitietSP: {},
      suaSP: false
    };
  },
  created: function() {
    var that = this;
    console.log(that.$route);
    console.log(that.$router);
    var pro_detail_data = window.localStorage.getItem("product_data");
    var pro_detail_array = JSON.parse(pro_detail_data);
    that.chitietSP = pro_detail_array[that.$route.params.product_id];
  },
  methods: {
    quayve: function() {
      var that = this;
      that.$router.push({ path: "/home/" });
    },
    nutsuaSP: function() {
      var that = this;
      that.suaSP = true;
    },
    editComplete: function() {
      var that = this;
      var pro_detail_data = window.localStorage.getItem("product_data");
      var pro_detail_array = JSON.parse(pro_detail_data);
      pro_detail_array[that.$route.params.product_id] = that.chitietSP;
      pro_detail_data = JSON.stringify(pro_detail_array);
      window.localStorage.setItem("product_data", pro_detail_data);
      that.chitietSP = pro_detail_array[that.$route.params.product_id];
      that.suaSP = false;
    }
  }
};
</script>
<style scoped>
.div-boxFood{
  border: 1px solid blue;
  margin: 10px;

}
</style>
