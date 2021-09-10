<template>
  <v-card class="registration" flat>
    <v-form ref="form" v-model="valid" lazy-validation>
      <TextInput @update:value="email = $event" :ico="`mdi-email`" :label="`E-mail`" :type="'text'"/>
      <TextInput @update:value="name = $event" :ico="`mdi-account-circle`" :label="`Nome Completo`" :type="'text'"/>
      <TextInput @update:value="educationalInstitution = $event" :ico="`mdi-school`" :label="`Instituição de Ensino`" :type="'text'"/>
      <div class="password">
        <PasswordInput @update:value="password = $event" :ico="`mdi-key-variant`" :label="`Senha`" :type="'password'"/>
        <PasswordInput @update:value="password2 = $event" :ico="`mdi-key-variant`" :label="`Confirme a senha`" :type="'password'"/>
      </div>
      <CheckBox @click.native="agree = !agree" :label="`Li e Concordo com os Termos de Uso e Privacidade`" />
      <NormalButton @click.native="register" :color="`var(--yellowHibredu)`" :text="`Cadastrar`" />
    </v-form>
  </v-card>
</template>

<script>
import NormalButton from "../components/buttons/NormalButton";
import TextInput from "../components/inputs/TextInput";
import PasswordInput from "../components/inputs/PasswordInput";
import CheckBox from "../components/inputs/CheckBox";

export default {
  name: "RegistrationBox",

  components: {
    NormalButton,
    TextInput,
    PasswordInput,
    CheckBox,
  },
  data() {
    return {
      email: '',
      name: '',
      educationalInstitution: '',
      password: '',
      password2: '',
      agree: false
    }
  },
  methods: {
    register() {
      console.log('Email: ' + this.email)
      console.log('Nome Completo: ' + this.name)
      console.log('Instituição de Ensino: ' + this.educationalInstitution)
      console.log('Senha 1: ' + this.password)
      console.log('Senha 2: ' + this.password2)
      console.log('Li e Concordo: ' + this.agree)
    }
  }
};
</script>

<style scoped>
.registration {
  font-size: 2em;
  width: 35%;
  height: auto;
  padding: 2%;
  font-family: "Metropolis Regular";
}

.password {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

@media only screen and (max-width: 1024px) {
  .registration {
    font-size: 2em;
    width: 80%;
    height: auto;
    padding: 3%;
    font-family: "Metropolis Regular";
  }

  .password {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>