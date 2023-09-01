<template>
  <a-row>
    <a-col :span="24">
      <a-card>
        <a-row :gutter="10">
          <a-cols>
            <img class="profile_pic" :src="env.api+'api/v1/file/'+profile_name">
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
            <i class="fa fa-comment" aria-hidden="true" @click="comment"></i>
          </a-col>
          <a-col>
            <i class="fa fa-retweet" aria-hidden="true" @click="retweet"></i>
          </a-col>
          <a-col>
            <i class="fa fa-heart-o fa-6" aria-hidden="true" @click="sendLike"></i>
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
      profile_name:"placeholder_pfp.png",
    }
  },
  created(){
    if(this.post.profile_pic != null){
      this.profile_name = this.post.profile_pic;
    }
  }
  
}
</script>

<style lang="scss" scoped>

.profile_pic{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
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