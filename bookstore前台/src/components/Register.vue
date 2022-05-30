<template>
    <div>
        <v-login></v-login>

    <!-- 图标+搜索 -->
    <div class="jumbotron jumbotron-fluid bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-4 ">
                    <img src="../assets/bj.png" alt="..." class="img-fluid">
                </div>

            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-12">
                    <div class="form-group">
                        <label for="exampleInputPassword1">用户名</label>
                        <input v-model="registerinfo.name"  type="text" class="form-control" id="name" placeholder="请输入昵称">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">密码</label>
                        <input v-model="registerinfo.password" type="password" class="form-control" id="password" placeholder="请输入密码">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">电话</label>
                        <input v-model="registerinfo.phone" type="tel" class="form-control" id="tel" placeholder="请输入手机号码">
                    </div>

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">
                             我已阅读并接受
                            <a href="#">版权说明和隐私保护条款</a>
                        </label>
                    </div>
                    <button type="" class="btn btn-primary btn-block" v-on:click="regist()">Submit</button>

            </div>
        </div>
    </div>
    </div>
</template>
<script>
import LoginVue from './Login.vue';
    export default{
        name: 'Regiser',
        components:{
            'v-login':LoginVue
        },
        data(){
            return{
                user:'',
                username:'',
                userpassword:'',
                userphone:'',
                usersex:'',
                recvname:'',
                registerinfo:{
                    name:'',
                    password:'',
                    phone:'',
                    email:'',
                    userHead:'',

                }
            }
        },
        methods: {
                //注册
                regist: function() {
                    
                    // this.axios.post(`${this.host}/user`, this.registerinfo)           
                    //     .then((r) => {
                    //         console.log(r);
                    //         alert("注册成功")
                    //         this.$router.push('/')
                    //         })
                    //     .catch((error) => {
                    //         console.log(error)
                    //     })
                        window.localStorage.setItem('register',JSON.stringify(this.registerinfo))
                        // window.localStorage.setItem('password',registerinfo.password)
                        // window.localStorage.setItem('phone',registerinfo.phone)
                        console.log(window.localStorage)
                },
            }
    }
</script>
