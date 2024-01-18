<template>
  <div
    id="kt_content_container"
    class="d-flex flex-column-fluid align-items-start"
  >
    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid   ">
      <!--begin::Hero-->
      <div
        class="
          bgi-no-repeat bgi-position-center bgi-size-cover
          d-flex
          flex-column
          min-h-350px min-h-lg-400px

        "
      >
        <div class="container py-3 bg-dark"
        >
          <!--begin::Input group-->
          <div
            class="position-relative w-100 mw-600px mx-auto mb-5"
            style="background: rgba(255, 255, 255, 0.05)"
          >
            <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
            <span
              v-if="!loading"
              class="
                svg-icon svg-icon-2qx svg-icon-white
                position-absolute
                top-50
                translate-middle
                ms-9
              "
              @click="serchOrder()"
            >
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
            <span
              v-if="loading"
              class="text-white position-absolute mt-7 ms-5 spinner-border"
            ></span>
            <!--end::Svg Icon-->
            {{this.order.code}}
            <input
              v-model="order.t_code"
              :disabled="loading"
              :placeholder="$t('Order_Nr')"
              class="
                form-control
                bg-transparent
                fs-2
                py-6
                ps-17
                placeholder-white
                opacity-75
                text-white
              "
              @keydown.enter="serchOrder()"
              style="border: 1px solid rgba(255, 255, 255, 0.24)"
              type="text"
            />
          </div>
          <!--end::Input group-->

          <qrcode-scanner
            :fps="10"
            :qrbox="250"
            class="position-relative w-100 mw-600px mx-auto"
            @result="onScan"
          ></qrcode-scanner>
        </div>
        <!--end::Container-->
      </div>
      <!--end::Hero-->

      <div class="card" v-if="order.boxes && order.boxes.length">
        <div class="card-header border-0 pt-5">

          <span class="card-label fw-bolder fs-3 mb-1">
            {{ $t("order code")}} : {{order.code}}

            <template v-if="order.status">
              <span :class="'btn ' + order.status.class">
                {{ order.status.name }}
              </span>
          </template>

          </span>

        </div>
        <div class="card-body d-flex flex-column">
          <!--begin::Item-->
          <div
            class="d-flex align-items-center mb-5"
            v-for="(item,i) in order.boxes"
            :key="i"
          >
            <!--begin::Avatar-->
            <div class="me-5 position-relative">
              <!--begin::Image-->
              <div class="symbol symbol-35px symbol-circle">
                <span
                  class="symbol-label bg-light-danger text-danger fw-bold"
                  >{{ i + 1 }}</span
                >
              </div>
              <!--end::Image-->
            </div>
            <!--end::Avatar-->
            <!--begin::Details-->
            <div class="fw-bold">
              <a class="fs-5 fw-bolder text-gray-900 text-hover-primary">
              {{
                `${order.code}$${item.number}`
              }}
            </a>
            </div>
            <!--end::Details-->
            <!--begin::Badge-->
            <span v-if="item.status_ob" class="mx-2 badge " :class="item.status_ob.class">
                {{item.status_ob.name}}
              </span>
            <!--end::Badge-->
          </div>
          <!--end::Item-->
        </div>
      </div>
      <!--begin::Svg-->
      <div v-if="order.id && order.id > 0" class="container">
        <div class="card card-flush d-none">
          <!--begin::Card header-->
          <div class="card-header mt-6">
            <!--begin::Card title-->
            <div class="card-title">
              <!--begin::Search-->
              {{ $t("Order_Nr") }} : {{ order.code }}
              <!--end::Search-->
            </div>
            <!--end::Card title-->
            <!--begin::Card toolbar-->
          </div>
          <!--end::Card header-->
        </div>
        <!--begin::Card body-->
        <div class="card-body pt-0">
          <OrderHistory :order="order"></OrderHistory>
          <OrderNote :order="order"></OrderNote>
        </div>
        <!--end::Card body-->
      </div>
      <div v-if="container" class="container">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bolder fs-3 mb-1">
                {{$t('Scan container')}} {{container.name}}

                          <template v-if="ContainerStatus[container.status]">
            <span :class="'badge ' + ContainerStatus[container.status].class">
              {{ ContainerStatus[container.status].name }}
            </span>
          </template>

              </span>
              <span class=" mt-1 fw-bold fs-4">
                {{$t('and order counts')}} {{Object.keys(container.orders).length}}

              </span>
              <span class=" mt-1 fw-bold fs-4">
                {{$t('With user')}} {{container.user}}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <a
        class="btn btn-primary ps-7 d-none"
        data-bs-target="#kt_modal_create_api_key"
        data-bs-toggle="modal"
      >
      </a>
      <div class="mt-n15 text-page-bg">
        <svg
          class=""
          height="56px"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 100 100"
          width="100%"
        >
          <path
            d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <!--end::Svg-->
      <!--begin::Container-->
    </div>
    <div
      id="kt_modal_create_api_key"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_create_api_key_header" class="modal-header">
            <!--begin::Modal title-->
            <h2>{{ $t("Please_Note") }}</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
              <span class="svg-icon svg-icon-1">
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
                    transform="rotate(-45 6 17.3137)"
                    width="16"
                    x="6"
                    y="17.3137"
                  />
                  <rect
                    fill="black"
                    height="2"
                    rx="1"
                    transform="rotate(45 7.41422 6)"
                    width="16"
                    x="7.41422"
                    y="6"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Form-->
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              id="kt_modal_create_api_key_scroll"
              class="scroll-y me-n7 pe-7"
            >
              <!--begin::Notice-->
              <div
                class="
                  notice
                  d-flex
                  bg-light-warning
                  rounded
                  border-warning border border-dashed
                  mb-10
                  p-6
                "
              >
                <!--begin::Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
                <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      fill="black"
                      height="20"
                      opacity="0.3"
                      rx="10"
                      width="20"
                      x="2"
                      y="2"
                    />
                    <rect
                      fill="black"
                      height="2"
                      rx="1"
                      transform="rotate(-90 11 14)"
                      width="7"
                      x="11"
                      y="14"
                    />
                    <rect
                      fill="black"
                      height="2"
                      rx="1"
                      transform="rotate(-90 11 17)"
                      width="2"
                      x="11"
                      y="17"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
                <!--end::Icon-->
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack flex-grow-1">
                  <!--begin::Content-->
                  <div class="fw-bold">
                    <h4 class="text-gray-900 fw-bolder">
                      {{ $t("Please_Note") }} !
                    </h4>
                    <div class="fs-6 text-gray-700">
                      {{ dliverData.message }}
                    </div>
                  </div>
                  <!--end::Content-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack flex-grow-1">
                  <!--begin::Content-->
                  <div class="fw-bold">
                    <h4 class="text-gray-900 fw-bolder">
                      {{ $t("Please_Note") }} !
                    </h4>
                    <div class="fs-6 text-gray-700">
                      {{ dliverData.collect }}
                    </div>
                  </div>
                  <!--end::Content-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Notice-->
              <!--begin::Input group-->
              <div class="d-flex flex-column mb-5 fv-row">
                <!--begin::Label-->
                <label class="required fs-5 fw-bold mb-2">{{
                  $t("Description")
                }}</label>
                <!--end::Label-->
                <!--begin::Input-->
                <textarea
                  v-model="dliverData.changeToNote"
                  class="form-control form-control-solid"
                  name="description"
                  rows="3"
                ></textarea>
                <!--end::Input-->

                <span
                  v-if="dliverDataErrors['changeToNote']"
                  class="text-danger"
                >
                  {{ dliverDataErrors["changeToNote"][0] }}
                </span>
              </div>
              <!--end::Input group-->

              <div class="mb-10">
                <!--begin::Label-->
                <label class="d-flex align-items-center fs-5 fw-bold">
                  <span class="required">{{ $t("Specify Request") }}</span>
                </label>
                <!--end::Label-->

                <!--begin::Radio group-->
                <div
                  class="btn-group w-100 fv-row"
                  data-kt-buttons="true"
                  data-kt-buttons-target="[data-kt-button]"
                >
                  <!--begin::Radio-->
                  <label
                    :class="dliverData.changeTo == 'finished' ? 'active' : ''"
                    class="
                      btn btn-outline-secondary
                      text-muted text-hover-white text-active-white
                      btn-outline btn-active-success
                    "
                    data-kt-button="true"
                  >
                    <!--begin::Input-->
                    <input
                      v-model="dliverData.changeTo"
                      class="btn-check"
                      type="radio"
                      value="finished"
                    />
                    <!--end::Input-->
                    {{ $t("finished Order") }}
                  </label>
                  <!--end::Radio-->
                  <!--begin::Radio-->
                  <label
                    :class="dliverData.changeTo == 'returned' ? 'active' : ''"
                    class="
                      btn btn-outline-secondary
                      text-muted text-hover-white text-active-white
                      btn-outline btn-active-danger
                    "
                    data-kt-button="true"
                  >
                    <!--begin::Input-->
                    <input
                      v-model="dliverData.changeTo"
                      class="btn-check"
                      type="radio"
                      value="returned"
                    />
                    <!--end::Input-->
                    {{ $t("returned Order") }}
                  </label>
                  <!--end::Radio-->
                  <!--begin::Radio-->
                  <label
                    :class="dliverData.changeTo == 'Out' ? 'active' : ''"
                    class="
                      btn btn-outline-secondary
                      text-muted text-hover-white text-active-white
                      btn-outline btn-active-danger
                    "
                    data-kt-button="true"
                  >
                    <!--begin::Input-->
                    <input
                      v-model="dliverData.changeTo"
                      class="btn-check"
                      type="radio"
                      value="Out"
                    />
                    <!--end::Input-->
                    {{ $t("Out Order") }}
                  </label>
                  <!--end::Radio-->
                </div>
                <!--end::Radio group-->

                <span v-if="dliverDataErrors['changeTo']" class="text-danger">
                  {{ dliverDataErrors["changeTo"][0] }}
                </span>
              </div>

              <div class="mb-10">
                <div id="iii" class="row bg-white">
                  <div class="col-12 mt-2 h-250px w-100">
                    <VueSignaturePad
                      id="signature"
                      ref="signaturePad"
                      height="250"
                      width="560"
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-4 mt-2 text-center">
                    <button class="btn btn-secondary float-right" @click="undo">
                      {{ $t("Undo") }}
                    </button>
                  </div>
                  <div class="col-4 mt-2 text-center">

                  </div>
                  <div class="col-4 mt-2 text-center">
                    <button
                        class="btn btn-secondary float-right"
                        @click="clear"
                    >
                      {{ $t("clear") }}
                    </button>
                  </div>
                </div>
              </div>

              <span v-if="dliverDataErrors['image']" class="text-danger">
                {{ dliverDataErrors["image"][0] }}
              </span>
              <!--end::Input group-->
            </div>

            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->
          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              type="reset"
            >
              {{ $t("discard") }}
            </button>
            <!--end::Button-->
            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              :disabled="loading"
              class="btn btn-primary"
              @click="submitDliverForm"
            >
              <span class="indicator-label">{{ $t("submit") }}</span>
              <span class="indicator-progress">
                {{ $t("PleaseWait") }}
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>

    <!--end::Post-->
  </div>
