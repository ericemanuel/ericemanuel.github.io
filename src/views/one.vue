<template>
  <hero
    :illustration="hero.illustration"
    :alt="hero.alt"
    :title="hero.title"
    :description="hero.description"
  />

  <info :labels="labels" :items="items" />

  <div id="figma">
    <div class="container">
      <iframe
        src="https://embed.figma.com/design/IkIz0LTIGAJKkmJ3rBjzuE/One?node-id=2032-3265&embed-host=share"
        allowfullscreen
      ></iframe>
    </div>
  </div>

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

  <div class="gallery">
    <gallery :project="'one'" :indexes="[8]" />
    <animation></animation>
  </div>

  <others :projects="['Sesc+', 'Soul']" :labels="labels" />
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
    
    hero()      { return this.locale.one.hero; },
    labels()    { return this.locale.labels; },
    items()     { return this.locale.one.items; },
    stages()    { return this.locale.one.stages; },
    highlight() { return this.locale.one.highlight; },
    links()     { return this.locale.one.links; },
    titles()    { return this.locale.one.titles; }
  },
};
</script>

<style scoped lang="scss">
.gallery {
  position: relative;

  :deep(.animation) {
    width: 520px;
  }

  footer {
    margin-top: -64px;
  }
}

@media only screen and (min-width: 900px) {
  .gallery {
    :deep(.animation) {
      width: 1200px;
    }
  }
}
</style>

<style>
footer {
  margin-top: -80px;
}

@media only screen and (min-width: 900px) {
  footer {
    margin-top: -120px;
  }
}
</style>
