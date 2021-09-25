<template>
  <div class="text-input">
    <v-form color="var(--yellowHibredu)">
      <v-text-field
        :label="label"
        outlined
        dense
        color="var(--yellowHibredu)"
        v-model="text"
        :placeholder="placeholder"
        :type="type"
        @change="$emit('update:value', text)"
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "TextInputClean",
  props: ["label", "type", "placeholder", "mask"],
  data() {
    return {
      text: this.valueField || "",
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