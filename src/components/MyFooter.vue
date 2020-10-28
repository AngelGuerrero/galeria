<template>
  <div class="dev myfooter p-3">
    <div class="dev col">
      <div>
      <h2 class="m-0">Ubicación</h2>
      <p class="m-0">Toltecas #338 Querétaro</p>
      </div>
      <div>
        <h4 class="mb-0">Teléfono</h4>
        <p class="m-0">222-222-222</p>
      </div>
    </div>
    <div class="dev col">
      <div>
        <h4 class="m-0">Email</h4>
        <p class="m-0">correo@gmail.com</p>
      </div>
      <div>
        <h4 class="mb-0">Redes sociales</h4>
        <p class="m-0">correo@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.myfooter {
  margin: auto;

  display: flex;
  flex-wrap: wrap;
}

.col {
  flex-grow: 1;
  padding: 5px;
}
</style>
