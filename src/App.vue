<template>
  <div>
    <div v-if="isMobile">
      <router-view></router-view>
    </div>
    <div v-else>
      <nav>
        <header-buttons></header-buttons>
      </nav>
      <router-view/>
    </div>
  </div>
</template>
<script>
import headerButtons from '@/components/header-buttons.vue';
// import MobileApp from '@/views/mobile/mobile-app.vue';
  export default {
    components:{
      headerButtons,
      // MobileApp
    },
    computer:{
      isMobile() {
        if(window.innerWidth <= 768){
          console.log(window.innerWidth <= 768)
        }
      },
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-left: 10px;
  padding-right: 10px;
}

nav {
  padding: 5px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #6ABEA7;
    }
  }
}
</style>
