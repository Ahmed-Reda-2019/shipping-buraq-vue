<template>
  <div class="chat-windows">
    <div class="chat-window-one" v-if="!chat.slug">
      <div class="chat-header">
        <h4>{{ $t("Need Help") }}</h4>
        <form @submit.prevent="createChat" class="webchat-config">
          <div class="mb-10 mx-2">
            <el-input
              v-model="chat.name"
              type="text"
              :class="errors['name'] ? 'danger' : ''"
              :placeholder="errors['name'] ? errors['name'][0] : $t('name')"
            />
          </div>
          <div class="mb-10 mx-2">
            <el-input
              v-model="chat.phone"
              type="text"
              :class="errors['phone'] ? 'danger' : ''"
              :placeholder="errors['phone'] ? errors['phone'][0] : $t('phone')"
            />
          </div>
          <div class="mb-10 mx-2">
            <el-select
              v-model="chat.lang"
              class="w-100"
              :class="errors['lang'] ? 'danger' : ''"
              :placeholder="errors['lang'] ? errors['lang'][0] : $t('language')"
            >
              <el-option
                v-for="(item, i) in langs"
                :key="i"
                :label="item.name"
                :value="i"
              >
              </el-option>
            </el-select>
          </div>
          <div class="modal-footer flex-end border-0">
            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary2"
              type="submit"
            >
              <span class="indicator-label">
                {{ $t("Start Chat") }}
                <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                  ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span class="indicator-progress">
                {{ $t("PleaseWait") }}
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
        </form>
      </div>
      <div class="chat-phone-number">
        <small>
          {{ setting.getTitle("chat_days_word") }}
          <br />
          {{ setting.getTitle("chat_time_word") }}
        </small>
        {{ setting.getVal("chat_number") }}
      </div>
    </div>
    <template v-else>
      <div class="chat-window-two">
        <div id="chatContainer">
          <div class="card mx-2">
            <!--begin::Card header-->
            <div class="card-header">
              <!--begin::Title-->
              <div class="card-title">
                <!--begin::User-->
                <div class="d-flex justify-content-center flex-column me-3">
                  <div class="symbol-group symbol-hover">
                    <div class="symbol symbol-35px symbol-circle">
                      <img
                        :alt="$t('Customer Support')"
                        src="/media/logos/customer_service.jpg"
                      />
                    </div>

                    <a class="mx-2">
                      <span class="symbol-label fs-8 fw-bolder info">
                        {{ chat.name }}
                      </span>
                    </a>
                  </div>
                </div>
                <!--end::User-->
              </div>
              <!--end::Title-->

              <!--begin::Card toolbar-->
              <div class="card-toolbar">
                <div class="me-n3">
                  <button
                    class="btn btn-sm btn-icon btn-active-light-danger d-none"
                    @click="closeDeal"
                    v-if="chat.end_at == 0"
                  >
                    <i class="fa fa-window-close fs-2" aria-hidden="true"></i>
                  </button>
                </div>
                <!--end::Menu-->
              </div>
              <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->

            <!--begin::Card body-->
            <div class="card-body p-1 min-h-450px">
              <!--begin::Messages-->
              <div
                class="scroll-y me-n2 px-2 mh-450px"
                ref="messagesRef"
                id="chat_messages"
                data-kt-element="messages"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
                data-kt-scroll-wrappers="#kt_content, #kt_chat_messenger_body"
                data-kt-scroll-offset="-2px"
              >
                <div
                  class="alert"
                  :class="{
                    'alert-warning': chat.status == 1,
                    'alert-primary': chat.status > 1,
                  }"
                >
                  <!--begin::Icon-->
                  <!--end::Icon-->

                  <!--begin::Wrapper-->
                  <div class="d-flex flex-row align-items-center">
                    <!--begin::Title-->
                    <span class="svg-icon svg-icon-2hx svg-icon-primary me-3">
                      <span
                        class="
                          spinner-border spinner-border-md
                          align-middle
                          ms-2
                        "
                        v-if="chat.status == 1"
                      ></span>
                      <span class="align-middle ms-2" v-else>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                            fill="black"
                          ></path>
                          <path
                            d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                    </span>

                    <h5 class="mb-1 text-dark" v-if="chat.status == 1">
                      {{ $t("system will assign you to support") }}
                    </h5>
                    <h5 class="mb-1 text-dark" v-else>
                      {{ $t("You can now talk to customer service") }}
                    </h5>
                    <!--end::Title-->
                  </div>
                  <!--end::Wrapper-->
                </div>
                <template v-if="chat.type_id == 0">
                    <!--begin::Wrapper-->
                    <div class="d-flex justify-content-end flex-column p-5 rounded bg-light-info text-dark text-end m-2 mb-4"

                    >
                      <label>{{$t('What is your question?')}}</label>

                      <a
                          class="btn btn-outline btn-outline-dashed  bg-white  mb-2"
                          v-for="item in types"
                          @click="sendType(item)"
                          :key="item.id"
                      >
                                              {{item.name}}

                      </a>
                    </div>
                </template>
                <template v-for="(item, index) in messages" :key="index">
                  <MessageOut
                      ref="messagesOutRef"
                      v-if="item.user_id == 0"
                      :image="item.image"
                      :time="formatDate(item.created_at)"
                      :text="item.body"
                  ></MessageOut>
                  <MessageIn
                    ref="messagesInRef"
                    v-else
                    :name="item.name"
                    image="/media/logos/customer_service.jpg"
                    :time="formatDate(item.created_at)"
                    :text="item.body"
                  ></MessageIn>
                </template>
                <template v-if="chat.end_at != 0 && chat.end_at">
                  <h2 class="text-center mb-15">
                    {{ $t("You can rate now") }}
                  </h2>
                  <div id="rate_form" @submit.prevent="sendRate">
                    <fieldset class="stars">
                      <input
                        type="radio"
                        name="stars"
                        id="star1"
                        ontouchstart="ontouchstart"
                      />
                      <label
                        class="fa fa-star"
                        for="star1"
                        @click="rate = 1"
                      ></label>
                      <input
                        type="radio"
                        name="stars"
                        id="star2"
                        @click="rate = 2"
                        ontouchstart="ontouchstart"
                      />
                      <label class="fa fa-star" for="star2"></label>
                      <input
                        type="radio"
                        name="stars"
                        id="star3"
                        @click="rate = 3"
                        ontouchstart="ontouchstart"
                      />
                      <label class="fa fa-star" for="star3"></label>
                      <input
                        type="radio"
                        name="stars"
                        id="star4"
                        @click="rate = 4"
                        ontouchstart="ontouchstart"
                      />
                      <label class="fa fa-star" for="star4"></label>
                      <input
                        type="radio"
                        name="stars"
                        id="star5"
                        @click="rate = 5"
                        ontouchstart="ontouchstart"
                      />
                      <label class="fa fa-star" for="star5"></label>

                      <label class="reset" for="star-reset" @click="sendRate">
                        <input
                          :disabled="loadingMessage"
                          type="submit"
                          name="stars"
                          id="star-reset"
                        />
                        {{ $t("Send") }}</label
                      >

                      <figure class="face">
                        <i></i><i></i>
                        <u>
                          <div class="cover"></div>
                        </u>
                      </figure>
                    </fieldset>
                  </div>
                </template>
              </div>
              <!--end::Messages-->
            </div>
            <!--end::Card body-->
            <!--begin::Card footer-->
            <div
              class="card-footer p-2 d-flex"
              v-if="chat.end_at == 0 || !chat.end_at"
            >
              <!--          v-if="chat.status > 0 && chat.status < 5"-->
              <!--begin::Input-->
              <input
                v-model="messageForm.body"
                @keydown.enter="addNewMessage"
                class="form-control form-control-flush"
                data-kt-element="input"
                :placeholder="$t('Type a message')"
              />
              <!--end::Input-->

              <!--begin:Toolbar-->
              <div class="d-flex flex-stack">
                <!--begin::Send-->
                <button
                  @click="addNewMessage"
                  class="btn btn-primary"
                  type="button"
                  data-kt-element="send"
                >
                  <i class="fa fa-paper-plane p-0"></i>
                </button>
                <!--end::Send-->
              </div>
              <!--end::Toolbar-->
            </div>
            <!--end::Card footer-->
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import MessageIn from "@/components/chat/MessageIn.vue";
import MessageOut from "@/components/chat/MessageOut.vue";
import ApiService from "@/core/services/ApiService";
import langs from "@/core/config/langs";
import moment from "moment";
import { scrollToBottom } from "@/core/helpers/dom";
import JwtService from "@/core/services/JwtService";
import { useI18n } from "vue-i18n";
import Setting from "@/core/config/Setting";

