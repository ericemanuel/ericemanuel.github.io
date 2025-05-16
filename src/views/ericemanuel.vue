<template>
  <hero
    :illustration="hero.illustration"
    :alt="hero.alt"
    :title="hero.title"
    :description="hero.description"
  />

  <info :labels="labels" :items="items" />

  <figma
    :link="'https://embed.figma.com/design/1R5sD07qmGLGCgBvtDQY79/Portfolio?node-id=0-1&embed-host=share&hide-ui=1'"
  />

  <stage
    :label="labels[4]"
    :title="stages[0].title"
    :paragraph="stages[0].paragraph"
  />

  <figma
    :link="'https://embed.figma.com/design/3ruWgulDCGO1yfh927f60i/Design-system?node-id=29-2&embed-host=share&hide-ui=1'"
  />

  <stage
    :label="labels[5]"
    :title="stages[1].title"
    :paragraph="stages[1].paragraph"
  />

  <gallery :project="'ericemanuel'" :indexes="[1]" />

  <highlight :highlight="highlight" />

  <gallery :project="'ericemanuel'" :indexes="[2, 3, 4]" />

  <stage
    :label="labels[6]"
    :title="stages[2].title"
    :paragraph="stages[2].paragraph"
  />

  <gallery :project="'ericemanuel'" :indexes="[5]" :animation="true" />

  <others :projects="['Game Changer', 'Sesc Go']" :labels="labels" />
</template>

<script>
import animation from '@/components/animation.vue';
import hero from '@/components/hero.vue';
import info from '@/components/info.vue';
import figma from '../components/figma.vue';
import player from '../components/player.vue';
import stage from '@/components/stage.vue';
import gallery from '@/components/gallery.vue';
import highlight from '@/components/highlight.vue';
import others from '@/components/others.vue';

export default {
  name: 'ericemanuel',
  components: {
    animation,
    hero,
    info,
    figma,
    player,
    stage,
    gallery,
    highlight,
    others,
  },

  // prettier-ignore
  computed: {
    locale()   { return this.$i18n.messages[this.$i18n.locale]; },
    
    hero()      { return this.locale.ericemanuel.hero; },
    labels()    { return this.locale.labels; },
    items()     { return this.locale.ericemanuel.items; },
    stages()    { return this.locale.ericemanuel.stages; },
    highlight() { return this.locale.ericemanuel.highlight; },
    links()     { return this.locale.ericemanuel.links; },
    titles()    { return this.locale.ericemanuel.titles; }
  },
};
</script>
