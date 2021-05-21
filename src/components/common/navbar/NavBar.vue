<template>
  <div class="nav-bar">
    <div class="nav-left">
        <slot name="nav-left"></slot>
    </div>
    <div class="nav-center">
        <slot name="nav-center"></slot>
    </div>
    <div class="nav-right">
        <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        /* 导航栏一般高度为44px */
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .nav-left, .nav-right{
        width:60px;
    }
    .nav-center{
        flex:1;
    }
</style>
