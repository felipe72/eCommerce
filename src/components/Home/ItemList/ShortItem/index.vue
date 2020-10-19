<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      max-width="250"
    >
      <avatar :hover="hover" />
      <info />
    </v-card>
  </v-hover>
</template>

<script>
import Avatar from './Avatar'
import Info from './Info'

export default {
  name: 'ShortItem',
  components: { Avatar, Info },
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>