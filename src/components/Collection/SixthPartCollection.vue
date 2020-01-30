<template>
    <div class="sixth-part">
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection20.png" alt=""></carte>
    </div>
</template>

<script>
import Carte from './Carte'

export default {
  name: 'Collection',
  components: {
    Carte
  }
}
</script>

<style type="text/scss" lang="scss" scoped>

.sixth-part {
    height: 100vh;

    .styleObject1 {
      background-color: #E2C491;

      img {
        position: relative;
        z-index: 2;
      }
    }

    .styleObject2 {
      background-color: #ffffff;
    }
}

</style>