export default {
  name: "disscussion",
  components: {
    MessageIn,
    MessageOut,
  },
  data() {
    return {
      langs: langs,
      chat: {},
      messages: [],
      loading: false,
      loadingMessage: false,
      timer: null,
      errors: [],
      messageForm: {},
      rate: 0,
      types:[]
    };
  },
  created() {
    if (JwtService.isCustomer()) {
      this.chat.name = JwtService.getUserData().name;
      this.chat.phone = JwtService.getUserData().phone;
    }
    this.chat.lang = useI18n().locale;
    if (localStorage.getItem("chat_key")) {
      this.chat.slug = localStorage.getItem("chat_key");
      this.checkChat();
    }
  },

  methods: {
    createChat() {
      this.loading = true;
      ApiService.post("site/discussion", this.chat)
        .then((res) => {
          this.chat = res.data.data;
          this.types = res.data.types;
          localStorage.setItem("chat_key", this.chat.slug);
          this.checkChat();
        })
        .catch(() => {
          this.errors = ApiService.errors;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    sendType(item) {
      console.log(item)
      if (!this.chat.slug) return;
      console.log(item)
      ApiService.get("site/discussion/" + this.chat.slug +'/type/'+ item.id)
        .then((res) => {
          if (!res.status) {
            this.close();
          } else if (res.status == 200) {
            this.chat = res.data.data;
            if (res.data.chat && res.data.chat.length > 0) {
              this.messages = this.messages.concat(res.data.chat);
              this.uniquid();
            }
          }
        })
        .catch((reason) => {
          this.$toast.error(this.$t('Can not send Now'));
        })
        .finally(() => {
          scrollToBottom("chat_messages", 500);
        });
    },
    checkChat() {
      if (!this.chat.slug) return;
      let data = {};
      if (this.messages.length > 0) {
        data["id"] = this.messages[this.messages.length - 1].id;
      }
      ApiService.get("site/discussion/" + this.chat.slug, data)
        .then((res) => {
          if (!res.status) {
            this.close();
          } else if (res.status == 200) {
            this.chat = res.data.data;
            if (res.data.chat && res.data.chat.length > 0) {
              this.messages = this.messages.concat(res.data.chat);
              this.uniquid();
            }
          }
        })
        .catch((reason) => {
          this.close();
        })
        .finally(() => {
          scrollToBottom("chat_messages", 500);
          setTimeout(() => {
            this.checkChat();
          }, 3000);
        });
    },
    closeDeal() {
      if (this.chat.id) {
        this.loadingMessage = true;
        ApiService.get("site/discussion/close/" + this.chat.slug)
          .then((res) => {
            if (res.status == 200) {
              this.chat = res.data.data;
              localStorage.removeItem("chat_key");
              this.$toast.success(this.$t("discussion End"));
            }
          })
          .finally(() => {
            this.loadingMessage = false;
          });
      }
    },
    addNewMessage() {
      if (this.chat.slug && this.messageForm.body) {
        this.loadingMessage = true;
        ApiService.post(
          "site/discussion/send-message/" + this.chat.slug,
          this.messageForm
        )
          .then((res) => {
            if (!res.status) {
              this.close();
            }
            if (res.status == 200) {
              this.chat = res.data.data;
              this.messageForm.body = "";
              this.messageForm.files = [];
              if (res.data.chat)
                this.messages = this.messages.concat(res.data.chat);
              // this.$toast.success(this.$t('discussion is End'))
            }
          })
          .finally(() => {
            scrollToBottom("chat_messages");
            this.loadingMessage = false;
          });
      }
    },
    sendRate() {
      if (this.chat.id && this.rate > 0) {
        this.loadingMessage = true;
        let data = {};
        data.rate = this.rate;
        ApiService.post("site/discussion/rate/" + this.chat.slug, data)
          .then((res) => {
            if (res.status == 200) {
              this.close();
            }
          })
          .finally(() => {
            this.loadingMessage = false;
          });
      }
    },
    close() {
      this.chat = {};
      this.messages = {};
      localStorage.removeItem("chat_key");
      this.$toast.info(this.$t("discussion End"));
    },
    uniquid() {
      this.messages = this.messages.reduce((acc, current) => {
        const x = acc.find((item) => item["id"] === current["id"]);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
  computed: {
    setting() {
      return Setting;
    },
  },
};
</script>
<style>
#rate_form * {
  box-sizing: content-box;
}

#rate_form {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  height: 100%;
  margin: auto;
}

#rate_form [class*="fontawesome-"]:before {
  font-family: "FontAwesome", sans-serif;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
}

#rate_form .reset {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  margin: auto;
  padding: 12px 24px;
  color: #3d3d3d;
  background: #f0f0f0;
  border: 4px solid #3d3d3d;
  border-radius: 60px;
  font-family: "Helvetica", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: rgba(255, 255, 255, 0.8) 1px 1px 0;
  cursor: pointer;
  box-shadow: inset rgba(0, 0, 0, 0.06) 0 -15px 0;
  outline: none;
  transform: translateX(-50%);
}
#rate_form .reset:hover {
  background: #ffff4c;
}

#rate_form input,
#rate_form label {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#rate_form .stars {
  position: relative;
}
#rate_form .stars input {
  display: none;
}
#rate_form .stars input:checked ~ label:not(.reset) {
  -webkit-animation: wobble 0.8s ease-out;
  animation: wobble 0.8s ease-out;
  color: #ffdb19;
}
#rate_form .stars input:checked:not(#star-reset) ~ label.reset {
  display: block;
}
#rate_form .stars label:not(.reset) {
  float: right;
  position: relative;
  width: 40px;
  height: 40px;
  font-size: 40px;
  padding: 2px;
  cursor: pointer;
  color: #3d3d3d;
  transition: color 0.1s ease-out;
  z-index: 10;
}

