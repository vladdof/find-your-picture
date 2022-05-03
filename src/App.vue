<template>
  <div id="app">
    <nav-bar />
    <router-view/>
  </div>
</template>

<script>
import { NavBar } from './components';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
  @import './assets/style';
</style>
