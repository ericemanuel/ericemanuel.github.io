<template>
  <div class="video">
    <div class="container">
      <video autoplay playsinline loop controls muted>
        <source
          :src="require('@/assets/videos/' + project + '.webm')"
          type="video/webm"
        />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  props: ['project'],
};
</script>

<style scoped lang="scss">
video {
  border-radius: 12px;
}

@media only screen and (min-width: 900px) {
  video {
    border-radius: 24px;
  }
}
</style>
