<template>
  <header id="hero">
    <div class="container">
      <animation></animation>
    </div>

    <swiper
      :modules="modules"
      :speed="1500"
      :autoplay="{ delay: 7000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="slide in slides">
        <slide
          :illustration="slide.illustration"
          :alt="slide.alt"
          :title="slide.title"
          :description="slide.description"
        />
      </swiper-slide>
    </swiper>
  </header>

  <section id="about">
    <div class="container">
      <div class="picture">
        <img src="@/assets/images/eric.png" alt="Eric Emanuel" />
        <div class="outline"></div>
      </div>
      <div class="texts">
        <h1 v-html="$t('about.title')"></h1>
        <hr />
        <p v-html="$t('about.description')"></p>
        <!-- prettier-ignore -->
        <div class="links">
          <icon
            link="https://linkedin.com/in/ericemanuel"
            icon="linkedin" alt="LinkedIn"
          />
          <icon
            link="https://figma.com/@ericemanuel"
            icon="figma" alt="Figma"
          />
          <icon
            link="https://instagram.com/eric.emanuel"
            icon="instagram" alt="Instagram"
          />
          <icon link="https://github.com/ericemanuel"
            icon="github" alt="Figma"
          />
        </div>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="container">
      <animation></animation>
      <card
        v-for="project in projects"
        :link="project.link"
        :brand="project.brand"
        :brand_alt="project.brand_alt"
        :illustration="project.illustration"
        :illustration_alt="project.illustration_alt"
        :label="project.label"
        :title="project.title"
      />
    </div>
  </section>
</template>

<script>
import animation from '@/components/animation.vue';
import slide from '@/components/slide.vue';
import icon from '@/components/icon.vue';
import card from '@/components/card.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';

export default {
  name: 'home',
  components: {
    animation,
    Swiper,
    SwiperSlide,
    slide,
    icon,
    card,
  },

  // prettier-ignore
  computed: {
    locale()   { return this.$i18n.messages[this.$i18n.locale]; },

    slides()   { return this.locale.slides; },
    projects() { return this.locale.projects; },
  },

  setup() {
    const onSwiper = () => {
      const pagination = document.querySelector('.swiper-pagination');

      if (innerWidth < 1000) {
        pagination.style.right = (innerWidth - 328) / 2 + 'px';
      } else {
        pagination.style.right = (innerWidth - 900) / 2 + 'px';
      }
    };

    return {
      onSwiper,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style scoped lang="scss">
#hero {
  .container {
    position: relative;

    :deep(.animation) {
      top: -200px;
      right: -200px;
      left: auto;
      width: 540px;
      transform: none;
    }
  }
}

#about {
  .container {
    position: relative;

    .picture {
      position: absolute;
      top: 12px;
      left: 0;

      img,
      .outline {
        width: 72px;
        height: 96px;
        border-radius: 4px;
      }

      .outline {
        position: absolute;
        z-index: -1;
        top: -12px;
        left: 12px;
        box-sizing: border-box;
        border: 2px solid $sky;
      }
    }

    .texts {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 24px;
      width: 100%;

      h1 {
        @include kilo;
        max-width: 230px;
        text-align: right;
      }

      p,
      :deep(p) {
        @include micro;
        text-align: right;
      }

      .links {
        display: flex;
        gap: 12px;
      }
    }
  }
}

#projects {
  margin-bottom: -56px;

  //prettier-ignore
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    position: relative;

    :deep(.animation) {
      width: 800px;
    }
    
    :deep(a:nth-of-type(2n-1)) { transform: translateY(-24px); }
    :deep(a:nth-of-type(2n))   { transform: translateY(24px); }
  }
}

@media only screen and (min-width: 900px) {
  #hero {
    .container {
      :deep(.animation) {
        top: -360px;
        right: -280px;
        width: 900px;
      }
    }
  }

  #about {
    .container {
      .picture {
        position: static;

        img,
        .outline {
          width: 240px;
          height: 320px;
          border-radius: 16px;
        }

        .outline {
          top: -32px;
          left: 32px;
          border: 4px solid $sky;
        }
      }

      .texts {
        gap: 32px;

        h1 {
          @include tera;
          max-width: 556px;
        }

        p,
        :deep(p) {
          @include base;
          width: 512px;
        }

        .links {
          gap: 16px;
        }
      }
    }
  }

  #projects {
    margin-bottom: -80px;

    //prettier-ignore
    .container {
      :deep(.animation) {
        width: 1200px;
      }

      :deep(a:nth-of-type(2n-1)),
      :deep(a:nth-of-type(2n))   { transform: none; }

      :deep(a:nth-of-type(3n))   { transform: translateY(-56px); }
      :deep(a:nth-of-type(3n-1)) { transform: translateY(0px); }
      :deep(a:nth-of-type(3n-2)) { transform: translateY(56px); }
    }
  }
}
</style>
