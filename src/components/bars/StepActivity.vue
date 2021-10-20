<template>
  <div class="vertical-progress-step-bar">
    <v-stepper v-model="importStep" vertical flat>
      <div class="loading" v-if="loading">
        <DefaultLoading />
      </div>
      <v-stepper-step
        :complete="importStep > 1"
        step="1"
        color="var(--yellowHibredu)"
        max-height="30em"
      >
        <label>Importar arquivo</label>
      </v-stepper-step>

      <v-stepper-content class="item" step="1">
        <FileInput
          :dialog="true"
          :multiple="false"
          @filesUploaded="processUpload($event)"
        />
        <div class="space"></div>
        <NormalButton
          v-if="this.uploadedFile != ''"
          @click.native="
            importStep = 2;
            sendFile();
          "
          color="var(--greenHibredu)"
          text="Próximo"
        />
      </v-stepper-content>

      <v-stepper-step
        :complete="importStep > 2"
        step="2"
        color="var(--yellowHibredu)"
      >
        <label>Configurações</label>
      </v-stepper-step>

      <v-stepper-content step="2">
        <div class="step-2">
          <div class="input-configs">
            <SelectInputClean
              label="Turma"
              :items="this.classrooms"
              type="text"
              @update:value="configs.classroom = $event"
            />
            <SelectInputClean
              label="Matéria"
              :items="this.subjects"
              type="text"
              @update:value="configs.subject = $event"
            />
            <TextInputClean
              label="Nome da Atividade"
              placeholder="Ex: Atividade Semestral"
              type="text"
              @update:value="configs.activity_name = $event"
            />
            <TextInputClean
              label="Quantidade de Questões"
              placeholder="Ex: 10"
              type="number"
              @update:value="configs.total_questions = $event"
            />
            <TextInputClean
              label="Valor Máximo da Atividade"
              placeholder="Ex: 10"
              type="number"
              @update:value="configs.total_value = $event"
            />
            <TextInputClean
              label="Assunto"
              placeholder="Ex: Química Orgânica"
              type="text"
              @update:value="configs.theme = $event"
            />
            <DateInputClean
              label="Data da Atividade"
              @update:value="configs.date = $event"
            />
          </div>
        </div>
        <div class="space"></div>
        <NormalButton
          @click.native="importStep = 3"
          color="var(--greenHibredu)"
          text="Próximo"
        />
      </v-stepper-content>

      <v-stepper-step
        :complete="importStep > 3"
        step="3"
        color="var(--yellowHibredu)"
      >
        <label>Conferir valores</label>
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card class="scroll-list" flat>
          <h5>
            Associe as colunas da planilha com seus respectivos campos para
            realizarmos o processamento dos dados. Utilize a pré-visualização
            para conferir se o exemplo gerado corresponde ao campo selecionado.
          </h5>
          <h4 class="list-title">{{ this.uploadedFile.name }}</h4>
          <ImportConfigs />
        </v-card>
        <div class="space"></div>
        <NormalButton
          @click.native="sendActivity()"
          :color="`var(--greenHibredu)`"
          :text="`Finalizar Envio`"
        />
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
import NormalButton from "../buttons/NormalButton";
import FileInput from "../inputs/FileInput";
import DefaultLoading from "../loading/DefaultLoading";
import SelectInputClean from "../inputs/SelectInputClean";
import TextInputClean from "../inputs/TextInputClean";
import DateInputClean from "../inputs/DateInputClean";
import ImportConfigs from "../configs/ImportConfigs";
import { mapActions, mapState } from "vuex";

export default {
  name: "StepActivity",
  components: {
    NormalButton,
    FileInput,
    SelectInputClean,
    TextInputClean,
    DefaultLoading,
    DateInputClean,
    ImportConfigs,
  },
  data() {
    return {
      uploadedFile: [],
      importStep: 1,
      configs: {},
      loading: false,
    };
  },
  mounted() {
    if (this.classrooms.length === 0) {
      this.action_classroom();
    }
    if (this.subjects.length === 0) {
      this.action_schoolSubjectsByTeacher();
    }
  },
  methods: {
    ...mapActions([
      "action_classroom",
      "action_schoolSubjectsByTeacher",
      "action_activitySpreadSheetTeams",
      "action_activity",
    ]),
    processUpload(event) {
      this.uploadedFile = event;
    },
    sendFile() {
      let data = new FormData();
      data.append("activity", this.uploadedFile);

      this.action_activitySpreadSheetTeams(data).then((response) => {
        console.log(response);
        // this.formatSuggestions(response.data.columns)
      });
    },
    formatSuggestions(data) {
      for (let i = 0; i < data.length; i++) {
        this.columns.push({
          field_name: data[i][0].field_name,
          final_field: data[i][0].suggestion,
        });
        this.suggestions.push(data[i][0].suggestion);
      }
      this.configuredColumns = this.columns;
    },
    updateColumns(event) {
      this.configuredColumns = event;
    },
    sendActivity() {
      this.loading = true;
      this.action_activity({
        file_id: this.returnSpreadsheet.file_id,
        classroom_id: this.configs.classroom,
        subject_id: this.configs.subject,
        number_questions: this.configs.total_questions,
        subject: this.configs.theme,
        name: this.configs.activity_name,
        max_note: this.configs.total_value,
        columns: this.configuredColumns,
      })
        .then(() => {
          this.loading = false;
          this.$alert("Atividade enviada com sucesso!");
          this.$router.back();
        })
        .catch(() => {
          this.$alert("Houve um erro na importação. Tente novamente");
        });
    },
  },
  computed: {
    ...mapState({
      classrooms: (state) => state.index.classrooms,
      subjects: (state) => state.index.subjects,
      returnSpreadsheet: (state) => state.index.returnSpreadsheetActivity,
    }),
  },
};
</script>

<style scoped>
.vertical-progress-step-bar {
  font-family: "Metropolis Regular";
  color: var(--grayHibredu);
  height: auto;
  width: 100%;
  height: auto;
}

.card {
  width: 80%;
  height: 200px;
  margin-bottom: 2%;
}

.space {
  height: 2em;
}

.step-2 {
  width: auto;
  height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-configs {
  width: auto;
  height: auto;
  align-items: center;
}
</style>