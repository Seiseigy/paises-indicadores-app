<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Equipo Bravo</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
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
export default {
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,

    }
}
</script>