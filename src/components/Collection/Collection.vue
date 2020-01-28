<template>
    <div>
        <first-part-collection />
        <second-part-collection />
        <third-part-collection />
        <forth-part-collection />
    </div>
</template>

<script>
import FirstPartCollection from './FirstPartCollection'
import SecondPartCollection from './SecondPartCollection'
import ThirdPartCollection from './ThirdPartCollection'
import ForthPartCollection from './ForthPartCollection'

export default {
  name: 'Collection',
  components: {
    FirstPartCollection,
    SecondPartCollection,
    ThirdPartCollection,
    ForthPartCollection
  }
}
</script>