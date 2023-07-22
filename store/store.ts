import { defineStore } from 'pinia'
import { Iitems } from '../models';

export const useGlobalStore = defineStore('store', {
  state: () => ({
    initialData: [] as Iitems[],
  }),
  actions: {
    setInitialData(data: Iitems[]) {
      this.initialData = data
    },
  },
})