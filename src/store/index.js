import Vue from 'vue';
import Vuex from 'vuex';
import items from '@/data/data.json';

import countBy from 'lodash/countBy';

Vue.use(Vuex);

const ITEMS_PER_PAGE_LARGE = 5;
const ITEMS_PER_PAGE_SMALL = 8;

export default new Vuex.Store({
  state: {
    items,
    page: 1,
    listView: true,
    search: '',
    chosenBrands: [],
    sort: (a, b) => a.title.localeCompare(b.title),
  },
  getters: {
    paginated: ({ page }, { afterFilters, itemsPerPage }) =>
      afterFilters.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    numOfPages: (_, { afterFilters, itemsPerPage }) =>
      Math.floor(afterFilters.length / itemsPerPage),
    amountOfProducts: (_, { afterFilters }) => afterFilters.length,
    afterFilters: ({ items, search, chosenBrands, sort }) =>
      items
        .filter((x) => x.title.includes(search) || !search)
        .filter((x) => chosenBrands.includes(x.brand) || !chosenBrands.length)
        .sort(sort),
    brands: (_, { afterFilters }) =>
      Object.entries(countBy(afterFilters, 'brand'))
        .map(([brand, count]) => ({
          count,
          label: brand,
          value: brand.toLowerCase(),
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10),
    itemsPerPage: ({ listView }) =>
      listView ? ITEMS_PER_PAGE_LARGE : ITEMS_PER_PAGE_SMALL,
  },
  mutations: {
    SET_PAGE(state, page) {
      state.page = page;
    },
    SET_LIST_VIEW(state, value) {
      state.page = 1;
      state.listView = value;
    },
    SET_SORT(state, value) {
      state.sort = value;
    },
    SET_SEARCH(state, value) {
      state.search = value;
    },
    SET_BRANDS(state, value) {
      state.chosenBrands = value;
    },
  },
  actions: {
    setPage({ commit }, page) {
      commit('SET_PAGE', page);
    },
    setListView({ commit }, value) {
      commit('SET_LIST_VIEW', value);
    },
    setSort({ commit }, value) {
      commit('SET_SORT', value);
    },
    setSearch({ commit }, value) {
      commit('SET_SEARCH', value);
    },
    setBrands({ commit }, value) {
      console.log(JSON.parse(JSON.stringify(value)));
      commit('SET_BRANDS', value);
    },
  },
});
