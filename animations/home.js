import {TweenLite, Expo, TimelineLite} from 'gsap';

export function beforeToAbout(store) {
  const title = document.getElementById('title');
  if (title) {
    store.commit('updatePreviousTitlePos', title.getBoundingClientRect().x);
  }
}

export function fromAbout(store, done) {
  const title = document.getElementById('title');
  const distance = store.state.previousTitlePos - title.getBoundingClientRect().x;
  TweenLite.from('#title', store.state.animationSpeed, {
    x: distance,
    ease: Expo.easeInOut,
    onComplete: done,
  });
}

export function enterHome(store, done) {
  const tl = new TimelineLite({onComplete: done});
  tl.from('.image', store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeOut,
  }).to(['html', 'body'], 0, {
    overflow: 'visible',
  }
  );
}

export function leaveHome(store, done) {
  TweenLite.to(['html', 'body'], 0, {
    overflow: 'hidden',
  }
  );
  TweenLite.to('.image', store.state.animationSpeed, {
    xPercent: 100,
    ease: Expo.easeIn,
    onComplete: done,
  });
}

export function fadeInTitle(store, done) {
  TweenLite.from('#title', store.state.animationSpeed, {
    opacity: 0,
    x: 20,
    ease: Expo.easeOut,
    onComplete: done,
  });
}

export function fadeOutTitle(store, done) {
  TweenLite.to('#title', store.state.animationSpeed, {
    opacity: 0,
    x: 20,
    ease: Expo.easeIn,
    onComplete: done,
  });
}
