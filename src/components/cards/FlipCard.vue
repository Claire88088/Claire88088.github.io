<script>
import ListCard from './ListCard.vue'
import TagsCard from './TagsCard.vue'

export default {
    components: {
        TagsCard,
        ListCard
    }, 
    data() {
        return {
        }
    },
    props: 
        {
        item: {
            type: Array,
        },
        index: {
            type: Number
        },
        itemType: {
            type: String
        }
    },
    computed: {
        logoClass() {
            return this.itemType + '_logo'
        },
    },
}
</script>

<template>
    <div class="flip_contener" :class="itemType">
        <div :class="{flip: item.title != 'Diplôme d\'Ingénieur'}">
        <div class="front" :class="[ index % 2 === 0 ? 'light' : 'dark' ]">
                <div class="headband">
                    <div class="headband_content">
                        <span class="date">{{ item.year }}</span>
                        <h3 class="title">{{ item.title }}</h3>
                        
                        <h4 class="subtitle">{{ item.subtitle }}</h4>
                        
                        <img class="logo" :class="[logoClass, { 'background-logo': item.logo.isBackground }]"
                            :src="item.logo.src" 
                            :alt="item.logo.alt"
                            >
                        
                        <div class="technos">
                            <img v-for="techno in item.technos" 
                                :src="techno.src" 
                                :alt="techno.alt" 
                                :class="{ 'background-logo': techno.isBackground }"
                                >
                        </div>
                        
                        <a v-if="item.title != 'Diplôme d\'Ingénieur'" :class="[ index % 2 === 0 ? 'link--dark' : 'link--light']" >Plus d'info...</a>
                    </div>
                </div>
            </div>
            <div class="back" :class="[ index % 2 === 0 ? 'light' : 'dark' ]">

                <div v-if="itemType == 'formation'" class="tagscards_container">
                    <TagsCard :items="item.content.items" :index="index"></TagsCard>
                </div>

                <div v-if="itemType == 'experience'">
                    <ListCard :item="item"></ListCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* FLIP fonctionnement */
.flip_contener {
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
}

.flip_contener:hover .flip {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.flip {
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all .7s ease-in-out;
    -moz-backface-visibility: hidden; /* fix bug on Firefox */
}

.front,
.back {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
}

.back {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    position: absolute;
    top: 0;
    left: 0;
}

/* flip style global */
.flip_contener {
    padding: 10px;
}

.flip {
    cursor: pointer;
}

.front,
.back {
    width: 450px;   /* le front et le back doivent avoir les mêmes width et height pour que l'animation soit correcte */
    height: 550px;
}
    
.front {
    display: flex;
    align-items: center;
    justify-content: center;
}

.back {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    line-height: 1.5em;
}

.headband {
    width: 100%;   
}

.headband_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.date {
    font-size: 1.2em;
}

.title {
    font-family: 'Ubuntu', sans-serif;
    color: inherit;
    font-weight: 600;
    font-size: 1.6em;
    text-align: center;
    padding: 10px 20px; 
}

.subtitle {
    font-size: 1.3em;
    font-weight: 100;
    color: inherit;
    margin-bottom: 20px;
    text-align: center;
}

.logo {
    margin-top: 30px;
    max-width: 200px;
    max-height: 70px;
    margin-bottom: 50px;
}

.technos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.technos img {
    height: 50px;
    margin: 5px;
}

.tagscards_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* display: flex; */
    /* flex-direction: column; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    align-items: center;
    /* justify-content: space-around; */
}

@media (max-width: 500px)  {
    .front,
    .back {
        width: 300px;   /* le front et le back doivent avoir les mêmes width et height pour que l'animation soit correcte */
        height: 630px;   
    }
    
    .tagscards_container{
        display: block;  
    }
}
</style>