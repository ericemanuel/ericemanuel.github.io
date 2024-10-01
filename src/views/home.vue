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
          :illustration="slide.illustration"
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
        :brand="card.brand"
        :brand_alt="card.brand_alt"
        :illustration="card.illustration"
        :illustration_alt="card.illustration_alt"
        :label="card.label"
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
          illustration: 'gears',
          alt: 'Engrenagens',
        },
        {
          title: 'Publicidade<br> com impacto',
          description:
            'Comunicações que <em>valorizam o seu negócio</em><br> e fazem seus resultados decolarem!',
          illustration: 'rocket',
          alt: 'Foguete',
        },
        {
          title: 'Criatividade<br> em tudo',
          description:
            'Para cada trabalho <em>uma inspiração única,</em><br> para cada marca uma nova perspectiva.',
          illustration: 'head',
          alt: 'Criatividade',
        },
        {
          title: 'Paixão pelo<br> o que faço',
          description:
            'Para gerar <em>resultados incríveis</em><br> é preciso amar o que se faz!',
          illustration: 'fire',
          alt: 'Fogo',
        },
      ],
      cards: [
        {
          link: '/portfolio/clientportal',
          brand: 'clearsale',
          brand_alt: 'ClearSale',
          illustration: 'globe',
          illustration_alt: 'Globo',
          label: 'Design',
          title: 'Uma interface para todos',
        },
        {
          link: '/portfolio/soul',
          brand: 'puc-rio',
          brand_alt: 'Puc-Rio',
          illustration: 'mind',
          illustration_alt: 'Mente',
          label: 'Desenvolvimento',
          title: 'Um app que lê pensamentos',
        },
        {
          link: '/portfolio/sitedosesc',
          brand: 'sesc',
          brand_alt: 'Sesc',
          illustration: 'link',
          illustration_alt: 'Link',
          label: 'Design',
          title: 'Conectando culturas',
        },
        {
          link: '/portfolio/sesc+',
          brand: 'sesc',
          brand_alt: 'Sesc',
          illustration: 'head',
          illustration_alt: 'Head',
          label: 'UX Design',
          title: 'A experiência<br> de explorar',
        },
        {
          link: '/portfolio/montehermom',
          brand: 'montehermom',
          brand_alt: 'Monte Hermom',
          illustration: 'cross',
          illustration_alt: 'Cruz',
          label: 'Um pouco de tudo',
          title: 'Tecnologia para dar vida',
        },
        {
          link: '/portfolio/gamechanger',
          brand: 'uerj',
          brand_alt: 'Uerj',
          illustration: 'block',
          illustration_alt: 'Bloco',
          label: 'Desenvolvimento',
          title: 'O jogo da inovação',
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
