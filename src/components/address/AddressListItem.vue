<script setup>
const props = defineProps({
  addressDetail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <v-card class="pa-4 pa-lg-6 mb-3 elevation-3 border-lg">
    <v-row no-gutters class="d-block d-lg-flex ">
      <v-col cols="12" lg="4">
        <span class="font-weight-bold ml-2">           نام و نام خانوادگی
        </span>
        {{ props.addressDetail.first_name + ' ' +props.addressDetail.last_name   }}
       </v-col>
      <v-col cols="12" lg="4">
        <span class="font-weight-bold ml-2">          جنسیت
        </span>
        {{ props.addressDetail.gender  }}
       </v-col>
      <v-col cols="12" lg="4">
        <span class="font-weight-bold ml-2 ss02">          شماره تلفن همراه
        </span>
        {{ props.addressDetail.coordinate_mobile  }}
       </v-col>
      <v-col cols="12" lg="4">
        <span class="font-weight-bold ml-2 ss02">          شماره تلفن ثابت
        </span>
        {{ props.addressDetail.coordinate_phone_number  }}
       </v-col>
      <v-divider  class="my-5 .d-none .d-sm-flex .d-md-none" />
      <v-col cols="12" lg="4">
        <span class="font-weight-bold ml-2">        آدرس
        </span>
        {{ props.addressDetail.address  }}
      </v-col>
     </v-row>
  </v-card>
</template>

<style scoped>

</style>