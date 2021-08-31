<template>
  <v-card class="register">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="nome_completo"
            :rules="nome_completoRules && [v => !!v || 'Item is required']"
            label="Nome_completo"
            required
            ></v-text-field>

            <v-text-field
            v-model="instituicao"
            :rules="instituicaoRules && [v => !!v || 'Item is required']"
            label="Instituicao"
            required
            ></v-text-field>

            <v-text-field
            v-model="senha"
            :rules="senhaRules && [v => !!v || 'Item is required']"
            label="Senha"
            required
            ></v-text-field>

            <v-text-field
            v-model="conf_Senha"
            :rules="conf_SenhaRules && [v => !!v || 'Item is required']"
            label="conf_Senha"
            required
            ></v-text-field>

            <v-checkbox
                v-model="checkbox"
                label="Li e Concordo com os Termos de Uso e Privacidade"
                required
            ></v-checkbox>

            <NormalButton/>
        </v-form>
    </v-card>
</template>

<script>
import NormalButton from '../components/Buttons/NormalButton.vue'

export default {
    name: 'RegisterBox',
    
    components: {
        NormalButton
    },
    data(){
        return{
            email: '',
            senha: ''
        }
    },
    methods:{
        
    }
}
</script>

<style>


</style>