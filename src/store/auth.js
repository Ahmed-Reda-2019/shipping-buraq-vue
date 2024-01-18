import axios from "axios";

export default {
  namespaced: true,

  state: {
    userData: null,
    Submitted: false,
  },

  getters: {
    user: (state) => state.userData,
  },

  mutations: {
    setUserData(state, user) {
      state.userData = user;
    },
  },

  actions: {
    getUserData({ commit }) {
      axios
        .get(process.env.VUE_APP_API_URL + "user")
        .then((response) => {
          commit("setUserData", response.data);
        })
        .catch(() => {
          localStorage.removeItem("authToken");
        });
    },
    sendLoginRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      commit("setSubmitted", true, { root: true });

      return axios.post("/api/login", data).then((response) => {
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("authUser", JSON.stringify(response.user));
        commit("setSubmitted", false, { root: true });
        commit("setUserData", response.user);
      });
    },
    sendRegisterRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      commit("setSubmitted", true, { root: true });
      return axios.post("/register", data).then((response) => {
        commit("setUserData", response.data.user);
        localStorage.setItem("authToken", response.data.token);
        commit("setSubmitted", false, { root: true });
      });
    },
    sendLogoutRequest({ commit }) {
      axios.post(process.env.VUE_APP_API_URL + "logout").then(() => {
        commit("setUserData", null);
        localStorage.removeItem("authToken");
      });
    },
    sendVerifyResendRequest() {
      return axios.get(process.env.VUE_APP_API_URL + "email/resend");
    },
    sendVerifyRequest({ dispatch }, hash) {
      return axios
        .get(process.env.VUE_APP_API_URL + "email/verify/" + hash)
        .then(() => {
          dispatch("getUserData");
        });
    },
  },
};
