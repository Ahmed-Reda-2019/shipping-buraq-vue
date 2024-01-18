<template>
  <div class="content flex-row-fluid" id="kt_content">
    <div class="d-flex flex-column flex-lg-row">
      <div
        class="
          flex-lg-row-fluid
          order-2 order-lg-1
          mb-10 mb-lg-0
          position-relative
        "
      >
        <div class="blockui-overlay bg-dark bg-opacity-25" v-if="loading">
          <span class="spinner-border text-primary"></span>
        </div>

        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <!--begin::Card header-->
          <div
            class="
              card-header
              justify-content-sm-between justify-content-center
            "
          >
            <!--begin::Card title-->
            <div class="card-title">
              <div class="d-flex align-items-center position-relative">
                <span class="svg-icon svg-icon-1 position-absolute ms-6">
                  <inline-svg src="/media/icons/duotune/general/gen021.svg" />
                </span>
                <input
                  v-model="search"
                  class="form-control form-control-solid w-250px ps-15"
                  type="text"
                  :placeholder="$t('Search')"
                />
              </div>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <div
                class="
                  form-check form-switch form-check-custom form-check-solid
                "
              >
                <input
                  id="flexSwitchDefault"
                  checked
                  class="form-check-input"
                  type="checkbox"
                  value="1"
                  @click="
                    active = !active;
                    loadData();
                  "
                />
                <label class="form-check-label" for="flexSwitchDefault">
                </label>
              </div>
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_country_item"
                data-bs-toggle="modal"
                @click="openModelNew()"
              >
                {{ this.$t("addCountry") }}</a
              >
            </div>

            <!--end::Card toolbar-->
          </div>

          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <my-table
              :list="tableDataItems"
              :btn="$t('addCountry')"
              modal="kt_modal_country_item"
              :tableHeader="[
                { name: 'name', key: 'name' },
                { name: 'iso_code', key: 'iso_code' },
                { name: 'phone_code', key: 'phone_code' },
                { name: 'status', key: 'status' },
                { name: 'actions', key: 'actions' },
              ]"
              :search="search"
            >
              <template v-slot:cell-name="{ row: item }">
                <label>{{ item.name }}</label>
                <div class="fw-normal text-gray-600">
                  {{ item.symbol }}
                </div>
              </template>
              <template v-slot:cell-iso_code="{ row: item }">
                <label>{{ item.iso_code }}</label>
              </template>
              <template v-slot:cell-phone_code="{ row: item }">
                <label>{{ item.phone_code }}</label>
              </template>
              <template v-slot:cell-status="{ row: item }">
                <span v-if="item.status == 1" class="badge badge-light-success">
                  {{ $t("active") }}
                </span>
                <span v-else class="badge badge-light-danger">{{
                  $t("unactive")
                }}</span>
              </template>
              <template v-slot:cell-actions="{ row: item }">
                <router-link
                  :to="{
                    name: 'Countries-show',
                    params: { Id: item.id },
                  }"
                  class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                >
                  <i class="icon-xl fas far fa-eye"></i>
                </router-link>

                <a
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                  @click="deleteItem(i)"
                >
                  <i class="icon-xl fas fa-trash-alt"></i>
                </a>
              </template>
            </my-table>
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>

    <div
      id="kt_modal_country_item"
      ref="formModelRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_Country_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="isEdit > -1" class="fw-bolder">
              {{ $t("editCountry") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("addCountry") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_country_item_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Form-->
          <el-form @submit.prevent="submitModelForm()">
            <!--begin::Modal body-->
            <div class="modal-body py-10 px-lg-17">
              <!--begin::Scroll-->
              <div
                id="kt_modal_add_branche_scroll"
                class="scroll-y me-n7 pe-7"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-dependencies="#kt_modal_add_branche_header"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-offset="300px"
                data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
              >
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("name") }}
                  </label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.name" type="text" />
                  </el-form-item>
                  <span v-if="countryError['name']" class="text-danger">{{
                    countryError["name"][0]
                  }}</span>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("iso_code") }}
                  </label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.iso_code" type="text" />
                  </el-form-item>
                  <span v-if="countryError['iso_code']" class="text-danger">{{
                    countryError["iso_code"][0]
                  }}</span>
                </div>
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("phone_code") }}
                  </label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.phone_code" type="text" />
                  </el-form-item>
                  <span v-if="countryError['phone_code']" class="text-danger">{{
                    countryError["phone_code"][0]
                  }}</span>
                </div>

                <div class="d-flex flex-column mb-7 fv-row">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">{{ $t("status") }}</span>
                  </label>
                  <select v-model="ItemForm.status" class="form-select">
                    <option value="1">{{ $t("yes") }}</option>
                    <option value="0">{{ $t("no") }}</option>
                  </select>
                </div>
              </div>
              <!--end::Scroll-->
            </div>
            <!--end::Modal body-->

            <!--begin::Modal footer-->
            <div class="modal-footer flex-center">
              <!--begin::Button-->
              <button
                id="kt_modal_add_branche_cancel"
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
                class="btn btn-lg btn-primary"
                type="submit"
              >
                <span class="indicator-label">
                  {{ $t("submit") }}
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
            <!--end::Modal footer-->
          </el-form>
          <!--end::Form-->
        </div>
      </div>
    </div>

    <translation-model :object="transObject"/>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import langs from "@/core/config/langs";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import MyTable from "@/views/admin/components/myTable";
