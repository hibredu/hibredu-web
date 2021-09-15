<template>
  <v-card class="scroll performance-card" flat>
    <h4>Desempenho por Turma</h4>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :disabled="true"
          style="color: var(--blackHibredu) !important">
          <v-list-item-icon>
            <v-icon
              :color="returnColor(item.metrics.deliveryPercentage.toFixed(1))"
              v-text="`mdi-account-group-outline`"
            ></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-list-item-title
              :color="returnColor(item.metrics.deliveryPercentage.toFixed(1))"
            >
              {{ item.metrics.deliveryPercentage.toFixed(1) }} %
            </v-list-item-title>
            <v-icon
              :color="returnColor(item.metrics.deliveryPercentage.toFixed(1))"
            >
              {{
                returnIcon(item.metrics.deliveryPercentage.toFixed(1))
              }}</v-icon
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
  props: ["number", "text", "color"],
  data() {
    return {
      items: [
        {
          id: "1",
          name: "3ºA",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 20,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºA",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 2,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºB",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 3,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºC",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 56,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºA",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 80,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºA",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 0.47368421052631576,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºA",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 0.47368421052631576,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºA",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 0.47368421052631576,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºA",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 0.47368421052631576,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºA",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 0.47368421052631576,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
        {
          id: "1",
          name: "3ºA",
          metrics: {
            deliveredActivities: 9,
            deliveryPercentage: 0.47368421052631576,
            hitRate: 0.7333333333333333,
            alerts: 8,
          },
        },
      ],
    };
  },
  methods: {
    returnIcon(value) {
      if (value >= 50) {
        return "mdi-arrow-up";
      } else {
        return "mdi-arrow-down";
      }
    },
    returnColor(value) {
      if (value >= 50) {
        return "var(--greenAlert)";
      } else {
        return "var(--redAlert)";
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

.student-name {
  color: var(--blueAlert);
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