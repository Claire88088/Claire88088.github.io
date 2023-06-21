<script>
export default {
    props: {
        item: {
            type: Array,
        },
    },
    computed: {
        missionsLenght() {
            return Object.keys(this.item.content.missions).length
        },
        
    }
}
</script>

<template>
    <div>
        <p class="title">Mission<span v-if="missionsLenght > 1">s</span></p>
        <ul>
            <li v-for="item in item.content.missions">
                {{ item.description }}
            </li>
        </ul>
     
        <ul class="details">
            <li v-for="item in item.content.details">
                {{ item.detail }}
            </li>
        </ul>  
    </div>
    
</template>

<style scoped>
.title {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: 'Ubuntu', sans-serif;
}

.back.dark .title {
    color:  rgb(144, 181, 187);
}

.back.light .title {
    color:  var(--dark);
}

ul li {
    padding: 5px;
}

.details {
    margin-top: 20px;
    /* margin-left: 0px; */
    list-style-type: disclosure-closed;
}
</style>