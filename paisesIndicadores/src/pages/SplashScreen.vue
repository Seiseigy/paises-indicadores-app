<template>
    <ion-content>
      <div class="container ion-text-center">
        <img src="../../public/assets/icon/SplashScreen-Utem.png">
      </div>
    </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
//import { onMounted } from 'vue';
//import { defineComponent } from 'vue';
import router from '../router/index';
export default {
  name: 'SplashScreen',
  components: {
    IonContent
  },
  mounted(){
    setTimeout(() => {
      router.push({ path: 'indicator-selector' })
      },3000)
  }
}
   
</script>

<style scoped>


@-webkit-keyframes rotate-center{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate-center{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}};
ion-content{
  --background: var(--ion-primary-contrast);
}
img{
  -webkit-animation:rotate-center .8s ease-in-out both;animation:rotate-center .8s ease-in-out both;
  height: 120px;
  margin-top:50%;
}
</style>
