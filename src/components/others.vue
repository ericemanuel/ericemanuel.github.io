<template>
  <nav>
    <div class="container">
      <router-link :to="`/portfolio/${projects[0]}`">
        <span><em v-html="labels[7]"></em></span>
        <h2 v-html="projects[0]"></h2>
      </router-link>
      <router-link :to="`/portfolio/${projects[1]}`">
        <span><em v-html="labels[8]"></em></span>
        <h2 v-html="projects[1]"></h2>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'others',
  props: ['projects', 'labels'],
};
</script>

<style scoped lang="scss">
nav {
  padding: 20px 0;
  background-color: rgba($navy, 0.6);

  .container {
    justify-content: space-between;

    // prettier-ignore
    a {
      display: flex;
      flex-direction: column;

      &:last-of-type {
        align-items: flex-end;
      }

      span { @include nano; }
      h2   { @include base; }
    }
  }
}

@media only screen and (min-width: 900px) {
  nav {
    padding: 32px 0;

    .container {
      // prettier-ignore
      a {
        span { @include base; }
        h2   { @include giga; }
      }
    }
  }
}
</style>
