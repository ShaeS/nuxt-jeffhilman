import { TweenLite, TimelineLite, Expo } from "gsap";

export function enter(store, el) {
    let tl = new TimelineLite();
    tl.from( el, store.state.animationSpeed * 1.5, {
        xPercent: 110,
        ease: Expo.easeInOut
    }).from( '.project-details__close', store.state.animationSpeed / 2, {
        opacity: 0,
        xPercent: 100,
        ease: Expo.easeOut
    }, `-=${ store.state.animationSpeed / 2 }`);
}

export function leave(store, el, cb) {
    let tl = new TimelineLite({ onComplete: cb });
    tl.to( '.project-details__close', store.state.animationSpeed, {
        opacity: 0,
        xPercent: 100,
        ease: Expo.easeIn
    }, 0)
    .to( el, store.state.animationSpeed * 1.5, {
        xPercent: 110,
        ease: Expo.easeInOut
    }, 0);
}

export function enterNew(store) {
    let tl = new TimelineLite();
    tl.to( '.project-details__right', store.state.animationSpeed / 2, {
        opacity: 1,
        ease: Expo.easeInOut
    })
    .to( '.project-details__image', store.state.animationSpeed / 2, {
        opacity: 1,
        ease: Expo.easeInOut
    }, `-=${ store.state.animationSpeed / 2 }`)
    .staggerTo( ['.project-navigation__image', '.project-navigation__title'], store.state.animationSpeed / 4, {
        opacity: 1,
        ease: Expo.easeInOut
    }, 
    store.state.animationSpeed / 8,
    `-=${ store.state.animationSpeed }`);
}

export function leaveOld(store, cb) {
    let tl = new TimelineLite({onComplete: cb});
    tl.to( '.project-details__right', store.state.animationSpeed, {
        opacity: 0,
        ease: Expo.easeInOut
    }).to( '.project-details__image', store.state.animationSpeed / 2, {
        opacity: 0,
        ease: Expo.easeInOut
    }, `-=${ store.state.animationSpeed / 2 }`)
    .staggerTo( ['.project-navigation__title', '.project-navigation__image'], store.state.animationSpeed / 4, {
        opacity: 0,
        ease: Expo.easeInOut
    }, 
    store.state.animationSpeed / 8,
    `-=${ store.state.animationSpeed }`);
}
