<template>
    <div>
        <first-part-recherches />
        <second-part-recherches />
    </div>    
</template>

<script>
import FirstPartRecherches from './FirstPartRecherches'
import SecondPartRecherches from './SecondPartRecherches'


export default {
    name: 'Recherches',
    components: {
        FirstPartRecherches,
        SecondPartRecherches
    }
}
</script>