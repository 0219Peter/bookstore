<template>
    <div>
        <v-login></v-login>
        <v-jumbotron></v-jumbotron>

    <div class="jumbotron py-3">
        <h1 class="display-4">搜索结果</h1>
        <hr class="my-2">
    </div>
    <div class="container">

        <!-- 分类展示 -->
        <div class="row">
            <div class="card" style="width: 18rem;" v-for="b in books" :key="b.title">
                <img class="card-img-top" :src="b.cover" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{b.title}}</h5>
                    <p class="card-text">作者{{b.author}}价格{{b.price}}</p>
                    <a class="btn btn-primary" v-on:click="toinfo(b.id)">查看</a>
                </div>
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
    {{msg}}
    </div>
</template>
<script>
import LoginVue from './Login.vue';
import JumbotronVue from './Jumbotron.vue';
import {fetchSearch} from '../api.js'
export default {
  inject:['reload'],
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      books:[],
      search:'',
      text: '',
    }
  },
  components:{
      'v-login':LoginVue,
      'v-jumbotron':JumbotronVue
  },
  computed:{
          cover: function(){
            let cover='';
            cover = "http://localhost:8080"
            return cover;
        },
      },
 async mounted(){

      this.text = this.$route.query.text;
      const data =await fetchSearch(this.text)
      console.log(data.books)
      this.books = data.books
  },
    methods:{
        toinfo: function(id){
                this.$router.push({ path: '/bookinfo', query: { bookid:id }});
            },
    }
}
</script>

<style type="text/css">
        .icon {
            /* 通过设置 font-size 来改变图标大小 */
            width: 2em;
            height: 2em;
            /* 图标和文字相邻时，垂直对齐 */
            vertical-align: -0.15em;
            /* 通过设置 color 来改变 SVG 的颜色/fill */
            fill: currentColor;
            /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
                 normalize.css 中也包含这行 */
            overflow: hidden;
        }
    </style>