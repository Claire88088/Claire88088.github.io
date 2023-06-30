<script>
import { RouterLink } from 'vue-router'

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
    computed: {
        barsIconElt() {
            return document.getElementById('bars-icon')
        },
        responsiveMenu() {
            return document.getElementById('main-nav--responsive')
        }
    },
    methods: {
        showNavbar() {
            if (this.responsiveMenu.style.transform !== 'translateX(0px)') {
                this.responsiveMenu.style.transform = 'translateX(0px)';  
            } else {
                this.removeResponsiveMenu();
            }
        },
        removeResponsiveMenu() {
            this.responsiveMenu.style.transition = '2s';
            this.responsiveMenu.style.transform = 'translateX(-200px)';  
        },
        goToPrevPage() {
            history.back()
        }
    }
}

</script>

<template>
    <header>
        <div id="navigation">
            <nav id="main-nav">
                <div>
                    <a v-if="$route.name === 'image' || $route.name === 'project'" href="#" @click="goToPrevPage"><i class="fas fa-arrow-left"></i></a> 
                    <RouterLink to="/" v-if="$route.name !== 'home'"><i class="fas fa-home"></i></RouterLink>
                    <a v-if="$route.name === 'home'" v-for="item in navItems" :href="item.href">{{ item.title }}</a>
                </div>
                <div>
                    <a href="CVClaireBouton.pdf" target="_blank">CV</a>
                    <a href="https://www.linkedin.com/in/claire-bouton-dev-web/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/Claire88088" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </nav>

            <div id="navigation--responsive">
                <i id="bars-icon" class="fa fa-solid fa-bars" @click="showNavbar"></i>
                <nav id="main-nav--responsive">
                    <a v-if="$route.name === 'image' || $route.name === 'project'" href="#" @click="goToPrevPage"><i class="fas fa-arrow-left"></i></a> 
                    <RouterLink to="/" v-if="$route.name !== 'home'"><i class="fas fa-home"></i></RouterLink>
                    <a v-if="$route.name === 'home'" v-for="item in navItems" :href="item.href">{{ item.title }}</a>
                    
                    <a href="../src/assets/CVClaireBouton.pdf" target="_blank">CV</a>
                    <a href="https://www.linkedin.com/in/claire-bouton-dev-web/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/Claire88088" target="_blank"><i class="fab fa-github"></i></a>
                </nav>
            </div>
        </div>
    </header>
</template>

<style>
.current {
    color: white;
}

#main-nav {
    background: rgba(9, 29, 43, 0.9);
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

#main-nav a {
    color: var(--light);
    font-size: 1.2em;
    padding: 0 20px;
    font-weight: 100;
}

#navigation--responsive {
    display: none;
}

#bars-icon {
    cursor: pointer;
}

@media screen and (max-width: 750px) {
    #navigation {
        height: 0px;
    }

    #navigation--responsive {
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: fit-content;
    }

    #main-nav--responsive {
        display: flex;
        flex-direction: column;
        transform: translateX(-200px);
        transition: 1s;
        background: rgba(9, 29, 43, 0.9);
        padding: 10px;
        margin-left: -10px;
    }

    #main-nav--responsive a {
        padding: 5px 0;
    }

    #bars-icon {
        margin-bottom: 10px;
        font-size: 2em;
        color:var(--light);
    }

    #main-nav {
        display: none;
    }
}
</style>