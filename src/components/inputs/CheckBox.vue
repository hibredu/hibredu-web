<template>
  <div>
    <v-container class="px-0" fluid>
      <v-checkbox color="var(--yellowHibredu)" :label="label"></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: ["label"],
  data() {
    return {};
  },
};
</script>

<style>
</style>