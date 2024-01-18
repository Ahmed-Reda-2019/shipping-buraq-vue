import Vuex from "vuex";
import auth from "./auth";
import axios from "axios";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";

export default new Vuex.Store({
  state: {
    Submitted: false,
    key: "",
    layout: "site",
    userData: null,
    currency_iso_code: "EUR",
    currency_symbol: "€",
    currency_multiplier: 1,
    allCurrencies: [],
  },

  getters: {
    Submitted: (state) => state.Submitted,
    key: (state) => state.key,
    layout: (state) => state.layout,

    currency_iso_code: (state) => state.currency_iso_code,
    currency_symbol: (state) => state.currency_symbol,
    currency_multiplier: (state) => state.currency_multiplier,
    allCurrencies: (state) => state.allCurrencies,
  },

  mutations: {
    allCurrencies(state, all) {
      state.allCurrencies = all;
    },
    changeCurrency(state, code) {
      if (state.allCurrencies[code]) {
        state.currency_symbol = state.allCurrencies[code]["symbol"];
        state.currency_iso_code = state.allCurrencies[code]["iso_code"];
        state.currency_multiplier = state.allCurrencies[code]["multiplier"];
      }
      return false;
    },
    setErrors(state, errors) {
      if (state.key == "") state.errors = errors;
      else state.errors[state.key] = errors;
    },
    setErrorKey(state, key) {
      state.key = key;
    },
    setSubmitted(state, bollen) {
      state.Submitted = bollen;
    },
    SET_LAYOUT(state, payload) {
      state.layout = payload;
    },
  },

  actions: {
    sendPost({ commit }, { url: url, data: data }) {
      commit("setErrors", {}, { root: true });
      if (data == undefined) data = [];
      commit("setSubmitted", true, { root: true });

      return axios.post(url, data).then((response) => {
        commit("setSubmitted", false, { root: true });
        return response.data;
      });
    },
    sendPut({ commit }, { url: url, data: data }) {
      commit("setErrors", {}, { root: true });
      if (data == undefined) data = [];
      commit("setSubmitted", true, { root: true });

      return axios.put(url, data).then((response) => {
        commit("setSubmitted", false, { root: true });
        return response.data;
      });
    },
    sendGet({ commit }, { url, data }) {
      commit("setErrors", {}, { root: true });
      if (data == undefined) data = [];
      commit("setSubmitted", true, { root: true });
      return axios.get(url, data).then((response) => {
        commit("setSubmitted", false, { root: true });
        return response.data;
      });
    },
  },

  modules: {
    auth,
    AuthModule,
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
  },
});
