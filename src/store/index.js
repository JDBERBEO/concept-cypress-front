import Vue from "vue";
import Vuex from "vuex";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wishes: [],
  },
  getters: {},
  mutations: {
    setWishes(state, payload) {
      state.wishes = payload;
    },
  },
  actions: {
    async updateWishes({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:8000/wishes");
        console.log("whise: ", data);
        commit("setWishes", data);
      } catch (error) {
        commit("setWishes", []);
      }
    },
    async createNewWish(__, payload) {
      try {
        const newWish = await axios.post("http://localhost:8000/wishes", { wish: payload });
        console.log("newWish: ", newWish);
      } catch (error) {
        console.log("error: ", error);
      }
    },
  },
  modules: {},
});
