<template>
  <div class="graph-card" flat>
    <h4>{{ title }}</h4>
    <D3BarChart
      :config="chart_config"
      :datum="chart_data"
    ></D3BarChart>
  </div>
</template>

<script>
import { D3BarChart } from "vue-d3-charts";

export default {
  components: {
    D3BarChart,
  },
  props: ["title", "data", "keyBar", "values"],
  data() {
    return {
      chart_data: this.data,
      chart_config: {
        key: this.keyBar,
        values: this.values,
        tooltip: { 
          label: 'Total'
        },
        color: { scheme: "schemeTableau10" },
      },
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