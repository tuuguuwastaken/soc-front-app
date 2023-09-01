<template>
  <a-card style="margin:10px">
    <a-row v-if="isDesktop" :gutter="8" :justify="'center'" :align="'middle'" >
      <a-col :span="5" >
        <a-input aria-placeholder="search"></a-input>
      </a-col>
      <a-col>
        <i class="fa-solid fa-magnifying-glass"></i>
      </a-col>  
      <a-col :xl="1" :md="2" :sm="2" v-for="i in men" :key="i.key">
        <router-link :to="i.path">{{i.name}}</router-link>
      </a-col>
    </a-row>
    <a-row :justify="'space-around'" v-else>
      <a-col :sm="12" :md="12" :xs="12">
        <a-row :align="'middle'" :justify="'center'" :wrap="true" :gutter="5">
          <a-col :span="18">
            <a-input aria-placeholder="search"></a-input>
          </a-col>
          <a-col :span="6">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a-col>
        </a-row>
      </a-col>
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent>
          pages
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item v-for="i in men" :key="i.key">
              <a :href="i.path"> {{ i.name }}</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
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
        isMobile:false
      }
    },
    computed:{
      isDesktop(){
        return window.innerWidth > 768;
      }   
    },
    methods:{
      
      handleWindowResize() {
        this.$forceUpdate();
      },
    },
    mounted() {
      window.addEventListener('resize', this.handleWindowResize);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleWindowResize);
    },  
  }
</script>

<style lang="scss">

</style>