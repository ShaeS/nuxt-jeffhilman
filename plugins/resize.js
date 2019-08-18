export default ({store}) => {
  store.commit('updateIsMobile');
  window.onresize = () => {
    store.commit('updateIsMobile');
  };
};
