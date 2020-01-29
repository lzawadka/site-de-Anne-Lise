<template>
    <div class="sixth-part">
        <carte v-bind:style="styleObject1"><img src="./../../assets/pictures/Collection/Collection20.png" alt=""></carte>
    </div>
</template>

<script>
import Carte from './Carte'

export default {
  name: 'Collection',
  components: {
    Carte
  },
  data : {
    styleObject1 : {
      backgroundColor : '#E2C491'
    },
    styleObject2 : {
      backgroundColor : '#ffffff'
    }
  }
  
}
</script>

<style type="text/scss" lang="scss" scoped>

.sixth-part {
    height: 100vh;
}

</style>