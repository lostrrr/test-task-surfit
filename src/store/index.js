import { createStore } from "vuex";
import { getEpisodesBySeason } from "@/api/api";
export default createStore({
  state: {
    episodeList: [],
  },
  getters: {},
  mutations: {
    setEpisodeList(state, episodeList) {
      state.episodeList = episodeList;
    },
  },
  actions: {
    fetchAllEpisodes({ commit }) {
      getEpisodesBySeason().then((episodes) => {
        commit("setEpisodeList", episodes);
      });
    },
  },
  modules: {},
});
