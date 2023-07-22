<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/map">About</router-link>
  </nav>
  <router-view/>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import axios from 'axios'
  import { useGlobalStore } from '../store/store'

  const store = useGlobalStore()

  onMounted(() => {
    fetchData();
  })

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:3000/data')
      store.setInitialData(response.data)
    } catch (err) {
      console.error('Ошибка при получении данных: ', err)
    }
  }
</script>

<style></style>
