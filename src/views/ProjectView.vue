<script>
import { useProjectsStore } from '/src/assets/stores/ProjectsStore.js'
import Techno from '/src/components/Techno.vue'
import Carousel from '/src/components/carousel/Carousel.vue' 

export default {
    components: {
        Carousel,
        Techno
    },
    props: {
        id: {
            type: String
        }
    },
    data() {
        return {
            projects: useProjectsStore().projects
        }
    },
    computed: {
        project() {
            return  this.projects.find(project => project.id == this.id)
        },
    }
}

</script>

<template>
    <div class="background--main page">
        <h1 class="title">{{ project.title }}</h1>
    

        <div class="content">
     
            <div class="presentation">
                <div v-if="project.links" class="presentation_links">
                    <a v-if="project.links.website" :href="project.links.website" target="_blank" class="presentation_link"><i class="fa fa-regular fa-globe"></i>Voir le site</a>
                    <a v-if="project.links.github" :href="project.links.github" target="_blank" class="presentation_link"><i class="fab fa-github"></i>Voir le dépôt</a>
                </div>
                
                <div class="presentation_subcontainer">
                    <div  v-if="project.goal" class="presentation_goal">
                        <h2 class="project_subtitle">Objectif</h2>
                        <p>{{ project.goal }}.</p>
                        <p v-if="project.description">{{ project.description }}.</p>
                        <p v-if="project.context">{{ project.context }} ({{ project.year }}).</p>
                        
                    </div>
                    <div v-if="project.technos" class="presentation_technos">
                        <h2 class="project_subtitle">Technologies utilisées</h2>
                        <div class="technos">
                            <Techno class="techno" v-for="techno in project.technos" :techno="techno"></Techno>
                        </div>
                    </div>
                </div>
            </div>
         

            <div v-if="project.portfolio" class="carousel">
                <Carousel :slidesContent="project.portfolio" :projectId="id"></Carousel>
            </div>

            <div class="description">
                <div v-if="project.features" class="description_features">
                    <h2 class="project_subtitle">Fonctionnalités</h2>
                    <ul>
                        <li v-for="item in project.features">{{ item }}</li>
                    </ul>
                </div>

                <div v-if="project.skills" class="description_skills">
                    <h2 class="project_subtitle">Compétences</h2>
                    <ul>
                        <li v-for="skill in project.skills">{{ skill }}</li>
                    </ul>
                </div>
            </div>
            

            
        </div>
    </div>

  
</template>

<style scoped>
/* général */
ul li {
    padding: 5px 0px;
}

.project_subtitle {
    font-size: 1.4rem;    
    margin-bottom: 10px;
}

/*  */
.title {
    color: var(--light);
    margin: 20px 0px 80px 0px;
    text-align: center;
    font-weight: 100;
}

.content {
    width: 90%;
    max-width: 1500px;
    margin: 0px auto;
}

/* présentation */
.presentation {
    /* border: solid 1px red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: var(--main-marge);
}

/* links */
.presentation_links {
    margin-bottom: var(--main-marge);
}

.presentation_link {
    margin-right: 30px;
}

i {
    margin-right: 8px;
}


.presentation_subcontainer {
    display: flex;
}

/* goal */
.presentation_goal {
    flex: 2;
    margin-bottom: var(--marge);
}

.presentation_goal p {
    margin-bottom: 10px;
    line-height: 1.5em;
}


/* technos */
.presentation_technos {
    margin-left: 50px;
}

.presentation_technos {
    max-width: 50%;
    flex: 1;
}

.technos {
    display: flex;
    flex-wrap: wrap;
}

.technos .techno {
    max-height: 50px;
    margin-top: 0;
}

.technos .techno:first-of-type {
    margin-left: 0;
}

.technos .techno:hover {
    transform: none;
}

/* carousel */
.carousel {
    margin-bottom: var(--main-marge);
}

/* description */
.description {
    display: flex;
    justify-content: space-between;
}

.description_features {
    margin-right: 60px;
    flex: 1;
}

.description_skills {
    flex: 1;
}

@media (max-width: 900px) {
    .presentation_subcontainer {
        display: block;
    }

    .presentation_technos {
        margin-top: 30px;
        margin-left: 0px;
        max-width: 100%;
    }

    .technos {
        margin-top: 20px;
        /* justify-content: flex-start; */
    }

    .description {
        display: block;
    }

    .description_features {
        margin-left: 0px;
        margin-bottom: var(--main-marge);
        width: 100%;
    }

    .description_skills {
        width: 100%;
    }
}
</style>