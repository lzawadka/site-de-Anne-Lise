<template>
    <div>
        <first-part-collection />
        <second-part-collection />
    </div>    
</template>

<script>
import FirstPartCollection from './FirstPartCollection';
import SecondPartCollection from './SecondPartCollection';

export default {
    name: 'Collection',
    components: {
        FirstPartCollection,
        SecondPartCollection
    }
}
</script>