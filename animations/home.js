import { TimelineLite, TweenMax, Expo } from "gsap";

export function beforeFromAbout(store) {
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
  }).from(
    "#title",
    store.state.animationSpeed * 1.5,
    {
      x: distance,
      ease: Expo.easeInOut
    },
    `-=${store.state.animationSpeed / 1.3333}`
  );
}

export function toAbout(store, done) {
  TweenMax.to(".image", store.state.animationSpeed, {
    xPercent: 100,
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
