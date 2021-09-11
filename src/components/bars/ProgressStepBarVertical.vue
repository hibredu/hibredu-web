<template>
  <div class="vertical-progress-step-bar">
    <v-stepper v-model="importStep" vertical flat>
      <v-stepper-step
        :complete="importStep > 1"
        step="1"
        color="var(--yellowHibredu)"
      >
        <label>Importar arquivo</label>
      </v-stepper-step>

      <v-stepper-content step="1">
       
          <FileInput
            :dialog="true"
            :multiple="false"
            @
            filesUploaded="processUpload ( $ event )"
          />
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
        <v-card color="grey lighten-1" class="card"></v-card>
        <NormalButton
          @click.native="importStep = 3"
          :color="`var(--greenHibredu)`"
          :text="`Próximo`"
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
        <v-card color="grey lighten-1" class="card"></v-card>
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

export default {
  components: { NormalButton, FileInput },
  data() {
    return {
      importStep: 1,
    };
  },
};
</script>

<style scoped>
.vertical-progress-step-bar {
  font-family: "Metropolis Regular";
  color: var(--grayHibredu);
}

label {
  font-family: "Metropolis Regular";
  color: var(--grayHibredu);
}

.card {
  width: 100%;
  height: 200px;
  margin-bottom: 2%;
}
</style>