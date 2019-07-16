<template>
  <div class="side-nav">
    <div class="social">
        <ul class="social__list">
            <li><a class="social__link" href="mailto:jhilman@live.ca" target="_blank" rel="noopener noreferrer"><MailIcon class="social__icon" /></a></li>
            <li><a class="social__link" href="https://www.youtube.com/user/guitardude77" target="_blank" rel="noopener noreferrer"><YoutubeIcon class="social__icon" /></a></li>
            <li><a class="social__link" href="https://soundcloud.com/jeffhilman" target="_blank" rel="noopener noreferrer"><SoundcloudIcon class="social__icon" /></a></li>
            <li><a class="social__link" href="https://www.linkedin.com/in/hilmanjeff/" target="_blank" rel="noopener noreferrer"><LinkedinIcon class="social__icon" /></a></li>
        </ul>
    </div>
    <div class="menu">
        <nuxt-link to="/">
            <div class="menu__icon"></div>
        </nuxt-link>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from "gsap";
import { mapState } from "vuex";
import { navFromAbout } from "~/animations/home";
import { navFromHome } from "~/animations/about";
import MailIcon from "~/icons/mail.vue"
import YoutubeIcon from "~/icons/youtube.vue"
import SoundcloudIcon from "~/icons/soundcloud.vue"
import LinkedinIcon from "~/icons/linkedin.vue"

export default {
    components: {
        MailIcon,
        YoutubeIcon,
        SoundcloudIcon,
        LinkedinIcon
    },
    computed: mapState(["page", "previousPage", "animationSpeed"]),
    watch: {
        page(newVal) {
            if (newVal === "index") {
                TweenMax.to( this.$el, this.$store.state.animationSpeed, {
                    width: '0',
                    x: '-100',
                    ease: Expo.easeInOut,
                })
            } else {
                TweenMax.to( this.$el, this.$store.state.animationSpeed, {
                    width: '144px',
                    x: 0,
                    ease: Expo.easeInOut,
                })
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.side-nav {
    display: flex;
    position: relative;
    z-index: 1;
    background: var(--color-grey-800);
}

.social {
    width: 72px;
    display: flex;
    flex-direction: column;

    &__list {
        margin-top: auto;
        list-style: none;
        padding-left: 0;
        margin-bottom: var(--spacing-md);
    }

    &__link {
        text-align: center;
        display: block;
        width: 100%;
        padding: var(--spacing-sm) 0;
    }

    &__icon {
        fill: var(--color-grey-100);
        width: 24px;
    }
}

.menu {
    width: 72px;
    padding: var(--spacing-md);
    background: var(--color-grey-900);

    &__icon {
        color: var(--color-grey-100);
        position: relative;
        display: inline-block;
        width: 100%;
        height: 3px;
        background: currentColor;
        border-radius: 1px;

        &::before {
            content: "";
            background: currentColor;
            width: 72%;
            height: inherit;
            position: absolute;
            top: -8px;
            left: 0;
            border-radius: 1px;
        }

        &::after {
            content: "";
            background: currentColor;
            width: 84%;
            height: inherit;
            position: absolute;
            top: 8px;
            left: 0;
            border-radius: 1px;
        }
    }
}

</style>
