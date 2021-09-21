<template>
  <div class="text-input">
    <v-select
    :label="label"
      outlined
      dense      
      color="var(--yellowHibredu)"
      v-model="value"
      :items="items"
      item-text="name"
      item-value="id"
      :type="type"
      @change="$emit('update:value', value)"
    >
    </v-select>
  </div>
</template>

<script>
export default {
  name: "SelectInputClean",
  props: ["ico", "label", "type", "items"],
   data: () => ({
      value: null
    }),
};
</script>

<style scoped>
.text-input {
  font-family: "Metropolis Regular";
  width: 100%;
}
</style>