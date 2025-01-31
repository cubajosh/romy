<template>
  <div class="gallery-page">
    <h1>{{ category }} , you are my soulmate</h1>
    <div class="gallery">
      <p v-if="images.length === 0">No images to display.</p>
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        alt="Gallery Image"
        class="gallery-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: this.$route.params.category,
      images: [],
    };
  },
  created() {
    this.loadImages();
  },
  methods: {
    loadImages() {
      const allImages = {
        'my-love': Array.from({ length: 11 }, (_, i) => `${i + 1}.jpg`),
        'my-heart': Array.from({ length: 11 }, (_, i) => `${i + 16}.jpg`),
        'my-joy': Array.from({ length: 11 }, (_, i) => `${i + 31}.jpg`),
        'my-wife': Array.from({ length: 12 }, (_, i) => `${i + 16}.jpg`),
      };

      const jpgImages = allImages[this.category] || [];
      this.images = jpgImages.map((image) => ({
        src: this.getImagePath(image),
      }));
    },
    getImagePath(image) {
      return new URL(`../assets/images/${image}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.gallery-page {
  background-color: black;
  color: white;
  min-height: 100vh; /* Ensure it covers the full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px; /* Add padding for mobile */
  overflow-y: auto; /* Allow scrolling if content overflows */
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.gallery-image {
  width: 100%; /* Full width on mobile */
  max-width: 200px; /* Limit max width */
  height: auto;
  margin: 10px;
}

/* Responsive styles */
@media (min-width: 768px) {
  .gallery-image {
    width: 45%; /* Two images per row on tablets */
  }
}

@media (min-width: 1024px) {
  .gallery-image {
    width: 30%; /* Three images per row on desktops */
  }
}
</style>