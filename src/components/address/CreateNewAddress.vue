<script setup>
import {useDisplay} from 'vuetify';
import { reactive, ref} from "vue";
import FormContainer from "../base/form/FormContainer.vue";
import FormGenerator from "../base/form/FormGenerator.vue";
import {CREATE_NEW_ADDRESS} from "@/schema/CREATE_NEW_ADDRESS.schema.js";
import useVuelidate from '@vuelidate/core';

const dialog = ref(false);
const {lg} = useDisplay();
const schema = reactive([...CREATE_NEW_ADDRESS.schema]);
const state = reactive({...CREATE_NEW_ADDRESS.model});
const rules = CREATE_NEW_ADDRESS.validations;
const v$ = useVuelidate(rules, state);

</script>

<template>
  <v-container class="bg-white rounded-lg overflow-scroll" >
    <v-row class="my-1 mx-5">
      <div class="px-lg-3 py-3 w-100 text-subtitle-1 font-weight-bold">
        ثبت آدرس
      </div>
    </v-row>
    <v-row class="my-5">
      <v-col cols="12">
        <FormContainer class="px-1 px-lg-12">
          <template v-slot:body>
            <FormGenerator
                :schema="schema"
                :v$="v$"
                :state="state"
                @update-model-value="arg => (state = arg)"></FormGenerator>

          </template>
        </FormContainer>
      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped>

</style>