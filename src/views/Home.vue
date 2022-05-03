<template>
  <div>
    <hero
      title="Welcome to Instaflickr"
      subtitle="A fake photo app"
    />
    <div class="wrapper">
      <photos-recent />
      <photos-place-dream />
    </div>
  </div>
</template>

<script>
import { Hero, PhotosRecent, PhotosPlaceDream } from '../components';

export default {
  name: 'home',
  components: {
    Hero,
    PhotosPlaceDream,
    PhotosRecent,
  },
};
</script>