#rate_form .face {
  position: relative;
  width: 200px;
  background: white;
  border: 6px solid #f0f0f0;
  border-radius: 100%;
  margin: 80px 0 50px;
  transition: box-shadow 0.4s ease-out;
}
#rate_form .face:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

#rate_form i {
  position: absolute;
  top: 50%;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: #f0f0f0;
}
#rate_form i:nth-child(1) {
  left: 30%;
}
#rate_form i:nth-child(2) {
  right: 30%;
}

#rate_form u {
  position: absolute;
  right: 0;
  bottom: 25%;
  left: 0;
  margin: auto;
  width: 24px;
  height: 24px;
  text-decoration: none;
  border: 6px solid #f0f0f0;
  border-radius: 100%;
}
#rate_form u:before,
#rate_form u:after {
  content: "";
  position: absolute;
  top: 15px;
  width: 6px;
  height: 6px;
  background: #f0f0f0;
  border-radius: 60px 60px 0 0;
  z-index: 2;
}
#rate_form u:before {
  left: -5px;
  transform: rotate(-32deg);
}
#rate_form u:after {
  right: -5px;
  transform: rotate(32deg);
}
#rate_form u .cover {
  position: absolute;
  top: -6px;
  left: -6px;
  width: 100%;
  height: 100%;
  border: 6px solid white;
  background: white;
  transform: translate(0, -12px);
}

