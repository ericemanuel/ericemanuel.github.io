<template>
  <div class="animation">
    <video autoplay loop muted playsinline poster="@/assets/videos/green.png">
      <source src="@/assets/videos/green.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'animation',
};
</script>

<style scoped lang="scss">
.animation {
  position: absolute;
  z-index: -1;

  mask-image: url('@/assets/videos/mask.svg');
  mask-size: cover;
  -webkit-mask-image: url('@/assets/videos/mask.svg');
  -webkit-mask-size: cover;

  video {
    width: 100%;
  }
}

@media only screen and (min-width: 900px) {
}
</style>
