<template>
  <hero
    :illustration="hero.illustration"
    :alt="hero.alt"
    :title="hero.title"
    :description="hero.description"
  />

  <info :labels="labels" :items="items" />

  <figma
    :link="'https://embed.figma.com/design/TKN0XRBowsI72L7mTimkf7/Site-do-Sesc?node-id=6-967&embed-host=share'"
  />

  <stage
    :label="labels[4]"
    :title="stages[0].title"
    :paragraph="stages[0].paragraph"
  />

  <gallery :project="'sesc'" :indexes="[1, 2, 3]" />

  <stage
    :label="labels[5]"
    :title="stages[1].title"
    :paragraph="stages[1].paragraph"
  />

  <gallery :project="'sesc'" :indexes="[4]" />

  <highlight :highlight="highlight" />

  <gallery :project="'sesc'" :indexes="[5, 6, 7]" />

  <stage
    :label="labels[6]"
    :title="stages[2].title"
    :paragraph="stages[2].paragraph"
  />

  <gallery :project="'sesc'" :indexes="[8]" :animation="true" />

  <others :projects="['Soul', 'Game Changer']" :labels="labels" />
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
  name: 'sesc',
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
    locale()    { return this.$i18n.messages[this.$i18n.locale]; },
    
    hero()      { return this.locale.sesc.hero; },
    labels()    { return this.locale.labels; },
    items()     { return this.locale.sesc.items; },
    stages()    { return this.locale.sesc.stages; },
    highlight() { return this.locale.sesc.highlight; },
    links()     { return this.locale.sesc.links; },
    titles()    { return this.locale.sesc.titles; }
  },
};
</script>
