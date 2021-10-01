<template>
  <v-card class="registration" flat>
    <v-form ref="form" lazy-validation>
      <EmailInput
        @update:value="email = $event;validateFields()"
        ico="mdi-email"
        label="E-mail"
        type="text"
      />
      <TextInput
        @update:value="name = $event;validateFields()"
        ico="mdi-account-circle"
        label="Nome Completo"
        type="text"
      />
      <TextInput
        @update:value="phone = $event;validateFields()"
        ico="mdi-phone"
        label="Telefone"
        type="text"
      />
      <SelectInput
        @update:value="
          selectedEducationalInstitution = $event;
          getClassroomsBySchoolId();
          validateFields()
        "
        :items="this.educationalInstitution"
        ico="mdi-school"
        label="Instituição de Ensino"
        type="text"
      />
      <SelectCheckBoxInput
        @update:value="formatClassrooms2Register($event);validateFields()"
        v-if="
          this.selectedEducationalInstitution != null && this.classrooms != null
        "
        :items="this.classrooms"
        ico="mdi-account-group"
        label="Turmas"
        type="text"
      />
      <SelectCheckBoxInput
        @update:value="formatSubjects2Register($event);validateFields()"
        :items="this.subjects"
        ico="mdi-bookshelf"
        label="Matérias Lecionadas"
        type="text"
      />
      <div class="password">
        <PasswordInput
          @update:value="password = $event;validateFields()"
          ico="mdi-key-variant"
          label="Senha"
          type="'password'"
        />
        <PasswordInput
          @update:value="password2 = $event;validateFields()"
          ico="mdi-key-variant"
          label="Confirme a senha"
          type="'password'"
        />
      </div>
      <CheckBox
        @click.native="agree = !agree;validateFields()"
        label="Li e Concordo com os Termos de Uso e Privacidade"
      />
      <NormalButton
        :buttonClass="{ inactive: this.inactive === true }"
        @click.native="register"
        color="var(--yellowHibredu)"
        text="Cadastrar"
      />
    </v-form>
  </v-card>
</template>

<script>
import globalMethods from "../mixins/globalMethods";
import NormalButton from "../components/buttons/NormalButton";
import TextInput from "../components/inputs/TextInput";
import EmailInput from "../components/inputs/EmailInput";
import SelectInput from "../components/inputs/SelectInput";
import SelectCheckBoxInput from "../components/inputs/SelectCheckBoxInput";
import PasswordInput from "../components/inputs/PasswordInput";
import CheckBox from "../components/inputs/CheckBox";
import { mapActions } from "vuex";

export default {
  name: "RegistrationBox",
  mixins: [globalMethods],
  components: {
    NormalButton,
    TextInput,
    EmailInput,
    SelectInput,
    PasswordInput,
    CheckBox,
    SelectCheckBoxInput,
  },
  data() {
    return {
      inactive: true,
      email: "",
      name: "",
      phone: "",
      educationalInstitution: [],
      selectedEducationalInstitution: null,
      classrooms: null,
      classroomsFormated: [],
      selectedClassrooms: "",
      selectedSubjects: "",
      password: "",
      password2: "",
      agree: false,
      subjects: []
    };
  },
  mounted() {
    this.getSchools();
    this.getSubjects();
  },
  methods: {
    ...mapActions([
      "action_createTeacher",
      "action_school",
      "action_classroomBySchoolId",
      "action_schoolSubjects"
    ]),
    register() {
      if (this.password === this.password2) {
        this.action_createTeacher({
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          school_id: this.selectedEducationalInstitution,
          subjects: this.selectedSubjects,
          classrooms: this.selectedClassrooms,
        })
          .then(() => {
            this.$alert("Cadastro realizado com sucesso");
            this.$router.back();
          })
          .catch(() => {
            this.$alert("Houve um erro durante o cadastro. Tente novamente");
          });
      } else {
        this.$alert("As senhas não coincidem");
      }
    },
    getSchools() {
      this.action_school().then((response) => {
        this.educationalInstitution = response;
      });
    },
    getSubjects() {
      this.action_schoolSubjects().then((response) => {
        this.subjects = response;
      });
    },
    getClassroomsBySchoolId() {
      this.action_classroomBySchoolId({
        schoolId: this.selectedEducationalInstitution,
      }).then((response) => {
        this.classrooms = response;
      });
    },
    formatClassrooms2Register(data) {
      this.selectedClassrooms = [];
      for (let i = 0; i < data.length; i++) {
        this.selectedClassrooms.push({ id: data[i] });
      }
    },
    formatSubjects2Register(data) {
      this.selectedSubjects = [];
      for (let i = 0; i < data.length; i++) {
        this.selectedSubjects.push({ id: data[i] });
      }
    },
    validateFields() {
      if (
        this.validateEmail(this.email) &&
        this.password.length >= 8 &&
        this.name != null &&
        this.phone != "" &&
        this.selectedEducationalInstitution != null &&
        this.selectedClassrooms != "" &&
        this.selectedSubjects != "" &&
        this.agree != false
      ) {
        this.inactive = false;
      } else {
        this.inactive = true;
      }
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