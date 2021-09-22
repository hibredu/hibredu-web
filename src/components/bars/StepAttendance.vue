<template>
  <div class="vertical-progress-step-bar">
    <v-stepper v-model="importStep" vertical flat>
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
          v-if="this.uploadedFile.length > 0"
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
            <DateInputClean
              label="Data da Aula"
              @update:value="configs.date = $event"
            />
            <TextInputClean
              label="Horário da Aula"
              placeholder="Ex: 08:00"
              type="text"
              @update:value="configs.hour = $event"
            />
          </div>
        </div>
        <div class="space"></div>
        <NormalButton
          @click.native="
            importStep = 3;
            show();
            sendFile();
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
          <h4 class="list-title">{{ this.file.name }}</h4>
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
import TextInputClean from "../inputs/TextInputClean";
import SelectInputClean from "../inputs/SelectInputClean";
import DateInputClean from "../inputs/DateInputClean";
import { mapActions, mapState } from "vuex";

export default {
  name: "StepAttendance",
  components: {
    NormalButton,
    FileInput,
    SelectInputClean,
    TextInputClean,
    DateInputClean,
  },
  data() {
    return {
      uploadedFile: [],
      importStep: 1,
      file: {
        name: "",
      },
      configs: {
        classroom: "",
        subject: "",
        hour: "",
        date: "",
      },
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
    ]),
    processUpload(event) {
      this.uploadedFile = event;
      this.file.name = this.uploadedFile[0].name;
    },
    show() {
      console.log('configs')
      console.log(this.configs);
    },
    sendFile() {
      console.log(this.uploadedFile)
      // this.action_attendanceSpreadSheetTeams(
      //   this.formData
      // ).then((response) => {
      //   console.log(response);
      // });
    },
  },
  computed: {
    ...mapState({
      classrooms: (state) => state.index.classrooms,
      subjects: (state) => state.index.subjects,
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
  text-transform: capitalize;
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