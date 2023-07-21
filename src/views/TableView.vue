<template>
  <div class="home">
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <h1 class="">Данные таблицы</h1>

    <input
      type="text"
      required
      autoComplete="off"
      value=""
      class=""
    >

    <table class="">
      <thead class="">
        <tr>
          <th class="">Идентификатор</th>
          <th class="">Название</th>
        </tr>
      </thead>

      <tbody class="">
        <ListElement />
      </tbody>
    </table>
  </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  import ListElement from '@/components/ListElement.vue';

  export default defineComponent({
    name: 'HomeView',
    components: {
      HelloWorld,
      ListElement
    },
  });
</script>
