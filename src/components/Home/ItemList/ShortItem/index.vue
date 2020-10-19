<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      max-width="250"
      max-height="570"
    >
      <avatar
        :hover="hover"
        :src="image"
      />
      <info
        :title="title"
        :brand="brand"
        :description="description"
        :price="price"
        :stars="stars"
      />
    </v-card>
  </v-hover>
</template>

<script>
import Avatar from './Avatar'
import Info from './Info'

export default {
  name: 'ShortItem',
  components: { Avatar, Info },
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
    }
  },
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