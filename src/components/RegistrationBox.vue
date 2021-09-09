<template>
  <v-card class="registration" flat>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <TextInput :ico="`mdi-email`" :text="`E-mail`"/>
            <TextInput :ico="`mdi-account-circle`" :text="`Nome Completo`"/>
            <TextInput :ico="`mdi-school`" :text="`Instituição de Ensino`"/>
            <div class="password">
                <PasswordInput :ico="`mdi-key-variant`"  :text="`Senha`"/>    
                <PasswordInput :ico="`mdi-key-variant`"  :text="`Confirme a senha`"/>
            </div>
            <CheckBox :text="`Li e Concordo com os Termos de Uso e Privacidade`"/>

            <NormalButton :color='`var(--yellowHibredu)`' :text="`Cadastrar`"/>
        </v-form>
    </v-card>
</template>

<script>
import NormalButton from '../components/buttons/NormalButton'
import TextInput from "../components/inputs/TextInput"
import PasswordInput from "../components/inputs/PasswordInput"
import CheckBox from "../components/inputs/CheckBox"

export default {
    name: 'RegistrationBox',
    
    components: {
        NormalButton, TextInput, PasswordInput, CheckBox
    },
}
</script>

<style scoped>
.registration {
    font-size: 2em;
    width: 35%;
    height: 50%;
    padding: 2%;
    font-family: 'Metropolis Regular';
}

.password {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

@media only screen and (max-width: 1024px){
    .registration {
        font-size: 2em;
        width: 80%;
        height: auto;
        padding: 3%;
        font-family: 'Metropolis Regular';
    }

   .password {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
}
</style>