module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/Coffee_Exam/vue-project/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '~@/scss/core.scss';`,
      },
    },
  },
};
