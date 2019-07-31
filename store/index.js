import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: "index",
      previousPage: null,
      animationSpeed: 1, // Change to 0 on reduced motion
      previousTitlePos: 0,
      isMobile: false,
      social: null
    },
    mutations: {
      updatePage(state, pageName) {
        state.previousPage = state.page;
        state.page = pageName;
      },
      updatePreviousTitlePos(state, pos) {
        state.previousTitlePos = pos;
      },
      updateAnimationSpeed(state, val) {
        state.animationSpeed = val;
      },
      updateIsMobile(state) {
        state.isMobile = window.matchMedia("(max-width: 990px)").matches;
      },
      updateSocial(state, obj) {
        state.social = obj;
      }
    },
    actions: {
      async nuxtServerInit({ commit }, context) {
        const { data } = await axios.post(
          context.env.socialUrl,
          JSON.stringify({
            populate: 1
          }),
          {
            headers: { "Content-Type": "application/json" }
          }
        );
        commit("updateSocial", data.entries);
      }
    }
  });
};

export default createStore;
