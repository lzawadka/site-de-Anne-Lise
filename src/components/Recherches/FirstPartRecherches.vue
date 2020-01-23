<template>
  <div class="first-part">
      <h1>-Recherches</h1>
        <div class="image-container">
          <img class="mannequin1" src="../../assets/pictures/Recherches/Mannequin3.png">
          <img class="mannequin2" src="../../assets/pictures/Recherches/Mannequin2.png">
          <img class="mannequin3" src="../../assets/pictures/Recherches/Mannequin1.png">
        </div>
  </div>

</template>

<script>

export default {
    name: 'FirstPartRecherches'
}

</script>

<style type="text/scss" lang="scss" scoped>

.first-part {
  width: 100vw;
  height: 100vh;
  padding-top: 0.1vh;

  h1 {
    font-size: 150px;
    font-weight: 200;
    z-index: -2;
    margin-top: 47px;
    margin-left: 50px;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .mannequin1 {
      transform: translate(50px, -100px);
      height: 65vh;
    }

    .mannequin2 {
      transform: translate(0px, 60px);
      height: 40vh;
    }

    .mannequin3 {
      transform: translate(-20px, -140px);
      height: 55vh;
    }

    img {
      opacity: 80%;
    }
  }

  
}

</style>