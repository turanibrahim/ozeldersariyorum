<template>
  <div id="app">
    <v-app>
      <Navbar/>
      <div id='body'>
        <router-view/>
      </div>
      <FooterToolbar/>
    </v-app>
  </div>
</template>
<script>
import Navbar from '@/components/Layout/Navbar.vue';
import FooterToolbar from '@/components/Layout/FooterToolbar.vue';

export default {
  components: {
    Navbar,
    FooterToolbar,
  },
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#body {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
