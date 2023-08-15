<template>
  <a-row :gutter="16">
    <a-col :span="3" v-for="i in men" :key="i.key">
      <router-link :to="i.path">{{i.name}}</router-link>
    </a-col>
  </a-row>
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