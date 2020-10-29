<template>
  <div class="navbar__wrapper h-full md:px-2">
    <div class="h-full flex max-w-screen-xl mx-auto">

    <!-- Logotipo -->
    <div class="dev logo py-3">
      <router-link to="/">
        <img class="p-2" src="../assets/images/logo.png" alt="" />
      </router-link>
    </div>

    <!-- Botón para abrir el menú -->
    <div class="dev btn__menu flex ml-auto md:hidden">
      <p
        class="p-3 m-0 font-bold flex justify-center items-center hover:text-red-600"
      >
        Menu
      </p>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'Inicio', to: '/' },
      { title: 'Acerca', to: '/acerca' },
      { title: 'Herramientas', to: '/herramientas' },
      { title: 'Contacto', to: '/contacto' },
      { title: 'Ingresar', to: '/ingresar' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.navbar__wrapper {
  background-color: $darkPurple;
}

.logo {
  width: 100px;
  cursor: pointer;
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
