<template>
  <v-card class="scroll alert-card" flat>
    <h4>Alertas ({{ this.items.length }})</h4>
    <v-divider />
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "AlertCard",
  props: ["number", "text", "color"],
  data() {
    return {
      items: [
        { text: "Júlia", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
        { text: "Júlia", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
        { text: "Júlia", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
        { text: "Júlia", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
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