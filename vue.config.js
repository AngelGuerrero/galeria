module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/assets/scss/partials/_helpers.scss';
          @import '@/assets/scss/_main.scss';
        `
      }
    }
  }
}
