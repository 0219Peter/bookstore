<template>
    <div>
        <!-- 页头 登录 注册  -->

        <v-login></v-login>
        <!-- 图标+搜索+购物车 -->
        
        <v-jumbotron></v-jumbotron>
      <div class="container">
            <div class="row">
            <!-- 展板 -->
            <div class="col">
                <div style="" id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="../assets/b001.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../assets/b002.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../assets/b003.jpg" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <!-- 组件 -->
            <v-tabs></v-tabs>
            <!-- 排名推荐部分 -->
            <!-- 标签导航 -->
            
            </div>
      </div>
    <div class="jumbotron py-3">
        <h1 class="display-4">分类查看</h1>
        <hr class="my-2">
    </div>

        <div class="container">
        <!-- 分类 -->
        <div class="row">
            <div v-for="c in classes" :key='c' class="col-3">
                <div>
                    <button  v-bind:key="c" v-bind:class="['btn btn-primary btn-block', { active: currentClass === c }]" v-on:click="currentClass = c">{{ c }}</button>
                </div>
                
            </div>
        </div>
        <!-- 分类展示 -->

            <div class="row " v-for="book in bookclass" :key="book.class">
                <div   v-show="currentClass==book.class" v-for="i in book.books" :key="i.name" class="card mt-5 " style="width: 15rem;">
                    <img class="card-img-top" :src="i.cover" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">{{i.title}}{{i.author}}</p>
                    </div>
                    <button type="button" @click="toinfo(i.isbn)" class="btn btn-primary">查看</button>
                </div>
            </div>

        <!-- 页码 -->
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#1">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#2">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#3">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import TabsVue from './Tabs.vue';
import LoginVue from './Login.vue';
import JumbotronVue from './Jumbotron.vue';
import {fetchBookInfo} from '../api.js'
    export default {
        name:'Home',
        data(){
            return{
                currentClass:'英语',
                bookclass:[
                    {
                        class:'英语',
                        books:[
                            {price:'',title:'',author:'',publisher:'',isbn:'',cover:'',gnere:''}
                        ]
                    },
                    {
                        class:'计算机',
                        books:[
                        {price:'',title:'',author:'',publisher:'',isbn:'',cover:'',gnere:''}
                        ]
                    },
                    
                ],
                car:'',
                classes: [
                    '英语',
                    '计算机'
                ],
            }
        },
        components:{
            'v-tabs':TabsVue,
            'v-login':LoginVue,
            'v-jumbotron':JumbotronVue
        },
       async mounted(){
        const data = await fetchBookInfo()
        // console.log(data.books)
        const englishBooks = []
        const computerBooks = []
        data.books.forEach(element => {
          if(element.genre === 'computer') computerBooks.push(element)
          if(element.genre === 'english') englishBooks.push(element)
        });
        this.bookclass[0].books = englishBooks
        this.bookclass[1].books = computerBooks
        // console.log(this.bookclass)

        },
        computed:{
          cover: function(){
            let cover='';
            cover = "http://localhost:8080"
            return cover;
            },
        },
        methods:{
            //跳转至详细页面
            // todetail: function(){
            //     this.$router.pus({path:'/detail',query:{bookid:this.bookid}})
            // },
            toinfo: function(id){
                this.$router.push({ path: '/bookinfo', query: { bookid:id }});
                console.log(id)

            },
            //翻页
            nextpage: function(currentpage){
                this.axios.post("")
                .then((r)=>{
                    this.bookinfosa[currentpage].bookinfos=r
                })
                .catch((error) => console.log(error))
            }
        }
    }
</script>

