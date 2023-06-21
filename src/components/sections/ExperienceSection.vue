<script>
import { useExperienceStore } from '../../assets/stores/ExperienceStore';
import FlipCard from '../cards/FlipCard.vue';

export default {
    data() {
        return {
            experiences: useExperienceStore().experiences
        }
    },
    components: {
        FlipCard
    }
}
</script>

<template>
    <section id="experience-section">
        <h2 class="section_title">Mon experience</h2>
        <div class="section_content">
            <FlipCard v-for="(experience, index) in experiences" :item="experience" :index="index" :itemType="'experience'"></FlipCard> 
        </div> 
    </section>
</template>