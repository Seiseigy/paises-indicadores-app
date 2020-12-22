<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Indicadores</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <!-- <select v-model="firstCountrySelected"> -->
                <!-- <option v-for="country in countries" v-bind:key="country.code" v-bind:value="country.name">{{country.name}}</option> -->
            <!-- </select> -->
            <!-- <span>Seleccionado: {{firstCountrySelected}}</span> -->
            <ion-item>
                <ion-label>Primer país</ion-label>
                <ion-select v-model="firstCountrySelected" @ionChange="firstCountrySelected= $event.target.value" v-on:click="updateCountriesList()">
                        <ion-select-option v-for="country in hiddenCountries" v-bind:key="country.code" v-bind:value="country.name">{{country.name}}</ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label>Segundo país</ion-label>
                <ion-select v-model="firstCountrySelected" @ionChange="firstCountrySelected= $event.target.value" v-on:click="updateCountriesList()">
                        <ion-select-option v-for="country in hiddenCountries" v-bind:key="country.code" v-bind:value="country.name">{{country.name}}</ion-select-option>
                </ion-select>
            </ion-item>
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
            indicators: [],
            firstCountrySelected: '',
            secondCountrySelected: '',
            hiddenCountries: []
        }
    },
    async mounted(){
        const url = 'https://api.sebastian.cl/cpyd/api/v1/countries/all';
        const res_countries = await axios.get(url, {
        headers: {
            'X-API-APP': 'bravo',
            'X-API-KEY': 'ede6842e-d16c-4dbf-a7a0-c3856f0140f8'
        }
        })
        this.countries = res_countries.data;
    },
    computed: {

    },
    methods: {
        updateCountriesList(){
            this.hiddenCountries = []
            this.countries.forEach(element => {
                if(element.name != this.firstCountrySelected && element.name != this.secondCountrySelected){
                    this.hiddenCountries.push(element);
                }
            });
        }
    }
   
}
</script>