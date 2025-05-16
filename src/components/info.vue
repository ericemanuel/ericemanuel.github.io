<template>
  <aside id="meta">
    <dl class="container">
      <div v-for="i in [0, 1, 2]">
        <dt><em v-html="labels[i]"></em></dt>
        <dd v-html="items[i]"></dd>
      </div>

      <div>
        <dt><em v-html="labels[3]"></em></dt>
        <div>
          <dd v-for="item in items[3]" v-html="item"></dd>
        </div>
      </div>
    </dl>
  </aside>
</template>

<script>
export default {
  name: 'info',
  props: ['labels', 'items'],
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  justify-content: unset;
  gap: 12px;
  grid-template-areas:
    'partner  skills'
    'location skills'
    'year     skills';

  /* prettier-ignore */
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &:nth-child(1) { grid-area: partner; }
    &:nth-child(2) { grid-area: location; }
    &:nth-child(3) { grid-area: year; }
    &:nth-child(4) { grid-area: skills; }

    &:last-child {
      justify-content: space-between;
      height: 100%;
    }
  }

  dt {
    @include nano;
  }

  dd {
    @include micro;
  }
}

@media only screen and (min-width: 900px) {
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div div:last-child {
      flex-direction: row;
      gap: 16px;
    }

    dt,
    dd {
      @include base;
    }
  }
}
</style>
