<template>
  <header id="hero">
    <div class="container">
      <animation></animation>
      <!-- prettier-ignore -->
      <img
        :src="require('@/assets/vectors/illustrations/' + illustration + '.svg')"
        :alt="alt"
      />
      <div>
        <h1 v-html="title"></h1>
        <hr />
        <p v-html="description"></p>
      </div>
    </div>
  </header>
</template>

<script>
import animation from '@/components/animation.vue';

export default {
  name: 'hero',
  components: { animation },
  props: ['illustration', 'alt', 'title', 'description'],
};
</script>

<style scoped lang="scss">
.container {
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  :deep(.animation) {
    top: -200px;
    right: -200px;
    left: auto;
    width: 540px;
    transform: none;
  }

  img {
    margin-left: auto;
    width: 200px;
    z-index: -1;
  }

  // prettier-ignore
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 24px;
    margin-top: -16px;
    width: 300px;

    h1 { @include tera; }
    p,
    :deep(p) { @include micro; }
  }
}

@media only screen and (min-width: 900px) {
  .container {
    flex-direction: row-reverse;
    align-items: center;
    gap: 64px;

    :deep(.animation) {
      top: -360px;
      right: -280px;
      width: 900px;
    }

    img {
      width: 320px;
    }

    // prettier-ignore
    div {
      gap: 32px;
      margin-top: 0;
      width: 480px;

      
      h1 { @include peta; }
      p,
      :deep(p) { @include base; }
    }
  }
}
</style>
