<template>
  <v-card class="edit-profile" flat>
    <v-form ref="form" lazy-validation>
      <EmailInput
        @update:value="teacher.email = $event"
        ico="mdi-email"
        :label="this.teacher.email"
        type="text"
      />
      <TextInput
        @update:value="teacher.name = $event"
        ico="mdi-account-circle"
        :label="this.teacher.name"
        type="text"
      />
      <TextInput
        @update:value="teacher.phone = $event"
        ico="mdi-phone"
        :label="this.teacher.phone"
        type="text"
      />
      <div class="password">
        <PasswordInput
          @update:value="password = $event"
          ico="mdi-key-variant"
          label="Nova senha"
          type="password"
        />
        <PasswordInput
          @update:value="password2 = $event"
          ico="mdi-key-variant"
          label="Confirme a senha"
          type="password"
        />
      </div>
      <div class="button">
        <NormalButton
          @click.native="update"
          color="var(--yellowHibredu)"
          text="Salvar Alterações"
        />
      </div>
    </v-form>
  </v-card>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import NormalButton from "../buttons/NormalButton";
import TextInput from "../inputs/TextInput";
import EmailInput from "../inputs/EmailInput";
import PasswordInput from "../inputs/PasswordInput";
import { mapActions } from "vuex";

export default {
  name: "EditProfile",
  mixins: [globalMethods],
  components: {
    NormalButton,
    TextInput,
    EmailInput,
    PasswordInput,
  },
  data() {
    return {
      teacher: {
        email: "",
        name: "",
        phone: "",
      },
      password: localStorage.getItem("password"),
      password2: localStorage.getItem("password"),
    };
  },
  mounted() {
    this.getTeacher();
  },
  methods: {
    ...mapActions(["action_teacherById", "action_updateTeacher"]),
    getTeacher() {
      this.action_teacherById({
        teacherId: localStorage.getItem("teacher_id"),
      }).then((response) => {
        this.teacher.email = response.email;
        this.teacher.name = response.name;
        this.teacher.phone = response.phone;
      });
    },
    update() {
      this.action_updateTeacher({
        teacherId: localStorage.getItem("teacher_id"),
        email: this.teacher.email,
        name: this.teacher.name,
        phone: this.teacher.phone,
        password: this.password,
      })
        .then(() => {
          localStorage.setItem("teacher_name", this.teacher.name);
          this.$alert("Cadastro atualizado com sucesso");
          this.$router.go();
        })
        .catch(() => {
          this.$alert("Houve um erro durante a atualização. Tente novamente");
        });
    },
  },
};
</script>

<style scoped>
.edit-profile {
  font-size: 2em;
  width: 100%;
  height: auto;
  padding: 3%;
  font-family: "Metropolis Regular";
}

.password {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media only screen and (max-width: 1024px) {
  .edit-profile {
    font-size: 2em;
    width: 100%;
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