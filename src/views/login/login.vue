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
        <a-button @click="login">register</a-button>
      </a-card>
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
      UserService.loginUser(this.username ,this.password)
          .then(res => {
            if(res.data.login_status){
              this.setCookie('token',res.data.userid,1)
              this.$router.push('/')
            }
          })
          .catch(err =>{
            console.log(err)
          })
    },
    setCookie(name,value,expire) {
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + expire * 60 * 1000);

      const cookieValue = value;
      document.cookie = `${name}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
    }
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