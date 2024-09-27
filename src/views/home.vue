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
          :title="slide.title"
          :description="slide.description"
          :icon="slide.icon"
          :alt="slide.alt"
        />
      </swiper-slide>
    </swiper>
  </header>

  <section id="about">
    <div class="container">
      <div class="picture">
        <img src="@/assets/images/eric.jpg" alt="Eric Emanuel" />
        <div class="outline"></div>
      </div>
      <div class="texts">
        <h1>Boas ideias vêm do encontro de vários conhecimentos</h1>
        <hr />
        <p>
          Eu estudo Design, Desenvolvimento, Marketing,<br />
          Liderança, Música <em>e faço um miojo maravilhoso!</em>
        </p>
        <div class="links">
          <icon link="#" icon="whatsapp" alt="Whatsapp" />
          <icon link="#" icon="instagram" alt="Instagram" />
          <icon link="#" icon="linkedin" alt="LinkedIn" />
        </div>
      </div>
    </div>
  </section>

  <section id="portfolio">
    <div class="container">
      <animation></animation>
      <card
        v-for="card in cards"
        :link="card.link"
        :logo="card.logo"
        :logo_alt="card.alt"
        :icon="card.icon"
        :icon_alt="card.alt"
        :category="card.category"
        :title="card.title"
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
  components: { animation, Swiper, SwiperSlide, slide, icon, card },
  data() {
    return {
      slides: [
        {
          title: 'Designer e<br> desenvolvedor',
          description:
            'As soluções <em>bonitas e funcionais</em> que você<br> precisa, juntas em um único profissional.',
          icon: 'gears',
          alt: 'Engrenagens',
        },
        {
          title: 'Publicidade<br> com impacto',
          description:
            'Comunicações que <em>valorizam o seu negócio</em><br> e fazem seus resultados decolarem!',
          icon: 'rocket',
          alt: 'Foguete',
        },
        {
          title: 'Criatividade<br> em tudo',
          description:
            'Para cada trabalho <em>uma inspiração única,</em><br> para cada marca uma nova perspectiva.',
          icon: 'head',
          alt: 'Criatividade',
        },
        {
          title: 'Paixão pelo<br> o que faço',
          description:
            'Para gerar <em>resultados incríveis</em><br> é preciso amar o que se faz!',
          icon: 'fire',
          alt: 'Fogo',
        },
      ],
      cards: [
        {
          link: '/portfolio/montehermom',
          logo: 'montehermom',
          logo_alt: 'Monte Hermom',
          icon: 'cross',
          icon_alt: 'Cruz',
          category: 'Um pouco de tudo',
          title: 'Tecnologia<br> para dar vida',
        },
        {
          link: '/portfolio/soul',
          logo: 'puc-rio',
          logo_alt: 'Puc-Rio',
          icon: 'mind',
          icon_alt: 'Mente',
          category: 'Desenvolvimento',
          title: 'Um app que lê<br> pensamentos',
        },
        {
          link: '/portfolio/designsystem',
          logo: 'sesc',
          logo_alt: 'Sesc',
          icon: 'ds',
          icon_alt: 'Design System',
          category: 'UX Design',
          title: 'Uma interface<br> para todos',
        },
        {
          link: '/portfolio/sesc+',
          logo: 'sesc',
          logo_alt: 'Sesc',
          icon: 'head',
          icon_alt: 'Head',
          category: 'UX Design',
          title: 'A experiência<br> de explorar',
        },
        {
          link: '/portfolio/radio',
          logo: 'sesc',
          logo_alt: 'Sesc',
          icon: 'play',
          icon_alt: 'Play',
          category: 'UX Design',
          title: 'Música de um<br> jeito diferente',
        },
        {
          link: '/portfolio/ericemanuel',
          logo: 'ericemanuel',
          logo_alt: 'Eric Emanuel',
          icon: 'ee',
          icon_alt: 'EE',
          category: 'Direção de arte',
          title: 'Minha própria<br> identidade',
        },
      ],
    };
  },
  setup() {
    const onSwiper = () => {
      const pagination = document.querySelector('.swiper-pagination');
      console.log(innerWidth);
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
      width: 540px;
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
        max-width: 224px;
        text-align: right;
      }

      p {
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

#portfolio {
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    position: relative;

    :deep(.animation) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
    }

    :deep(a:nth-of-type(2n-1)) {
      transform: translateY(-32px);
    }

    :deep(a:nth-of-type(2n)) {
      transform: translateY(32px);
    }
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

        p {
          @include base;
        }

        .links {
          gap: 16px;
        }
      }
    }
  }

  #portfolio {
    .container {
      :deep(.animation) {
        width: 1200px;
      }

      :deep(a:nth-of-type(2n-1)),
      :deep(a:nth-of-type(2n)) {
        transform: none;
      }

      :deep(a:nth-of-type(3n)) {
        transform: translateY(-64px);
      }

      :deep(a:nth-of-type(3n-1)) {
        transform: translateY(0px);
      }

      :deep(a:nth-of-type(3n-2)) {
        transform: translateY(64px);
      }
    }
  }
}
</style>
