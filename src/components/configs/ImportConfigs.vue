<template>
  <div class="import-configs">
    <div class="header">
      <div class="column-name">
        <h4>Coluna</h4>
      </div>
      <div class="column-name">
        <h4>Pré-Visualização</h4>
      </div>
      <div class="column-name">
        <h4>Campo</h4>
      </div>
    </div>
    <v-list class="content" v-if="this.returnSpreadsheet != null" dense>
      <v-list-item
        v-for="(column, i) in this.returnSpreadsheet.columns"
        :key="i"
        style="color: var(--blackHibredu) !important"
      >
        <v-list-item-content>
          <v-list-item-title>
            <h3>{{ column[0].field_name }}</h3>
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-content class="preview">
          <v-list-item-title>
            <h3 class="preview">
              {{
                column[0].field_name.includes("Data")
                  ? formatDate(column[0].example)
                  : column[0].example
              }}
            </h3>
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-select
            outlined
            dense
            :items="suggestion"
            :label="column[0].suggestion"
            color="var(--yellowHibredu)"
            single-line
            @change="updateColumns(i, $event);"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import { mapState } from "vuex";

export default {
  name: "ImportConfigs",
  mixins: [globalMethods],
  props: [ "columns", "suggestion" ],
  data() {
    return {
      finalColumns: []
    };
  },
  mounted(){
    this.finalColumns = this.columns;
  },
  methods: {
    updateColumns(i,value){
      this.finalColumns[i].final_field = value;
      this.$emit("configuredColumns", this.finalColumns);
    }
  },
  computed: {
    ...mapState({
      returnSpreadsheet: (state) => state.index.returnSpreadsheet,
    }),
  },
};
</script>

<style scoped>
.import-configs {
  font-family: "Metropolis Regular";
  width: 100%;
  height: auto;
  text-transform: capitalize;
}
.preview {
  color: var(--grayHibredu) !important;
}

.list-title {
  padding: 1em;
}

.content {
  height: 15em;
  overflow-y: scroll;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGrayHibredu);
}

.header {
  background-color: var(--lightCyanHibredu);
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.column-name {
  width: 35%;
  text-transform: uppercase;
}

@media only screen and (max-width: 1024px) {
  .import-configs {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: auto;
    height: auto;
    margin-bottom: 2em;
  }
}
</style>