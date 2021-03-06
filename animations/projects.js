import {TimelineLite, Expo} from 'gsap';

export function fromHome(store, done) {
  const tl = new TimelineLite({onComplete: done});
  tl.from('.projects-sidebar', store.state.animationSpeed, {
    xPercent: -150,
    ease: Expo.easeOut,
  })
      .staggerFrom(
          ['.projects-sidebar__title', '.projects-sidebar__content'],
          store.state.animationSpeed,
          {
            opacity: 0,
            x: -40,
            ease: Expo.easeInOut,
          },
          store.state.animationSpeed / 6,
          `-=${store.state.animationSpeed / 1.1}`
      )
      .staggerFrom(
          '.project-card',
          store.state.animationSpeed,
          {
            opacity: 0,
            ease: Expo.easeInOut,
          },
          store.state.animationSpeed / 6,
          `-=${store.state.animationSpeed / 1.333}`
      ).to(['html', 'body'], 0, {
        overflow: 'visible',
      })
      .from('.other-work', store.state.animationSpeed, {
        xPercent: 100,
        ease: Expo.easeOut,
      });
}

export function toHome(store, done) {
  const tl = new TimelineLite({onComplete: done});
  tl.to(['html', 'body'], 0, {
    overflow: 'hidden',
  })
      .to(
          '.project-card',
          store.state.animationSpeed,
          {
            opacity: 0,
            ease: Expo.easeInOut,
          },
          0
      )
      .to(
          '.projects-sidebar',
          store.state.animationSpeed * 1.5,
          {
            xPercent: -150,
            ease: Expo.easeInOut,
          },
          0
      )
      .to(
          '.other-work',
          store.state.animationSpeed,
          {
            opacity: 0,
            ease: Expo.easeInOut,
          },
          0
      )
      .to(
          '.projects-sidebar',
          store.state.animationSpeed * 1.5,
          {
            xPercent: -150,
            ease: Expo.easeInOut,
          },
          0
      )
      .to(
          '.other-work',
          store.state.animationSpeed,
          {
            xPercent: 100,
            ease: Expo.easeIn,
          },
          0
      );
}
