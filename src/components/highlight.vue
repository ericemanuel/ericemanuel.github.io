<template>
  <article>
    <div class="container">
      <h1>
        <em v-html="highlight"></em>
      </h1>
    </div>
  </article>
</template>

<script>
export default {
  name: 'highlight',
  props: ['highlight'],
};
</script>

<style scoped lang="scss">
.container {
  h1 {
    @include base;
  }
}
@media only screen and (min-width: 900px) {
  .container {
    h1 {
      text-align: center;
      @include mega;
    }
  }
}
</style>
