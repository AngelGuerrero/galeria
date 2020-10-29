<template>
  <div>
    <h1>Registrar</h1>

    <form @submit.prevent="test" class="dev">
      <!-- Email -->
      <EmailForm
        @onInput="form.email = $event"
        @onValidation="validations.email = $event"
      />

      <!-- Contraseñas -->
      <PasswordForm :repeatPassword="true" />

      <!-- Botón para ingresar -->
      <div class="dev form__control mb-4">
        <input v-if="!hasPassedValidations" type="button" value="Registrar" class="btn" />
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
  },

  computed: {
    hasPassedValidations: function () {
      //
      // Registra las validaciones para permitir el registro o no
      //
      const val = [
        this.validations.email,
        this.validations.password
      ].every(val => val === true)

      return val
    }
  },

  data: () => ({
    form: {
      email: '',
      password: ''
    },

    validations: {
      email: false,
      password: false
    }
  })
}
</script>

<style lang="scss" scoped></style>
