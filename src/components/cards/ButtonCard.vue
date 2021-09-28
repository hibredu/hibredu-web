<template>
  <v-card class="info-card" flat>
    <label class="card-title">{{ title }}</label>
    <div class="content">
      <IconNormalButton
        @click.native="go"
        :icon="buttons[0].ico"
        color="var(--yellowHibredu)"
        colorText="var(--whiteHibredu)"
        :text="buttons[0].title"
      />
      <IconNormalButtonDisabled
        :icon="buttons[1].ico"
        :text="buttons[1].title"
      />
      <IconNormalButtonDisabled
        :icon="buttons[2].ico"
        :text="buttons[2].title"
      />
    </div>
  </v-card>
</template>

<script>
import IconNormalButton from "../buttons/IconNormalButton";
import IconNormalButtonDisabled from "../buttons/IconNormalButtonDisabled";

export default {
  name: "ButtonCard",
  props: ["title", "buttons"],
  components: {
    IconNormalButton,
    IconNormalButtonDisabled
  },
  methods: {
    go() {
      if(this.title.includes('Presença')) {
        this.$router.push({ name: "import_attendance" });
      } else {
        this.$router.push({ name: "import_activity" });
      }
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