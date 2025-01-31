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
      category: this.$route.params.category, // Access the category from route params
      images: [], // This will hold the image objects
    };
  },
  created() {
    console.log("GalleryPage created");
    console.log("Category:", this.category); // Log the category
    this.loadImages();
  },
  methods: {
    loadImages() {
      // Define categories and their corresponding images
      const allImages = {
        'my-love': Array.from({ length: 11 }, (_, i) => `${i + 1}.jpg`), // Images 1 to 15
        'my-heart': Array.from({ length: 11 }, (_, i) => `${i + 16}.jpg`), // Images 16 to 30
        'my-joy': Array.from({ length: 11 }, (_, i) => `${i + 31}.jpg`), // Images 31 to 45
        'my-wife': Array.from({ length: 12 }, (_, i) => `${i + 16}.jpg`), // Different images for my-wife
      };

      // Get the images for the current category
      const jpgImages = allImages[this.category] || [];

      // Use a Set to filter out duplicate images
      const uniqueImages = new Set();

      // Populate the uniqueImages set
      jpgImages.forEach((image) => {
        uniqueImages.add(image);
      });

      // Convert the Set back to an array and map to image objects
      this.images = Array.from(uniqueImages).map((image) => ({
        src: this.getImagePath(image),
      }));
    },
    getImagePath(image) {
      // Construct the correct path to the images in the assets folder
      return new URL(`../assets/images/${image}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.gallery-page {
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.gallery-image {
  width: 200px; /* Adjust size as needed */
  height: auto;
  margin: 10px;
}
</style>