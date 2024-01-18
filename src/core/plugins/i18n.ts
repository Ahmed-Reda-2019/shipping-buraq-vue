import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: require("@/core/plugins/locales/en.json"),
    ar: require("@/core/plugins/locales/ar.json"),
    de: require("@/core/plugins/locales/de.json"),
    fr: require("@/core/plugins/locales/fr.json"),
    tr: require("@/core/plugins/locales/tr.json"),
    nl: require("@/core/plugins/locales/nl.json"),
  },
  missing: (locale, key, vm) => {
    window["missingKeys"][locale][key] = key;
  },

});

export default i18n;
