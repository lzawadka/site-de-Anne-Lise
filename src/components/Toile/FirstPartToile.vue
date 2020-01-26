<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      <h1>-Toile</h1>
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
      
  </div>
</div>  

</template>

<script>

export default {
  name: 'FirstPartToile'
}

</script>

<style type="text/scss" lang="scss" scoped>
.part-one {
  display: flex;
  flex-direction: column;

  .first-part {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding-top: 0.1vh;
    display: block;

    h1 {
      position: absolute;
      font-size: 150px;
      font-weight: 200;
      z-index: -2;
      margin-top: 47px;
      margin-left: 50px;
    }
  }
} 
</style>
