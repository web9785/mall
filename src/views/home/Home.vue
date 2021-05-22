<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">
        购物街
      </div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :bannerData = 'bannerData'/>
    <!-- 推荐 -->
    <home-recommend :recommendData = 'recommendData'/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./homeComps/HomeSwiper"
import HomeRecommend from "./homeComps/HomeRecommend"
import {getHomeData} from "network/home"

export default {
  name: 'Home',
  data () {
    return {
      // 轮播图数据
      bannerData:[],
      recommendData:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  methods:{

  },
  created(){
    //请求数据
    getHomeData().then(res=>{
      // console.log(res.data)
      this.bannerData = res.data.banner.list;
      this.recommendData = res.data.recommend.list;
    })
  },
  mounted(){

  }
}
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color:#fff;
  }
</style>
