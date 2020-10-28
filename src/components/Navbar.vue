<template>
<div class="mynavbar">

  <div class="logo dev">
    <img src="../assets/logo.png" alt="">
  </div>

  <div class="menu">
    <router-link v-for="item in menu" :key="item.id" :to="item.to" class="menu__item dev">{{ item.title }}</router-link> |
  </div>

</div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'Inicio', to: '/' },
      { title: 'Nueva imagen', to: '/new' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.mynavbar {
  border: 1px solid;
  display: flex;
  padding: 5px;
  background-color: rgb(13, 21, 48);
}

.logo {
  img {
    height: 100%;
    max-height: 50px;
  }
}

.menu {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
.menu__item {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;

  &:hover {
    color: aqua;
  }
}
</style>
