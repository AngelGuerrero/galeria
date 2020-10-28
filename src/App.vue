<template>
  <div id="app">
    <Navbar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
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
$azul-claro: #002854;
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
  background-color: $rojo-claro;
}
</style>
