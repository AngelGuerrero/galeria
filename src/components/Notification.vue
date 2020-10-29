<template>
  <div
    v-if="this.$store.state.ui.show"
    class=" border-1
            border-solid
            p-2
            rounded
            shadow-lg
            font-bold"
    :class="[
      this.$store.state.ui.error
        ? 'bg-red-300 border-red-600'
        : 'bg-green-300 border-green-600'
    ]"
  >
    <h3
      class="font-bold m-0 p-0"
      :class="[this.$store.state.ui.error ? 'text-red-700' : 'text-green-700']"
    >
      {{ this.$store.state.ui.title }}
    </h3>
    <p class="text-black mb-0">
      {{ this.$store.state.ui.message }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['ui']),

  watch: {
    ui: {
      deep: true,
      immediate: true,
      handler (val) {
        if (val.show) {
          setTimeout(() => this.hideNotification(), 4000)
        }
      }
    }
  },

  methods: {
    hideNotification () {
      this.$store.commit('setMessage', {
        show: false,
        title: '',
        message: '',
        error: false
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
