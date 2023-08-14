<template>
  <a-row :gutter="[16, 24]">
    <a-col :span="24">
      <a-button @click="sendRequest">test</a-button>
    </a-col>
    <a-col :span="24">
      <a-button @click="getMenuItem">test get</a-button>
    </a-col>
    <a-col :span="24">
      <label for="">name</label>
      <input type="text" v-model="name">
    </a-col>
    <a-col :span="24">
      <label for="">desc</label>
      <input type="text" v-model="description">
    </a-col>
    <a-col :span="24">
      <label for="">price</label>
      <input type="text" v-model="price">
    </a-col>
    <a-col :span="24">
      <a-space direction="vertical" align="center">
        <a-qrcode :value="text" />
        <a-input v-model:value="text" placeholder="-" :maxlength="60" />
      </a-space>
    </a-col>
  </a-row>





</template>

<script>
import MenuService from "@/services/main/MenuService.js"
export default {
  name: 'Home-main',
  components: {
  },
  data() {
    return {
        text:'',
        name: '',
        description: '',
        price: null,
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
    }
  }
}
</script>
