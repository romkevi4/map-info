<template>
  <tr class="w-full">
    <td class="p-1 w-1/2 border-b-2 font-custom text-xl text-center" @click="handleCurrentId">
      <router-link :to="goTo" class="w-full">
        {{ id }}
      </router-link>
    </td>

    <td class="p-1 w-1/2 border-b-2 font-custom text-xl text-center">
      <router-link :to="goTo" class="w-full">
        {{ name }}
      </router-link>
    </td>
  </tr>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent, ref, PropType } from 'vue';
  import { useGlobalStore } from '../../store/store';

  export default defineComponent({
    name: 'RowOfTable',
    props: {
      goTo: {
        type: String as PropType<string>,
        required: true
      },
      id: String as PropType<string>,
      name: String as PropType<string>
    },
    setup(props) {
      const store = useGlobalStore();
      const currentId = ref(store.currentId);

      const handleCurrentId = () => props.id && (currentId.value = props.id)

      return {
        handleCurrentId,
        currentId,
      };
    }
  })
</script>

<style></style>