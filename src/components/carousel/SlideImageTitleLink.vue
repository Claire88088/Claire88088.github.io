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
        currentSlide: {
            type: Number
        },
        projectId: {
            type: String
        }
    },
    methods: {
        isMiddleSlide() {
            return  this.index == this.currentSlide
        }
    }
}
    

</script>

<template>
    <RouterLink :to="{ name: 'image', params: { projectId: projectId, id: content.id }}">
        <div class="slide">
            <div class="slide_content">
                <img :src="content.image" :alt="content.legend">
                <h4 class="title">{{ content.legend }}</h4>
            </div>
        </div>
   </RouterLink>
</template>
 

<style scoped>
a:hover {
    opacity: 1;
}
.slide {
    padding: 10px;
    transition: all 700ms;
    display: flex;
}

.slide_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.slide_content img {
    width: 100%;
}

.title {
    font-weight: 100;
    text-align: center;
}
</style>