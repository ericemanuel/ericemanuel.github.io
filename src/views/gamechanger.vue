<template>
  <hero
    :illustration="hero.illustration"
    :alt="hero.alt"
    :title="hero.title"
    :description="hero.description"
  />

  <info :labels="labels" :items="items" />

  <gallery :project="'gamechanger'" :indexes="[1]" />

  <stage
    :label="labels[4]"
    :title="stages[0].title"
    :paragraph="stages[0].paragraph"
  />

  <gallery :project="'gamechanger'" :indexes="[2, 3, 4]" />

  <stage
    :label="labels[5]"
    :title="stages[1].title"
    :paragraph="stages[1].paragraph"
  />

  <gallery :project="'gamechanger'" :indexes="[5]" />

  <highlight :highlight="highlight" />

  <gallery :project="'gamechanger'" :indexes="[6, 7, 8]" />

  <stage
    :label="labels[6]"
    :title="stages[2].title"
    :paragraph="stages[2].paragraph"
  />

  <gallery :project="'gamechanger'" :indexes="[9]" :animation="true" />

  <others :projects="['Sesc', 'Eric Emanuel']" :labels="labels" />
</template>

<script>
import animation from '@/components/animation.vue';
import hero from '@/components/hero.vue';
import info from '@/components/info.vue';
import gallery from '@/components/gallery.vue';
import stage from '@/components/stage.vue';
import highlight from '@/components/highlight.vue';
import others from '@/components/others.vue';

export default {
  name: 'gamechanger',
  components: {
    animation,
    hero,
    info,
    gallery,
    stage,
    highlight,
    others,
  },

  // prettier-ignore
  computed: {
    locale()   { return this.$i18n.messages[this.$i18n.locale]; },
    
    hero()      { return this.locale.gamechanger.hero; },
    labels()    { return this.locale.labels; },
    items()     { return this.locale.gamechanger.items; },
    stages()    { return this.locale.gamechanger.stages; },
    highlight() { return this.locale.gamechanger.highlight; },
    links()     { return this.locale.gamechanger.links; },
    titles()    { return this.locale.gamechanger.titles; }
  },
};
</script>
