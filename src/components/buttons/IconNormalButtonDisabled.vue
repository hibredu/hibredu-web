<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <div v-on="on">
        <v-btn
          class="white--text icon-normal-btn"
          color="primary"
          x-large
          disabled
          depressed
        >
          <v-icon left dark>
            {{ icon }}
          </v-icon>
          {{ text }}
        </v-btn>
      </div>
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
  width: 100%;
}

.icon-normal-btn:hover {
  font-family: "Metropolis Bold";
  text-transform: capitalize;
  cursor: default;
}
</style>