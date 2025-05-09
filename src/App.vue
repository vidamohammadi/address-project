<script setup>
import Header from "./components/header/index.vue";

</script>

<template>
  <v-app>
    <Header  />
    <v-container fluid class="pa-4 bg-gray h-100 mt-10">
      <router-view />
    </v-container>
  </v-app>

</template>

<style scoped>
.bg-gray{
  background-color: rgba(185, 185, 185, 0.99);
}
</style>
