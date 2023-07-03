<script>
import { RouterLink } from 'vue-router'

import InternalNav from './nav/InternalNav.vue'
import ExternalNav from './nav/ExternalNav.vue'

export default {
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
    },
    components: {
        InternalNav, ExternalNav
    }
}

</script>

<template>
    <header>
        <div id="navigation">
            <nav id="main-nav">
                <div>
                   <InternalNav></InternalNav>
                </div>
                <div>
                    <ExternalNav></ExternalNav>
                </div>
            </nav>

            <div id="navigation--responsive">
                <i id="bars-icon" class="fa fa-solid fa-bars" @click="showNavbar"></i>
                <nav id="main-nav--responsive">
                    <InternalNav></InternalNav>
                    
                    <ExternalNav></ExternalNav>
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