<template>
  <v-card class="construction" flat solo>
      <v-icon size="300" color="var(--yellowHibredu)">
          mdi-account-hard-hat
      </v-icon>
      <h2>Em Construção</h2>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
.construction {
    font-family: "Metropolis Regular";
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 15em;
    width: 25em;
    font-size: 2em;
    color: var(--yellowHibredu);
}
</style>