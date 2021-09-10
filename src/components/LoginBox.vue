<template>
  <v-card class="login" flat>
    <v-form ref="form" lazy-validation>
      <TextInput
        @update:value="email = $event"
        :ico="`mdi-email`"
        :label="`E-mail`"
        :type="'text'"
      />
      <PasswordInput
        @update:value="password = $event"
        :ico="`mdi-key-variant`"
        :label="`Senha`"
        :type="'password'"
      />
      <CheckBox @click.native="remember = !remember" :label="`Lembrar login`" />
      <NormalButton
        @click.native="login"
        :color="`var(--yellowHibredu)`"
        :text="`Login`"
      />
    </v-form>
  </v-card>
</template>

<script>
import NormalButton from "../components/buttons/NormalButton";
import CheckBox from "../components/inputs/CheckBox";
import TextInput from "../components/inputs/TextInput";
import PasswordInput from "../components/inputs/PasswordInput";
//import axios from 'axios'

export default {
  name: "LoginBox",

  components: {
    NormalButton,
    CheckBox,
    PasswordInput,
    TextInput,
  },
  data() {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    async login() {
      console.log(
        "Email: " +
          this.email +
          " Senha: " +
          this.password +
          " Remember: " +
          this.remember
      );
      // const response = await axios.post('login', {
      //     email: this.email,
      //     senha: this.password
      // });
      // localStorage.setItem('token', response.data.token);
    },
  },
};
</script>

<style scoped>
.login {
  font-size: 2em;
  width: 25%;
  height: 35%;
  padding: 2%;
  font-family: "Metropolis Regular";
}

@media only screen and (max-width: 1024px) {
  .login {
    font-size: 2em;
    width: 80%;
    height: auto;
    padding: 3%;
    font-family: "Metropolis Regular";
  }
}
</style>