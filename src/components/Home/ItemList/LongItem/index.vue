<template>
  <v-card
    class="d-flex"
    min-width="775px"
    max-height="208px"
  >
    <avatar :src="image" />
    <info
      :title="title"
      :brand="brand"
      :description="description"
    />
    <v-divider
      vertical
      class="ml-4"
    />
    <actions
      :price="price"
      :stars="stars"
    />
  </v-card>
</template>

<script>
import Avatar from './Avatar';
import Info from './Info';
import Actions from './Actions';

export default {
  name: 'LongItem',
  components: { Avatar, Info, Actions },
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    stars: {
      type: String,
      required: true,
    },
  },
};
</script>
