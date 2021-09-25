<template>
    <v-btn 
      :color="color" 
      dark>
      {{ text }}
    </v-btn>
</template>

<script>
export default {
  name: 'NormalButton',
  props: [ "text", "color" ]
}
</script>

<style scoped>
* {
  font-family: "Metropolis Bold";
}
</style>