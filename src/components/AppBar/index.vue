<template>
  <v-app-bar
    app
    dense
    rounded
    class="mx-6 my-2 elevation-2"
  >
    <v-spacer />

    <v-btn
      text
      small
    >
      English
    </v-btn>

    <v-btn
      icon
      small
      class="mx-1"
    >
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>

    <v-btn
      icon
      small
      class="mx-1"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <profile />
  </v-app-bar>
</template>

<script>
import Profile from './Profile';

export default {
  name: 'AppBar',
  components: { Profile },
}
</script>