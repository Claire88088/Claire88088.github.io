<script>
import { useFormationStore } from '../../assets/stores/FormationStore';
import FlipCard from '../cards/FlipCard.vue';

export default {
    components: {
    FlipCard
},
    data() {
        return {
            formations: useFormationStore().formations
        }
    }
}
</script>

<template>
    <section id="formation-section">
        <h2 class="section_title">Ma <strong class="title_strong">formation</strong></h2>
        <div class="section_content">
           <FlipCard v-for="(formation, index) in formations" :item="formation" :index="index" :itemType="'formation'"></FlipCard> 
        </div> 
    </section>
</template>