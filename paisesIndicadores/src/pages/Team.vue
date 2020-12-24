<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Equipo Bravo</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-fab vertical="bottom" horizontal="start" v-on:click="redirectToSelector()" >
                <ion-fab-button id= "Tbutton" >
                    <img src="../../public/assets/icon/grafico_icon.png" alt="">
                </ion-fab-button>
            </ion-fab>
            <!-- <ion-item>
                <img src="@icon/bravo-icon.png" alt="Icono Bravo" class="BravoIcon">
            </ion-item> -->
            <ion-card class="BravoIconBox">
                <ion-card-content>
                    <a href="https://github.com/Seiseigy/paises-indicadores-app">
                        <img src="../../public/assets/icon/bravo-icon.png" alt="Icono Bravo" >
                    </a>
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Kevin Peralta</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Le gusta jugar
                    <br>
                    <a href="https://github.com/soge99/">Repositorio GitHub</a>
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Roberto Albornoz</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Le gusta jugar
                    <br>
                    <a href="https://github.com/Riserek">Repositorio GitHub</a>
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Sebastian Santelices</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Le gusta jugar
                    <br>
                    <a href="https://github.com/seiseigy">Repositorio GitHub</a>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>

</template>
<script>
import { IonPage, IonHeader, IonTitle, IonContent} from "@ionic/vue";
import router from '../router/index';
export default {
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,

    },
    methods:{
        redirectToSelector(){
        router.push({ path: 'indicator-selector' });
    }
    }
    
}
</script>

