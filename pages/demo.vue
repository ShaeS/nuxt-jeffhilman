<template>
	<section class="container">
		<iframe class="video-player" src="https://player.vimeo.com/video/215435955?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>
	</section>
</template>

<script>
import { fromHome, toHome } from "~/animations/demo";

export default {
	transition: {
		mode: "out-in",
		css: false,
		enter(el, done) {
			fromHome(this.$store, done);
		},
		leave(el, done) {
			toHome(this.$store, done);
		}
	}
};
</script>

<style lang="scss">
.container {
	position: relative;
	z-index: 1;
	padding-left: var(--side-nav-size);
}

.video-player {
	width: 100%;
	border: 0;
	height: calc( 100vh - var(--lower-nav-size) );
}
</style>

