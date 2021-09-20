<template>
  <v-btn class="ma-2 white--text icon-normal-btn" :color="color" x-large depressed>
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
.icon-normal-btn {
  font-family: "Metropolis Bold";
  text-transform: capitalize;
}
</style>