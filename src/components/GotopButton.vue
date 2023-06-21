<script>

export default {
    computed: {
        goTopButtonElt() {
            return document.getElementById('gotop-btn')
        }
    },
    methods: {
    },
    mounted() {
        window.onscroll = ( _ => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                this.goTopButtonElt.style.display = 'block';
            }
        })
    }
}
</script>
    
<template>
    <a id="gotop-btn" href="#top" title="retour en haut de la page"><i class="fas fa-sharp fa-solid fa-arrow-up"></i></a>
</template>

<style scoped>
#gotop-btn {
    display: none;
    width: 40px;
    height: 40px;
    color: #2ba1b3;
    border: solid 1px #2ba1b3;
    border-radius: 25px;
    background-color: rgba(9, 29, 43, 0.8);
    padding: 10px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    transition: 50ms;
}

#gotop-btn:hover {
    background-color: rgba(44, 162, 181, 0.8);
    color: black;
    opacity: unset;
}

#gotop-btn i {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>