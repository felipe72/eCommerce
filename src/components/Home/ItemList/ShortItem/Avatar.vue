<template>
  <v-img
    height="250"
    width="250"
    :src="src"
  >
    <v-expand-transition>
      <div
        v-if="hover"
        class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text"
        style="height: 50%"
      >
        <v-btn
          icon
          dark
          x-large
          class="mx-4 black mb-2 mt-auto"
        >
          <v-icon> mdi-heart-outline </v-icon>
        </v-btn>
        <v-btn
          icon
          dark
          x-large
          class="mx-4 black mb-2 mt-auto"
        >
          <v-icon> mdi-cart-plus </v-icon>
        </v-btn>
      </div>
    </v-expand-transition>
  </v-img>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    hover: {
      type: Boolean,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
