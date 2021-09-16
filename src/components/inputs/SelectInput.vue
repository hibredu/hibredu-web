<template>
  <div class="text-input">
    <v-select
      background-color="var(--lightGrayHibredu)"
      solo
      flat
      color="var(--yellowHibredu)"
      v-model="filter"
      :items="items"
      item-text="name"
      item-value="id"
      :prepend-inner-icon="ico"
      :placeholder="label"
      :type="type"
      @change="$emit('update:value', filter)"
    >
    </v-select>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: ["ico", "label", "type", "items"],
  data() {
    return {
      filter: null,
    };
  },
};
</script>

<style scoped>
.text-input {
  font-family: "Metropolis Regular";
  width: 100%;
}
</style>