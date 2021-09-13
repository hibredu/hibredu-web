<template>
  <v-card class="info-card" flat>
    <label class="card-title">{{ title }}</label>
    <div class="content">
      <IconNormalButton
        :icon="`mdi-google`"
        :color="`var(--yellowHibredu)`"
        :text="`Forms Google`"
      />
      <div class="space"></div>
      <IconNormalButton
        :icon="`mdi-microsoft-teams`"
        :color="`var(--yellowHibredu)`"
        :text="`Forms Microsoft`"
      />
      <div class="space"></div>
      <IconNormalButton
        :icon="`mdi-file`"
        :color="`var(--yellowHibredu)`"
        :text="`Outros`"
      />
    </div>
  </v-card>
</template>

<script>
import IconNormalButton from "../buttons/IconNormalButton";
export default {
  name: "ButtonCard",
  props: ["title"],
  components: {
    IconNormalButton,
  },
};
</script>

<style scoped>
.info-card {
  width: 20%;
  height: auto;
  padding: 2em;
  text-align: center;
  font-family: "Metropolis Regular";
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;
  width: 100%;
}

.card-title {
  font-size: 1.5em;
}

.space {
  height: 2em;
}

@media only screen and (max-width: 1024px) {
  .info-card {
    
    font-family: "Metropolis Regular";
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    height: auto;
    text-align: center;
  }

  .content {
    padding: 0em;
    width: 100%;
  }
}
</style>