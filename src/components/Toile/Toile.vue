<template>
    <div>
            <first-part-toile />
            //<second-part-toile />
    </div>    
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';

import FirstPartToile from './FirstPartToile';
//import SecondPartToile from './SecondPartToile';

export default {
    name: 'Toile',
    components: {
        FirstPartToile,
        //SecondPartToile,
    }
}
</script>