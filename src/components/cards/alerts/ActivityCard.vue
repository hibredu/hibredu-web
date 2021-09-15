<template>
  <v-card class="scroll activity-card" flat>
    <h4>Atividades</h4>
    <v-divider />
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :disabled="true"
          style="color: var(--blackHibredu) !important"
        >
          <v-list-item-icon>
            <v-icon color="var(--yellowHibredu)"
              >mdi-checkbox-blank-circle</v-icon
            >
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title color="var(--yellowHibredu)"
              >{{ item.activity }} ({{ item.delivered }}/{{
                item.total
              }})</v-list-item-title
            >
            <v-progress-linear
              :value="item.delivered"
              :buffer-value="item.total"
              color="var(--yellowHibredu)"
              background-color="var(--grayHibredu)"
            ></v-progress-linear>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ActivityCard",
  props: ["number", "text", "color"],
  data() {
    return {
      items: [
        { id: "1", activity: "Atividade 1", delivered: "10", total: "100" },
        { id: "2", activity: "Atividade 2", delivered: "20", total: "120" },
        { id: "3", activity: "Atividade 3", delivered: "35", total: "120" },
        { id: "4", activity: "Atividade 4", delivered: "15", total: "120" },
        { id: "5", activity: "Atividade 5", delivered: "40", total: "120" },
        { id: "6", activity: "Atividade 6", delivered: "90", total: "120" },
        { id: "7", activity: "Atividade 7", delivered: "30", total: "120" },
        { id: "8", activity: "Atividade 8", delivered: "50", total: "120" },
        { id: "9", activity: "Atividade 9", delivered: "60", total: "120" },
        { id: "10", activity: "Atividade 10", delivered: "10", total: "120" },
        { id: "11", activity: "Atividade 11", delivered: "10", total: "120" },
        { id: "12", activity: "Atividade 12", delivered: "10", total: "120" },
      ],
    };
  },
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