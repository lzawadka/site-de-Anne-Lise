<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
    <div class="firstDiv">
      <img class="Collection12" src="./../../assets/pictures/Collection/Collection12.png" alt="">
      <div class="firstRectangle"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend lorem neque, in consequat lectus lobortis et. Mauris ornare condimentum viverra. </p>
    </div>
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img v-parallax="-0.15" class="Collection11" src="./../../assets/pictures/Collection/Collection11.png" alt="">
    <img class="Collection10" src="./../../assets/pictures/Collection/Collection10.png" alt="">
    <div class="firstRectangle"></div>
  </div>
</div>

</template>

<script>

export default {
  name: 'ForthPartCollection'
}

</script>

<style type="text/scss" lang="scss" scoped>
.part-one {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  z-index: 9;

  .first-part {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: block;

    h1 {
      position: absolute;
      font-size: 150px;
      font-weight: 200;
      z-index: 2;
      margin-left: 50px;
    }

    .firstDiv {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .firstRectangle {
        background-color: #E2C491;
        margin-top: 170px;
        position: absolute;
        z-index: -1;
        right: 10vw;
        height: 45vh;
        width: 43vw;
      }

      .Collection12 {
        height: 90vh;
        position: absolute;
      }

      p {
        position: absolute;
        letter-spacing: 0.2vw;
        width: 30vw;
        line-height: 28px;
        font-size: 30px;
        margin-top: 50vh;
        left: 10vw;
        z-index: 2;
      }
    }
  }

  .second-part {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

      .firstRectangle {
        background-color: #E2C491;
        margin-top: 170px;
        height: 45vh;
        width: 43vw;
      }

      .Collection10 {
        height: 90vh;
        position: absolute;
        right: 20vw;
      }

      .Collection11 {
        height: 70vh;
        position: absolute;
        left: 20vw;
        margin-top: 5vh;
      }
  }
} 
</style>
