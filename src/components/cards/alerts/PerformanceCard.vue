<template>
  <v-card class="scroll performance-card" flat>
    <h4>Desempenho por Turma</h4>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in params"
          :key="i"
          :disabled="true"
          style="color: var(--blackHibredu) !important"
        >
          <v-list-item-icon>
            <v-icon
              :color="returnColor(item.metrics.deliveryPercentage * 100)"
              v-text="`mdi-account-group-outline`"
            ></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name.substr(0, 2) }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-list-item-title>
              {{
                item.metrics.deliveryPercentage === null
                  ? 0
                  : item.metrics.deliveryPercentage.toFixed(1) * 100
              }}%
            </v-list-item-title>
            <v-icon :color="returnColor(item.metrics.deliveryPercentage * 100)">
              {{ returnIcon(item.metrics.deliveryPercentage * 100) }}</v-icon
            >
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "PerformanceCard",
  props: ["number", "text", "color", "params"],
  methods: {
    returnIcon(value) {
      if (value <= 50 || value === null) {
        return "mdi-arrow-down";
      } else {
        return "mdi-arrow-up";
      }
    },
    returnColor(value) {
      if (value <= 50 || value === null) {
        return "var(--redAlert)";
      } else {
        return "var(--greenAlert)";
      }
    },
  },
};
</script>

<style scoped>
.performance-card {
  font-family: "Metropolis Regular";
  width: 30%;
  padding: 1em;
  height: auto;
}

.alert-row {
  height: 50px;
  vertical-align: middle;
}

.scroll {
  overflow-y: scroll;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGrayHibredu);
}

.v-list-item-title {
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 1024px) {
  .performance-card {
    font-family: "Metropolis Regular";
    margin-top: 0.5em;
    padding: 0.5em;
    width: auto;
    height: auto;
  }
}
</style>