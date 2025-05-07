<template>
  <hero
    :illustration="hero.illustration"
    :alt="hero.alt"
    :title="hero.title"
    :description="hero.description"
  />

  <info :labels="labels" :items="items" />

  <stage
    :label="labels[4]"
    :title="stages[0].title"
    :paragraph="stages[0].paragraph"
  />

  <gallery :project="'one'" :indexes="[1, 2, 3]" />

  <stage
    :label="labels[5]"
    :title="stages[1].title"
    :paragraph="stages[1].paragraph"
  />

  <gallery :project="'one'" :indexes="[4]" />

  <highlight :highlight="highlight" />

  <gallery :project="'one'" :indexes="[5, 6, 7]" />

  <stage
    :label="labels[6]"
    :title="stages[2].title"
    :paragraph="stages[2].paragraph"
  />

  <gallery :project="'one'" :indexes="[8]" />
</template>

<script>
import animation from '@/components/animation.vue';
import hero from '@/components/hero.vue';
import info from '@/components/info.vue';
import stage from '@/components/stage.vue';
import gallery from '@/components/gallery.vue';
import highlight from '@/components/highlight.vue';

export default {
  name: 'one',
  components: { animation, hero, info, stage, gallery, highlight },

  // prettier-ignore
  computed: {
    hero()      { return this.$i18n.messages[this.$i18n.locale].one.hero; },
    labels()    { return this.$i18n.messages[this.$i18n.locale].labels; },
    items()     { return this.$i18n.messages[this.$i18n.locale].one.items; },
    stages()    { return this.$i18n.messages[this.$i18n.locale].one.stages; },
    highlight() { return this.$i18n.messages[this.$i18n.locale].one.highlight; },
  },
};
</script>

<style scoped lang="scss">
@media only screen and (min-width: 940px) {
}
</style>
