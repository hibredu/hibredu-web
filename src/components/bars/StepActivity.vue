<template>
  <div class="vertical-progress-step-bar">
    <v-stepper v-model="importStep" vertical flat>
      <div class="loading" v-if="loading">
        <DefaultLoading/>
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
          @click.native="importStep = 2"
          :color="`var(--greenHibredu)`"
          :text="`Próximo`"
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
          @click.native="
            importStep = 3;
            show();
          "
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
          <h4 class="list-title">{{ this.uploadedFile.name }}</h4>
          <ImportConfigs/>
        </v-card>
        <div class="space"></div>
        <NormalButton
          @click.native="importStep = 1"
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
import DefaultLoading from "../loading/DefaultLoading"
import SelectInputClean from "../inputs/SelectInputClean";
import TextInputClean from "../inputs/TextInputClean";
import DateInputClean from "../inputs/DateInputClean";
import ImportConfigs from "../configs/ImportConfigs"
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
    ImportConfigs
  },
  data() {
    return {
      uploadedFile: [],
      importStep: 1,
      configs: {
        classroom: "",
        subject: "",
        hour: "",
        // date: "",
      },
      loading: false
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

      this.action_activitySpreadSheetTeams(data).then(() => {
      });
    },
    sendActivity() {
      this.loading = true;
      this.action_activity({
        classroom_id: this.configs.classroom,
        subject_id: this.configs.subject,
        file_id: this.returnSpreadsheet.file_id,
        description: "Envio de Presença",
        columns: [
          {
            field_name: "Data e hora",
            final_field: "Controle de horário",
          },
          {
            field_name: "Atividade",
            final_field: "Atividade",
          },
          {
            field_name: "Nome Completo",
            final_field: "Nome",
          },
        ],
      }).then(() => {
        this.loading = false;
        this.$alert("Atividade enviada com sucesso!");
        this.$router.back();
      }).catch(() => {
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