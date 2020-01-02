<template>
    <div>
        <LandingPage/>
        <header/>
            <MenuPage/>
        <footer/>    
    </div>
</template>

<script>
import LandingPage from './LandingPage.vue' 
import MenuPage from './MenuPage/MenuPage.vue'

import Header from '../Header';
import Footer from '../Footer';

export default {
    name: HomePage,
    components: {
        LandingPage,
        MenuPage,
  }
}
</script>