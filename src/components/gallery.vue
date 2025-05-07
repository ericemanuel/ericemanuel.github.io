<template>
  <figure>
    <div class="container" :length="indexes.length">
      <!-- prettier-ignore -->
      <img v-for="index in indexes"
        :src="require('@/assets/images/' + project + '_' + String(index) + '.png')"
      />
    </div>
  </figure>
</template>

<script>
export default {
  name: 'gallery',
  props: ['project', 'indexes'],
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 8px;

  img {
    border-radius: 12px;
    width: 100%;
    background-color: $sky;
  }

  // prettier-ignore
  &[length='3'] img {
    &:nth-of-type(3n)   { transform: translateY(-24px); }
    &:nth-of-type(3n-2) { transform: translateY(24px); }
  }
}

@media only screen and (min-width: 900px) {
  .container {
    gap: 24px;

    img {
      border-radius: 24px;
    }

    // prettier-ignore
    &[length='3'] img {
      &:nth-of-type(3n)   { transform: translateY(56px); }
      &:nth-of-type(3n-2) { transform: translateY(-56px); }
    }
  }
}
</style>
