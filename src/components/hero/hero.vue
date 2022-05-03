<template>
  <section class="hero" :style="{ backgroundImage: 'url(./homepage-hero.jpg)' }">
    <h1 class="hero-title">{{ title }}</h1>
    <p class="hero-subtitle">{{ subtitle }}</p>
  </section>
</template>

<script>
export default {
  name: 'hero',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
  @import 'hero';
</style>
