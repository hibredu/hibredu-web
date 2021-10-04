<template>
  <v-card class="hibredu-pencils-card" flat solo>
    <h3>Hibredu Rewards</h3>
    <br />
    <v-progress-linear
      color="var(--yellowHibredu)"
      height="20"
      background-color="var(--lightGrayHibredu)"
      :value="this.value / 10"
    >
      <template v-slot:default="{ value }">
        <strong>{{ value * 10 }}</strong>
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
import { mapActions } from 'vuex';

export default {
  name: "HibreduRewardsCard",
  data() {
    return {
      value: 0,
    };
  },
  mounted() {
    this.getHibreduPencils();
  },
  methods: {
    ...mapActions(["action_hibreduRewards"]),
    returnColor(value) {
      if (value < 50) {
        return "var(--yellowHibredu)";
      } else {
        return "var(--yellowHibredu)";
      }
    },
    getHibreduPencils() {
      this.action_hibreduRewards().then((response) => {
        this.value = response[0].point;
      });
    }
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