import TranslationModel from "@/views/admin/components/translationModel";

export default defineComponent({
  name: "Countries-list",
  components: {
    TranslationModel,
    MyTable,
  },
  data() {
    return {
      errors: [],
      LocalI18n: useI18n(),
      langs: langs,
      loading: true, //ref(useStore().getters.Submitted),
      search: "",
      active: true,
      tableHeader: ref([
        {
          key: "checkbox",
        },
        {
          name: "name",
          key: "name",
          sortable: true,
        },
        {
          name: "iso_code",
          key: "iso_code",
          sortable: true,
        },

        {
          name: "phone_code",
          key: "phone_code",
          sortable: true,
        },
        {
          name: "status",
          key: "status",
          sortable: true,
        },
        {
          name: "Actions",
          key: "actions",
        },
      ]),
      tableDataItems: [],
      countryError: [],
      formModelRef: (ref < null) | (HTMLFormElement > null),
      ItemForm: {},
      isEdit: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),
    };
  },
  created() {
    this.loadData();
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("countries"), [this.$t("cp")]);
  },
  methods: {
    async loadData() {
      await ApiService.query("admin/Countries", { active: this.active }).then(
        (data) => {
          this.tableDataItems = data.data.data;
        }
      );
      this.loading = false;
    },
    openModelNew() {
      this.isEdit = -1;
      this.ItemForm = {};
    },
    openModelEdit(i) {
      this.isEdit = i;
      this.ItemForm = this.tableDataItems[i];
    },
    async submitModelForm() {
      this.loading = true;
      this.countryError = [];
      if (this.isEdit > -1) {
        await ApiService.put(
          "admin/Countries/" + this.tableDataItems[this.isEdit].id,
          this.ItemForm
        )
          .then((res) => {
            hideModal("kt_modal_country_item");
            this.tableDataItems[this.isEdit] = res.data.data;
            this.$toast.success(this.$t("messages.success"));
          })
          .catch(() => {
            this.countryError = ApiService.errors;
          });
        this.loading = false;
      } else {
        await ApiService.post("admin/Countries", this.ItemForm)
          .then((res) => {
            this.$toast.success(this.$t("messages.success"));
            if (res.data.data) {
              this.tableDataItems.push(res.data.data);
              hideModal("kt_modal_country_item");
              this.ItemForm = {};
            }
          })
          .catch(() => {
            this.countryError = ApiService.errors;
          });
        this.loading = false;
      }
    },

    async deleteItem(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDataItems[i].name +
          " )",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("messages.sureDeleted"),
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete(
            "admin/Countries/" + this.tableDataItems[i].id
          ).then(() => {
            this.$toast.success(this.$t("messages.delteted"));
            this.tableDataItems.splice(i, 1);
            Swal.fire(
              this.$t("messages.delteted"),
              this.$t("messages.hasBeenDeleted"),
              "success"
            );
          });
        }
      });
    },

    openModelTransObject(item) {
      this.transObject = item;
    },
    async submitTrans() {
      this.loading = true;
      let data = {
        id: this.transObject.id,
        trans: this.transObject.trans,
        class: this.transObject.class,
      };
      await ApiService.put("admin/Localization/update", data).then(() => {
        this.$toast.success(this.$t("messages.updated"));
        hideModal("kt_modal_trans");
      });
      this.loading = false;
    },
  },
});
</script>
