<template>
  <v-app id="app">
    <app-bar />
    <navbar />
    <main-content />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import AppBar from './components/AppBar';

export default {
  name: 'App',
  components: { Navbar, MainContent, AppBar },
}
</script>

<style lang="sass">
@import '~style/base'
</style>