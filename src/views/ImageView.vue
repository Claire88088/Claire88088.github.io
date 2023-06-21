<script>
import { useProjectsStore } from '/src/assets/stores/ProjectsStore.js'

export default {
   props: {
      //   image: {
      //       type: String
      //   },
      //   legend: {
      //    type: String
      //   }

      // on ne passe que l'id en paramètre et on va chercher les données au niveau du store pour éviter les failles XSS
      id: {
         type: String
      },
      projectId: {
         type: String
      }
   },
   data() {
      return {
         projects: useProjectsStore().projects
      }
   },
   computed: {
      imageData() {
         let portfolio = this.projects.find(project => project.id == this.projectId).portfolio
         return portfolio.find(imageData => imageData.id == this.id)
      }

   }
}

</script>

<template>
   <div class="page">
      <h1 v-if="imageData.legend" class="title">{{ imageData.legend }}</h1>
      <div class="content">
         <img :src="imageData.image" :alt="imageData.legend">
      </div>
      
   </div>
</template>


<style scoped>
.title {
    color: var(--light);
    font-size: 1.8rem;
    margin: 50px 0px 50px 0px;
    text-align: center;
    font-weight: 100;
}

.content {
    width: 90%;
    max-width: 1500px;
    margin: 0px auto;
}

img {
   width: 100%;
}
</style>