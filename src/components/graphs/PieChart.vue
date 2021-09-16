<template>
  <v-card class="graph-card" flat>
    <D3PieChart
      :title="title"
      :config="chart_config"
      :datum="chart_data"
    ></D3PieChart>
  </v-card>
</template>

<script>
import { D3PieChart } from "vue-d3-charts";

export default {
  components: {
    D3PieChart,
  },
  props: ["title", "data"],
  data() {
    return {
      chart_data: this.data,

      chart_config: {
        key: "name",
        value: "deliveredActivities",
        color: { scheme: "schemeTableau10" },
        radius: { inner: 0 },
      },
      count: 1,
    };
  },
  methods: {},
};
</script>

<style scoped>
.graph-card {
  font-family: "Metropolis Regular";
  width: 40%;
  padding: 1em;
  height: auto;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGrayHibredu);
}

@media only screen and (max-width: 1024px) {
  .graph-card {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: 100%;
    height: auto;
    margin-bottom: 2em;
  }
}
</style>