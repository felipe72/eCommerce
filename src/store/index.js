import Vue from 'vue';
import Vuex from 'vuex';
import items from '@/data/data.json';

import countBy from 'lodash/countBy';
import inRange from 'lodash/inRange';

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
    range: [0, 999999],
    rating: '',
    sort: (a, b) => a.title.localeCompare(b.title),
  },
  getters: {
    paginated: ({ page }, { afterFilters, itemsPerPage }) =>
      afterFilters.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    numOfPages: (_, { afterFilters, itemsPerPage }) =>
      Math.floor(afterFilters.length / itemsPerPage),
    amountOfProducts: (_, { afterFilters }) => afterFilters.length,
    afterFilters: ({ items, search, chosenBrands, sort, range, rating }) =>
      items
        .filter((x) => x.title.includes(search) || !search)
        .filter((x) => chosenBrands.includes(x.brand) || !chosenBrands.length)
        .filter((x) => inRange(x.price, range[0], range[1]))
        .filter((x) => Number(x.stars) >= rating || !rating)
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
    ratings: (_, { afterFilters }) =>
      Object.entries(countBy(afterFilters, x => Math.floor(x.stars)))
        .map(([stars, count]) => ({ stars: Number(stars), count }))
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 3),
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
    SET_RANGE(state, value) {
      state.range = value;
    },
    SET_RATING(state, value) {
      state.rating = value;
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
      commit('SET_BRANDS', value);
    },
    setRange({ commit }, value) {
      commit('SET_RANGE', value);
    },
    setRating({ commit }, value) {
      commit('SET_RATING', value);
    },
    resetFilters({ commit }) {
      commit('SET_BRANDS', []);
      commit('SET_RANGE', [0, 99999]);
      commit('SET_RATING', '');
    }
  },
});
