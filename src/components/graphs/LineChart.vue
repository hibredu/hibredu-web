<template>
  <v-card class="graph-card" flat>
    <div class="header-graph">
      <h4>{{ title }}</h4>
      <SelectFilter :items="this.filter" label="Turma" @update:value="selectedClassroom = $event.id"/>
    </div>
    <D3LineChart :config="chart_config" :datum="chart_data"></D3LineChart>
  </v-card>
</template>

<script>
import { D3LineChart } from "vue-d3-charts";
import SelectFilter from "../filters/SelectFilter";

export default {
  components: {
    D3LineChart,
    SelectFilter,
  },
  props: ["title", "data", "filter"],
  data() {
    return {
      selectedClassroom: '',
      chart_data: [
        { hours: 238, production: 134, date: 2000 },
        { hours: 938, production: 478, date: 2001 },
        { hours: 1832, production: 1392, date: 2002 },
        { hours: 2092, production: 2343, date: 2003 },
        { hours: 2847, production: 2346, date: 2004 },
        { hours: 2576, production: 2233, date: 2005 },
        { hours: 2524, production: 2325, date: 2006 },
        { hours: 1648, production: 2456, date: 2007 },
        { hours: 2479, production: 2329, date: 2008 },
        { hours: 3200, production: 2438, date: 2009 },
      ],
      chart_config: {
        values: ["hours", "production"],
        date: {
          key: "date",
          inputFormat: "%Y",
          outputFormat: "%Y",
        },
        points: false,
        axis: {
          yTicks: 8,
        },
        transition: {
          duration: 350,
          ease: "easeLinear",
        },
      },
    };
  },
};
</script>

<style scoped>
.graph-card {
  font-family: "Metropolis Regular";
  width: 55%;
  padding: 1em;
  height: auto;
}

.header-graph {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.5em;
  padding: 0em 1em 0em 1em;
}

@media only screen and (max-width: 1024px) {
  .graph-card {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: 100%;
    height: auto;
    margin-bottom: 2em;
  }
  .header-graph {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 2.5em;
    padding: 0em 1em 0em 1em;
    width: 100%;
  }
}
</style>