<template>
  <v-card class="graph-card" flat>
     <div class="header-graph">
      <h4>{{ title }}</h4>
    </div>
    <D3BarChart
      :config="chart_config"
      :datum="chart_data"
    ></D3BarChart>
  </v-card>
</template>

<script>
import { D3BarChart } from 'vue-d3-charts';

export default {
  components: {
    D3BarChart,
  },
  props: ["title", "data"],
  data() {
    return {
      chart_data: [{production: 9613, year: '2007'},
        {production: 6315, year: '2008'},
        {production: 2541, year: '2010'},
        {production: 9613, year: '2011'},
        {production: 6315, year: '2012'},
        {production: 2541, year: '2012'},
        {production: 9613, year: '2007'},
        {production: 6315, year: '2008'},
        {production: 2541, year: '2009'}],

      chart_config: {
        key: 'year',
        values: ['production'],
        color: {
          default: '#222f3e',
          current: '#41B882'
        }
      }
    };
  },
  methods: {},
};
</script>

<style>
.graph-card {
  font-family: "Metropolis Regular";
  width: auto;
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