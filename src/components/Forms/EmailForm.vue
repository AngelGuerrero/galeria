<template>
  <div class="dev form__control mb-4">
    <label for="input__email" class="font-bold">Email</label>

    <p class="text-blue-600 font-base font-bold">Props from email component</p>
    <pre>{{ $props }}</pre>

    <p class="text-purple-600 font-base font-bold">Data</p>
    <pre>{{ $data }}</pre>
    <!--
      - :Value: Is the value has passed by user, and returned to use v-model in component.
      - :class: Stylizes the borders of field, if entered value is valid or not.
      //
      // Events
      - @input: On input event emits the entered value and do the selected validations
     -->
    <input
      type="email"
      :placeholder="placeholder"
      class="input"
      :value="value"
      :class="[hasPassedValidations ? 'border-green-300' : 'border-red-300']"
      @input="
        emitInput($event.target.value);
        execValidations($event.target.value);
      "
    />
    <!-- Se debe de poder mostrar los errores en pila -->
    <!-- O que el usuario decida si se deben de mostrar los errores -->
    <!-- Uno por uno -->
    <label
      v-for="error in errors.messages"
      :key="error.id"
      :class="[hasPassedValidations ? 'text-green-500' : 'text-red-500']"
      >{{ error.message }}</label
    >
  </div>
</template>

<script>
export default {
  props: {
    // -----------------------------------------
    // Props binded with the field
    // -----------------------------------------

    //
    // Entered value by user
    value: {
      type: String,
      default: '',
      required: true
    },

    //
    // Custom Placeholder
    placeholder: {
      type: String,
      default: '',
      required: false
    },

    // -----------------------------------------
    // Optional validations
    // -----------------------------------------
    //
    // FIX: Desirable, execute custom validations 🤔

    //
    // Decide if component do validations or not
    vaidate: {
      type: Boolean,
      default: true,
      required: false
    },

    //
    // Validates if the field is empty
    empty: {
      type: Object,
      default: () => ({
        allow: false,
        name: 'empty field',
        message: 'Empty field is not permitted.'
      }),
      required: false
    },

    /**
     * It can executes custom validations out of the component.
     *
     * Custom validations accept an array of objects
     * which contains the next properties.
     *
     * @name String The validation named.
     * @message String The message showed when occurs some error.
     * @lambda Function The function will be executed.
     * {
     *  name: 'test',
     *  message: 'Error in test validation',
     *  fn: this.myValidation()
     * }
     */
    customValidations: {
      type: Function,
      required: false,
      default: () => ''
    }
  },

  mounted () {
    // FIX, REMOVE THIS: testing
    // this.execValidations('angel@gmail.com')
    // this.execValidations()
  },

  computed: {
    hasPassedValidations () {
      return this.errors.messages.length === 0
    }
  },

  data: () => ({
    //
    // Validations
    validations: [],
    //
    // Register all errors from validations
    errors: {
      messages: []
    }
    //
    // Has passed validations flag
    // hasPassedValidations: false
  }),

  methods: {
    // -----------------------------------------
    // Custom events
    // -----------------------------------------

    //
    // Emits the entered value by the user
    emitInput (value) {
      this.$emit('input', value)
    },

    //
    // Executes the selected validations
    // and emites the value if has passed all the test.
    execValidations (value) {
      //
      console.log(`valor al ejecutar las validaciones: ${value}`)

      //
      // If the field must not be empty
      // let isEmpty
      if (!this.empty.allow && (value === '' || value === undefined)) {
        //
        console.log('validando...')
        // isEmpty = value === ''
        this.errors.messages.push({
          // name: 'empty field',
          name: this.empty.name,
          message: this.empty.message
        })
      } else {
        this.errors.messages = this.errors.messages.filter(item => item.name === this.empty.name)
      }

      //
      // Register all the default validations
      // used by the component
      // const localValidations = [
      // isEmpty
      // ].every(val => val === true)
      // console.log('localValidations :>> ', localValidations)

      // const retval = this.allowedEmpty()
      // console.log(this.customValidations())
      // const retval = this.customValidations()
      //   .map(custom => custom.fn)
      //   .every(val => val === true)

      // console.log(retval)
      // console.log('retval :>> ', retval)

      // nota: regresar los mensajes de error
      // console.log(retval)
      // console.log(this.allowedEmpty())
      // console.log(`retval: ${retval.fn}`)
      // retval.fn()

      // this.hasPassedValidations = this.errors.messages.length >= 0
      this.$emit('onValidation', this.hasPassedValidations)
      // this.$emit('onValidation', this.isEmailValid())
    },

    // -----------------------------------------
    // Default Validations
    // -----------------------------------------

    //
    // Validates if the field is empty
    isEmpty (value) {
      //
      // Initial value
      // this.validation.valid = false

    },

    //
    // Validates if email is not valid
    isEmailValid (email) {
      //
      // Initial value
      // this.validation.valid = false
      let retval = false

      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const pattern = new RegExp(emailRegex)

      // Invalid email
      if (!pattern.test(email)) {
        // return this.validation.valid
        return retval
      }

      // this.validation.valid = true
      // Success
      retval = true

      // return this.validation.valid
      return retval
    }
  }
}
</script>
