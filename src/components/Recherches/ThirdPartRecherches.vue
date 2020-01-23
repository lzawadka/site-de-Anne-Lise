<template>
  <div class="first-part">
        <div class="image-container">
            <img class="recherche4" src="../../assets/pictures/Recherches/Recherche4.png">
            <img class="recherche3" src="../../assets/pictures/Recherches/Recherche3.png">
            <img class="recherche2" src="../../assets/pictures/Recherches/Recherche2.png">
            <img class="recherche1" src="../../assets/pictures/Recherches/Recherche1.png">
        </div>
  </div>

</template>

<script>

export default {
    name: 'ThirdPartRecherches'
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

    .recherche1 {
      transform: translate(30px, 150px);
      height: 60vh;
    }

    .recherche2 {
      transform: translate(90px, 60px);
      z-index: 1;
      height: 70vh;
    }

    .recherche3 {
      transform: translate(-150px, -60px);
      z-index: 1;
      height: 50vh;
    }

    .recherche4 {
      transform: translate(-120px, 100px);
      height:80vh;
    }

    img {
      opacity: 80%;
    }
  }

  
}

</style>