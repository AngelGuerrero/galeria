<template>
  <div>
    <h1>Ingresar</h1>

    <form @submit.prevent="test" class="dev">
      <!-- Email -->
      <EmailForm />

      <!-- Contraseñas -->
      <PasswordForm />

      <!-- Botón para ingresar -->
      <div class="dev form__control mb-4">
        <input type="button" value="Ingresar" class="btn" />
      </div>
    </form>
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