#rate_form input#star4:checked ~ .face u,
#rate_form input#star2:checked ~ .face u {
  width: 36px;
}
#rate_form input#star4:checked ~ .face u:before,
#rate_form input#star4:checked ~ .face u:after,
#rate_form input#star2:checked ~ .face u:before,
#rate_form input#star2:checked ~ .face u:after {
  top: 18px;
  height: 10px;
}
input#star4:checked ~ .face u:before,
input#star2:checked ~ .face u:before {
  left: 0px;
  transform: rotate(-66deg);
}
#rate_form input#star4:checked ~ .face u:after,
#rate_form input#star2:checked ~ .face u:after {
  right: 0px;
  transform: rotate(66deg);
}
#rate_form input#star4:checked ~ .face u .cover,
#rate_form input#star2:checked ~ .face u .cover {
  transform: translate(0, -8px);
}

#rate_form input#star5:checked ~ .face u,
#rate_form input#star4:checked ~ .face u {
  transform: rotate(180deg) translateY(-20px);
}

#rate_form input#star3:checked ~ .face u {
  width: 42px;
  height: 6px;
  background: #3d3d3d;
  border: none;
  border-radius: 60px;
  transform: translateY(-4px);
}
#rate_form input#star3:checked ~ .face u:before,
#rate_form input#star3:checked ~ .face u:after,
#rate_form input#star3:checked ~ .face u .cover {
  display: none;
}

