import Vue from 'vue';
import Vuex from 'vuex';
import items from '@/data/data.json';

Vue.use(Vuex);

const ITEMS_PER_PAGE_LARGE = 5;
const ITEMS_PER_PAGE_SMALL = 6;

export default new Vuex.Store({
  state: { items, page: 1, listView: true },
  getters: {
    paginated: ({ items, page }, { itemsPerPage }) =>
      items.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    numOfPages: ({ items }, { itemsPerPage }) =>
      Math.floor(items.length / itemsPerPage),
    amountOfProducts: ({ items }) => items.length,
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
  },
  actions: {
    setPage({ commit }, page) {
      commit('SET_PAGE', page);
    },
    setListView({ commit }, value) {
      commit('SET_LIST_VIEW', value);
    },
  },
});
