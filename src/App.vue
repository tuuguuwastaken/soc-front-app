<template>
  <nav>
    <header-buttons></header-buttons>
  </nav>
  <router-view/>
</template>
<script>
import headerButtons from '@/components/header-buttons.vue';
  export default {
    components:{
      headerButtons
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-left: 30px;
  padding-right: 30px;
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #6ABEA7;
    }
  }
}
</style>
