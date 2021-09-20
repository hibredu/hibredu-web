<template>
  <v-btn :color="color" x-large class="ma-2 white--text" depressed>
    <v-icon left dark> {{ icon }} </v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "NormalButton",
  props: ["text", "color", "icon"],
};
</script>

<style scoped>
* {
  font-family: "Metropolis Bold";
  text-transform: capitalize;
}
</style>