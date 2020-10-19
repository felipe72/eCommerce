<template>
  <div class="d-flex flex-grow-1 flex-column ml-4">
    <div class="d-flex mb-5">
      <p
        class="mb-0 align-self-end"
        style="height: fit-content"
      >
        {{ amountOfProducts }} results found in 5ms
      </p>

      <v-select
        :items="['abc', 'bca', 'cab']"
        dense
        label="Default"
        solo
        hide-details
        class="ml-auto mr-4"
        style="max-width: 140px"
      />

      <v-btn
        v-if="!listViewModel"
        min-width="35"
        class="px-0"
        @click="toggleView"
      >
        <v-icon> mdi-view-headline </v-icon>
      </v-btn>

      <v-btn
        v-else
        icon
        elevation="2"
        min-width="35"
        class="px-0"
        @click="toggleView"
      >
        <v-icon> mdi-view-grid-outline </v-icon>
      </v-btn>
    </div>
    <search-bar class="mb-4" />
    <div
      v-if="listViewModel"
      class="fill-height d-flex flex-column justify-space-between"
    >
      <!-- {{ items.slice(0,10) }} -->
      <long-item
        v-for="item in paginated"
        :key="item.name"
        :image="item.image"
        :title="item.title"
        :brand="item.brand"
        :description="item.description"
        :price="item.price"
      />
    </div>

    <div
      v-else
      class="father fill-height d-flex flex-wrap"
    >
      <short-item
        v-for="item in paginated"
        :key="item.name"
        :image="item.image"
        :title="item.title"
        :brand="item.brand"
        :description="item.description"
        :price="item.price"
        class="child"
      />
    </div>
    <v-pagination
      v-model="pageModel"
      class="mt-2"
      :length="numOfPages"
      :total-visible="7"
      circle
    />
  </div>
  <!-- If the amount of items is equal to 5, use [fill-height, d-flex, flex-column, justify-space-between], otherwise use mt-6 on each card -->
</template>

<script>
import LongItem from './LongItem';
import ShortItem from './ShortItem';
import SearchBar from './SearchBar';

import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'ItemList',
  components: { LongItem, SearchBar, ShortItem },
  computed: {
    ...mapState(['page', 'listView']),
    ...mapGetters(['paginated', 'numOfPages', 'amountOfProducts']),
    pageModel: {
      get() {
        return this.page;
      },
      set(value) {
        this.setPage(value);
      },
    },
    listViewModel: {
      get() {
        return this.listView;
      },
      set(value) {
        this.setListView(value);
      },
    },
  },
  methods: {
    ...mapActions({ setPage: 'setPage', setListView: 'setListView' }),
    toggleView() {
      this.listViewModel = !this.listViewModel;
    },
  },
};
</script>

<style lang="sass" scoped>
.father
  margin: 0 0 0 -1rem
  min-width: 775px
  .child
    flex: 1 0 20% //* less than 25% but more or equal to 20% to account for margins - when 4 across is required */
    margin:1rem 0 0 1rem
</style>
