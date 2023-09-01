<template>
  <a-row :gutter="[5,5]" :justify="'center'">
    <a-col :xl='5' :md='5' :sm="20" :xs="20">
      <profile-box :profile_name="profile_name" :user="user"></profile-box>
    </a-col>
    <a-col :xl='11' :md='12' :sm="24">
      <a-card bordered>
        <a-row>
          <a-col :span="24">
            <a-form-item>
              <newpost :user="user" :profile_name="this.profile_name"></newpost>
            </a-form-item>
          </a-col>
        </a-row>
        <a-divider></a-divider>
        <div v-for="post in posts" :key="post.id">
          <post-box :post="post"> </post-box>
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import profileBox from "@/components/profile-box.vue";
import newpost from "@/components/new_post.vue";
import postBox from '@/components/newPost.vue'
import PostService from '@/services/main/postService';
import UserService from "@/services/main/userService";

export default {
  name: 'Home-main',
  components: {
    profileBox,
    postBox,
    newpost
  },
  data() {
    return {
        text:'',
        name: '',
        description: '',
        price: null,
        posts:[],
        user:{},
        profile_name:"placeholder_pfp.png",
      }
  },
  methods:{
    resetForm(){
      this.name='';
      this.description='';
      this.price=null;
    },
    getUserInfo(){
      UserService.findUser(sessionStorage.getItem('token'))
      .then(res =>{
        this.user = res.data;
        if(res.data.profile_pic != null){
          this.profile_name = res.data.profile_pic
        }
        console.log(this.user)
      })
    }
  },
  created(){
    if (!sessionStorage.getItem('token')) {
      this.$router.push('/login')
    } else {
      PostService.getPosts()
      .then(res => {
        this.posts = res.data
        this.posts = this.posts.reverse() 
      })
      if(sessionStorage.getItem('token')){
        this.getUserInfo();
      }  
    }
  },
}
</script>

<style lang="scss" scoped>
  textarea{
    width: 100%;
    height: 100%;
  }
</style>
