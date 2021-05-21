<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">
        购物街
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color:#fff;
  }
</style>
