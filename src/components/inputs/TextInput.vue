<template>
  <div class="text-input">
    <v-form color="var(--yellowHibredu)">
      <v-text-field
        background-color="var(--lightGrayHibredu)"     
        solo
        flat
        color="var(--yellowHibredu)"
        :prepend-inner-icon="ico"
        :placeholder="text">
      </v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: [ "ico", "text" ],
  data() {
    
  }
}
</script>

<style scoped>
.text-input {
  font-family: 'Metropolis Regular';
  width: 100%;
}
</style>