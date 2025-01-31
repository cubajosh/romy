<template>
    <nav class="navbar">
      <router-link
        v-for="category in categories"
        :key="category"
        :to="`/gallery/${category}`"
      >
        {{ category }}
      </router-link>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: ['my-love', 'my-heart', 'my-joy', 'my-wife'],
      };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: center;
    background-color: black;
    padding: 10px;
  }
  
  .navbar a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace; /* Typewriter font */
  }
  </style>