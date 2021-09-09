<template>
  <v-card class="login" flat>
        <v-form
            @submit.prevent="handleSubmit()"
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <TextInput :ico="`mdi-email`" :text="`E-mail`"/>
            <PasswordInput :ico="`mdi-key-variant`" :text="`Senha`"/>    
            <CheckBox :text="`Lembrar login`"/>

            <NormalButton :color='`var(--yellowHibredu)`' :text="`Login`"/>
        </v-form>
    </v-card>
</template>

<script>
import NormalButton from '../components/buttons/NormalButton'
import CheckBox from '../components/inputs/CheckBox'
import TextInput from '../components/inputs/TextInput'
import PasswordInput from '../components/inputs/PasswordInput'
import axios from 'axios'

export default {
    name: 'LoginBox', 
    
    components: {
        NormalButton, CheckBox, PasswordInput, TextInput
    },
    data(){
        return{
            email: '',
            senha: ''
        }
    },
    methods:{
        async handleSubmit(){
            const response = await axios.post('login', {
                email: this.email, 
                senha: this.senha
            });
            localStorage.setItem('token', response.data.token);
        }
    }
}
</script>

<style scoped>
.login {
    font-size: 2em;
    width: 25%;
    height: 35%;
    padding: 2%;
    font-family: 'Metropolis Regular';
}

@media only screen and (max-width: 1024px){
    .login {
        font-size: 2em;
        width: 80%;
        height: auto;
        padding: 3%;
        font-family: 'Metropolis Regular';
    }
}

</style>