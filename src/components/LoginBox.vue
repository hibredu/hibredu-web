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
import { mapActions } from "vuex";

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
    ...mapActions(["action_auth"]),
    login() {
      this.action_auth({email: this.email, password: this.password}).then(response => {
        if (response) {
          console.log(response)
        }
      })
    },
  },
};
</script>

<style scoped>
.login {
  font-size: 2em;
  width: 25%;
  height: auto;
  padding: 2%;
  font-family: "Metropolis Regular";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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