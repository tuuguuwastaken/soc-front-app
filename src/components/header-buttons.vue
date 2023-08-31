<template>
  <a-card style="margin:10px">
    <a-row :gutter="8" :justify="'start'" :align="'middle'">
      <a-col :span="5" :offset="10" >
        <a-input aria-placeholder="search"></a-input>
      </a-col>
      <a-col>
        <i class="fa-solid fa-magnifying-glass"></i>
      </a-col>
      <a-col :span="1" v-for="i in men" :key="i.key">
        <router-link :to="i.path">{{i.name}}</router-link>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
  import {men} from '@/static/header';
  export default {
    name:'header-button',
    components: {},
    data(){
      return{
        men,
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss">

</style>