<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="white--text icon-normal-btn"
        dark
        v-bind="attrs"
        v-on="on"
        x-large
        depressed
        color="var(--grayHibredu)"
      >
      <v-icon left dark> {{ icon }} </v-icon>
        {{ text }}
      </v-btn>
    </template>
    <span>Essa opção será implementada futuramente</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "IconNormalButtonDisabled",
  props: ["text", "icon"],
};
</script>

<style scoped>
.icon-normal-btn {
  font-family: "Metropolis Bold";
  text-transform: capitalize;
  margin-top: 1em;
}

.icon-normal-btn:hover {
  font-family: "Metropolis Bold";
  text-transform: capitalize;
  cursor: default;
}

</style>