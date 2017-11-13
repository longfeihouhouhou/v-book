<template>
    <div class="mhead">
        <slot></slot>
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
    .mhead{
      height: 50px;
      line-height: 50px;
      width: 100%;
      justify-content: center;
      text-align: center;
      background: slategray;
      color: white;
      font-size: 20px;
    }
</style>
