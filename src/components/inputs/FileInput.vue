<template>
  <div class="file-input">
    <v-card
      @drop.prevent="onDrop($event)"
      @dragover.prevent="dragover = true"
      @dragenter.prevent="dragover = true"
      @dragleave.prevent="dragover = false"
      :class="{ 'grey lighten-2': dragover }"
      flat
    >
      <v-card-text>
        <v-row class="d-flex flex-column" dense align="center" justify="center">
          <v-icon
            :color="`var(--yellowHibredu)`"
            :class="[dragover ? 'mt-2, mb-6' : 'mt-5']"
            size="60"
          >
            mdi-paperclip
          </v-icon>
          <p>
            Arraste e solte aqui um arquivo
            <span class="destaque">.csv</span> ou
            <span class="destaque">.xslx</span>
          </p>
          <p>Ou clique aqui para selecionar um arquivo do seu computador</p>
        </v-row>
        <v-virtual-scroll
          v-if="uploadedFiles.length > 0"
          :items="uploadedFiles"
          height="150"
          item-height="50"
        >
          <template v-slot:default="{ item }">
            <v-list-item :key="item.name">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.name }}
                  <span class="ml-3 text--secondary">
                    {{ item.size }} bytes</span
                  >
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn @click.stop="removeFile(item.name)" icon>
                  <v-icon> mdi-close-circle </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="submit" color="`var(--yellowHibredu)`">
          <v-icon id="upload-button">mdi-upload</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FileInput",
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dragover: false,
      uploadedFiles: [],
    };
  },
  methods: {
    closeDialog() {
      this.uploadedFiles = [];
      this.$emit("update:dialog", false);
    },
    removeFile(fileName) {
      const index = this.uploadedFiles.findIndex(
        (file) => file.name === fileName
      );
      if (index > -1) this.uploadedFiles.splice(index, 1);
    },
    onDrop(e) {
      this.dragover = false;

      if (this.uploadedFiles.length > 0) this.uploadedFiles = [];

      if (!this.multiple && e.dataTransfer.files.length > 1) {
        console.log("Somente um arquivo por vez");
      } else
        e.dataTransfer.files.forEach((element) =>
          this.uploadedFiles.push(element)
        );
    },
    submit() {
      if (!this.uploadedFiles.length > 0) {
        console.log("Sem arquivos");
      } else {
        this.$emit("filesUploaded", this.uploadedFiles);
      }
    },
  },
};
</script>

<style scoped>
.file-input {
  font-family: "Metropolis Regular";
}

.v-card {
  border: dashed 1px var(--grayHibredu);
  width: 50%;
}
.destaque {
  font-weight: bold;
  color: var(--yellowHibredu);
}

p {
  font-size: 20px;
  color: var(--grayHibredu);
}
</style>