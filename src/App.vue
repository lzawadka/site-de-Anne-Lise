<template>
  <div id="app">
    <header/>
      <router-view/>
    <footer />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

body {
  margin: 0;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
}

div {
  margin: 0;
}

p {
  margin: 0;
}
</style>
