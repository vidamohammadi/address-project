<template>
  <v-app-bar color="white" dark>
    <v-row class="w-100 d-flex align-center px-10 text-body-2 justify-lg-space-between " >
      <v-col cols="4"  >
        <router-link to="/">
          <v-img src="./logo.png" max-width="50px" max-height="50px"></v-img>

        </router-link>
      </v-col>

      <v-col cols="8" lg="3" class="d-flex justify-end justify-space-between" >
        <router-link to="/" class="text-decoration-none nav-link" active-class="active-link">
          ثبت آدرس

        </router-link>


        <router-link to="/address-list" class="text-decoration-none nav-link" active-class="active-link" >مشاهده آدرس ها</router-link>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
</script>

<style scoped>
.nav-link {
  color: black;
  text-decoration: none;
}

.active-link {
  color: green;
}
</style>