</template>
<style>
body{
  //background-image: url('/media/patterns/header-bg.jpg');
  background-color: var(--bs-page-bg);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 350px;
}

</style>
<script>
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import ApiService from "@/core/services/ApiService";

import moment from "moment";

import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useI18n } from "vue-i18n";
import OrderHistory from "./OrderHistory";
import OrderNote from "./OrderNote";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { hideModal, showModal } from "@/core/helpers/dom";
import QrcodeScanner from "@/components/qrcode-scanner";
import ContainerStatus from "@/core/config/ContainerStatus";

export default {
  name: "tracking",
  computed: {
    ContainerStatus() {
      return ContainerStatus
    }
  },
  components: {
    QrcodeScanner,
    OrderNote,
    OrderHistory,
  },
  data() {
    return {
      loading: false,
      order: {
        qrcode: "",
        order_number: 1,
        numbers: [],
      },
      status: [],
      date: "",
      resiveStutas: {
        returned: useI18n().t("returned Order"),
        finished: useI18n().t("finished Order"),
        out: useI18n().t("Out"),
      },
      dliverData: {
        message: "",
        changeToNote: "",
        changeTo: "",
      },
      dliverDataErrors: [],
      // myModal:document.getElementById('kt_modal_create_api_key')
      container:null,
    };
  },
  beforeCreate() {
    this.resiveStutas = {
      returned: useI18n().t("returned Order"),
      finished: useI18n().t("finished Order"),
      out: useI18n().t("Out"),
    };
    useStore().dispatch(Actions.ADD_BODY_CLASSNAME, "page-bg-image-lg");
  },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      alert("Open digital Signiter requierd.");
    },

    async serchOrder() {
      if (this.order.t_code.length < 3) return;
      this.loading = true;
      this.status = [];
      let startIndex = this.order.t_code.indexOf("tracking/");
      if (startIndex == -1 )
        startIndex = 0;
      else startIndex +=9;

      this.order.t_code = this.order.t_code.substr(startIndex)
      console.log("CODE " + this.order.t_code)
      // code like XXXX-000000$1-2
      var code = this.order.t_code.split("$");
      if (code.length != 2) {
        this.loading = false;
        if (code[0].indexOf("-") == -1) {
          this.order.qrcode = code[0];
          // this.order.qrcode = code[0];
          this.order.items = {};
          this.boxes = [];
          this.order.numbers = [];
        }
        this.sendCode();
        return;
      }
      this.order.p1Code = code[0];
      this.order.p2CodeNumber = code[1];

      this.order.numbers = [];
      // Array.from(
      //   Array(parseInt(this.order.p2CodeArray[1])).keys()
      // );
      if (this.order.qrcode == this.order.p1Code) {
      } else {
        this.order.qrcode = this.order.p1Code;
        this.order.items = {};
      }
      // this.order.items[this.order.p2CodeArray[0]] = this.order.code;

      this.loading = false;
      this.sendCode();
      // store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
    },
    async sendCode() {
      this.container = null;
      // if (this.order.numbers && this.order.items && Object.keys(this.order.items).length == this.order.numbers.length )
      // {
      if (this.loading == true) {
        return;
      }
      this.loading = true;
      this.boxes = [];
      console.log("CODE " + this.order.t_code )
      await ApiService.get("admin/order/" + this.order.t_code + "/withMe")
        .then((res) => {
          if (res.status != 200 && !res.data) {
            return;
          }
          if (res.status == 203 && res.data.container) {
            this.container = res.data.container;
            this.container.orders = res.data.orders;
            return;
          }
          window.scrollTo({
            top: document.querySelector(".bgi-size-cover").scrollHeight,
            behavior: "smooth",
          });

          // this.boxes = res.data.boxes;
          if (res && res.data && res.data.message) {
            this.$toast.success(res.data.message);
            if (res.status == 200 && res.data.data.code)
              this.order = res.data.data;
          }
          if (res.data.status == 2) {
            // store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
            this.dliverData.message = res.data.message;
            this.dliverData.collect = res.data.collect;
            showModal("kt_modal_create_api_key");
            document
              .getElementsByTagName("canvas")[0]
              .setAttribute("width", 560);
            document
              .getElementsByTagName("canvas")[0]
              .setAttribute("height", "250");
          } else if (res.data.status == 3) {
            Swal.fire({
              title: res.data.message,
              text: res.data.collect,
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              cancelButtonText: this.$t("Cancel"),
              confirmButtonText: this.$t("messages.sureDeleted"),
            }).then((result) => {
              if (result.isConfirmed) {
                this.dliverData.changeTo = "finished";
                ApiService.post(
                  "admin/order/" + this.order.code + "/deliver",
                  this.dliverData
                ).then((res) => {
                  this.$toast.success(this.$t("messages.success"));
                  if (res.data) {
                    this.order = res.data.data;
                    Swal.fire(this.$t("messages.done"), "", "success");
                  }
                });
              }
            });
          }

          this.loading = false;
        })
        .catch((reason) => {
          this.$toast.error(this.$t("messages.failed"));
          // this.order.items = {};
          // this.order.numbers = [];
        })
        .finally(() => {
          this.loading = false;
        });
      // }
    },
    async submitDliverForm() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

      this.dliverDataErrors = [];
      if (isEmpty) {
        alert("Open DevTools see the save data.");
      }
      this.dliverData.image = data;
      var word = this.resiveStutas[this.dliverData.changeTo];

      Swal.fire({
        title: this.$t("messages.areSurechangeOrderTo") + " ? ( " + word + " )",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("yes"),
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.post(
            "admin/order/" + this.order.code + "/deliver",
            this.dliverData
          )
            .then((res) => {
              this.$toast.success(this.$t("messages.success"));
              if (res.data) {
                hideModal("kt_modal_create_api_key");
                this.order = res.data.data;
                Swal.fire(this.$t("messages.done"), "", "success");
              }
            })
            .catch(() => {
              this.dliverDataErrors = ApiService.errors;
            });
        }
      });
    },

    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },

    maskCheck: function (field) {
      if (field.target.inputmask.isComplete()) {
      } else {
      }
    },
    onScan(decodedText, decodedResult) {
      this.order.t_code = decodedText.substr(
        decodedText.indexOf("tracking") + "tracking".length + 1
      );
      // this.order.code = decodedText;
      this.serchOrder();
      // handle the message here :)
    },
  },
};
</script>
