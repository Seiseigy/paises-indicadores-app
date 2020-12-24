<template>

<ion-page>
  <ion-header>
      <!-- <ion-toolbar> -->
        <!-- <ion-buttons slot="start"> -->
        <!-- <ion-back-button href="/indicator-selector">Atrás</ion-back-button> -->
        <!-- </ion-buttons> -->

      <!-- </ion-toolbar> -->
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-item routerLink="/indicator-selector" id="back-arrow-box" v-on:click="redirectToSelector(), cleanInfo()" >
                <img style="width:50px; height:50px; background-color: transparent" src='../../public/assets/BackArrow.png' alt="Icono BackArrow" >
            </ion-item>
        </ion-buttons>
        <ion-title id="chart-title">
        {{this.$store.state.userInput.firstCountrySelected}} v/s {{this.$store.state.userInput.secondCountrySelected}}
        </ion-title>
      </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-card id="myBoxChart">
      <ion-header>
        <ion-title>
        {{this.$store.state.userInput.indicatorSelected}}
        </ion-title>
      </ion-header>
      <ion-card-content>
        <canvas id="myChart" width="400" height="400"></canvas>
      </ion-card-content>
    </ion-card>
  <ion-icon name="arrowBack"></ion-icon>
  </ion-content>
</ion-page>
</template>

<script>
var Chart = require('chart.js');
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonItem} from "@ionic/vue";
import router from '../router/index';

const axios = require('axios');

export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonItem
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
      secondCountryData: [],
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
    
    // Se tratan los datos para dejarla en el formato para Chart.js
    res_first_country.data.forEach(element => {
      const {
        year,
        value
      } = element;

      this.firstCountryData.push({year, total:value});
    });
    res_second_country.data.forEach(element => {
      const {
        year,
        value
      } = element;
      if(value!=0){
        this.secondCountryData.push({year, total:value});
      }
    });
    
    let ctx = document.getElementById('myChart');
    var firstCountryName = res_first_country.data[0].country.name;
    var secondCountryName = res_second_country.data[0].country.name;
    var labelsChart = this.getLabels(this.firstCountryData,this.secondCountryData);
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelsChart ,
        datasets: [
          {
            label: firstCountryName,
            data: this.firstCountryData.map(el => el.total),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },
        {
            label: secondCountryName,
            data: this.secondCountryData.map(el => el.total),
            backgroundColor: [
                'rgba(73, 41, 2552, 0.2)',
            ],
            borderColor: [
                'rgba(73, 41, 2552, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
      }
    });
    console.log(myChart);    
  },
  computed: {
    userInput() {
      return this.$store.getters.userInput;
    }
  },
  methods: {
    // Definir cuáles serán las dimensiones en años del gráfico
    getLabels(data_country1, data_country2){
      let startYear = 1960;
      let endYear = 2020;
      if(data_country1[0].year <= data_country2[0].year){
        startYear = data_country2[0].year;
      } else {
        startYear = data_country1[0].year;
      }
      if(data_country1[this.getLastIndex(data_country1)].year >= data_country2[this.getLastIndex(data_country2)].year){
       endYear = data_country2[this.getLastIndex(data_country2)].year;
      } else {
        endYear = data_country1[this.getLastIndex(data_country1)].year;
      }
      let myLabels = [];
      for(let i = startYear; i<=endYear; i++){
        myLabels.push(i);
      }
      return myLabels;
    },
    getLastIndex(array) {
      return array.length - 1;
    },
    reload() {
      console.log(this.$store.status.userInput);
      this.$store.status.userInput = {};
    },
    redirectToSelector(){
        router.push({ path: 'indicator-selector' });
    }
  }
}

</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }

  #back-arrow-box {
    background-color: transparent;
    --background: transparent;
  }

  #chart-title {
    padding-right: 28%;
  }
</style>