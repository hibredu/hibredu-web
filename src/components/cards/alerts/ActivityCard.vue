<template>
  <v-card class="scroll activity-card" flat>
    <h4>Atividades</h4>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in params"
          :key="i"
          :disabled="true"
          style="color: var(--blackHibredu) !important"
        >
          <v-list-item-icon>
            <v-icon center color="var(--yellowHibredu)"
              >mdi-checkbox-blank-circle</v-icon
            >
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              >{{ formatDate(item.created_at) }}
            </v-list-item-title>
            <v-list-item-title
              >{{ item.name }} - {{ item.subject }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import globalMethods from "../../../mixins/globalMethods"
export default {
  name: "ActivityCard",
  mixins: [ globalMethods ],
  props: ["number", "text", "color", "params"],
};
</script>

<style scoped>
.activity-card {
  font-family: "Metropolis Regular";
  width: 30%;
  padding: 1em;
  height: auto;
}

.scroll {
  overflow-y: scroll;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGrayHibredu);
}

@media only screen and (max-width: 1024px) {
  .activity-card {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: 100%;
    height: auto;
    margin-bottom: 2em;
  }
}
</style>