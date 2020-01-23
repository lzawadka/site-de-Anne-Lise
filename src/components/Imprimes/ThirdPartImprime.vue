<template>

<div class="thirdPartImprime">
    <div class="firstPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
        <div class="tenu2">
            <img src="./../../assets/pictures/Imprimes/Tenu2.png" alt="tenu2">
        </div>
        <div class="imprime7">
            <img src="./../../assets/pictures/Imprimes/Imprime7.png" alt="">
        </div>
    </div>

</div>    
</template>

<script>

export default {
    name: 'ThirdPartImprime'
}

</script>

<style type="text/scss" lang="scss" scoped>


.thirdPartImprime {
    display: flex;
    flex-direction: column;
    
    .firstPart {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;

        .tenu2 {
            height: 100vh;
            width: 50vw;
            position: relative;
            left: 2vw;

            img {
                height: 100vh;
                left: 7vw;
                position: relative;
            }
        }

        .imprime7 {
            height: 100vh;
            width: 50vw;
            position: relative;
            left: 2vw;
            display: flex;
            align-items: center;

            img {
                height: 90vh;
                right: 2vw;
                position: absolute;
            }
        }
    }
}

</style>