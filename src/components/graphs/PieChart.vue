<template>
  <div class="graph-card" flat>
    <h4>{{ title }}</h4>
    <D3PieChart
      :config="chart_config"
      :datum="chart_data"
    ></D3PieChart>
  </div>
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
  width: auto;  
  padding: 1em;
  height: 100%;
  background-color: var(--whiteHibredu);
  border-radius: 3px;
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