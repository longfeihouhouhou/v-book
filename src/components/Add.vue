<template>
    <div>
      <mHead>{{msg}}</mHead>
      <div class="content">
        <div>
          <label for="bookName">书名</label>
          <input type="text" id="bookName" v-model="book.bookName">
        </div>
        <div>
          <label for="bookCover">封面</label>
          <input type="text" id="bookCover" v-model="book.bookCover">
        </div>
        <div>
          <label for="bookInfo">详情</label>
          <input type="text" id="bookInfo" v-model="book.bookInfo">
        </div>
        <div>
          <label for="bookPrice">价格</label>
          <input type="text" id="bookPrice" v-model="book.bookPrice">
        </div>
        <div>
            <button @click="add">添加</button>
        </div>
      </div>
    </div>
</template>

<script>
  import mHead from '../base/mHead.vue'
  import axios from 'axios';
    export default {
        data() {
            return {
              msg: '添加',
              book:{
                bookName:"",
                bookCover:"",
                bookInfo:"",
                bookPrice:"",
              }
            }
        },
        created() {
        },
        methods: {
          add(){ // 点击添加按钮发送ajax
            axios.post('/api/book',this.book).then(res=>{ //res.end()
              this.$router.push('/list');
            })
          }
        },
        computed: {},
        components: {mHead}
    }
</script>

<style scoped lang="less">
.content div{
    width: 90%;
    margin:20px auto;
  label{float: left}
  input{
    margin-left: 20px;
    display: block;
    width: 80%;
  }
}

</style>
