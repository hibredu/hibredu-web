<template>
  <v-card class="login" flat>
    <v-form ref="form" lazy-validation>
      <EmailInput
        @update:value="email = $event"
        ico="mdi-email"
        label="E-mail"
        type="text"
      />
      <PasswordInput
        @update:value="password = $event"
        ico="mdi-key-variant"
        label="Senha"
        type="password"
      />
      <div class="check-register">
        <CheckBox @click.native="remember = !remember" label="Lembrar login" />
        <div class="register" @click="redirectRegister()">Cadastre-se</div>
      </div>
      <NormalButton
        @click.native="validate"
        color="var(--yellowHibredu)"
        text="Login"
      />
    </v-form>
  </v-card>
</template>

<script>
import globalMethods from "../mixins/globalMethods";
import NormalButton from "../components/buttons/NormalButton";
import CheckBox from "../components/inputs/CheckBox";
import EmailInput from "../components/inputs/EmailInput";
import PasswordInput from "../components/inputs/PasswordInput";
import { mapActions } from "vuex";

export default {
  name: "LoginBox",
  mixins: [globalMethods],
  components: {
    NormalButton,
    CheckBox,
    PasswordInput,
    EmailInput,
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
    validate() {
      if (this.validateEmail(this.email) && this.password.length >= 8) {
        this.login();
      } else {
        this.$alert("Preencha corretamente os campos solicitados");
      }
    },
    login() {
      this.action_auth({ email: this.email, password: this.password }).then(
        (response) => {
          if (response.status === 200) {
            localStorage.setItem("access_token", response.data.token);
            localStorage.setItem("teacher_name", response.data.teacher.name);
            this.$router.push("home");
          }
        }
      );
    },
    redirectRegister() {
      this.$router.push("register");
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
  .check-register {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

.check-register {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

.register {
  width: 80%;
  color: var(--blueHibredu);
  font-size: 0.5em;
  text-align: right;
}

.register:hover {
  color: var(--yellowHibredu);
  cursor: pointer;
}
</style>