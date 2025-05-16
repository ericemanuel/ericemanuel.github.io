<template>
  <nav>
    <div class="container">
      <router-link
        v-for="i in [0, 1]"
        :to="`/${projects[i].toLowerCase().replace(/ /g, '')}`"
      >
        <span><em v-html="labels[i + 7]"></em></span>
        <h2 v-html="projects[i]"></h2>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'others',
  props: ['links', 'projects', 'labels'],
};
</script>

<style scoped lang="scss">
nav {
  padding: 20px 0;
  margin-bottom: -96px;
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
    margin-bottom: -144px;

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
