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
    filters: [],
    sort: (a, b) => a.title.localeCompare(b.title),
  },
  getters: {
    paginated: ({ page }, { afterFilters, itemsPerPage }) =>
      afterFilters.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    numOfPages: ({ items }, { itemsPerPage }) =>
      Math.floor(items.length / itemsPerPage),
    amountOfProducts: ({ items }) => items.length,
    afterFilters: ({ items, filters, sort }) =>
      filters.reduce((prev, current) => prev.filter(current), items).sort(sort),
    brands: ({ afterFilters }) =>
      Object.entries(countBy(items, 'brand'))
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
      state.listView = value;
    },
    SET_SORT(state, value) {
      state.sort = value;
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
  },
});
