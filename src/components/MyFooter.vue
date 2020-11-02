<template>
  <div class="myfooter">
    <div class="min-w-full px-5 md:flex md:justify-center">
      <!-- Columna -->
      <div class="col  text-center sm:text-justify mt-3 md:m-0 md:m-10 p-2 w-full md:w-2/5 ">
        <!-- Ubicación -->
        <div>
          <h3 class="footer__title">Ubicación</h3>
          <p class="footer__text">
            Avenida Campo Real 1527, El Refugio, Querétaro
          </p>
        </div>
        <div>
          <h3 class="footer__title">Teléfono</h3>
          <p class="footer__text">
            +52 (442) 809 3077
          </p>
        </div>
      </div>

      <!-- Columna -->
      <div class="col  text-center sm:text-justify mt-3 md:m-0 md:m-10 p-2 w-full md:w-2/5">
        <div>
          <h3 class="footer__title">Correo Electrónico</h3>
          <p class="footer__text">correo@gmail.com</p>
        </div>
        <div>
          <h3 class="footer__title">Redes sociales</h3>
          <p class="footer__text">correo@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.myfooter {
  background: url('../assets/images/pattern.svg');
  background-position: center;
  background-size: contain;

  margin: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: darken($color: $dark, $amount: 5);
  color: $yellow;
}

.footer__title {
  @apply mb-0 text-xl;
}
.footer__text {
  @apply text-white my-2;
}
</style>
