import { TimelineLite, TweenLite, Expo } from "gsap";

export function beforeToAbout(store) {
  const title = document.getElementById("title");
  if (title) {
    store.commit("updatePreviousTitlePos", title.getBoundingClientRect().x);
  }
}

export function fromAbout(store, done) {
  const title = document.getElementById("title");
  let distance = store.state.previousTitlePos - title.getBoundingClientRect().x;
  TweenLite.from(
    "#title",
    store.state.animationSpeed,
    {
      x: distance,
      ease: Expo.easeInOut,
      onComplete: done
    },
    0
  );
}

export function enterHome(store, done) {
  TweenLite.from(
    ".image",
    store.state.animationSpeed,
    {
      xPercent: 100,
      ease: Expo.easeOut,
      onComplete: done
    },
    0
  );
}

export function leaveHome(store, done) {
  TweenLite.to(".image", store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeIn,
    onComplete: done
  });
}

export function fadeInTitle(store, done) {
  console.log("fade in title");

  TweenLite.from("#title", store.state.animationSpeed, {
    opacity: 0,
    x: 20,
    ease: Expo.easeOut,
    onComplete: done
  });
}

export function fadeOutTitle(store, done) {
  console.log("fade out title");
  TweenLite.to("#title", store.state.animationSpeed, {
    opacity: 0,
    x: 20,
    ease: Expo.easeIn,
    onComplete: done
  });
}
