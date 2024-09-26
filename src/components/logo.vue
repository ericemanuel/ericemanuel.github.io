<template>
  <router-link id="logo" to="/">
    <div class="container">
      <img src="@/assets/logos/ee.svg" alt="Eric Emanuel" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'logo',
};
</script>

<style scoped lang="scss">
img {
  margin: 0 auto;
  width: 40px;
  background: -webkit-linear-gradient(0deg, #3298cb, #38bfc3);
  -webkit-background-clip: text;
}

@media only screen and (min-width: 900px) {
  img {
    width: 56px;
  }
}
</style>
