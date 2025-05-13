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
