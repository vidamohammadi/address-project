<template>
  <v-app-bar color="white" flat>
    <v-row class="w-100 d-flex align-center px-2 text-body-2" >
      <v-col cols="4">
        <v-img src="./logo.png" max-width="50px" max-height="50px"></v-img>
      </v-col>
      <v-col cols="4" class="d-flex  ">
        <span class="text-black">ثبت آدرس</span>
      </v-col>
      <v-col cols="4" class="d-flex  ">
        <router-link to="/" class="text-green">مشاهده آدرس ها</router-link>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
</script>

<style scoped>
</style>
