<template>

<ion-page>
  <ion-header>
      <ion-toolbar>
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
export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent
  },
  computed: {
    userInput() {
      console.log(this.$store.getters.userInput);
      return this.$store.getters.userInput;
    }
  }
  
}

</script>