<script>
import { RouterView } from 'vue-router'

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import GotopButton from './components/GotopButton.vue';

export default {
    components: {
    HeaderComponent,
    FooterComponent,
    GotopButton
},
}
</script>

<template>
  <HeaderComponent class="sticky"></HeaderComponent>

  <RouterView />

  <GotopButton></GotopButton>
  <FooterComponent></FooterComponent>
</template>

<style scoped>
.sticky {
    position: sticky;
    top: 0;
    z-index: 2;
}
</style>