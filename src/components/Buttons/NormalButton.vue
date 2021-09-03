<template>
    <v-btn 
      color="var(--yellowHibredu)" 
      dark>
      {{ text }}
    </v-btn>
</template>

<script>
export default {
  name: 'NormalButton',
  props: [ "text" ]
}
</script>

<style scoped>

</style>