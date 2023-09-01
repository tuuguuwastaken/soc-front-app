<template>
  <a-row :justify="'center'">
    <a-col  :xl="7" :md="12" :sm="20" :xs="24">
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
            <a-input-password v-model:value="password" placeholder="password: ">
              <template #iconRender="v">
                <EyeTwoTone v-if="v"></EyeTwoTone>
                <EyeInvisibleOutlined v-else></EyeInvisibleOutlined>
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <label> verify password :</label>
            <a-input-password v-model:value="password_verify" placeholder="verify password:" @change="verifyPassword">
              <template #iconRender="v">
                <EyeTwoTone v-if="v"></EyeTwoTone>
                <EyeInvisibleOutlined v-else></EyeInvisibleOutlined>
              </template>
            </a-input-password>
          </a-form-item>
        </a-form>
        <a-button @click="register">register</a-button>
      </a-card>
      </a-col>
    </a-row>
</template>


<script>
import UserService from "@/services/main/userService";
export default {
  name: "register-page",
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
              console.info(res)
              if( res.data == "success" ){
                this.$router.push('/')
              }
            })
            .catch(err =>{
              console.log(err)
            })
      } else {
        alert('password not the same')
      }
    },
  }
}
</script>


<style scoped lang="scss">

</style>