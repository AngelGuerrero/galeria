<template>
  <div>
    <h1 class="text-4xl my-2">Registrar</h1>

    <!-- <p class="text-base font-bold text-red-500">Data de signup component</p>
    <pre>{{ $data }}</pre> -->

    <form @submit.prevent="test" class="dev">
      <!-- Email -->
      <EmailForm
        v-model="form.email"
        placeholder="Ingresa tu email"
        :validate="true"

        :empty="{
          message: 'El campo no puede estar vacío'
        }"

        :customValidations="
          () => [
            {
              // Exec first
              name: 'prueba',
              message: 'mensaje de prueba',
              //fn: this.prueba(this.form.email)
              fn: this.prueba(this.form.email)
            },
            {
              // Exec second
              name: 'prueba2',
              message: 'mensaje de prueba 2',
              fn: this.prueba2(this.form.email)
            }
          ]
        "
      />
      <!-- :allowedEmpty="() => ({
          name: 'test',
          fn: this.prueba(this.form.email)
        })" -->

      <!-- Contraseñas -->
      <PasswordForm :repeatPassword="true" />

      <!-- Botón para ingresar -->
      <div class="dev form__control mb-4">
        <input
          v-if="!hasPassedValidations"
          type="button"
          value="Registrar"
          class="btn"
        />
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
      // const val = [this.validations.email, this.validations.password].every(
      //   val => val === true
      // )

      return false
    }
  },

  data: () => ({
    form: {
      email: '',
      password: ''
    }

    // validations: {
    //   email: false,
    //   password: false
    // }
  }),

  methods: {
    prueba (params) {
      // console.log(params)
      // console.log('Testing from prueba 1 method by parent')
      return true
    },

    prueba2 (params) {
      // console.log(params)
      // console.log('Testing from prueba2 method by parent')
      return true
    }
  }
}
</script>
