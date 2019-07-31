export function fromHome(store, done) {
  TweenLite.from(".main", store.state.animationSpeed, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: store.state.animationSpeed,
    onComplete: done
  });
}

export function toHome(store, done) {
  TweenLite.to(".main", store.state.animationSpeed, {
    opacity: 0,
    ease: Expo.easeInOut,
    onComplete: done
  });
}
