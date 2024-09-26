<template>
  <nav id="logotype">
    <div class="container">
      <router-link to="/">
        <img src="@/assets/logos/ericemanuel.svg" alt="Eric Emanuel" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'logotype',
};
</script>

<style scoped lang="scss">
img {
  width: 160px;
}

@media only screen and (min-width: 900px) {
  img {
    width: 200px;
  }
}
</style>
