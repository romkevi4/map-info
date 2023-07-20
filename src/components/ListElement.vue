<template>
  <router-link to="/map">
    <tr class="">
      <td class="">id</td>
      <td class="">name</td>
    </tr>
  </router-link>
  <router-view />
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ListElement',
  });
</script>

<style></style>