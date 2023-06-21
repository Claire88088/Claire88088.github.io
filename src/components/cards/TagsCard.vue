<script>
export default {
    props: {
        items: {
            type: Array
        },
        index: {
            type: Number
        },
    },
}
</script>

<template>
    <div v-for="item in items" class="tagcard" :class="[ index % 2 === 0 ? 'tagcard--dark': 'tagcard--light']" >
        <h5>{{ item.title }}</h5>
        <p v-if="item.description">{{ item.description }}</p>
    </div>
</template>

<style scoped>
.tagcard {
    border-radius: 20px;
    padding: 4px 8px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--color-tagcard);
    height: fit-content;
}

.tagcard--dark {
    background: var(--background-card-dark);
}

.tagcard--light {
    background: var(--background-card-light);
}

.tagcard p {
    font-size: smaller;
}
</style>