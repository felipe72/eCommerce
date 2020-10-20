<template>
  <div class="mb-4">
    <p class="my-2">
      Brands
    </p>
    <v-checkbox
      v-for="brand in brands"
      :key="brand.label"
      v-model="brandModel"
      dense
      multiple
      hide-details
      :label="brand.label"
      :value="brand.label"
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
import debounce from 'lodash/debounce';
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'Brands',
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({ brands: 'brands' }),
    ...mapState(['chosenBrands']),
    brandModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
        this.debouncedBrands(value);
      },
    },
    debouncedBrands() {
      return debounce(this.setBrands, 1000);
    },
  },
  methods: {
    ...mapActions({ setBrands: 'setBrands' }),
  },
};
</script>