#rate_form input:not(#star-reset):checked ~ .face {
  -webkit-animation: wobble 0.8s ease-out;
  animation: wobble 0.8s ease-out;
}
#rate_form input:not(#star-reset):checked ~ .face,
#rate_form input:not(#star-reset):checked ~ .face u {
  border-color: #3d3d3d;
}
#rate_form input:not(#star-reset):checked ~ .face i,
#rate_form input:not(#star-reset):checked ~ .face u:before,
#rate_form input:not(#star-reset):checked ~ .face u:after {
  background: #3d3d3d;
}

#rate_form input#star5:checked ~ .face {
  background-color: white;
  box-shadow: inset rgba(255, 255, 255, 0.5) 2px 2px 0 4px,
    inset rgba(0, 0, 0, 0.06) -6px -4px 0 4px;
}
#rate_form input#star5:checked ~ .face u .cover {
  background: white;
  border-color: white;
}

#rate_form input#star4:checked ~ .face {
  background-color: #ffffe5;
  box-shadow: inset rgba(255, 255, 255, 0.5) 2px 2px 0 4px,
    inset rgba(0, 0, 0, 0.06) -6px -4px 0 4px,
    rgba(255, 255, 76, 0.05) 0 0 0 20px;
}
#rate_form input#star4:checked ~ .face u .cover {
  background: #ffffe5;
  border-color: #ffffe5;
}

#rate_form input#star3:checked ~ .face {
  background-color: #ffffb2;
  box-shadow: inset rgba(255, 255, 255, 0.5) 2px 2px 0 4px,
    inset rgba(0, 0, 0, 0.06) -6px -4px 0 4px,
    rgba(255, 255, 76, 0.3) 0 0 0 15px, rgba(255, 255, 76, 0.1) 0 0 0 30px;
}

#rate_form input#star2:checked ~ .face {
  background-color: #ffff7f;
  box-shadow: inset rgba(255, 255, 255, 0.5) 2px 2px 0 4px,
    inset rgba(0, 0, 0, 0.06) -6px -4px 0 4px,
    rgba(255, 255, 76, 0.4) 0 0 0 20px, rgba(255, 255, 76, 0.2) 0 0 0 40px;
}
#rate_form input#star2:checked ~ .face u .cover {
  background: #ffff7f;
  border-color: #ffff7f;
}

#rate_form input#star1:checked ~ .face {
  background-color: #ffff4c;
  box-shadow: inset rgba(255, 255, 255, 0.5) 2px 2px 0 4px,
    inset rgba(0, 0, 0, 0.06) -6px -4px 0 4px,
    rgba(255, 255, 76, 0.4) 0 0 0 25px, rgba(255, 255, 76, 0.2) 0 0 0 50px;
}
#rate_form input#star1:checked ~ .face u .cover {
  background: #ffff4c;
  border-color: #ffff4c;
}

@-webkit-keyframes wobble {
  0% {
    transform: scale(0.8);
  }
  20% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(0.9);
  }
  60% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.96);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes wobble {
  0% {
    transform: scale(0.8);
  }
  20% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(0.9);
  }
  60% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.96);
  }
  100% {
    transform: scale(1);
  }
}
</style>
