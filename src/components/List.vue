<template>
    <div>
      <mHead>{{msg}}</mHead>
      <div class="content">
        <Loading :isLoading="isLoading" :data="books"></Loading>
        <ul v-if="!isLoading&& books.length">
          <li v-for="book in books">
            <img :src="book.bookCover" alt="">
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <span>{{book.bookPrice}}</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
  import Loading from '../base/Loading.vue'
  import mHead from '../base/mHead.vue'
  import axios from 'axios'
    export default {
        data() {
            return {
              msg: '列表',
              isLoading:true,
              books:[]
            }
        },
        created() {
          this.getBooks()
        },
        activated(){
          this.getBooks()
        },
        methods: {
        async getBooks(){
//           axios.get('/api/book').then((res)=>{
//            this.books = res.data;
//            this.isLoading =false;
//            })
          let res=await axios.get('/api/book');
          this.books=res.data;
          this.isLoading=false
          }
        },
        computed: {},
        components: {mHead,Loading}
    }
</script>

<style scoped lang="less">
.content{
  ul{
    margin: 10px;
   li{
     display: flex;
     border-bottom: 1px solid slategray;
   }
     img{
       width: 120px;
       height: 120px;
    }
  }
}

</style>
