<template>
  <v-card class="registration" flat>
    <v-form ref="form" lazy-validation>
      <TextInput
        @update:value="email = $event"
        :ico="`mdi-email`"
        :label="`E-mail`"
        :type="'text'"
      />
      <TextInput
        @update:value="name = $event"
        :ico="`mdi-account-circle`"
        :label="`Nome Completo`"
        :type="'text'"
      />
      <TextInput
        @update:value="phone = $event"
        :ico="`mdi-phone`"
        :label="`Telefone`"
        :type="'text'"
      />
      <TextInput
        @update:value="educationalInstitution = $event"
        :ico="`mdi-school`"
        :label="`Instituição de Ensino`"
        :type="'text'"
      />
      <TextInput
        @update:value="classrooms = $event"
        :ico="`mdi-account-group`"
        :label="`Turmas`"
        :type="'text'"
      />
      <div class="password">
        <PasswordInput
          @update:value="password = $event"
          :ico="`mdi-key-variant`"
          :label="`Senha`"
          :type="'password'"
        />
        <PasswordInput
          @update:value="password2 = $event"
          :ico="`mdi-key-variant`"
          :label="`Confirme a senha`"
          :type="'password'"
        />
      </div>
      <CheckBox
        @click.native="agree = !agree"
        :label="`Li e Concordo com os Termos de Uso e Privacidade`"
      />
      <NormalButton
        @click.native="register"
        :color="`var(--yellowHibredu)`"
        :text="`Cadastrar`"
      />
    </v-form>
  </v-card>
</template>

<script>
import NormalButton from "../components/buttons/NormalButton";
import TextInput from "../components/inputs/TextInput";
import PasswordInput from "../components/inputs/PasswordInput";
import CheckBox from "../components/inputs/CheckBox";
import { mapActions } from "vuex";

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
      email: "",
      name: "",
      phone: "",
      educationalInstitution: "",
      classrooms: "",
      password: "",
      password2: "",
      agree: false,
    };
  },
  methods: {
    ...mapActions(["action_createTeacher"]),
    register() {
      this.action_createTeacher({
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        school_id: 1,
        classrooms: [
          {
            id: 1,
            name: "3ºA",
          },
        ],
      }).then((response) => {
        if (response) {
          console.log(response);
        }
      });
    },
  },
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