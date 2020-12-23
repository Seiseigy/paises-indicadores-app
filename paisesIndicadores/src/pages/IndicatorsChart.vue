<template>

<ion-page>
  <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
        <ion-back-button href="/indicator-selector">Atrás</ion-back-button>
        </ion-buttons>
        <ion-title>Gráfico</ion-title>
      </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-item v-for="option in userInput" v-bind:key="option"> {{option}}</ion-item>
  </ion-content>
</ion-page>
</template>

<script>
import { IonPage, IonHeader, IonTitle, IonContent } from "@ionic/vue";

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
      firstCountryReq: {
        countryCode: this.$store.state.userInput.firstCountrySelected,
        endYear: Number(this.$store.state.userInput.secondYearSelected),
        indicatorCode: this.$store.state.userInput.indicatorSelected,
        startYear: Number(this.$store.state.userInput.firstYearSelected),
      },
        secondCountryReq: {
        countryCode: this.$store.state.userInput.secondCountrySelected,
        endYear: Number(this.$store.state.userInput.secondYearSelected),
        indicatorCode: this.$store.state.userInput.indicatorSelected,
        startYear: Number(this.$store.state.userInput.firstYearSelected),
      },
        headers: {
        "X-API-APP": 'bravo',
        "X-API-KEY": 'ede6842e-d16c-4dbf-a7a0-c3856f0140f8'
      }, 
      firstCountryData: [],
    }
  },
  async mounted(){
    // Se realiza la conexión con Axios. Recordar que es una promesa
    const url = 'https://api.sebastian.cl/cpyd/api/v1/indicators/info';

    const res_first_country = await axios.post(url, this.firstCountryReq, {
      headers: {
        "X-API-APP": 'bravo',
        "X-API-KEY": 'ede6842e-d16c-4dbf-a7a0-c3856f0140f8'
      }
    })
    const res_second_country = await axios.post(url, this.secondCountryReq, {
      headers: {
        "X-API-APP": 'bravo',
        "X-API-KEY": 'ede6842e-d16c-4dbf-a7a0-c3856f0140f8'
      }
    })
    console.log(res_first_country);
    console.log(res_second_country);

  },
  computed: {
    userInput() {
      console.log(this.$store.getters.userInput);
      return this.$store.getters.userInput;
    }
  }
  
}

</script>