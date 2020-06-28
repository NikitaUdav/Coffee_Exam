module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Coffee_Exam/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '~@/scss/core.scss';`,
      },
    },
  },
};
