<template>
    <div>
            <first-part-imprime />
            <second-part-imprime />
            <third-part-imprime />
    </div>    
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';

import FirstPartImprime from './FirstPartImprime';
import SecondPartImprime from './SecondPartImprime';
import ThirdPartImprime from './ThirdPartImprime';

export default {
    name: 'Imprimes',
    components: {
        FirstPartImprime,
        SecondPartImprime,
        ThirdPartImprime
    }
}
</script>