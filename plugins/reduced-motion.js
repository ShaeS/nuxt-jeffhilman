export default ({store}) => {
  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    store.commit('updateAnimationSpeed', 0);
  }
};
