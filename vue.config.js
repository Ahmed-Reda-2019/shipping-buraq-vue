module.exports = {

  publicPath: process.env.NODE_ENV === "production" ? "/vue" : "/",
  pluginOptions: {
    i18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
};
