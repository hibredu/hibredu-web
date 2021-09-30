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
          v-if="this.uploadedFile != ''"
          @click.native="
            importStep = 2;
            sendFile();
          "
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
            <DateInputClean
              label="Data da Aula"
              @update:value="configs.date = $event"
            />
            <!-- <TextInputClean
              label="Horário da Aula"
              placeholder="Ex: 08:00"
              type="text"
              @update:value="configs.hour = $event"
            /> -->
          </div>
        </div>
        <div class="space"></div>
        <NormalButton
          @click.native="
            importStep = 3;
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
          @click.native="sendAttendance()"
          color="var(--greenHibredu)"
          text="Finalizar Envio"
        />
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
import NormalButton from "../buttons/NormalButton";
import FileInput from "../inputs/FileInput";
// import TextInputClean from "../inputs/TextInputClean";
import DefaultLoading from "../loading/DefaultLoading"
import SelectInputClean from "../inputs/SelectInputClean";
import DateInputClean from "../inputs/DateInputClean";
import ImportConfigs from "../configs/ImportConfigs"
import { mapActions, mapState } from "vuex";

export default {
  name: "StepAttendance",
  components: {
    NormalButton,
    FileInput,
    SelectInputClean,
    // TextInputClean,
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
      "action_attendanceSpreadSheetTeams",
      "action_attendance",
    ]),
    processUpload(event) {
      this.uploadedFile = event;
    },
    sendFile() {
      let data = new FormData();
      data.append("attendance", this.uploadedFile);

      this.action_attendanceSpreadSheetTeams(data).then(() => {
      });
    },
    sendAttendance() {
      this.loading = true;
      this.action_attendance({
        classroom_id: this.configs.classroom,
        subject_id: this.configs.subject,
        file_id: this.returnSpreadsheet.file_id,
        description: "Envio de Presença",
        datetime: this.configs.date,
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
        this.$alert("Planilha enviada com sucesso!");
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
      returnSpreadsheet: (state) => state.index.returnSpreadsheet,
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
  height: 18em;
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

.scroll-list {
  font-family: "Metropolis Regular";
  width: 100%;
  height: auto;
}

.list-title {
  padding: 1em;
}

.content {
  height: 18em;
  overflow-y: auto;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGrayHibredu);
}

.header {
  background-color: var(--lightCyanHibredu);
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.column-name {
  width: 25%;
  text-transform: uppercase;
}

.loading {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
}

@media only screen and (max-width: 1024px) {
  .scroll-list {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: auto;
    height: auto;
    margin-bottom: 2em;
  }
}
</style>