<template>
  <div id="app">
    <mMenu></mMenu>
    <router-view/>
  </div>
</template>
<script>
  import mMenu from './base/mMenu.vue'


export default {
    components:{mMenu}
}
</script>
<style   >
  html,body{
    width: 100%;height: 100%;
    overflow: hidden;
  }
  .content{
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 60px;
    overflow-y: scroll;
  }
</style>

