<template>
  <div class="text-input">
    <v-form color="var(--yellowHibredu)">
      <v-text-field
        background-color="var(--lightGrayHibredu)"
        solo
        flat
        color="var(--yellowHibredu)"
        v-model="text"
        :prepend-inner-icon="ico"
        :placeholder="label"
        :type="type"
        @change="$emit('update:value', text)"
      >
      </v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: ["ico", "label", "type"],
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