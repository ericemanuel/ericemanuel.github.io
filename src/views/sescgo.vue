<template>
  <hero
    :illustration="hero.illustration"
    :alt="hero.alt"
    :title="hero.title"
    :description="hero.description"
  />

  <info :labels="labels" :items="items" />

  <figma
    :link="'https://embed.figma.com/design/1R5sD07qmGLGCgBvtDQY79/Portfolio?node-id=0-1&embed-host=share'"
  />

  <stage
    :label="labels[4]"
    :title="stages[0].title"
    :paragraph="stages[0].paragraph"
  />

  <gallery :project="'sescgo'" :indexes="[1, 2, 3]" />

  <stage
    :label="labels[5]"
    :title="stages[1].title"
    :paragraph="stages[1].paragraph"
  />

  <gallery :project="'sescgo'" :indexes="[4, 5, 6]" />

  <highlight :highlight="highlight" />

  <gallery :project="'sescgo'" :indexes="[7, 8, 9]" />

  <stage
    :label="labels[6]"
    :title="stages[2].title"
    :paragraph="stages[2].paragraph"
  />

  <gallery :project="'sescgo'" :indexes="[10, 11, 12]" :animation="true" />

  <others :projects="['Eric Emanuel', 'One']" :labels="labels" />
</template>

<script>
import animation from '@/components/animation.vue';
import hero from '@/components/hero.vue';
import info from '@/components/info.vue';
import figma from '../components/figma.vue';
import stage from '@/components/stage.vue';
import gallery from '@/components/gallery.vue';
import highlight from '@/components/highlight.vue';
import others from '@/components/others.vue';

export default {
  name: 'sescgo',
  components: {
    animation,
    hero,
    info,
    figma,
    stage,
    gallery,
    highlight,
    highlight,
    others,
  },

  // prettier-ignore
  computed: {
    locale()    { return this.$i18n.messages[this.$i18n.locale]; },
    
    hero()      { return this.locale.sescgo.hero; },
    labels()    { return this.locale.labels; },
    items()     { return this.locale.sescgo.items; },
    stages()    { return this.locale.sescgo.stages; },
    highlight() { return this.locale.sescgo.highlight; },
    links()     { return this.locale.sescgo.links; },
    titles()    { return this.locale.sescgo.titles; }
  },
};
</script>
