<template>
    <div>
      <mHead>主页</mHead>
      <div class="content">
        <Swiper :swiperSlides="sliders"></Swiper>
        <Loading  :isLoading="isLoading" :data="hot"></Loading>
        <template v-if="!isLoading&&hot.length">
          <h3>热门图书</h3>
          <ul class="hot">
            <li v-for="h in hot">
              <img :src="h.bookCover" alt="">
              <span>{{h.bookName}}</span>
              <span>{{h.bookPrice}}</span>
            </li>
          </ul>
        </template>
      </div>
    </div>
</template>

<script>
  import Loading from '../base/Loading.vue'
  import Swiper from '../base/Swiper.vue'
  import mHead from '../base/mHead.vue';
  import axios from 'axios'
    export default {
        data() {
            return {
              sliders:[],
              isLoading:true,
              hot:[]
            }
        },
        created() {
          this.getSliders();
          setTimeout(()=>{
            this.getHot();
          },1000)
        },
        methods: {
          getSliders(){
            axios.get('/api/sliders').then((res)=>{
              this.sliders = res.data;
            });
          },
          getHot(){
            axios.get('/api/hot').then((res)=>{
              this.hot = res.data;
              this.isLoading=false;
            })
          }
        },
        computed: {},
        components: {mHead,Swiper,Loading}
    }
</script>

<style scoped lang="less">
  .hot{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 33.333%;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      img{
        height: 120px;
        width: 80%;
      }
    }
  }
</style>
