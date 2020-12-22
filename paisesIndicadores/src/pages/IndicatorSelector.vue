<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Indicadores</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <select v-model="firstCountrySelected">
                <option v-for="country in countries" v-bind:key="country.code" v-bind:value="country.name">{{country.name}}</option>
            </select>
            <span>Seleccionado: {{firstCountrySelected}}</span>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonTitle, IonContent} from "@ionic/vue";
const axios = require('axios');
export default {
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent 
    },
    data () {
        return {
            countries: [],
            countries_names: [],
            indicators: [],
            firstCountrySelected: ''
        }
    },
    async mounted(){
        const res_countries = await axios.get('https://api.sebastian.cl/cpyd/api/v1/countries/all', {
        headers: {
            'X-API-APP': 'bravo',
            'X-API-KEY': 'ede6842e-d16c-4dbf-a7a0-c3856f0140f8'
        }
        })
        this.countries = res_countries.data;
        this.countries.forEach(element => this.countries_names.push(element.name));
    },
    computed: {
        options(){
            return this.countries_names;
        }
    }
   
}
</script>