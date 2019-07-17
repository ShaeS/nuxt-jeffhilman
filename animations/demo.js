import { TweenLite, Expo } from "gsap";

export function fromHome(store, done) {
    TweenLite.from(".container", store.state.animationSpeed, {
        opacity: 0,
        ease: Expo.easeInOut,
        delay: store.state.animationSpeed,
        onComplete: done
    });
}

export function toHome(store, done) {
    TweenLite.to(".container", store.state.animationSpeed, {
        opacity: 0,
        ease: Expo.easeInOut,
        onComplete: done
    });
}
