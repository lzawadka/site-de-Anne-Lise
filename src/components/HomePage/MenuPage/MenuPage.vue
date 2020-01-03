<template>
  <div>
    <div ><img class="bandeau1" src="../../../assets/pictures/bandeau1.png" /></div>
    <card />
  </div>
</template>

<script>
import Card from './Card'

export default {
    name: 'MenuPage',
    components: {
        Card
    }
}
</script>

<style type="text/scss" lang="scss" scoped>

.bandeau1 {
    width: 100vw;
    height: 80vh;
    margin-top: 5vw;
    margin-bottom: 2.5vw;
}

</style>