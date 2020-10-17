<template>
  <v-main>
    <v-container
      fluid
      class="fill-height pt-4"
    >
      <keep-alive include="Home">
        <router-view />
      </keep-alive>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'MainContent',
}
</script>