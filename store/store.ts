import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Iitems } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    initialData: [] as Iitems[],
    filteredData: [] as Iitems[],
    currentId: ref('')
  }),
  actions: {
    setInitialData(data: Iitems[]) {
      this.initialData = data
    },
    setFilteredData(name: string) {
      name
        ? this.filteredData = this.initialData.filter((item: Iitems) => item.name.includes(name))
        : this.filteredData = this.initialData
    },
    setCurrentId(id: string) {
      this.currentId = id
    }
  }
})