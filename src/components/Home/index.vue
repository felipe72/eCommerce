<template>
  <v-container
    fluid
    class="fill-height px-3 py-0"
  >
    <breadcrumbs
      :items="items"
      class="px-0 align-self-baseline"
    />
    <v-container class="fill-height align-baseline">
      <filters />
      <div class="d-flex flex-grow-1 flex-column">
        <search-bar />
        <item-list />
      </div>
    </v-container>
  </v-container>
</template>

<script>
import Breadcrumbs from './Breadcrumbs';
import Filters from './Filters';
import ItemList from './ItemList';
import SearchBar from './SearchBar';

export default {
  name: 'Home',
  components: { Breadcrumbs, Filters, ItemList, SearchBar },
  data() {
    return {
      items: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    };
  },
};
</script>
