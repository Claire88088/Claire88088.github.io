<script>
import Techno from '../Techno.vue'
import { RouterLink } from 'vue-router'

export default {
    components: {
        Techno
    },
    props: {
        content: {
            type: Object
        },
        index: {
            type: Number
        },
    },
}
</script>

<template>
    <RouterLink :to="{ name: 'project', params: { id: content.id }}" class="card">
        <div class="card_content" :class="[ index % 2 === 0 ? 'light' : 'dark' ]">
            <h3 class="card_title">{{ content.title }}</h3>
            <div v-if="content.image" class="card_image_container">
                <img class="card_image" :src="content.image" alt="image du projet"/>
            </div>
            <div class="card_technos">
                <Techno class="slide_techno" v-for="techno in content.technos" :techno="techno"></Techno>
            </div>
          
        </div>
    </RouterLink>
 </template>
 

<style scoped>
.card {
    padding: 10px;
    transition: all 700ms;    
}

.card_content {
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.card_image_container {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.card_image {
    width: 100%;
}

.card_title {
    text-align: center;
    padding: 10px 0px;
    font-weight: 600;

    font-weight: 100;
    font-size: 26px;
}

/* technos */
.card_technos {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
}

.card_technos .techno {
    max-height: 35px;
    margin: 5px;
}

.card_technos .techno:hover {
    transform: none;
}


/* hover */
.card:hover {
    transform: scale(1.2);
    opacity: 1;
}
</style>