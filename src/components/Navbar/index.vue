<template>
  <v-navigation-drawer
    permanent
    app
    elevation="6"
    class="navbar elevation-2"
  >
    <v-list
      dense
      class="list fill-height"
    >
      <v-list-item
        link
        @click="redirect('root')"
      >
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    redirect(name) {
      if(this.$route.name === name) return;

      this.$router.push({ name })
    },
  },
};
</script>

<style lang="sass" scoped>
.navbar
  .list
    display: flex
    flex-direction: column
    > div
      flex: unset
    > div:nth-child(2)
      margin-top: auto
</style>