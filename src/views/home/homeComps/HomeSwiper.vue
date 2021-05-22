<template>
    <swiper>
      <swiper-item v-for="(item,index) in bannerData" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name: 'HomeSwiper',
  props:{
    bannerData:{
      //数组或对象时，default属性必须是一个函数
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
      Swiper,
      SwiperItem
  }
}
</script>

<style scoped>

</style>
