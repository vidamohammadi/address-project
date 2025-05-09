<script setup>
  import {  ref, watch } from 'vue';

  const props = defineProps(['schema', 'modelValue', 'v$', 'state']);
  const emit = defineEmits(['updateModelValue', 'finish', 'update:modelValue']);

  let state = ref(props.state);

  watch(
    state,
    value => {
       emit('updateModelValue', value);
    },
    {
      deep: true,
      immediate: true
    }
  );



</script>

<template>
  <slot v-if="$slots.body" name="body"></slot>
  <v-row v-else class="d-flex flex-wrap justify-start">
    <v-col
      v-for="(input, i) of props.schema"
      :cols="input.cols"
      :xl="input.xl"
      :lg="input.lg"
      :md="input.md"
      :sm="input.sm"
      class="py-1"
      id="form-generator-input">
      <v-text-field
        v-if="input.type === 'text'"
        :variant="input.variant ? input.variant : 'outlined'"
        :inputmode="input.inputmode || 'text'"
        v-bind="$attrs"
        :label="input.label"
        :placeholder="input.placeholder"
        :name="input.id"
        :clearable="input.clearable"
        :hide-details="input.hideDetails"
        :suffix="input.suffix"
        :append-inner-icon="input.innerIcon"
        :prepend-icon="input.prependIcon"
        :disabled="input.disabled"
        bg-color="white"
        :base-color="
          props.v$[input.id].$validate &&
          props.v$[input.id].$dirty &&
          !props.v$[input.id].$error
            ? 'success_input'
            : ''
        "
        :color="
          props.v$[input.id].$validate &&
          props.v$[input.id].$dirty &&
          !props.v$[input.id].$error
            ? 'success_input'
            : ''
        "
        :class="[
          input.class,
          {
            'v-field--active-input':
              props.v$[input.id].$validate &&
              props.v$[input.id].$dirty &&
              !props.v$[input.id].$error
          }
        ]"
        v-model="state[input.id]"

        @input="
          props.v$[input.id].$touch(),
            emit('update:modelValue', $event.target.value)
        "
        @blur="props.v$[input.id].$touch()"></v-text-field>
       <v-select
        v-else-if="input.type === 'select'"
        :variant="input.variant ? input.variant : 'solo'"
        bg-color="btn"
        v-bind="$attrs"
        :items="input.items"
        item-title="title"
        item-value="value"
        return-object
        :label="input.label"
        :placeholder="input.placeholder"
        :clearable="input.clearable"
        :suffix="input.suffix"
        :hide-details="input.hideDetails"
        :append-inner-icon="input.innerIcon"
        :prepend-icon="input.prependIcon"
        :disabled="input.disabled"
        v-model="state[input.id]"
        :error-messages="props.v$[input.id].$errors.map(e => e.$message)"
        @input="props.v$[input.id].$touch()"
        @blur="props.v$[input.id].$touch()"
        :base-color="
          props.v$[input.id].$validate &&
          props.v$[input.id].$dirty &&
          !props.v$[input.id].$error
            ? 'success_input'
            : ''
        "
        :color="
          props.v$[input.id].$validate &&
          props.v$[input.id].$dirty &&
          !props.v$[input.id].$error
            ? 'success_input'
            : ''
        "
        :class="[
          input.class,
          {
            'v-field--active-input':
              props.v$[input.id].$validate &&
              props.v$[input.id].$dirty &&
              !props.v$[input.id].$error
          }
        ]"></v-select>
      <v-textarea
        v-else-if="input.type === 'textarea'"
        :variant="input.variant ? input.variant : 'outlined'"
        bg-color="btn"
         :label="input.label"
        :placeholder="input.placeholder"
        :clearable="input.clearable"
        :suffix="input.suffix"
        :append-inner-icon="input.innerIcon"
        :hide-details="input.hideDetails"
        :prepend-icon="input.prependIcon"
        :disabled="input.disabled"
        v-model="state[input.id]"

        @input="props.v$[input.id].$touch()"
        @blur="props.v$[input.id].$touch()"
        :base-color="
          props.v$[input.id].$validate &&
          props.v$[input.id].$dirty &&
          !props.v$[input.id].$error
            ? 'success_input'
            : ''
        "
        :color="
          props.v$[input.id].$validate &&
          props.v$[input.id].$dirty &&
          !props.v$[input.id].$error
            ? 'success_input'
            : ''
        "
        :class="[
          input.class,
          {
            'v-field--active-input':
              props.v$[input.id].$validate &&
              props.v$[input.id].$dirty &&
              !props.v$[input.id].$error
          }
        ]"></v-textarea>
     </v-col>
    <slot name="inline-action" class="m-4" />
  </v-row>
</template>
<style>
  .v-text-field .v-field--no-label input,
  .v-text-field .v-field--active input {
    color: #000000de !important;
    border-radius: 15px;
    opacity: 100%;
  }
  .v-field--active-input .v-label.v-field-label {
    opacity: 100%;
  }

  .v-field--active-input .v-field--variant-outlined .v-field__outline {
    --v-field-border-width: 2px !important;
    --v-field-border-opacity: 100%;
  }
  .v-field--no-label,
  .v-field--single-line,
  .v-field--variant-outlined {
    --v-field-padding-top: 0px !important;
  }
</style>
<style scoped lang="scss">
  .v-text-field ::v-deep(.v-field) {
    border-radius: 16px;
  }
  .v-select ::v-deep(.v-field) {
    border-radius: 16px;
  }
  .v-textarea ::v-deep(.v-field) {
    border-radius: 16px;
  }
  .v-autocomplete ::v-deep(.v-field) {
    border-radius: 16px;
  }
  .v-input.success .v-input__control .v-input__slot {
    border-color: #4caf50 !important;
  }
  .v-field--no-label,
  .v-field--single-line,
  .v-field--variant-outlined {
    --v-field-padding-top: 0px !important;
  }
  :deep(.v-field--no-label),
  :deep(.v-field--single-line),
  :deep(.v-field--variant-outlined) {
    --v-field-padding-top: 1px !important;
    background-color: white !important;
  }
</style>
