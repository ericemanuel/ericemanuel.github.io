<template>
  <logotype />
  <router-view />
  <logo />
</template>

<script>
import animation from '@/components/animation.vue';
import logotype from '@/components/logotype.vue';
import logo from '@/components/logo.vue';

export default {
  name: 'App',
  components: { animation, logotype, logo },
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
  gap: 120px;
  padding: 16px 0;
  overflow: hidden;
}

.container {
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 auto;
  max-width: 328px;
}

hr {
  width: 40px;
  box-sizing: border-box;
  border-top: 2px solid $azure;
}

video {
  width: 100%;
}

iframe {
  border-radius: 12px;
  width: 100%;
  height: 197px;
}

@media only screen and (min-width: 900px) {
  html {
    background-size: 360px;
  }

  #app {
    gap: 200px;
    padding: 24px 0;
  }

  .container {
    max-width: 900px;
  }

  hr {
    width: 64px;
  }

  iframe {
    border-radius: 24px;
    height: 540px;
  }
}
</style>
