<template>
  <v-card class="scroll alert-card" flat>
    <h4>Alertas ({{ this.params.length }})</h4>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in params" :key="i" :disabled="true"
          style="color: var(--blackHibredu) !important">
          <v-list-item-icon>
            <v-icon :color="returnColor(item.level)">mdi-checkbox-blank-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-wrap">
              <span class="student-name">{{ item.student.name }}</span> {{ returnAlert(item.value) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "AlertCard",
  props: ["number", "text", "color", "params"],
  methods: {
    returnAlert(value){
      switch(value) {
        case 'Aluno com nota baixa':
          return 'está com nota baixa'
        case 'Aluno não entregou atividade':
          return 'não entregou atividade'
        case 'Aluno com nota baixa e falta em excesso':
          return 'está com notas baixas e faltas em excesso'
        case 'Aluno com nota baixa a tempos':
          return 'está com notas baixas há muito tempo'
      }
    },
    returnColor(value){
      switch(value) {
        case 'red':
          return 'var(--redAlert)'
        case 'yellow':
          return 'var(--yellowAlert)'
        case 'green':
          return 'var(--greenAlert)'
      }
    }
  }
};
</script>

<style scoped>
.alert-card {
  font-family: "Metropolis Regular";
  width: 30%;
  padding: 1em;
  height: auto;
}

.student-name {
  color: var(--blueAlert);
}

.scroll {
  overflow-y: scroll;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGrayHibredu);
}

@media only screen and (max-width: 1024px) {
  .alert-card {
    font-family: "Metropolis Regular";
    margin-top: 0.5em;
    padding: 0.5em;
    width: auto;
    height: auto;
  }
}
</style>