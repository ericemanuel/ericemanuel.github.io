<template>
  <figure>
    <div class="container" :length="indexes.length">
      <!-- prettier-ignore -->
      <img v-for="index in indexes"
        :src="require('@/assets/images/' + project + '_' + String(index) + '.png')"
      />
      <animation v-if="animation"></animation>
    </div>
  </figure>
</template>

<script>
import animation from '@/components/animation.vue';

export default {
  name: 'gallery',
  components: { animation },
  props: ['project', 'indexes', 'animation'],
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 8px;
  position: relative;

  img {
    border-radius: 12px;
    width: 100%;
    background-color: $sky;
  }

  // prettier-ignore
  &[length='3'] img {
    &:nth-of-type(3n)   { transform: translateY(-24px); }
    &:nth-of-type(3n-2) { transform: translateY(24px); }
  }

  :deep(.animation) {
    width: 520px;
  }
}

@media only screen and (min-width: 900px) {
  .container {
    gap: 24px;

    img {
      border-radius: 24px;
    }

    // prettier-ignore
    &[length='3'] img {
      &:nth-of-type(3n)   { transform: translateY(56px); }
      &:nth-of-type(3n-2) { transform: translateY(-56px); }
    }

    :deep(.animation) {
      width: 1200px;
    }
  }
}
</style>
