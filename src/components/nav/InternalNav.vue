<script>
export default {
    data() {
        return {
            navItems: [
                { 
                    title: 'Expérience',
                    href: '#experience-section',
                },
                { 
                    title: 'Projets',
                    href: '#projets-section',
                }, 
                { 
                    title: 'Technologies',
                    href: '#technos-section',
                },
                { 
                    title: 'Formation',
                    href: '#formation-section',
                },
                
            ],
        }
    },
}
</script>

<template>
    <a v-if="$route.name === 'image' || $route.name === 'project'" href="#" @click="goToPrevPage"><i class="fas fa-arrow-left"></i></a> 
    <RouterLink to="/" v-if="$route.name !== 'home'"><i class="fas fa-home"></i></RouterLink>
    <a v-if="$route.name === 'home'" v-for="item in navItems" :href="item.href">{{ item.title }}</a>
</template>

<style scoped>
a {
    color: var(--light);
    font-size: 1.2em;
    padding: 0 20px;
    font-weight: 100;
}
</style>