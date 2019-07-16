import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: "index",
      previousPage: null,
      animationSpeed: 0.8,
      previousTitlePos: 0
    },
    mutations: {
      updatePage(state, pageName) {
        state.previousPage = state.page;
        state.page = pageName;
      },
      updatePreviousTitlePos(state, pos) {
        state.previousTitlePos = pos;
      }
    }
  });
};

export default createStore;
