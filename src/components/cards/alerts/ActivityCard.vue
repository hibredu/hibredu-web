<template>
  <v-card class="scroll alert-card" flat>
    <h4>Atividades</h4>
    <v-divider />
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.classroom"></v-list-item-title>
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
        { id: "1", classroom: "3ºA", percentage: "20%" },
        { id: "1", classroom: "1ºB", percentage: "2%" },
        { id: "1", classroom: "3ºC", percentage: "4%" },
        { id: "1", classroom: "2ºD", percentage: "5%" },
        { id: "1", classroom: "3ºA", percentage: "20%" },
        { id: "1", classroom: "1ºB", percentage: "2%" },
        { id: "1", classroom: "3ºC", percentage: "4%" },
        { id: "1", classroom: "2ºD", percentage: "5%" },
        { id: "1", classroom: "3ºA", percentage: "20%" },
        { id: "1", classroom: "1ºB", percentage: "2%" },
        { id: "1", classroom: "3ºC", percentage: "4%" },
        { id: "1", classroom: "2ºD", percentage: "5%" },
      ],
    };
  },
};
</script>

<style scooed>
.alert-card {
  font-family: "Metropolis Regular";
  margin-top: 2em;
  width: 30%;
  padding: 1em;
  height: auto;
}

.card-title {
  font-size: 1em;
  height: 10%;
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
</style>