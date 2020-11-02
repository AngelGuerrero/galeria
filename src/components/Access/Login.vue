<template>
  <div>
    <h1 class="text-4xl my-2">Ingresar</h1>

    <form @submit.prevent="test" class="dev">
      <!-- Email -->
      <EmailForm />

      <!-- Contraseñas -->
      <PasswordForm />

      <!-- Botón para ingresar -->
      <div class="dev form__control mb-4">
        <input type="button" value="Ingresar" class="btn w-full" />
      </div>
    </form>

    <!--  -->
    <div class="dev form__fontrol">
      <router-link :to="{name: 'Registrar', params:{view: 'sign-up'} }" class="dev">Crear una cuenta</router-link>
    </div>
  </div>
</template>

<script>
import EmailForm from '@/components/Forms/EmailForm'
import PasswordForm from '@/components/Forms/PasswordForm'

export default {
  components: {
    EmailForm,
    PasswordForm
  }
}
</script>

<style lang="scss" scoped></style>
