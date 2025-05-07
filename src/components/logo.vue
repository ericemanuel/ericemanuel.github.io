<template>
  <footer>
    <div class="container">
      <router-link to="/">
        <img src="@/assets/vectors/logos/ee.svg" alt="EE" />
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'logo',
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;

  img {
    width: 40px;
    background: $flow;
    background-clip: text;
    -webkit-background-clip: text;
  }
}

@media only screen and (min-width: 900px) {
  .container {
    img {
      width: 56px;
    }
  }
}
</style>
