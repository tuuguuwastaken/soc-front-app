<template>
  <a-row>
    <a-col>
      <a-card>
        <a-form>
          <a-form-item>
            <label>username</label>
            <a-input v-model="username" placeholder="username:"/>
          </a-form-item>
          <a-form-item>
            <label>email</label>
            <a-input v-model="email" placeholder="email:"></a-input>
          </a-form-item>
          <a-form-item>
            <label>password</label>
            <a-input v-model="password" placeholder="password: "></a-input>
          </a-form-item>
          <a-form-item>
            <label> verify password :</label>
            <a-input v-model="password_verify" @change="verifyPassword"></a-input>
          </a-form-item>
          <a-button @click="register"> register</a-button>
        </a-form>
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>