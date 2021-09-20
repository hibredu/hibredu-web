<template>
  <div class="file-input">
    <v-card
      @drop.prevent="onDrop($event)"
      @dragover.prevent="dragover = true"
      @dragenter.prevent="dragover = true"
      @dragleave.prevent="dragover = false"
      :class="{ 'var(--yellowHibredu) lighten-2': dragover }"
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
            <span class="marked">.xlsx</span>
          </p>
          <p>
            Ou clique
            <label
              class="marked"
              for="uploadedFile"
              name="uploadedFile"
              value="uploadedFile"
              >aqui</label
            >
            <input
              name="uploadedFile"
              value="uploadedFile"
              id="uploadedFile"
              type="file"
              @change="onSelected($event)"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            para selecionar um arquivo
          </p>
        </v-row>
        <v-virtual-scroll
          v-if="uploadedFile.length > 0"
          :items="uploadedFile"
          height="150"
          item-height="100"
          :color="`var(--yellowHibredu)`"
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
                <v-btn @click="removeFile()" icon>
                  <v-icon :color="`var(--yellowHibredu)`">
                    mdi-close-circle
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </v-card-text>
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
      uploadedFile: [],
    };
  },
  methods: {
    removeFile() {
      this.uploadedFile = [];
    },
    onDrop(e) {
      this.dragover = false;

      if (this.uploadedFile.length > 0) this.uploadedFile = [];

      if (!this.multiple && e.dataTransfer.files.length > 1) {
        console.log("Somente um arquivo por vez");
      } else {
        this.uploadedFile.push(e.dataTransfer.files[0]);

        this.validateFile(this.uploadedFile);
      }
    },
    onSelected(e) {
      if (this.uploadedFile.length === 0 || this.uploadedFile.length > 1) this.uploadedFile = [];
      
      this.uploadedFile.push(e.target.files[0]);

      this.$emit("filesUploaded", this.uploadedFile);
    },
    validateFile(file) {
      let name = file[0].name;
      let extension = name.split(".").pop();
      if (extension === "xlsx") {
        this.$emit("filesUploaded", file);
      } else {
        this.uploadedFile = [];
        console.log("Extensão não permitida");
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
  width: 100%;
}

.marked {
  font-weight: bold;
  color: var(--yellowHibredu);
}

p {
  font-size: 20px;
  color: var(--grayHibredu);
}

input[type="file"] {
  display: none;
}

label {
  color: var(--yellowHibredu);
  cursor: pointer;
}
</style>