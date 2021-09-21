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
        <v-card flat solo>
          <h4>{{ this.file.name }}</h4>
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
import { mapActions } from "vuex";

export default {
  name: "StepAttendance",
  components: {
    NormalButton,
    FileInput,
    SelectInputClean,
    TextInputClean,
    DateInputClean
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
      classrooms: [],
    };
  },
  mounted() {
    this.getClassrooms();
  },
  methods: {
    ...mapActions(["action_classroom"]),
    getClassrooms() {
      this.action_classroom().then((response) => {
        this.classrooms = response;
      });
    },
    processUpload(event) {
      this.uploadedFile = event;
      this.file.name = this.uploadedFile[0].name;
      console.log(event);
    },
    show() {
      console.log(this.configs);
    },
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
</style>