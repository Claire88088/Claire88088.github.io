<script>
import { useTechnosStore } from '../../assets/stores/TechnosStore';
import Techno from '../Techno.vue'


export default {
    components: {
        Techno
    },
    data() {
        return {
           technos: useTechnosStore().technos
        }
    }
}
</script>

<template>
    <section id="technos-section">
        <h2 class="section_title">Mes technos</h2>
        <div class="technos">
            <Techno v-for="techno in technos" :techno="techno"></Techno>
        </div> 
    </section>
</template>

<style scoped>
.technos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>