<template>
    <div class="card">
        <p>
            {{ title }}
        <p/>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    props: 'title'
}
</script>

<style  type="text/scss" lang="scss" scoped>
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 30vw;

    :hover {
        transform: scale(1.1);
    } 
}
</style>