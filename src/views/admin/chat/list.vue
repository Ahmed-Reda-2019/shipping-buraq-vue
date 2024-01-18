<template>
  <div class="d-flex flex-column flex-lg-row">
    <!--begin::Sidebar-->
    <div
      class="
        flex-column flex-lg-row-auto
        w-100 w-lg-300px w-xl-400px
        mb-10 mb-lg-0
      "
    >
      <!--begin::Contacts-->
      <div class="card card-flush">
        <div class="card-header">
          <div class="card-toolbar w-100">
            <button
              aria-controls="kt-toolbar-filter"
              aria-expanded="false"
              class="btn btn-light-primary"
              style="flex: auto"
              data-bs-toggle="collapse"
              href="#kt-toolbar-filter"
              role="button"
            >
              <span class="svg-icon svg-icon-2">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                    fill="black"
                  />
                </svg>
              </span>
              {{ $t("filter") }}
            </button>
            <router-link
              :to="{ name: 'discussion-all-list' }"
              class="btn btn-light-danger ms-2"
              style="flex: auto"
            >
              <span class="svg-icon svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {{ $t("archieve") }}
            </router-link>
          </div>
        </div>
        <!--begin::Card body-->
        <div class="card-body pt-0" id="kt_chat_contacts_body">
          <div id="kt-toolbar-filter" class="collapse mx-n5">
            <!--begin::Card header-->
            <div class="p-4">
              <el-select
                v-model="filter.lang"
                class="w-100"
                :placeholder="$t('language')"
              >
                <el-option
                  :value="false"
                  :label="$t('all')"
                  :key="0"
                ></el-option>
                <el-option
                  v-for="(item, i) in langs"
                  :key="i"
                  :label="item.name"
                  :value="i"
                >
                </el-option>
              </el-select>
            </div>
            <div class="p-4">
              <el-select
                v-model="filter.status"
                class="w-100"
                :placeholder="$t('status')"
              >
                <el-option
                  :value="false"
                  :label="$t('all')"
                  :key="0"
                ></el-option>
                <el-option
                  v-for="(item, index) in chatStatusList"
                  :key="index"
                  :label="$t(item)"
                  :value="index"
                >
                </el-option>
              </el-select>
            </div>
            <div class="p-4">
              <el-select
                v-model="filter.type_id"
                class="w-100"
                :placeholder="$t('type')"
              >
                <el-option :value="0" :label="$t('all')" :key="0"></el-option>
                <el-option
                  v-for="item in types"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <!--begin::List-->
          <div
            class="scroll-y me-n5 pe-5 h-200px h-lg-auto"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-max-height="auto"
            data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
            data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
            data-kt-scroll-offset="0px"
          >
            <template v-if="list.length > 0 || Object.keys(list).length > 0">
              <div
                class="d-flex py-4"
                v-for="(item, index) in list"
                :key="index"
              >
                <!--begin::Details-->
                <div
                  class="d-flex align-items-center w-100"
                  @click="OpenDeal(item)"
                >
                  <!--begin::Avatar-->

                  <div class="symbol symbol-45px symbol-circle">
                    <img
                      :src="'/media/flags/' + item.country_name + '.svg'"
                      :alt="item.country_name"
                      class="w-15px h-15px rounded-1 ms-2"
                    />
                    <img
                      v-if="item.customer_id > 0"
                      :alt="item.customer.name"
                      :src="item.customer.logo"
                    />
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Details-->
                  <div class="ms-5 w-100">
                    <div class="d-flex justify-content-between mb-1">
                      <span
                        class="fw-bolder text-gray-900 text-hover-primary fs-5"
                        >{{ item.name }}</span
                      >
                      <span class="text-muted">{{
                        formatDate(item.created_at)
                      }}</span>
                    </div>

                    <span
                      class="badge me-2 mb-2"
                      :class="{
                        'alert-danger': item.status == 1,
                        'alert-warning': item.status == 2,
                        'alert-primary': item.status == 3,
                        'alert-success': item.status > 3,
                      }"
                      v-if="chatStatusList[item.status]"
                    >
                      {{ $t(chatStatusList[item.status]) }}
                    </span>
                    <span
                      class="badge badge-info me-2 mb-2"
                      v-if="types[item.type_id]"
                    >
                      {{ types[item.type_id].name }}
                    </span>
                    <span
                      class="text-muted me-2 mb-2 badge badge-light-info"
                      v-if="item.user && item.user.name"
                    >
                      {{ item.user.name }}
                    </span>
                    <span class="text-muted mb-2 badge badge-light-info">
                      {{ langs[item.lang].name }}
                    </span>
                  </div>
                  <!--end::Details-->
                </div>
                <!--end::Details-->
              </div>
              <div class="w-100 text-center">
                <pagnation
                  :number="filter.page"
                  :page="PageData"
                  v-model:pageNumber="filter.page"
                  @change="loadData"
                />
              </div>
            </template>
          </div>
          <!--end::List-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Contacts-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
      <!--begin::Messenger-->
      <template v-if="deal.id && deal.id > 0">
        <div class="card mb-5">
          <div class="card-header">
            <div class="card-title">
              {{ $t("Discussion Data") }}
            </div>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="fv-row mb-7 col-12 col-md-4">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("name") }}
                </label>
                <el-input v-model="deal.name" type="text" />
                <span v-if="dealError['name']" class="text-danger">{{
                  dealError["name"][0]
                }}</span>
              </div>
              <div class="fv-row mb-7 col-12 col-md-4">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("ticket code") }}
                </label>
                <el-input v-model="deal.code" readonly type="text" />
                <span v-if="dealError['code']" class="text-danger">{{
                  dealError["code"][0]
                }}</span>
              </div>
              <div class="fv-row mb-7 col-12 col-md-4">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("phone") }}
                </label>
                <el-input v-model="deal.phone" type="text" />
                <span v-if="dealError['phone']" class="text-danger">{{
                  dealError["phone"][0]
                }}</span>
              </div>
              <div class="fv-row mb-7 col-12 col-md-4">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("shipment code") }}
                </label>
                <el-input v-model="deal.shipment_code" type="text" />
                <span v-if="dealError['shipment_code']" class="text-danger">{{
                  dealError["shipment_code"][0]
                }}</span>
              </div>

              <div class="fv-row mb-7 col-12 col-md-4 d-none">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("language") }}
                </label>

                <el-select
                  v-model="deal.lang"
                  class="w-100"
                  :placeholder="$t('language')"
                  disabled
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

              <div class="mb-10 col-12 col-md-4">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bold mb-2"
                  >{{ $t("status") }}:</label
                >
                <!--end::Label-->
                <!--begin::Input-->
                <select
                  v-model="deal.status"
                  class="form-select form-select-solid fw-bolder"
                >
                  <option
                    v-for="(item, index) in chatStatusList"
                    :key="index"
                    :value="index"
                  >
                    {{ $t(item) }}
                  </option>
                </select>
                <!--end::Input-->
              </div>
              <div class="mb-10 col-12 col-md-4">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bold mb-2"
                  >{{ $t("type") }}:</label
                >
                <!--end::Label-->
                <!--begin::Input-->
                <select
                  v-model="deal.type_id"
                  class="form-select form-select-solid fw-bolder"
                >
                  <option value="0">{{ $t("No yet") }}</option>
                  <option
                    v-for="(item, index) in types"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <!--end::Input-->
              </div>
            </div>
            <div class="d-flex justify-content-end col-12">
              <button
                :disabled="loading"
                class="btn btn-primary"
                @click="submitForm()"
              >
                {{ $t("Save") }}
              </button>
            </div>
          </div>
        </div>

        <div class="card" id="kt_chat_messenger">
          <!--begin::Card header-->
          <div class="card-header" id="kt_chat_messenger_header">
            <!--begin::Title-->
            <div class="card-title">
              <!--begin::User-->
              <div class="d-flex justify-content-center flex-column me-3">
                <div class="symbol-group symbol-hover">
                  <div
                    class="symbol symbol-35px symbol-circle"
                    v-for="user in deal.users"
                    :key="user.id"
                  >
                    <img :alt="user.name" :src="user.imageurl" />
                  </div>

                  <span class="symbol mx-2 fw-bolder text-success">{{
                    deal.name
                  }}</span>
                </div>
              </div>
              <!--end::User-->
            </div>
            <!--end::Title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <div class="me-n3" v-if="deal.end_at == 0">
                <button
                  class="btn btn-sm btn-icon btn-active-light-danger"
                  @click="closeDeal"
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
          <div class="card-body" id="kt_chat_messenger_body">
            <!--begin::Messages-->
            <div
              class="scroll-y me-n5 pe-5 h-500px"
              id="chat_messages"
              ref="messagesRef"
              data-kt-element="messages"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
              data-kt-scroll-wrappers="#kt_content, #kt_chat_messenger_body"
              data-kt-scroll-offset="-2px"
            >
              <template v-for="(item, index) in messages" :key="index">
                <MessageOut
                  ref="messagesInRef"
                  v-if="item.user_id == user_id"
                  :name="item.user"
                  :image="item.image"
                  :time="formatDate(item.created_at)"
                  :text="item.body"
                ></MessageOut>
                <MessageIn
                  ref="messagesOutRef"
                  v-if="item.user_id != user_id"
                  :name="item.user"
                  :image="item.image"
                  :time="formatDate(item.created_at)"
                  :text="item.body"
                ></MessageIn>
              </template>
            </div>
            <!--end::Messages-->
          </div>
          <!--end::Card body-->

          <!--begin::Card footer-->
          <div
            class="card-footer py-5 d-flex"
            id="kt_chat_messenger_footer"
            v-if="deal.end_at == 0"
          >
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
              <!--begin::Actions-->
              <div class="d-flex align-items-center me-2">
                <label
                  @click="showMessage = !showMessage"
                  class="btn btn-sm btn-icon btn-active-light-primary me-1"
                >
                  <i class="far fa-eye-slash" v-if="showMessage"></i>
                  <i class="bi bi-upload fs-3" v-else></i>
                </label>
              </div>
              <!--end::Actions-->

              <!--begin::Send-->
              <button
                @click="addNewMessage"
                :data-kt-indicator="loadingMessage ? 'on' : null"
                class="btn btn-primary"
                type="button"
                data-kt-element="send"
              >
                <span v-if="!loadingMessage" class="indicator-label">
                  <span class="svg-icon svg-icon-3 me-0 arrow">
                    <i class="fa fa-paper-plane p-0"></i>
                  </span>
                </span>
                <span v-if="loadingMessage" class="indicator-progress">
                  <span
                    class="spinner-border spinner-border-sm align-middle"
                  ></span>
                </span>
              </button>
              <!--end::Send-->
            </div>
            <!--end::Toolbar-->
          </div>
          <div
            class="p-4 w-100"
            :class="{
              'd-none': !showMessage,
            }"
          >
            <el-select
              v-model="SMessage"
              class="w-100"
              filterable
              @change="sendSMassage"
              :placeholder="$t('Type a message')"
            >
              <el-option :value="-1" :label="$t('all')" :key="0"></el-option>
              <el-option
                v-for="(item, i) in SMessages"
                :key="i"
                :label="item.name"
                :value="i"
              >
              </el-option>
            </el-select>
          </div>

          <!--end::Card footer-->
        </div>
      </template>
      <!--end::Messenger-->
    </div>

    <!--end::Content-->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MessageIn from "@/components/chat/MessageIn.vue";
