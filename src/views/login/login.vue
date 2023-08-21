<template>
  <a-row>
    <a-col :span="12">
      <a-card>
        <a-form>
          <a-form-item>
            <label>username</label>
            <a-input v-model:value="username"  id="username" placeholder="username:"/>
          </a-form-item>
          <a-form-item>
            <label>email</label>
            <a-input v-model:value="email" placeholder="email:"></a-input>
          </a-form-item>
          <a-form-item>
            <label>password</label>
            <a-input v-model:value="password" placeholder="password: "></a-input>
          </a-form-item>
          <a-form-item>
            <label> verify password :</label>
            <a-input v-model:value="password_verify" @change="verifyPassword"></a-input>
          </a-form-item>
        </a-form>
        <a-button @click="register">register</a-button>
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-input v-model:value="login_tag" aria-placeholder="tag">

      </a-input>
      <a-input v-model:value="login_pass" aria-placeholder="pass">

      </a-input>
      <a-button @click="login">
        login
      </a-button>
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
    verifyPassword(){
      if(this.password == this.password_verify){

        this.password_same = true;
      } else {
        this.password_same = false;
      }
    },
    register(){
      console.log(this.username,this.password,this.email)
      if(this.password_same){
        UserService.registerUser(this.username,this.password,this.email)
            .then(res =>{
              console.log(res)
            })
            .catch(err =>{
              console.log(err)
            })
      } else {
        alert('password not the same')
      }
    },
    login(){
      console.log(this.login_tag,this.login_pass)
      UserService.loginUser(this.login_tag,this.login_pass)
          .then(res => {
            if(res.data.login_status){
              localStorage.setItem('token',res.data.userid)
              this.$router.push('/')
            }
          })
          .catch(err =>{
            console.log(err)
          })
    }
  }
}
</script>

<style scoped lang="scss">

</style>