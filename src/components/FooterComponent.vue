<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <footer>
        <nav>
            <RouterLink to="/sources">Sources des illustrations</RouterLink>
        </nav>
    </footer>
</template>

<style scoped>
footer {
    background: rgba(9, 29, 43, 0.85);
    color: rgb(239, 244, 245);
}

footer nav {
    padding: 10px;
    text-align: center;
}

footer nav a {
    font-size: 1.2em;
    padding: 0 20px;
}
</style>