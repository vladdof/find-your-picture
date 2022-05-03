<template>
  <li class="image-card">
    <img
      class="image-card__image"
      :class="{ skeleton: loading}"
      :src="imageUrl"
      :alt="title"
    />
    <div class="image-card__body">
      <p class="image-title" :class="{skeleton: loading}">{{ title }}</p>
      <p class="image-owner" :class="{skeleton: loading}">{{ byline }}</p>
      <section class="image-date-view-wrapper">
        <p class="image-date" :class="{skeleton: loading}">{{ image.datetaken }}</p>
        <p class="image-views" :class="{skeleton: loading}">Views: {{ viewCount }}</p>
      </section>
    </div>
  </li>
</template>

<script>
const TRANSPARENT_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default {
  name: 'image-card',
  props: {
    image: {
      type: Object,
      default() {
        return {};
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imageUrl() {
      if (this.loading) return TRANSPARENT_GIF;
      return this.image.url_n;
    },
    title() {
      return this.image.title || 'Untitled Image';
    },
    byline() {
      return `By ${this.image.ownername}`;
    },
    viewCount() {
      const viewOrViews = this.image.views === 1 ? 'view' : 'views';
      return `${this.image.views} ${viewOrViews}`;
    },
  },
};
</script>

<style lang="scss">
  @import 'image-card';
</style>
