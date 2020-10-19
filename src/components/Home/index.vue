<template>
  <div
    fluid
    class="fill-height flex-grow-1 px-3 py-0 flex-column flex-nowrap"
  >
    <breadcrumbs
      :items="items"
      class="px-0 py-2 align-self-baseline"
    />
    <div class="d-flex">
      <filters class="d-flex mr-4" />
      <item-list />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from './Breadcrumbs';
import Filters from './Filters';
import ItemList from './ItemList';

export default {
  name: 'Home',
  components: { Breadcrumbs, Filters, ItemList },
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
