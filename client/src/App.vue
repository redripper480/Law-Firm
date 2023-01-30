<template>
<div>
  <SkeletonStructure/>
  ></div>
</template>

<script>
import SkeletonStructure from './components/SkeletonStructure.vue'

export default {
  name: 'App',
  components: {
    SkeletonStructure,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
