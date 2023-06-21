<script>
import logo from '@/assets/images/logos/angular_logo.png'
import bootstrapLogo from '@/assets/images/logos/bootstrap_logo.svg'

export default {
    props: {
        techno: {
            type: Object
        }
    },
    computed: {
        src() {
            // return this.techno.src;
            return logo
        }
    },
    methods: {
        getImageUrl() {
            // console.log('couocu')
            // return require(this.src)
            return this.src
        }
    }
}
</script>
    
<template>
    <div class="techno">
        <img :src="techno.src" :alt="techno.alt" :class="{ 'background-logo': techno.isBackground }">
       
    </div>
</template>

<style scoped>
.techno {
    height: 100px;
    margin: 20px;
    transition: 1s;
    display: flex;
    align-items: center;
}

.techno img {
   max-height: 100%;
   max-width: 100%;
}

.techno:hover {
    transform: scale(2);
}
</style>