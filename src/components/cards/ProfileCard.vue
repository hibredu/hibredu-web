<template>
  <v-card class="profile-card" flat>
    <div class="background-profile">
      <v-avatar size="12em">
        <img
          alt="Aluno"
          src="https://vgensino.com.br/wp-content/uploads/2020/01/qual-a-diferenca-entre-aluno-e-estudante-768x512.jpg"
        />
      </v-avatar>
    </div>
    <div class="infos">
      <div>
        <h2>Camila Santana</h2>
      </div>
      <div class="classroom">
        <h6>Turma</h6>
        <h4>3A</h4>
      </div>
      <div class="subjects">
        <h6>Matérias</h6>
        <h4>Química, Física</h4>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
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