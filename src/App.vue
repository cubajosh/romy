<template>
  <div id="app">
    <NavBar v-if="showNavBar" />
    <router-view :key="$route.path" /> <!-- Add key based on the current route -->
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'; // Import necessary functions
import NavBar from './components/NavBar.vue'; // Import the NavBar component
import { useRoute } from 'vue-router'; // Import useRoute to access the current route

export default defineComponent({
  name: 'App',
  components: {
    NavBar, // Register the NavBar component
  },
  setup() {
    const route = useRoute(); // Access the current route

    // Show NavBar only on certain routes
    const showNavBar = computed(() => {
      return route.path !== '/';
    });

    return {
      showNavBar,
    };
  },
});
</script>

<style>
#app {
  font-family: 'Courier New', Courier, monospace; /* Typewriter font */
  text-align: center;
  color: white;
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
