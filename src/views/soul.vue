<template>
  <hero
    :illustration="hero.illustration"
    :alt="hero.alt"
    :title="hero.title"
    :description="hero.description"
  />

  <info :labels="labels" :items="items" />

  <player :project="'soul'" />

  <stage
    :label="labels[4]"
    :title="stages[0].title"
    :paragraph="stages[0].paragraph"
  />

  <gallery :project="'soul'" :indexes="[1, 2, 3]" />

  <stage
    :label="labels[5]"
    :title="stages[1].title"
    :paragraph="stages[1].paragraph"
  />

  <gallery :project="'soul'" :indexes="[4]" />

  <highlight :highlight="highlight" />

  <gallery :project="'soul'" :indexes="[5, 6, 7]" />

  <stage
    :label="labels[6]"
    :title="stages[2].title"
    :paragraph="stages[2].paragraph"
  />

  <gallery :project="'soul'" :indexes="[8, 9, 10]" :animation="true" />

  <others :projects="['One', 'Sesc']" :labels="labels" />
</template>

<script>
import animation from '@/components/animation.vue';
import hero from '@/components/hero.vue';
import info from '@/components/info.vue';
import player from '../components/player.vue';
import stage from '@/components/stage.vue';
import gallery from '@/components/gallery.vue';
import highlight from '@/components/highlight.vue';
import others from '@/components/others.vue';

export default {
  name: 'one',
  components: {
    animation,
    hero,
    info,
    player,
    stage,
    gallery,
    highlight,
    others,
  },

  // prettier-ignore
  computed: {
    locale()   { return this.$i18n.messages[this.$i18n.locale]; },
    
    hero()      { return this.locale.soul.hero; },
    labels()    { return this.locale.labels; },
    items()     { return this.locale.soul.items; },
    stages()    { return this.locale.soul.stages; },
    highlight() { return this.locale.soul.highlight; },
    links()     { return this.locale.soul.links; },
    titles()    { return this.locale.soul.titles; }
  },
};
</script>
