<template>
  <div class="container">
    <img
      :src="require('@/assets/vectors/illustrations/' + illustration + '.svg')"
      :alt="alt"
    />
    <div class="texts">
      <h1 v-html="title"></h1>
      <hr />
      <p v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slide',
  props: ['illustration', 'alt', 'title', 'description'],
};
</script>

<style scoped lang="scss">
.container {
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  img {
    margin-left: auto;
    width: 200px;
    z-index: -1;
  }

  .texts {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 24px;
    margin-top: -16px;
    width: 300px;

    h1 {
      @include tera;
    }

    p,
    :deep(p) {
      @include micro;
    }
  }
}

@media only screen and (min-width: 900px) {
  .container {
    flex-direction: row-reverse;
    align-items: center;
    gap: 64px;

    img {
      width: 320px;
      margin: 0 32px 0 0;
    }

    .texts {
      gap: 32px;
      margin-top: 0;
      width: 420px;

      h1 {
        @include peta;
      }

      p,
      :deep(p) {
        @include base;
      }
    }
  }
}
</style>
