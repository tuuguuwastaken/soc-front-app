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
              <textarea type="text"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-divider></a-divider>
        <post-box> </post-box>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import MenuService from "@/services/main/MenuService.js";
import profileBox from "@/components/profile-box.vue";
import postBox from '@/components/newPost.vue'

export default {
  name: 'Home-main',
  components: {
    profileBox,
    postBox
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

<style lang="scss" scoped>
  textarea{
    width: 100%;
    height: 100%;
  }
</style>
