<template>
  <div class="m-auto p-3 w-full bg-gradient-to-r from-slate-200 via-gray-100 to-slate-200 shadow-gray-500 shadow-2xl rounded-lg overflow-hidden flex flex-col justify-between items-center">
    <h1 class="mt-0 mb-3 text-3xl font-bold text-center font-custom">Данные таблицы</h1>

    <input
      type="text"
      required
      autoComplete="off"
      value=""
      class="mt-3 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-slate-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 font-custom
      "
    >

    <table class="w-full">
      <thead class="bg-gray-300">
        <tr class="">
          <th class="p-1 w-1/2 font-custom text-xl text-center">Идентификатор (ID)</th>
          <th class="p-1 w-1/2 font-custom text-xl text-center">Название</th>
        </tr>
      </thead>

      <tbody class="bg-gray-100">
        <RowOfTable
          :go-to="`/${item.id}`"
          v-for="item in store.initialData"
          v-bind:key="item.id"
          v-bind:id="item.id"
          v-bind:name="item.name"
        />
      </tbody>
    </table>
  </div>

</template>

<script setup lang="ts">
  import { useGlobalStore } from '../../store/store'
  import RowOfTable from '@/components/RowOfTable.vue'

  const store = useGlobalStore()
</script>

<style></style>