<template>
  <a-card>
    <a-row :gutter="[10,8]" :align="'middle'">
      <a-col :xl="24" :md="24">
        <img class="profile_pic" :src="env.api+'api/v1/file/'+profile_name">
      </a-col>
      <a-col :xl="24" :md="24"> {{ user.username }} </a-col>
      <a-col :xl="24" :md="24">friends here</a-col>
    </a-row>
  </a-card>
</template>


<script>
import UserService from "@/services/main/userService";
import { env } from "@/environment/environment";
export default {
  name:"post-box",
  components:{},
  data(){
    return{
      user: {},
      env,
      profile_name:'placeholder_pfp.png'
    }
  },
  methods:{
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
    if(sessionStorage.getItem('token')){
      this.getUserInfo();
    }
  }
}
</script>

<style scoped lang="scss">
  .profile_pic{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>