import MessageOut from "@/components/chat/MessageOut.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { scrollToBottom } from "@/core/helpers/dom";
import moment from "moment";
import JwtService from "@/core/services/JwtService";
import Pagnation from "@/components/pagnation.vue";
import langs from "@/core/config/langs";
export default defineComponent({
  name: "chat-list",
  components: {
    Pagnation,
    MessageIn,
    MessageOut,
  },
  data() {
    return {
      langs: langs,
      chatStatusList: {},
      user_id: 0,
      loading: false,
      loadingMessage: false,
      PageData: {},
      deal: {
        end_at: null,
        slug: null,
        messages: [],
      },
      filter: {
        page: 1,
      },
      chat: {},
      messages: [],
      dealError: [],
      dealForm: {
        users_ids: [],
      },
      isEditDeal: -1,
      messageForm: {
        body: "",
        files: [],
      },
      checkChatTimer: null,
      types: {},
      SMessage: -1,
      showMessage: false,
      SMessages: {},
    };
  },
  async created() {
    if (JwtService.getUserData()["id"])
      this.user_id = JwtService.getUserData()["id"];

    await this.loadData(1);
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Discussions"), []);
    ApiService.get("admin/Discussions/initialize?withMessages=true").then(
      (res) => {
        this.types = res.data.types;
        this.SMessages = res.data.messages;
        this.chatStatusList = res.data.chatStatusList;
      }
    );
  },
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
    sendSMassage() {
      if (this.SMessage > -1 && this.SMessages[this.SMessage]) {
        this.messageForm.body = this.SMessages[this.SMessage].name;
        this.addNewMessage();
        this.SMessage = -1;
      }
    },
    openclientModelNew() {
      this.isEditDeal = -1;
      this.dealForm = {
        users_ids: [],
      };
    },
    openclientModelEdit(i) {
      this.isEditDeal = i;
      this.dealForm = this.list[i];
    },
    async submitForm() {
      this.loading = true;
      this.dealError = [];
      await ApiService.put("admin/Discussions/" + this.deal.slug, this.deal)
        .then((res) => {
          this.$toast.success(this.$t("messages.success"));
          this.deal = res.data.data;
        })
        .catch(() => {
          this.dealError = ApiService.errors;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    loadData(page = 0) {
      if (page > 0) this.filter.page = page;
      ApiService.query("admin/Discussions", this.filter)
        .then((res) => {
          this.loading = true;
          this.PageData = res.data;
          setTimeout(
            function (scope) {
              scope.loadData(1);
            },
            2000,
            this
          );
        })
        .finally(() => {
          this.loading = false;
        });
    },

    async OpenDeal(deal) {
      if (this.loading == true) {
        this.$toast.warning(this.$t("PleaseWait"));
        return;
      }
      if (deal.user_id > 0 && deal.user_id != this.user_id) {
        this.ShowDeal(deal);
        return;
      }
      this.loading = true;
      await ApiService.get("admin/Discussions/assienToUser/" + deal.slug)
        .then((res) => {
          if (res.status == 200) {
            this.deal = res.data.data;
            this.messages = res.data.messages;
            this.checkChat();
          }
        })
        .finally(() => {
          scrollToBottom("chat_messages");
          this.loading = false;
        });
    },
    ShowDeal(deal) {
      this.loading = true;
      ApiService.get("admin/Discussions/" + deal.slug)
        .then((res) => {
          if (res.status == 200) {
            this.deal = res.data.data;
            this.messages = res.data.messages;
          }
        })
        .finally(() => {
          scrollToBottom("chat_messages");
          this.loading = false;
        });
    },
    checkDeal(deal) {
      this.loading = true;
      ApiService.get("admin/Discussions/" + deal.slug)
        .then((res) => {
          if (res.status == 200) {
            this.deal = res.data.data;
            if (res.data.chat && res.data.chat.length > 0)
              this.uniquidMessages(res.data.chat);
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    closeDeal() {
      this.loadingMessage = true;
      ApiService.get("admin/Discussions/close/" + this.deal["slug"])
        .then((res) => {
          if (res.status == 200) this.deal = res.data.data;
        })
        .finally(() => {
          this.loadingMessage = false;
        });
    },
    addNewMessage() {
      this.loadingMessage = true;
      // let id = this.deal["id"];
      ApiService.post(
        "admin/Discussions/" + this.deal.slug + "/sendMessage",
        this.messageForm
      )
        .then((res) => {
          if (res.status == 200) {
            this.uniquidMessages(res.data.chat);
            this.messageForm.body = "";
            this.messageForm.files = [];
          }
        })
        .finally(() => {
          scrollToBottom("chat_messages");
          this.loadingMessage = false;
        });
    },

    async checkChat() {
      if (!this.deal.slug || (this.deal.end_at && this.deal.end_at > 0)) return;
      let data = {};
      if (this.messages.length > 0) {
        data["id"] = this.messages[this.messages.length - 1].id;
      }
      await ApiService.query("admin/Discussions/" + this.deal.slug, data)
        .then((res) => {
          this.deal.end_at = res.data.data.end_at;
          if (res.data.chat && res.data.chat.length > 0) {
            this.uniquidMessages(res.data.chat);
          }
        })
        .finally(() => {
          // scrollToBottom("chat_messages", 500);
          setTimeout(() => {
            this.checkChat();
          }, 4000);
        });
    },

    uniquidMessages(messages) {
      if (messages) this.messages = this.messages.concat(messages);
      this.messages = this.messages.reduce((acc, current) => {
        const x = acc.find((item) => item["id"] === current["id"]);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
    },
  },
  computed: {
    list() {
      if (this.PageData && this.PageData["data"]) return this.PageData.data;
      return {};
    },
  },
});
</script>
