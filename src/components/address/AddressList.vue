<script setup>
import AddressListItem from "@/components/address/AddressListItem.vue";
import {onMounted, ref} from "vue";
import {getAllAddresses} from "@/services/address.service.js";

const progressCircular = ref(true);
const hasError = ref(false);
let addresses = {}
async function initializeAddress() {
  progressCircular.value = true;
  try{
    addresses = await getAllAddresses();

  }catch (e){
    hasError.value = false;
  }
  progressCircular.value = false;

}
onMounted(() =>{
  initializeAddress()
})

</script>

<template>
  <v-container>
    <v-row class="my-1 mx-5">
      <div class="px-lg-3 py-3 w-100 text-body-1 text-gray-400  ">
لیست آدرس ها      </div>
    </v-row>
    <v-card class="h-100 rounded-lg  pa-5">
      <v-row>
      <v-col cols="12" class="pa-0">
        <div v-if="progressCircular" class="d-flex justify-center mt-15">
          <v-progress-circular
              :size="50"
              color="green"
              indeterminate></v-progress-circular>
        </div>
        <div v-else-if="hasError" class="d-flex justify-center mt-15">
          <v-btn outlined color="primary">تلاش مجدد</v-btn>
        </div>
        <div
            v-else-if="!addresses.length"
            class="text-green text-center text-subtitle font-weight-medium mt-15">
          آدرس موجود نمیباشد !
        </div>
        <div v-else>
          <AddressListItem
              v-for="address in addresses"
              :address-detail="address"
          />
        </div>

      </v-col>
    </v-row>

    </v-card>

  </v-container>
</template>

<style scoped>

</style>