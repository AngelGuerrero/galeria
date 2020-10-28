<template>
  <div class="mynavbar px-3">
    <!-- Logotipo -->
    <div class="dev logo">
      <img src="../assets/images/logo.png" alt="" />
    </div>

    <!-- Botón para abrir el menú -->
    <div class="dev btn__menu flex ml-auto md:hidden">
      <p class="p-3 m-0 font-bold flex justify-center items-center hover:text-red-600">Menu</p>
    </div>

    <!-- Lista de menús -->
    <div class="dev hidden md:flex-1 md:flex md:justify-end">
      <router-link
        v-for="item in menu"
        :key="item.id"
        :to="item.to"
        class="dev menu__item p-3 flex justify-center items-center font-bold hover:text-yellow-300"
        >{{ item.title }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'Inicio', to: '/' },
      { title: 'Acerca', to: '/acerca' },
      { title: 'Herramientas', to: '/herramientas' },
      { title: 'Contacto', to: '/contacto' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.mynavbar {
  height: 100%;

  border: 1px solid;
  display: flex;
  background-color: $dark;
}

.logo {
  width: 200px;
  padding: 7px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.btn__menu {
  cursor: pointer;
  color: $yellow;
}

.menu__item {
  text-decoration: none;
  color: $yellow;
}
</style>
