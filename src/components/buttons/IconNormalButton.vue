<template>
  <v-btn
    class="icon-normal-btn"
    :href="href"
    :style="`color: ${this.colorText}`"
    :color="color"
    x-large
    depressed
  >
    <v-icon left dark> {{ icon }} </v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "IconNormalButton",
  props: ["text", "color", "icon", "colorText", "email"],
  computed: {
    href() {
      let href = 'mailto:'+ this.email;
      if(this.email != null) {
        return href
      } else {
        href=''
        return href
      }
    }
  }
};
</script>

<style scoped>
.icon-normal-btn {
  width: 100%;
  font-family: "Metropolis Bold";
  text-transform: capitalize;
  margin-top: 1em;
}
</style>