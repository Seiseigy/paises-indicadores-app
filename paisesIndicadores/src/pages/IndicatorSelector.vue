<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Indicadores</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item>
                <ion-label>Primer país</ion-label>
                <ion-select v-model="firstCountrySelected" 
                            @ionChange="firstCountrySelected= $event.target.value" 
                            v-on:click="updateCountriesList()">
                        <ion-select-option v-for="country in hiddenCountries"
                         v-bind:key="country.code" v-bind:value="country.name">
                         {{country.name}}
                        </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label>Segundo país</ion-label>
                <ion-select v-model="secondCountrySelected" 
                            @ionChange="secondCountrySelected= $event.target.value" 
                            v-on:click="updateCountriesList()">
                        <ion-select-option v-for="country in hiddenCountries" 
                        v-bind:key="country.code" v-bind:value="country.name">
                        {{country.name}}
                        </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label>Indicador</ion-label>
                <ion-select v-model="indicatorSelected" @ionChange="indicatorSelected= $event.target.value">
                        <ion-select-option v-for="indicator in indicators" 
                        v-bind:key="indicator[1]" v-bind:value="indicator[0]">
                        {{indicator[0]}}
                        </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label>Año de inicio</ion-label>
                <ion-select v-model="firstYearSelected" 
                @ionChange="firstYearSelected= $event.target.value" v-on:click="updateYearList('begin')">
                        <ion-select-option v-for="year in hiddenYears" 
                        v-bind:key="year" v-bind:value="year">
                        {{year}}
                        </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label>Año de término</ion-label>
                <ion-select v-model="secondYearSelected" 
                @ionChange="secondYearSelected= $event.target.value" v-on:click="updateYearList('end')">
                        <ion-select-option v-for="year in hiddenYears" 
                        v-bind:key="year" v-bind:value="year">
                        {{year}}
                        </ion-select-option>
                </ion-select>
            </ion-item>

            <span><br> Primer país: {{firstCountrySelected}} <br></span>
            <span><br> Segundo país: {{secondCountrySelected}}<br></span>
            <span><br> Indicador: {{indicatorSelected}}<br></span>
            <span><br> Año de inicio: {{firstYearSelected}}<br></span>
            <span><br> Año de término: {{secondYearSelected}}<br></span>
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
            indicators: [
                ['Producto Interno Bruto','PIB'],
                ['Tasa de desempleo anual','TDA'],
                ['Inflación','IFL'],
                ['Impuesto de Valor Añadido','IVA'],
                ["Presión Fiscal","PRF"],
                ["Salario Mínimo", "SMI"],
                [ "Tasa de cambio","TSC"],
                ["Doing Business Index", "DBI"],            
            ],
            firstCountrySelected: '',
            secondCountrySelected: '',
            indicatorSelected: '',
            firstYearSelected: '',
            secondYearSelected: '',
            hiddenCountries: [],
            years: [],
            hiddenYears: []
        }
    },
    async mounted(){
        const startYear = 1960;
        const endYear = 2020;

        // Se realiza la conexión con Axios. Recordar que es una promesa
        const url = 'https://api.sebastian.cl/cpyd/api/v1/countries/all';
        const res_countries = await axios.get(url, {
        headers: {
            'X-API-APP': 'bravo',
            'X-API-KEY': 'ede6842e-d16c-4dbf-a7a0-c3856f0140f8'
        }
        })
        this.countries = res_countries.data;

        // Se crea el arreglo de años
        const years = [];
        for(let i = startYear; i <= endYear; i++){
            years.push(i);
        }
        this.years = years;
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
        },
        updateYearList(state){
            this.hiddenYears = []
            if(state == 'begin'){
                this.years.forEach(element => {
                    if(this.secondYearSelected == '' || element < Number(this.secondYearSelected)){
                        this.hiddenYears.push(element);
                    }
                })
            }else{
                this.years.forEach(element => {
                    if(element > Number(this.firstYearSelected)){
                        this.hiddenYears.push(element);
                    }
                });
            }
        },
    }
   
}
</script>