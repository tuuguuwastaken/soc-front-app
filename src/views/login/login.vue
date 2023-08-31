<template>
  <a-row :justify="'center'">
    <a-col :span="7">
      <a-card>
        <a-form>
          <a-form-item>
            <label>username</label>
            <a-input v-model:value="username"  id="username" placeholder="username:"/>
          </a-form-item>
          <a-form-item>
            <label>password</label>
            <a-input v-model:value="password" placeholder="password: "></a-input>
          </a-form-item>
        </a-form>
        <a-button @click="login">login</a-button>
      </a-card>
      <p>if you dont have an account register, click here</p><a href="/register">register</a>
    </a-col>
  </a-row>
</template>

<script>
import UserService from "@/services/main/userService";
export default {
  name: "login-page",
  components:{},
  data(){
    return{
      username:'',
      password:'',
      email:'',
      password_verify:'',
      password_same: false,
      login_tag:'',
      login_pass:"",
    }
  },
  methods:{
    login(){
      if(this.username && this.password){
        UserService.loginUser(this.username ,this.password)
          .then(res => {
            if(res.data.login_status){
              localStorage.setItem('token',res.data.userid)
              this.$router.push('/')
            }
          })
          .catch(err =>{
            console.log(err)
          })
      } else {
        alert('please enter username and password')
      }
    },
  },
  created(){
    if(localStorage.getItem('token')){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">

</style>