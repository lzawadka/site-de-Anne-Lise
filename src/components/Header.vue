<template>
    <header>
        <div class="header">
            <p>Anne-Lise Ribeiro</p>
            <div><p>Menu</p><img src=""></div>
        </div>
    </header>    
</template>

<script>
export default {
    name: 'header',
}
</script>

<style type="text/scss" lang="scss" scoped>
    header {
        display: block;
        height: 5vh;
        width: 100vw;
        background-color: #E2C491;

        .header {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100vw;
            font-size: 30px;
        }
    }
</style>