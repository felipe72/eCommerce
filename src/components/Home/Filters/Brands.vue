<template>
  <div class="mb-4">
    <p class="my-2">
      Brands
    </p>
    <v-checkbox
      v-for="brand in brands"
      :key="brand.label"
      v-model="selected"
      dense
      multiple
      hide-details
      :label="brand.label"
      :value="brand"
      class="my-1"
    >
      <template #append>
        <p class="my-0 caption">
          {{ brand.count }}
        </p>
      </template>
    </v-checkbox>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Brands',
  data() {
    return {
      selected: [],
    };
  },
  computed: {
    ...mapGetters({ brands: 'brands' }),
  },
};
</script>
