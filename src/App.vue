<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/map">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    props: {
      msg: String,
    },
  });
</script>

<style></style>
