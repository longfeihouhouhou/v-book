<template>
    <div>
      <ul class="ul">
        <li><router-link to="/home"><span>主页</span></router-link></li>
        <li><router-link to="/list"><span>列表页</span></router-link></li>
        <li> <router-link to="/add"><span>添加页</span></router-link></li>
        <li><router-link to="/detail"><span>详情页</span></router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {msg: 'Hello'}
        },
        created() {
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style scoped lang="less">
  .ul{
    position: fixed;
    height: 60px;
    line-height: 60px;
    width: 100%;
    bottom: 0;
    display: flex;
    background-color: white;
    li{
      width: 25%;
      border: 1px solid slategray;
      display: flex;
      float: left;
      justify-content: center;

    }
  }
</style>
