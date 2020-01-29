<template>
    <div>
        <first-part-inspi />
        <second-part-inspi />
        <third-part-inspi />
    </div>    
</template>

<script>
import FirstPartInspi from './FirstPartInspi'
import SecondPartInspi from './SecondPartInspi'
import ThirdPartInspi from './ThirdPartInspi'

export default {
    name: 'Inspiration',
    components: {
        FirstPartInspi,
        SecondPartInspi,
        ThirdPartInspi
    }
}
</script>