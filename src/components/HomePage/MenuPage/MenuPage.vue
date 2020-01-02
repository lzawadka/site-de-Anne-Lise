<template>


    <div class="cards">
        <Cards title='Collection' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/background.png') + ')' }"/>
        <Cards title='Imprimés' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/background.png') + ')' }"/>
        <Cards title='Inspirations' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/background.png') + ')' }"/>
        <Cards title='Recherches' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/background.png') + ')' }"/>
    </div>
</template>

<script>
import Cards from './Cards.vue'

export default {
    name: 'MenuPage',
}
</script>

<style type="text/scss" lang="scss" scoped>

</style>