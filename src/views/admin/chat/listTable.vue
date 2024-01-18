<template>
  <div id="kt_content" class="content flex-row-fluid">
    <div class="card">
      <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
        <span class="spinner-border text-primary"></span>
      </div>
      <!--begin::Card header-->
      <div class="card-header border-0 pt-6">
        <!--begin::Card title-->
        <div class="card-title">
          <!--begin::Search-->
          <h2 class="fw-bolder">{{ $t("Discussions") }}</h2>
          <!--end::Search-->
        </div>
        <!--begin::Card title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <div
            class="d-flex justify-content-end"
            data-kt-customer-table-toolbar="base"
          >
            <!--begin::Filter-->
            <button
              aria-controls="kt-toolbar-filter"
              aria-expanded="false"
              class="btn btn-light-primary me-3"
              data-bs-toggle="collapse"
              href="#kt-toolbar-filter"
              role="button"
            >
              <!--begin::Svg Icon | path: icons/duotune/general/gen031.svg-->
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
          </div>
        </div>
        <!--end::Card toolbar-->

        <div id="kt-toolbar-filter" class="collapse mx-n6">
          <!--begin::Header-->
          <div class="px-7 py-5">
            <div class="fs-4 text-dark fw-bolder">
              <span class="svg-icon svg-icon-1 ms-6">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="black"
                    height="2"
                    opacity="0.5"
                    rx="1"
                    transform="rotate(45 17.0365 15.1223)"
                    width="8.15546"
                    x="17.0365"
                    y="15.1223"
                  />
                  <path
                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                    fill="black"
                  />
                </svg>
              </span>

              {{ $t("filterOptions") }}
            </div>
          </div>
          <!--end::Header-->
          <!--begin::Separator-->
          <div class="separator border-gray-200"></div>
          <!--end::Separator-->
          <!--begin::Content-->
          <div class="px-7 py-5 row-cols-sm-auto row-cols-md-auto row">
            <div class="mb-5 col-md-6 col-lg-4">
              <!--begin::Label-->
              <label class="form-label fs-5 fw-bold mb-2"
                >{{ $t("language") }}:</label
              >
              <!--end::Label-->
              <!--begin::Input-->
              <select
                v-model="filters.lang"
                class="form-select form-select-solid fw-bolder"
                data-allow-clear="true"
                data-dropdown-parent="#kt-toolbar-filter"
                data-kt-customer-table-filter="month"
                data-kt-select2="true"
                data-placeholder="Select option"
              >
                <option value="0">{{ $t("all") }}</option>
                <option v-for="(item, i) in langs" :key="i" :value="i">
                  {{ item.name }}
                </option>
              </select>
              <!--end::Input-->
            </div>
            <div class="mb-5 col-md-6 col-lg-4">
              <!--begin::Label-->
              <label class="form-label fs-5 fw-bold mb-2"
                >{{ $t("type") }}:</label
              >
              <!--end::Label-->
              <!--begin::Input-->
              <select
                v-model="filters.type_id"
                class="form-select form-select-solid fw-bolder"
                data-allow-clear="true"
                data-dropdown-parent="#kt-toolbar-filter"
                data-kt-customer-table-filter="month"
                data-kt-select2="true"
                data-placeholder="Select option"
              >
                <option value="0">{{ $t("all") }}</option>
                <option v-for="(item, i) in types" :key="i" :value="i">
                  {{ item.name }}
                </option>
              </select>
              <!--end::Input-->
            </div>
            <div class="mb-5 col-md-6 col-lg-4">
              <label class="form-label fs-5 fw-bold mb-2">&nbsp;</label>
              <div class="d-flex align-items-center position-relative">
                <span class="svg-icon svg-icon-1 position-absolute ms-6">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      fill="black"
                      height="2"
                      opacity="0.5"
                      rx="1"
                      transform="rotate(45 17.0365 15.1223)"
                      width="8.15546"
                      x="17.0365"
                      y="15.1223"
                    />
                    <path
                      d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
                <input
                  v-model="filters.search"
                  :placeholder="$t('Search')"
                  class="form-control form-control-solid ps-15"
                  data-kt-customer-table-filter="search"
                  type="text"
                />
              </div>
            </div>
            <div class="mb-5 col-md-6 col-lg-4">
              <label class="fs-5 fw-bold mb-2 d-block">
                {{ $t("from") }}:
              </label>
              <!--end::Label-->
              <!--begin::Input-->
              <el-date-picker
                v-model="filters.start_date"
                :disabled="loading"
                class="w-100"
                format="YYYY/MM/DD"
                placeholder="Pick a Date"
                type="date"
                value-format="YYYY-MM-DD"
              >
              </el-date-picker>
            </div>
            <div class="mb-5 col-md-6 col-lg-4">
              <label class="fs-5 fw-bold mb-2 d-block"> {{ $t("to") }}: </label>
              <!--end::Label-->
              <!--begin::Input-->
              <el-date-picker
                v-model="filters.end_date"
                :disabled="loading"
                class="w-100"
                format="YYYY/MM/DD"
                placeholder="Pick a Date"
                type="date"
                value-format="YYYY-MM-DD"
              >
              </el-date-picker>
            </div>
            <div class="mb-5 col-md-6 col-lg-4">
              <selectuser ob_word="filters" key_word="user_id"> </selectuser>
            </div>
            <template v-if="PageData.summary">
              <div class="fv-row col-12 col-md-6 mb-5">
                <label class="required fs-5 fw-bold mb-2"
                  >{{ $t("rate") }}
                </label>
                <el-input :value="PageData.summary.rate" disabled type="text" />
              </div>
              <div class="fv-row col-12 col-md-6 mb-5">
                <label class="required fs-5 fw-bold mb-2"
                  >{{ $t("count") }}
                </label>
                <el-input :value="PageData.summary.id" disabled type="text" />
              </div>
            </template>

            <div class="d-flex justify-content-end">
              <button
                class="btn btn-light btn-active-light-primary me-2"
                data-kt-menu-dismiss="true"
                @click="
                  filters.search = '';
                  filters.end_date = null;
                  filters.start_date = null;
                  filters.status = null;
                "
              >
                {{ $t("Reset") }}
              </button>
              <button
                class="btn btn-primary"
                data-kt-menu-dismiss="true"
                @click="loadData(1)"
              >
                {{ $t("Apply") }}
              </button>
            </div>
          </div>
          <!--end::Content-->
        </div>
      </div>
      <!--end::Card header-->

      <!--begin::Card body-->
      <div class="card-body pt-0">
        <!--begin::Table-->
        <my-table
          :list="list"
          :tableHeader="[
            { name: 'name', key: 'name' },
            { name: 'lang', key: 'lang' },
            { name: 'rate', key: 'rate' },
            { name: 'created_at', key: 'created_at' },
            { name: 'code', key: 'code' },
            { name: 'user', key: 'user' },
            { name: 'customer', key: 'customer' },
          ]"
        >
          <template v-slot:cell-name="{ row: item }">
            {{ item.name }} <br />
            {{ item.phone }}
          </template>
          <template v-slot:cell-lang="{ row: item }">
            {{ langs[item.lang].name }}
          </template>
          <template v-slot:cell-rate="{ row: item }">
            <template v-if="item.rate > 0">
              <i
                v-for="i in 5"
                :key="i"
                class="far fa-star"
                :class="{ 'text-warning': i <= item.rate }"
              >
              </i>
            </template>
          </template>
          <template v-slot:cell-created_at="{ row: item }">
            {{ formatDate(item.created_at) }}
          </template>
          <template v-slot:cell-code="{ row: item }">
            {{ item.shipment_code }}
          </template>
          <template v-slot:cell-user="{ row: item }">
            <template v-if="item.user.id">
              <router-link
                :to="{ name: 'user-view', params: { id: item.user.id } }"
                v-if="item.user.id"
              >
                {{ item.user.name }}
              </router-link>
            </template>
          </template>
          <template v-slot:cell-customer="{ row: item }">
            <template v-if="item.customer.id">
              <router-link
                :to="{
                  name: 'customers-view',
                  params: { customer: item.customer.id },
                }"
                v-if="item.user.id"
              >
                {{ item.customer }}
              </router-link>
            </template>
            <span v-else>
              {{ $t("visitor") }}
            </span>
          </template>
        </my-table>
        <pagnation
          v-model:pageNumber="filters.page"
          :page="PageData"
          @change="loadData"
        ></pagnation>
        <!--end::Table-->
      </div>
      <!--end::Card body-->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { scrollToBottom } from "@/core/helpers/dom";
import moment from "moment";
import langs from "@/core/config/langs";
import MyTable from "@/views/admin/components/myTable";
import Pagnation from "@/components/pagnation";
import Selectuser from "@/views/admin/clients/selectUser";

export default defineComponent({
  name: "chat-table-list",
  components: {
    Selectuser,
    Pagnation,
    MyTable,
  },
  data() {
    return {
      langs: langs,
      filters: {
        search: "",
        start_date: null,
        end_date: null,
        filters: [],
        status: "",
        page: 1,
      },
      chatStatusList: {},
      loading: true,
      PageData: {},
      types: {},
    };
  },
  async created() {
    await ApiService.get("admin/Discussions/initialize").then(
      (res) => {
        this.types = res.data.types;
        // this.SMessages = res.data.messages;
        this.chatStatusList = res.data.chatStatusList;
      }
    );
    await this.loadData(1);
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("archieve"), [this.$t("Discussions")]);
  },
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
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
      if (page > 0) this.filters.page = page;
      ApiService.query("admin/Discussions/archive", this.filters)
        .then((res) => {
          this.loading = true;
          this.PageData = res.data;
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
          scrollToBottom("chat_messages", 500);
          setTimeout(() => {
            this.checkChat();
          }, 3000);
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
