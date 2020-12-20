<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Indicadores</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content></ion-content>
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
    methods: {

    }
   
}
</script>