<template>
  <div class="text-input">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="auto"
      color="var(--yellowHibredu)"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          outlined
          dense
          v-model="date"
          :label="label"
          color="var(--yellowHibredu)"
          prepend-inner-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        color="var(--yellowHibredu)"
        v-model="date"
        @input="menu = false"
        @change="$emit('update:value', date)"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "DateInputClean",
  props: ["label", "type", "placeholder"],
  data() {
    return {
      text: this.valueField || "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
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