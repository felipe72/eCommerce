<template>
  <div class="d-flex flex-column">
    <p
      class="mb-5"
      style="height: fit-content; margin-top: 14px"
    >
      Filters
    </p>
    <v-card min-width="250">
      <v-card-text>
        <multi-range v-model="selectedRange" />
        <v-divider />
        <!-- <categories />
        <v-divider /> -->
        <brands v-model="selectedBrands" />
        <v-divider />
        <rating />
      </v-card-text>
    </v-card>
    <v-btn
      color="primary"
      class="mt-3"
      @click="resetFilters"
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

import { mapActions } from 'vuex';

export default {
  name: 'Filters',
  components: { MultiRange, /* Categories, */ Brands, Rating },
  data() {
    return { selectedBrands: [], selectedRange: 4 };
  },
  methods: {
    resetFilters() {
      this.selectedBrands = [];
      this.selectedRange = 4;
      this.$store.dispatch('resetFilters');
    }
  },
};
</script>
