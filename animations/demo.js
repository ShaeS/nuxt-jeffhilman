import {TweenLite, Expo} from 'gsap';

export function fromHome(store, done) {
  TweenLite.to(['html', 'body'], 0, {
    overflow: 'visible',
  }
  );
  TweenLite.from('.main', store.state.animationSpeed, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: store.state.animationSpeed,
    onComplete: done,
  });
}

export function toHome(store, done) {
  TweenLite.to(['html', 'body'], 0, {
    overflow: 'hidden',
  }
  );
  TweenLite.to('.main', store.state.animationSpeed, {
    opacity: 0,
    ease: Expo.easeInOut,
    onComplete: done,
  });
}
