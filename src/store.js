import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Design Meetup",
  },
  getters: {
    title: state => {
      return state.title;
    },
  },
  mutations: {
    title: (state, payload) => {
      state.title = payload;
    },
  },
  actions: {
    setTitle: (context, payload) => {
      context.commit("title", payload);
    },
  }
})
