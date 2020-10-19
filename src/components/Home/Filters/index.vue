<template>
  <div class="d-flex flex-column">
    <p
      class="mb-5"
      style="height: fit-content; margin-top: 14px"
    >
      Filters
    </p>
    <v-card>
      <v-card-text>
        <multi-range />
        <v-divider />
        <!-- <categories />
        <v-divider /> -->
        <brands />
        <v-divider />
        <rating />
      </v-card-text>
    </v-card>
    <v-btn
      color="primary"
      class="mt-3"
    >
      CLEAR ALL FILTERS
    </v-btn>
  </div>
</template>

<script>
import MultiRange from './MultiRange';
import Categories from './Categories';
import Brands from './Brands';
import Rating from './Rating';

export default {
  name: 'Filters',
  components: { MultiRange, /* Categories, */ Brands, Rating },
};
</script>
