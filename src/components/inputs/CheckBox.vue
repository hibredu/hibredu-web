<template>
  <div class="checkbox">
    <v-checkbox color="var(--yellowHibredu)" :label="label"></v-checkbox>
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

<style scoped>
.checkbox {
  font-family: "Metropolis Regular";
  width: 100%;
  justify-content: flex-start;
}
</style>