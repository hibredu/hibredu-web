<template>
  <v-card class="scroll alert-card" flat>
    <h4>Alertas ({{ this.items.length }})</h4>
    <v-divider />
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :disabled="true"
          style="color: var(--blackHibredu) !important">
          <v-list-item-icon>
            <v-icon color="var(--redAlert)">mdi-account-alert-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span class="student-name">Julia</span> {{ returnAlert(item.value) }}
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
  props: ["number", "text", "color"],
  data() {
    return {
      items: [
        {
          id: "1",
          value: "Aluno com nota baixa",
          created_at: "2021-09-06T01:53:36.000Z",
          updated_at: null,
          teachers_id: "2",
        },
        {
          id: "2",
          value: "Aluno não entregou atividade",
          created_at: "2021-09-08T01:53:36.000Z",
          updated_at: null,
          teachers_id: "2",
        },
        {
          id: "3",
          value: "Aluno não entregou atividade",
          created_at: "2021-09-09T01:53:36.000Z",
          updated_at: null,
          teachers_id: "2",
        },
        {
          id: "4",
          value: "Aluno com nota baixa",
          created_at: "2021-09-07T01:53:36.000Z",
          updated_at: null,
          teachers_id: "2",
        },
        {
          id: "5",
          value: "Aluno com nota baixa e falta em excesso",
          created_at: "2021-09-07T01:53:36.000Z",
          updated_at: null,
          teachers_id: "2",
        },
        {
          id: "6",
          value: "Aluno com nota baixa",
          created_at: "2021-09-07T01:53:36.000Z",
          updated_at: null,
          teachers_id: "2",
        },
        {
          id: "7",
          value: "Aluno com nota baixa a tempos",
          created_at: "2021-09-07T01:53:36.000Z",
          updated_at: null,
          teachers_id: "2",
        },
        {
          id: "8",
          value: "Aluno com nota baixa e falta em excesso",
          created_at: "2021-09-07T01:53:36.000Z",
          updated_at: null,
          teachers_id: "3",
        },
        {
          id: "7",
          value: "Aluno com nota baixa a tempos",
          created_at: "2021-09-07T01:53:36.000Z",
          updated_at: null,
          teachers_id: "2",
        },
        {
          id: "8",
          value: "Aluno com nota baixa e falta em excesso",
          created_at: "2021-09-07T01:53:36.000Z",
          updated_at: null,
          teachers_id: "3",
        },
      ],
    };
  },
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