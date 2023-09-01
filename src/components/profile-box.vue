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
import { env } from "@/environment/environment";
export default {
  name:"post-box",
  components:{},
  data(){
    return{
      env,
    }
  },
  props:{
    profile_name:{
      type:String,
    },
    user:Object,
  },
  methods:{
  },
  created(){
    
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