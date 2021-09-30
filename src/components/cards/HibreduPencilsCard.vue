<template>
  <v-card class="hibredu-pencils-card" flat solo>
    <h3>Hibredu Pencils</h3>
    <br />
    <v-progress-linear
      color="var(--yellowHibredu)"
      height="20"
      background-color="var(--lightGrayHibredu)"
      :value="this.value"
    >
      <template v-slot:default="{ value }">
        <strong>{{ value }}</strong>
      </template>
    </v-progress-linear>
    <div class="stars">
      <div class="init-stars">
        <v-icon :color="returnColor(this.value)"> mdi-star-circle </v-icon>
      </div>
      <div class="end-stars">
        <v-icon color="var(--grayHibredu)"> mdi-star-circle </v-icon>
        <v-icon color="var(--grayHibredu)"> mdi-star-circle </v-icon>
        <v-icon color="var(--grayHibredu)"> mdi-star-circle </v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "HibreduPencilsCard",
  data() {
    return {
      value: 50,
    };
  },
  methods: {
    returnColor(value) {
      if (value < 50) {
        return "var(--yellowHibredu)";
      } else {
        return "var(--yellowHibredu)";
      }
    },
  },
};
</script>

<style scoped>
.hibredu-pencils-card {
  width: 100%;
  height: auto;
  padding: 2em;
  font-family: "Metropolis Regular";
}

.stars {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.end-stars {
  width: 3em;
  margin-top: 1em;
  text-align: center;
}
</style>