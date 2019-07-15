import { TweenMax, TimelineLite, Expo } from "gsap";

export function beforeFromHome(store) {
  const title = document.getElementById("title");
  if (title) {
    store.commit("updatePreviousTitlePos", title.getBoundingClientRect().x);
  }
}

export function fromHome(store, done) {
  const title = document.getElementById("title");
  let distance = store.state.previousTitlePos - title.getBoundingClientRect().x;
  TweenMax.from("#title", store.state.animationSpeed, {
    x: distance,
    ease: Expo.easeInOut,
    onComplete: done
  });
  let tl = new TimelineLite({ onComplete: done });
  tl.from(".about", store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeOut
  })
    .from(".about-details__image", store.state.animationSpeed, {
      yPercent: 100,
      ease: Expo.easeOut
    })
    .from(
      ".about-details__contact",
      store.state.animationSpeed,
      {
        yPercent: 100,
        ease: Expo.easeOut
      },
      `-=${store.state.animationSpeed / 1.3333}`
    )
    .from(
      [".about-details__list", ".about-details__title"],
      store.state.animationSpeed,
      {
        opacity: 0,
        ease: Expo.easeInOut
      },
      `-=${store.state.animationSpeed / 4}`
    );
}

export function toHome(store, done) {
  let tl = new TimelineLite({ onComplete: done });
  tl.to(".about-details__contact", store.state.animationSpeed / 1.33333, {
    yPercent: 100,
    ease: Expo.easeIn
  });
  tl.to(
    ".about-details__image",
    store.state.animationSpeed / 1.33333,
    {
      yPercent: 100,
      ease: Expo.easeIn
    },
    `-=${store.state.animationSpeed / 2}`
  ).to(".about", store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeIn
  });
}

export function navFromHome(store, delay, duration) {
  TweenMax.to([".nav-list__item--demo", ".nav-list__item--projects"], duration, {
    width: "27.7778%",
    ease: Expo.easeInOut,
    delay
  });
  let tl = new TimelineLite();
  tl.to(
    ".nav-list__item--about",
    duration,
    {
      width: "44.4444%",
      ease: Expo.easeInOut,
      delay
    },
    0
  )
    .to(
      ".nav-list__link--about",
      duration,
      {
        color: "transparent",
        ease: Expo.easeOut,
        delay
      },
      0
    )
}
