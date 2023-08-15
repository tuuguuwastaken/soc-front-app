<template>
  <a-card>

  </a-card>
</template>

<script>
import MenuService from "@/services/main/MenuService.js";

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
