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
  let tl = new TimelineLite({ onComplete: done });
  tl.from(".image", store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeOut
  }, 0).from(
    "#title",
    store.state.animationSpeed,
    {
      x: distance,
      ease: Expo.easeInOut
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
  TweenLite.from("#title", store.state.animationSpeed, {
    opacity: 0,
    x: 20,
    ease: Expo.easeOut,
    onComplete: done
  });
}

export function fadeOutTitle(store, done) {
  TweenLite.to("#title", store.state.animationSpeed, {
    opacity: 0,
    x: 20,
    ease: Expo.easeIn,
    onComplete: done
  });
}

export function navFromAbout(store, delay, duration) {
  let tl = new TimelineLite({ delay });
  tl.to(
      ".nav-list__link--about",
      duration,
      {
        color: document.documentElement.style.getPropertyValue(
          "--color-grey-900"
        ),
        ease: Expo.easeOut
      },
      store.state.animationSpeed
    )
    .to(
      ".nav-list__item",
      duration,
      {
        width: "33.3334%",
        ease: Expo.easeOut
      },
      store.state.animationSpeed
    );
}
