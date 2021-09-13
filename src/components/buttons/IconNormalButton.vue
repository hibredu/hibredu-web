<template>
    <v-btn x-large
      :color="color" 
      dark>
    <v-icon left>{{ icon }}</v-icon>
      {{ text }}
    </v-btn>
</template>

<script>
export default {
  name: 'NormalButton',
  props: [ "text", "color", "icon" ]
}
</script>

<style scoped>
* {
  font-family: "Metropolis Bold";
  text-transform: capitalize;
}
</style>