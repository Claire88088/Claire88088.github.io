<script>
import CardWithTitle from '../cards/CardWithTitle.vue'
import { useProjectsStore } from '../../assets/stores/ProjectsStore'


export default {
    components: {
        CardWithTitle
    },
    data() {
        return {
            projects: useProjectsStore().projects
        }
    },
    computed: {
        mainProjects() {
            return this.projects.filter(project => project.isMain)
        },
        otherProjects() {
            return this.projects.filter(project => !project.isMain)
        }
    }
}
</script>

<template>
    <section id="projets-section">
        <h2 class="section_title">Mes projets principaux</h2>
        <div class="section_content flex">
            <CardWithTitle v-for="(project, index) in mainProjects" :content="project" :index="index" class="card-with-title flex-item"></CardWithTitle>
        </div> 
    </section>
    
    <section>
        <h2 class="section_title">Mes autres projets</h2>
        <div class="section_content flex">
            <CardWithTitle v-for="(project, index) in otherProjects" :content="project" :index="index" class="card-with-title flex-item"></CardWithTitle>
        </div> 
    </section>
</template>

<style scoped>
.flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.flex-item {
    width: 33.33%;
    height: 340px;
}   

@media screen and (max-width: 1310px) {
    .flex-item {
        width: 50%;
    }
}

@media screen and (max-width: 900px) {
    .flex-item {
        width: 100%;
    }
}
</style>