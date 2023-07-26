<template>
  <div>
    <div id="map" class="w-full h-96"></div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, onMounted } from 'vue'

  import Map from 'ol/Map'
  import View from 'ol/View'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'
  import { Polygon } from 'ol/geom'
  import { fromLonLat } from 'ol/proj'
  import { Feature } from 'ol'
  import VectorSource from 'ol/source/Vector'
  import { Vector } from 'ol/layer'
  import { Style, Fill, Stroke } from 'ol/style'
  import { Coordinate } from 'ol/coordinate';
  import 'ol/ol.css'

  import { Iitems } from '../../models'
  import { useGlobalStore } from '../../store/store'

  const props = defineProps(['id'])
  const store = useGlobalStore()
  console.log(store.currentId)

  onMounted(() => {
    const item = store.filteredData.find((item: Iitems) => item.id === store.currentId)
    console.log(item)
    // console.log(currentId)

    if (item) {
      const coords: Coordinate[] = [item.geometry.geometry.coordinates]
      console.log(coords)
      const center: Coordinate = [coords[0][0]]
      console.log(center)
      const centerLonLat = fromLonLat(center)

      const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new Vector({
            source: new VectorSource({
              features: [new Feature(new Polygon(coords[0]))],
            }),
            style: new Style({
              fill: new Fill({
                color: 'rgba(255, 0, 0, .2)',
              }),
              stroke: new Stroke({
                color: 'red',
                width: 2,
              }),
            }),
          }),
        ],
        view: new View({
          center: centerLonLat,
          zoom: 10,
        }),
      })
    }
  })
</script>

<style></style>