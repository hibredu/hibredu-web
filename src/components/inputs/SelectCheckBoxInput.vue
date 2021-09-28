<template>
  <div class="text-input">
    <v-select
      background-color="var(--lightGrayHibredu)"
      solo
      flat
      color="var(--yellowHibredu)"
      v-model="classrooms"
      :items="items"
      item-text="name"
      item-value="id"
      multiple
      :prepend-inner-icon="ico"
      :placeholder="label"
      :type="type"
      @change="$emit('update:value', classrooms);"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "SelectCheckBoxInput",
  props: ["ico", "label", "type", "items"],
  data() {
    return {
      classrooms: null,
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