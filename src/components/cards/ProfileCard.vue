<template>
  <v-card class="profile-card" flat>
    <div class="background-profile">
      <v-avatar size="10em">
        <img
          alt="Aluno"
          src="../../assets/images/template.jpeg"
        />
      </v-avatar>
    </div>
    <DefaultLoading class="infos" v-if="params.classroom === '' || params.classroom.length === 0"/>
    <div v-else class="infos">
      <div>
        <h2>{{ params.name }}</h2>
      </div>
      <div class="classroom">
        <h6>Turma</h6>
        <h4>{{ params.classroom }}</h4>
      </div>
      <div class="subjects">
        <h6>Matérias</h6>
        <h4>{{ params.subjects }}</h4>
      </div>
    </div>
  </v-card>
</template>

<script>
import DefaultLoading from "../../components/loading/DefaultLoading";

export default {
  name: "ProfileCard",
  props: [ "params" ],
  components: {
    DefaultLoading
  }
};
</script>

<style scoped>
.profile-card {
  height: auto;
  font-family: "Metropolis Regular";
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.background-profile {
  width: 100%;
  height: 10em;
  background-image: url(../../assets/images/bg-profile.png);
  background-position: center;
  background-size: cover;
}

.v-avatar {
  margin-top: 2em;
}

.infos {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
}

.name {
  text-align: center;
}

.classroom {
  text-align: left;
}

.subjects {
  text-align: left;
  margin-bottom: 2em;
  text-align: left !important;
  justify-content: space-around;
}

h6 {
  color: var(--grayHibredu)
}

@media only screen and (max-width: 1024px) {
  .profile-card {
    width: auto;
    height: auto;
    font-family: "Metropolis Regular";
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 1em;
  }
  .infos {
    height: 40%;
  }
}
</style>