<template>
  <v-app>
    <Navbar/>
    <div id='body'>
      <router-view/>
    </div>
    <FooterToolbar/>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Navbar from './components/Layout/Navbar.vue';
import FooterToolbar from './components/Layout/FooterToolbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    FooterToolbar
  },
  methods: {
    ...mapActions(["fetchCategories"]),
  },
  computed: {
    ...mapGetters(["allCategories"]),
  },
  created() {
    this.fetchCategories();
  }
}
</script>

<style>

</style>