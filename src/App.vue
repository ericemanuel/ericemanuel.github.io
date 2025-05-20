<template>
  <top />
  <router-view />
  <logo />
</template>

<script>
import top from '@/components/top.vue';
import logo from '@/components/logo.vue';

export default {
  name: 'App',
  components: { top, logo },
};
</script>

<style lang="scss">
@import '@/styles/resets.scss';
@import '@/styles/swiper.scss';

html {
  background-color: $navy;
  background-image: url(@/assets/vectors/illustrations/rapport.svg);
  background-size: 240px;
}

#app {
  display: flex;
  flex-direction: column;
  gap: 144px;
  padding: 16px 0;
  overflow: hidden;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 328px;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  text-wrap: balance;
}

hr {
  width: 40px;
  box-sizing: border-box;
  border-top: 2px solid $azure;
}

img {
  min-width: 0;
}

video {
  width: 100%;
}

@media only screen and (min-width: 900px) {
  html {
    background-size: 360px;
  }

  #app {
    gap: 240px;
    padding: 24px 0;
  }

  .container {
    max-width: 900px;
  }

  hr {
    width: 64px;
  }
}
</style>
