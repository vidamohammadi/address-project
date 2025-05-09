<template>
  <v-container >
    <div id="map" style="height: 400px;"></div>
    <v-row class="mt-4">
      <v-col>
        <v-text-field v-model="lat" label="Latitude" readonly></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="lng" label="Longitude" readonly></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-btn width="100%" color="green" @click="submit">
        ثبت
      </v-btn>

    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
const emit = defineEmits(['submitForm']);
const lat = ref('')
const lng = ref('')
const submit = () => {
  emit('submitForm', { lat: lat.value, lng: lng.value })
}
onMounted(() => {
  const map = L.map('map').setView([35.6892, 51.3890], 12) // default: Tehran

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  const marker = L.marker([35.6892, 51.3890], { draggable: true }).addTo(map)

  function updateLatLng(e) {
    const { lat: newLat, lng: newLng } = e.latlng
    lat.value = newLat.toFixed(6)
    lng.value = newLng.toFixed(6)
    marker.setLatLng(e.latlng)
  }

  map.on('click', updateLatLng)

  marker.on('dragend', (e) => {
    const pos = marker.getLatLng()
    lat.value = pos.lat.toFixed(6)
    lng.value = pos.lng.toFixed(6)
  })

  // Set initial values
  lat.value = 35.6892
  lng.value = 51.3890
})
</script>

<style scoped>
#map {
  border: 2px dashed #ccc;
  border-radius: 8px;
}
</style>
