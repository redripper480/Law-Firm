<template>
  <HomePage></HomePage>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 30px 0 30px;
  background-color: #1c1f23;
  height: 100vh;
}
@media (max-width: 800px) {
 #app {
  padding: 0px;
 } 
}
</style>
