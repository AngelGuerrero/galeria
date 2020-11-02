<template>
  <div>
    <!-- Contraseña -->
    <div class="dev form__control mb-4">
      <label for="input__password" class="font-bold">Contraseña</label>
      <input
        type="password"
        class="input"
        name="input__password"
        id="input__password"
        placeholder="Ingresa tu contraseña"
        v-model="password"
        @change="emitInput(); validate()"
      />
      <label
        v-if="!validations.password.valid"
        :class="{ 'text-red-500': !validations.password.valid }"
      >
        {{ validations.password.message }}
      </label>
    </div>

    <!-- Repetir contraseña -->
    <div v-if="repeatPassword" class="dev form__control mb-4">
      <label for="input__repeatPassword" class="font-bold"
        >Repetir Contraseña</label
      >
      <input
        type="password"
        class="input"
        name="input__repeatPassword"
        id="input__repeatPassword"
        placeholder="Ingresa tu contraseña"
        v-model="valuePasswordRepeat"
        @change="emitInput(); validate()"
      />
      <label
        v-if="!validations.confirmationPassword.valid"
        :class="{ 'text-red-500': !validations.confirmationPassword.valid }"
      >
        {{ validations.confirmationPassword.message }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //
    // Opciones de validación
    //

    //
    // Verifica si el componente necesita una verificación de contraseña
    repeatPassword: {
      type: Boolean,
      required: false,
      default: false
    },

    //
    // Especifica la longitud mínima de la contraseña
    minLength: {
      type: Number,
      required: false,
      default: 6
    },

    //
    // Especifica la longitud máxima de la contraseña
    maxLength: {
      type: Number,
      required: false,
      default: 16
    }
  },

  data: () => ({
    password: '',
    valuePasswordRepeat: '',

    validations: {
      password: {
        valid: false,
        message: ''
      },
      confirmationPassword: {
        valid: false,
        message: ''
      }
    }
  }),

  created () {
    this.isPasswordSafe()
  },

  methods: {
    //
    // Custom events
    //
    // Emite la entrada de texto dependiendo de la situación
    // declarada por los props
    emitInput () {
      if (this.repeatPassword) {
        this.$emit('onInput', this.valuePasswordRepeat)
      } else {
        this.$emit('onInput', this.password)
      }
    },
    //
    // Manda una señal si el valor ha sido validado o no
    validate () {
      this.$emit('onValidation', this.isPasswordSafe())
    },

    //
    // Validations
    //
    isPasswordSafe () {
      // Initial state
      this.validations.password.valid = false
      this.validations.confirmationPassword.valid = false

      // Validación de la longitud de la contraseña
      if (!this.validateLength()) return

      // Valida si hace match
      if (!this.validateMatches()) return

      //
      // Se establece como verdadero las validaciones relizadas
      //
      // Password
      this.validations.password.valid = true
      this.validations.password.message = ''
      // Confirmacion
      this.validations.confirmationPassword.valid = true
      this.validations.confirmationPassword.message = ''

      return (
        this.validations.password.valid &&
        this.validations.confirmationPassword.valid
      )
    },

    validateLength () {
      //
      // Longitud de la contraseña
      //
      const lenght = 6

      if (this.password.length < lenght) {
        this.validations.password.message = `La contraseña debe tener por lo menos ${lenght} caracteres de longitud`
        return this.validations.password.valid
      }

      this.validations.password.message = ''
      return true
    },

    validateMatches () {
      //
      // Valida si la contraseña repetida hace match con la contraseña ingresada
      //
      if (this.password !== this.valuePasswordRepeat) {
        this.validations.confirmationPassword.message =
          'La repetición de la contraseña no coincide con la contraseña ingresada'
        return this.validations.confirmationPassword.valid
      }

      this.validations.confirmationPassword.message = ''
      return true
    }
  }
}
</script>

<style lang="scss" scoped></style>
