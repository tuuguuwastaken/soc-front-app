<template>
  <a-row>
    <a-col :span="24">
      <a-card>
        <a-row :gutter="10">
          <a-cols>
            <p>pfp</p>
          </a-cols>
          <a-col> 
            <p>{{post.posted_by}}</p>
          </a-col>
          <a-col>
            <p> {{ post.post_created }}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col class="post-box">
            <p style="text-align: left;">{{post.post_body}}</p>
            <img class="post-img" v-if="post.filename" :src="env.api+'api/v1/file/'+post.filename">
          </a-col>
        </a-row>
        <a-row :justify="'center'" :gutter="24">
          <a-col>
            <i class="fa fa-comment" aria-hidden="true"></i>
          </a-col>
          <a-col>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </a-col>
          <a-col>
            <i class="fa fa-heart-o fa-6" aria-hidden="true"></i>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { env } from '@/environment/environment';


export default {
  name:'post-box',
  components:{

  },
  props:{
    post:Object  
  },
  data(){
    return{
      env,
    }
  }
  
}
</script>

<style lang="scss" scoped>
.post-box{
  padding-left: 30px;
  padding-right: 30px;
}
.post-img{
  width: 75%;
  height:75%;
  padding:4px;
  border: 1px solid black;
}
</style>