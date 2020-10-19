<template>
  <div class="d-flex flex-grow-1 flex-column ml-4">
    <div class="d-flex mb-5">
      <p
        class="mb-0 align-self-end"
        style="height: fit-content"
      >
        7,618 results found in 5ms
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
        v-if="false"
        min-width="35"
        class="px-0"
      >
        <v-icon> mdi-view-headline </v-icon>
      </v-btn>

      <v-btn
        v-else
        icon
        elevation="2"
        min-width="35"
        class="px-0"
      >
        <v-icon> mdi-view-grid-outline </v-icon>
      </v-btn>
    </div>
    <search-bar class="mb-4" />
    <div
      v-if="true"
      class="fill-height d-flex flex-column justify-space-between"
    >
      <long-item
        v-for="n in 5"
        :key="n"
      />
    </div>

    <div
      v-else
      class="father fill-height d-flex flex-wrap"
    >
      <short-item
        v-for="n in 10"
        :key="n"
        class="child"
      />
    </div>
    <v-pagination
      v-model="page"
      class="mt-2"
      :length="15"
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

export default {
  name: 'ItemList',
  components: { LongItem, SearchBar, ShortItem },
  data() {
    return { page: 5 };
  },
};
</script>

<style lang="sass" scoped>
.father
  margin: 0 0 0 -.5rem
  min-width: 775px
  .child
    flex: 1 0 20% //* less than 25% but more or equal to 20% to account for margins - when 4 across is required */
    margin:0 0 .5rem .5rem
</style>
