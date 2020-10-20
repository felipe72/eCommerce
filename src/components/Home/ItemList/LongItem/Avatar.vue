<template>
  <v-avatar
    class="ma-3"
    size="175"
    tile
  >
    <v-img :src="src" />
  </v-avatar>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
