<template>
  <v-card>
    <v-card-text>
      <multi-range />
      <v-divider />
      <categories />
      <v-divider />
      <brands />
      <v-divider />
      <rating />
    </v-card-text>
  </v-card>
</template>

<script>
import MultiRange from './MultiRange';
import Categories from './Categories';
import Brands from './Brands';
import Rating from './Rating';

export default {
  name: 'Filters',
  components: { MultiRange, Categories, Brands, Rating },
};
</script>
