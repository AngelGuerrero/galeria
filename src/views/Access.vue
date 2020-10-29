<template>
  <Form>
    <component :is="view"></component>
  </Form>
</template>

<script>
import Form from '@/components/Form'
import Login from '@/components/Access/Login'
import SignUp from '@/components/Access/SignUp'

export default {
  components: {
    Form,
    Login,
    SignUp
  },

  props: {
    //
    // Vista que se mostrará por defecto
    //
    // | Puede ser que se muestre un 'login' o un 'signup'
    // |
    view: {
      type: String,
      required: true,
      default: 'sign-up'
    }
  }
}
</script>

<style lang="scss" scoped></style>
