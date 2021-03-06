import {TimelineLite, TweenLite, Expo} from 'gsap';

export function beforeFromHome(store) {
  const title = document.getElementById('title');
  if (title) {
    store.commit('updatePreviousTitlePos', title.getBoundingClientRect().x);
  }
}

export function fromHome(store, done) {
  const title = document.getElementById('title');
  const distance = store.state.previousTitlePos - title.getBoundingClientRect().x;
  TweenLite.from('#title', store.state.animationSpeed, {
    x: distance,
    ease: Expo.easeInOut,
    onComplete: done,
  });
  const tl = new TimelineLite({onComplete: done});
  tl.from('.about', store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeOut,
  })
      .staggerFrom(
          ['.about-details__image', '.about-details__contact'],
          store.state.animationSpeed,
          {
            yPercent: 100,
            ease: Expo.easeOut,
          },
          store.state.animationSpeed / 4,
          `-=${store.state.animationSpeed / 2}`
      )
      .from(
          '.about-details__title',
          store.state.animationSpeed,
          {
            opacity: 0,
            ease: Expo.easeInOut,
          },
          `-=${store.state.animationSpeed / 2}`
      )
      .staggerFrom(
          '.about-details__item',
          store.state.animationSpeed,
          {
            opacity: 0,
            ease: Expo.easeInOut,
          },
          store.state.animationSpeed / 16,
          `-=${store.state.animationSpeed / 1.3333}`
      ).to(['html', 'body'], 0, {
        overflow: 'visible',
      });
}

export function toHome(store, done) {
  const tl = new TimelineLite({onComplete: done});
  tl.to(['html', 'body'], 0, {
    overflow: 'hidden',
  }).staggerTo(
      ['.about-details__contact', '.about-details__image'],
      store.state.animationSpeed / 1.33333,
      {
        yPercent: 100,
        ease: Expo.easeIn,
      },
      store.state.animationSpeed / 4
  ).to('.about', store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeIn,
  });
}

export function mobileFromHome(store, done) {
  const tl = new TimelineLite({onComplete: done});
  tl.from('.about', store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeOut,
  })
      .staggerFrom(
          '.about-details__item',
          store.state.animationSpeed,
          {
            opacity: 0,
            ease: Expo.easeInOut,
          },
          store.state.animationSpeed / 16
      )
      .from(
          '.about-details__image',
          store.state.animationSpeed,
          {
            opacity: 0,
            ease: Expo.easeOut,
          },
          `-=${store.state.animationSpeed / 4}`
      );
}

export function mobileToHome(store, done) {
  TweenLite.to('.about', store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeIn,
    onComplete: done,
  });
}
