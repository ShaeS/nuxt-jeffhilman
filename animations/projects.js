import { TweenLite, TimelineLite, Expo } from "gsap";

export function fromHome(store, done) {
  let tl = new TimelineLite({ onComplete: done });
  tl.from(".projects-sidebar", store.state.animationSpeed, {
    xPercent: -150,
    ease: Expo.easeOut
  })
  .staggerFrom(".project-card", store.state.animationSpeed, {
    opacity: 0,
    ease: Expo.easeInOut
  }, store.state.animationSpeed / 6)
}

export function toHome(store, done) {
  let tl = new TimelineLite({ onComplete: done });
  tl.to(".project-card", store.state.animationSpeed, {
    opacity: 0,
    ease: Expo.easeInOut
  }).to(".projects-sidebar", store.state.animationSpeed * 1.5, {
    xPercent: -150,
    ease: Expo.easeInOut
  }, `-=${store.state.animationSpeed / 2}`);
}
