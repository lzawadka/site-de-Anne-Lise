<template>
    
    <div class="cards">
        <div class="card-container">
            <router-link class="card-link" to="/Collection" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/Collection.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }">Collection</Cards></router-link>
            <router-link class="card-link" to="/Imprimes" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/Imprimés.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }">Imprimés</Cards></router-link>
        </div>
        <div class="card-container">
            <router-link class="card-link" to="/Inspiration" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/background.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }">Inspirations</Cards></router-link>
            <router-link class="card-link" to="/Recherches" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/Recherches.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }" href="/Recherches"><p class="title-card-link">Recherches</p></Cards></router-link>
        </div>
        <div class="card-container">
            <router-link class="card-link" to="/Inspiration" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/ToileRobeChemise.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }">Toile</Cards></router-link>
        </div>
    </div>
</template>

<script>
import Cards from './Cards'

export default {
    name: 'Card',
}
</script>

<style type="text/scss" lang="scss" scoped>
.cards {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .card-container {
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100vw;
        font-size: 70px;
        .card {
            pointer-events: auto;
            margin: 2.5vw;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30vw;
            height: 30vw;
            transition: 0.4s;
            text-decoration: none !important;
            color: black;

            &:hover {
                transform: scale(1.05);
            } 
        }
    }
}
</style>