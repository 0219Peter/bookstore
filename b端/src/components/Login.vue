<template>
  <div class="container form-group">
    <form>
      <div class="row">
        <label>用户名：</label>
        <input v-model="name" @keyup.enter="focusPasswd()" type="text" class="form-control"
          style="width: 68%;margin-top:10px">
      </div>
      <div class="row mt-5">
        <label>密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
        <input v-model="passwd" @keyup.enter="focusLogin()" type="password" ref="passwd" class="form-control"
          style="width: 68%">
      </div>
      <div v-if="show" class="row mt-3 text-danger">
        <label>{{ msg }}</label>
      </div>
      <div class="row mt-5">
        <div class="col col-lg-6">
          <button type="reset" class="btn btn-sm btn-block">取消</button>
        </div>
        <div class="col col-lg-6">
          <button @click="login()" ref="go" type="button" class="btn btn-sm btn-block">登陆</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { AUTH_URL } from '../api.js'
  export default {
    name: "Login",
    data() {
      return {
        name: '',
        passwd: '',
        msg: '',
        show: false
      }
    },
    methods: {
      focusPasswd() {
        this.$refs.passwd.focus();
      },
      focusLogin() {
        this.$refs.go.focus();
      },
      login() {
        let user = { 'account': this.name, 'password': this.passwd }
        console.log(AUTH_URL)
        this.axios.post(`${AUTH_URL}/user/login`, user, { headers: { 'Content-Type': "application/json" } })
          .then((res) => {
            console.log(res)
            if (`${res.status}`.startsWith('2')) {
              this.show = false;
              this.router.push({ path: '/manage' })
              sessionStorage.setItem('__JWT_TOKEN__', res.data.token)
            } else {
              this.show = true;
            }
          })
      }
    }
  };
</script>

<style scoped>
  .container {
    height: 670px;
    width: 360px;
    padding-top: 200px;
    padding-left: 500px;
  }

  .btn-sm {
    margin-left: 30%;
  }
</style>