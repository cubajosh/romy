<template>
  <div class="password-page">
    <p class="instruction-text">
      my love, you'll need your lucky number to see inside ❤️
    </p>
    <form @submit.prevent="checkPassword">
      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
        class="password-input"
      />
      <button type="submit" class="submit-button">Enter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
    };
  },
  methods: {
    checkPassword() {
      if (this.password === '121') {
        this.$router.replace('/main'); // Use replace to prevent going back
      } else {
        alert('Incorrect password');
      }
    },
  },
};
</script>

<style scoped>
.password-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px; /* Add padding for mobile */
}

.instruction-text {
  font-family: 'Courier New', Courier, monospace; /* Typewriter font */
  margin-bottom: 20px;
}

.password-input {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px; /* Space between input and button */
  border: 1px solid white;
  border-radius: 5px;
  background-color: white;
  color: black;
}

.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: white; /* White background */
  color: black; /* Black text */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Smooth transition */
}

.submit-button:hover {
  background-color: black; /* Change background on hover */
  color: white; /* Change text color on hover */
}
</style>