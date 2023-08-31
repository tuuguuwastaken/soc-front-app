<template>
  <a-row :gutter="5">
    <a-col :span="5" :offset="2">
      <profile-box></profile-box>
    </a-col>
    <a-col :span="11" >
      <a-card bordered>
        <a-row>
          <a-col :span="24">
            <a-form-item>
              <newpost></newpost>
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
import MenuService from "@/services/main/MenuService.js";
import profileBox from "@/components/profile-box.vue";
import newpost from "@/components/new_post.vue";
import postBox from '@/components/newPost.vue'
import PostService from '@/services/main/postService'

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
        posts:[]
      }
  },
  methods:{
    resetForm(){
      this.name='';
      this.description='';
      this.price=null;
    },
    sendRequest(){
      if(!this.name || !this.price){
        alert('please enter something')
      } else{
        MenuService.addToMenu(this.name,this.description,this.price).then(res =>{
          console.log(res)
          this.resetForm()
        }).catch(err =>{
          console.log(err)
        })
      }
    },
    getMenuItem(){
      MenuService.getMenu()
          .then(res =>{
            console.log(res)
            this.resetForm()
          }).catch(err=>{
            console.log(err)
          })
    },
    getPosts(){
      
    }
  },
  created(){
    if (!sessionStorage.getItem('token')) {
      this.$router.push('/login')
    }
    PostService.getPosts()
      .then(res => {
        this.posts = res.data
        console.log(res.data)
        console.log(this.posts)
      })  
  },
}
</script>

<style lang="scss" scoped>
  textarea{
    width: 100%;
    height: 100%;
  }
</style>
