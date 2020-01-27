<template>
    <div>
            <first-part-toile />
            <second-part-toile />
            <third-part-toile />
    </div>    
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';

import FirstPartToile from './FirstPartToile';
import SecondPartToile from './SecondPartToile';
import ThirdPartToile from './ThirdPartToile';

export default {
    name: 'Toile',
    components: {
        FirstPartToile,
        SecondPartToile,
        ThirdPartToile
    }
}
</script>