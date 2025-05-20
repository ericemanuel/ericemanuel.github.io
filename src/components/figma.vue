<template>
  <div id="figma">
    <div class="container">
      <iframe :src="link" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'figma',
  props: ['link'],
};
</script>

<style scoped lang="scss">
iframe {
  width: 100%;
  height: 197px;
  border-radius: 12px;
}

@media only screen and (min-width: 900px) {
  iframe {
    border-radius: 24px;
    height: 540px;
  }
}
</style>
