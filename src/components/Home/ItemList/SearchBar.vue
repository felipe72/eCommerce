<template>
  <div>
    <v-text-field
      v-model="searchModel"
      solo
      hide-details
      label="Search here"
      append-icon="mdi-magnify"
    />
  </div>
</template>

<script>
import debounce from 'lodash/debounce';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  computed: {
    ...mapState(['search']),
    searchModel: {
      get() {
        return this.search;
      },
      set(value) {
        this.debouncedSearch(value);
      },
    },
    debouncedSearch() {
      return debounce(this.setSearch, 1000);
    },
  },
  methods: {
    ...mapActions({ setSearch: 'setSearch' }),
  },
};
</script>
