<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <form><div class="form-group">
      <label >Username</label>
      <input class="form-control" v-model="username" placeholder="Enter username"/>
    </div><div class="form-group">
      <label>Password</label>
      <input class="form-control" v-model="password" type="password" placeholder="Enter password"/>
    </div>
    <button type="button" class="btn btn-primary" @click="login()">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "Login",
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      var that = this;
      if (that.username == "" && that.password == "") {
        that.$router.push("/home");
      } else {
        alert(" Login Fail");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
