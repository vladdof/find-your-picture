<template>
   <div class="wrapper">
     <h1>Results for: "{{ tag }}"</h1>

      <ul v-if="!loading" class="image-card-grid">
        <image-card
          v-for="image in cleanImages"
          :key="image.id"
          :image="image" />
      </ul>

      <ul v-else class="image-card-grid">
        <image-card v-for="n in 6" :key="n" :loading="true" />
      </ul>
   </div>
</template>

<script>
import flickr from '../flickr';
import { ImageCard } from '../components';

export default {
  name: 'search-results',
  components: {
    ImageCard,
  },
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
  created() {
    this.search();
  },
  watch: {
    tag() {
      this.search();
    },
  },
  data() {
    return {
      loading: false,
      images: [],
    };
  },
  computed: {
    cleanImages() {
      console.log(this.images);
      return this.images.filter((image) => image.url_n);
    },
    isTagEmpty() {
      return !this.tag || this.tag.length === 0;
    },
  },
  methods: {
    search() {
      if (!this.isTagEmpty) {
        this.loading = true;
        this.fetchImages();
      }
    },
    fetchImages() {
      return flickr('photos.search', {
        tags: this.tag,
        extras: 'url_n, owner_name, description, date_taken, views',
        page: 1,
        per_page: 30,
      }).then((response) => {
        this.images = response.data.photos.photo;
        this.loading = false;
      });
    },
  },
};
</script>
