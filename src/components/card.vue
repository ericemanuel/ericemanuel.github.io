<template>
  <router-link :to="link">
    <img
      class="logo"
      :src="require('@/assets/logos/' + logo + '.svg')"
      :alt="logo_alt"
    />
    <img
      class="icon"
      :src="require('@/assets/vectors/' + icon + '.svg')"
      :alt="icon_alt"
    />
    <div class="texts">
      <span>{{ category }}</span>
      <h1 v-html="title"></h1>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'card',
  props: ['link', 'logo', 'logo_alt', 'icon', 'icon_alt', 'category', 'title'],
};
</script>

<style scoped lang="scss">
a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 12px;
  width: 152px;
  height: 240px;
  border-radius: 12px;
  border-bottom: 2px solid $sky;
  background: rgba(20, 35, 50, 0.4);
  transition: 0.4s;

  &:hover {
    background: rgba(20, 35, 50, 0.8);
  }

  .logo {
    height: 16px;
  }

  .icon {
    margin: 0 auto;
    width: 96px;
  }

  .texts {
    display: flex;
    flex-direction: column;

    span {
      @include pico;
    }

    h1 {
      @include mili;
    }
  }
}

@media only screen and (min-width: 900px) {
  a {
    width: 284px;
    height: 420px;
    padding: 24px;
    border-radius: 16px;
    border-bottom: 2px solid $sky;

    .logo {
      height: 32px;
    }

    .icon {
      width: 160px;
    }

    .texts {
      gap: 4px;

      span {
        @include nano;
      }

      h1 {
        @include mega;
      }
    }
  }
}
</style>
