<template>
  <hero
    :illustration="hero.illustration"
    :alt="hero.alt"
    :title="hero.title"
    :description="hero.description"
  />

  <info :labels="labels" :items="items" />
</template>

<script>
import animation from '@/components/animation.vue';
import hero from '@/components/hero.vue';
import info from '@/components/info.vue';

export default {
  name: 'one',
  components: { animation, hero, info },
  computed: {
    hero() {
      return this.$i18n.messages[this.$i18n.locale].one.hero;
    },
    labels() {
      return this.$i18n.messages[this.$i18n.locale].labels;
    },
    items() {
      return this.$i18n.messages[this.$i18n.locale].one.items;
    },
  },
};
</script>

<style scoped lang="scss">
@media only screen and (min-width: 940px) {
}
</style>
