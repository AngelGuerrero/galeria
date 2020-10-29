<template>
  <div class="dev form__control mb-4">
    <label for="input__email" class="font-bold">Email</label>
    <input
      type="email"
      class="input"
      :class="{ 'border-green-500' : validation.valid }"
      name="input__email"
      id="input__email"
      placeholder="Ingresa tu email"
      v-model="email"
      @change.passive="
        emitInput();
        validate();
      "
    />
    <label
      v-if="validation.message"
      :class="[validation.valid ? 'text-green-500' : 'text-red-500']"
      >{{ validation.message }}</label
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',

    validation: {
      message: '',
      valid: false
    }
  }),

  methods: {
    //
    // Custom events
    //
    //
    // Emit el valor ingresado en el campo de texto
    emitInput () {
      this.$emit('onInput', this.email)
    },
    //
    // Manda una señal si el valor ha sido validado o no
    validate () {
      this.$emit('onValidation', this.isEmailValid())
    },

    //
    // Realiza la validación del email únicamente
    //
    isEmailValid () {
      //
      // Initial value
      this.validation.valid = false

      //
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      //
      const pattern = new RegExp(emailRegex)

      // Invalid email
      if (!pattern.test(this.email)) {
        this.validation.message = 'Email no válido.'
        return this.validation.valid
      }

      this.validation.valid = true
      this.validation.message = ''

      return this.validation.valid
    }
  }
}
</script>

<style lang="scss" scoped></style>
