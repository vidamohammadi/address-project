<script setup>
import {useDisplay} from 'vuetify';
import { reactive, ref} from "vue";
import FormContainer from "../base/form/FormContainer.vue";
import FormGenerator from "../base/form/FormGenerator.vue";
import {CREATE_NEW_ADDRESS} from "@/schema/CREATE_NEW_ADDRESS.schema.js";
import useVuelidate from '@vuelidate/core';
 import { useRouter } from 'vue-router'
import {addNewAddress} from "@/services/address.service.js";
import MapPicker from "@/components/address/MapPicker.vue";

const router = useRouter()
const dialog = ref(false);
const {lg} = useDisplay();
const schema = reactive([...CREATE_NEW_ADDRESS.schema]);
const state = reactive({...CREATE_NEW_ADDRESS.model});
const rules = CREATE_NEW_ADDRESS.validations;
const v$ = useVuelidate(rules, state);
const selected = ref('female')
const mapPicker = ref(false)
const goToMapPicker = () =>{
  mapPicker.value = true
}
const submit = ({ lat, lng }) => {
  const addressData = {
    first_name:state.firstName,
    last_name:state.lastName,
    coordinate_mobile:state.mobileNumber,
    coordinate_phone_number:state.phoneNumber,
    address:state.addressDetails,
    region:'',
    lat:lat,
    lng:lng,
    gender:selected.value
  }
  addNewAddress(addressData)

}


</script>

<template>
  <v-container v-if="!mapPicker">
    <v-row class="my-1 mx-5">
      <div class="px-lg-3 py-3 w-100 text-body-1 text-gray-400  ">
        ثبت آدرس
      </div>
    </v-row>
    <v-card class="bg-white rounded-lg  pa-5">
      <v-row class="my-5">
        <v-col cols="12">
          <FormContainer class="px-1 px-lg-12">
            <template v-slot:body>
              <FormGenerator
                  :schema="schema"
                  :v$="v$"
                  :state="state"
                  @update-model-value="arg => (state = arg)"></FormGenerator>
              <v-radio-group inline  v-model="selected"  >
                <v-radio label="زن" value="female"  color="green"></v-radio>
                <v-radio label="مرد" value="man"  color="green" ></v-radio>
              </v-radio-group>
            </template>
          </FormContainer>

        </v-col>

      </v-row>
      <v-row>
           <v-btn width="100%" color="green" @click="goToMapPicker">
            ادامه
          </v-btn>

      </v-row>

    </v-card>
  </v-container>
  <MapPicker v-if="mapPicker" @submitForm="submit" />

</template>

<style scoped>

</style>