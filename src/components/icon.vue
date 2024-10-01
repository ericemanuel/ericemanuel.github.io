<template>
  <a :href="link">
    <img
      :src="require('@/assets/vectors/brands/' + icon + '.svg')"
      :alt="alt"
    />
  </a>
</template>

<script>
export default {
  name: 'icon',
  props: ['link', 'icon', 'alt'],
};
</script>

<style scoped lang="scss">
img {
  height: 20px;
}

@media only screen and (min-width: 900px) {
  img {
    height: 24px;
  }
}
</style>
