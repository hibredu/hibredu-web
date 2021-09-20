<template>
  <v-card class="info-card" flat>
    <label class="card-title">{{ title }}</label>
    <div class="content">
      <IconNormalButtonDisabled
        icon="mdi-google"
        text="Forms Google"
      />
      <IconNormalButton
        @click.native="go"
        icon="mdi-microsoft-teams"
        color="var(--yellowHibredu)"
        text="Microsoft Teams"
      />
      <IconNormalButtonDisabled
        icon="mdi-file"
        text="Outros"
      />
    </div>
  </v-card>
</template>

<script>
import IconNormalButton from "../buttons/IconNormalButton";
import IconNormalButtonDisabled from "../buttons/IconNormalButtonDisabled";

export default {
  name: "ButtonCard",
  props: ["title"],
  components: {
    IconNormalButton,
    IconNormalButtonDisabled
  },
  methods: {
    go() {
      this.$router.push({ name: "import_list" });
    },
  },
};
</script>

<style scoped>
.info-card {
  width: 25%;
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

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
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