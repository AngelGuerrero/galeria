<template>
  <div id="app">
    <Navbar />
    <main class="main">
      <router-view/>
    </main>
    <MyFooter />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import MyFooter from '@/components/MyFooter'

export default {
  components: {
    Navbar,
    MyFooter
  }
}
</script>

<style lang="scss">
$azul-claro: #0066ff;
$azul-oscuro: #212120;
$rojo-claro: #fb0007;
$rojo-oscuro: #89262c;
$dark-blue: darken($azul-claro, 8%);

*, *::before, *::after {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
}

.dev {
  border: 1px solid tomato;
}

::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

::-webkit-scrollbar-track-piece {
  background-color: $azul-oscuro;
}

::-webkit-scrollbar-thumb:vertical {
  height: 30px;
  background-color: $azul-claro;
}
.main {
  min-height: 50vh;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto', sans-serif;
}
</style>
