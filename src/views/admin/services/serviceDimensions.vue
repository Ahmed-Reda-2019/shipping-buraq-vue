<template>
  <div v-if="tableDataTypes && tableDataTypes.length == 0">
    <KTModalCard
        :button-text="$t('Add New')"
        :description="$t('noData')"
        :title="$t('Service Dimensions')"
        image="/media/illustrations/sigma-1/n18.png"
        modal-id="kt_modal_Type_item"
    ></KTModalCard>
  </div>
  <div v-else class="card card-flush pt-3 mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="fw-bolder">{{ $t("Service Dimensions") }}</h2>
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <a
            class="btn btn-light-primary"
            data-bs-target="#kt_modal_Type_item"
            data-bs-toggle="modal"
            @click="openModelTypeNew()"
        >
          {{ $t("Add New") }}
        </a>
      </div>

      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body pt-3">
      <!--begin::Section-->
      <!--end::Section-->
      <!--begin::Section-->
      <div class="mb-0">
        <!--begin::Title-->
        <!--end::Title-->

        <!--begin::Product table-->
        <div class="table-responsive">
          <!--begin::Table-->
          <table class="table align-middle table-row-dashed fs-6 gy-4 mb-0">
            <!--begin::Table head-->
            <thead>
            <!--begin::Table row-->
            <tr
                class="
                  border-bottom border-gray-200
                  text-start text-gray-400
                  fw-bolder
                  fs-7
                  text-uppercase
                  gs-0
                "
            >
              <th>{{ $t("name") }}</th>
              <th class="text-center">{{ $t("actions") }}</th>
            </tr>
            <!--end::Table row-->
            </thead>
            <!--end::Table head-->
            <!--begin::Table body-->
            <tbody class="fw-bold text-gray-800">
            <tr v-for="(item, i) in tableDataTypes" :key="i">
              <td>
                <label>{{ item.title }}</label>
              </td>
              <td>
                {{ item.desk }}
              </td>
              <td class="text-end">
                <a
                    class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                    data-bs-target="#kt_modal_Type_item"
                    data-bs-toggle="modal"
                    @click="openModelTypeEdit(i)"
                >
                    <span class="svg-icon svg-icon-primary svg-icon-2x"
                    ><svg
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            fill="none"
                            fill-rule="evenodd"
                            stroke="none"
                            stroke-width="1"
                        >
                          <rect height="24" width="24" x="0" y="0"/>
                          <path
                              d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                              fill="#000000"
                              fill-rule="nonzero"
                              transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                          />
                          <rect
                              fill="#000000"
                              height="2"
                              opacity="0.3"
                              rx="1"
                              width="15"
                              x="5"
                              y="20"
                          />
                        </g></svg
                    ><!--end::Svg Icon-->
                    </span>
                </a>
                <a
                    class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                    @click="deleteType(i)"
                >
                  <i class="icon-xl fas fa-trash-alt"></i>
                </a>
                <a
                    class="btn btn-icon btn-light-info mt-0 mb-0 m-2"
                    data-bs-target="#kt_modal_trans"
                    data-bs-toggle="modal"
                    @click="transObject = item"
                >
                  <i aria-hidden="true" class="fa fa-language"></i>
                </a>
              </td>
            </tr>
            </tbody>
            <!--end::Table body-->
          </table>

          <!--end::Table-->
        </div>
        <!--end::Product table-->
      </div>
      <!--end::Section-->
    </div>
    <!--end::Card body-->
  </div>
  <div
      id="kt_modal_Type_item"
      ref="my-modal"
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
          <h2 v-if="isEditType > -1" class="fw-bolder">
            {{ $t("Edit Type") }}
          </h2>
          <h2 v-else class="fw-bolder">{{ $t("add Type") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
              id="kt_modal_Type_item_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg"/>
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
                  <el-input v-model="TypeForm.title" type="text"/>
                </el-form-item>
                <span v-if="Errors['title']" class="text-danger">{{
                  Errors["title"][0]
                }}</span>
              </div>

              <div class="fv-row mb-7">
                <label class="required fs-6 fw-bold mb-2"
                >{{ $t("Description") }}
                </label>
                <el-form-item prop="name">
                  <el-input v-model="TypeForm.desk" type="text"/>
                </el-form-item>
                <span v-if="Errors['desk']" class="text-danger">{{
                  Errors["desk"][0]
                }}</span>
              </div>

              <div class="fv-row mb-7">
                <label class="required fs-6 fw-bold mb-2"
                >{{ $t("icon") }}
                </label>
                <span v-html="TypeForm.icon"></span>
                <el-form-item prop="name">
                  <el-input v-model="TypeForm.icon" type="text"/>
                </el-form-item>
                <span v-if="Errors['icon']" class="text-danger">{{
                  Errors["icon"][0]
                }}</span>
              </div>
              <div class="row">
                <div class="col-12 col-md-6">
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("length") }}
                  </label>
                  <el-form-item prop="length">
                    <el-input v-model="TypeForm.length" type="length"/>
                  </el-form-item>
                  <span v-if="Errors['length']" class="text-danger">{{
                    Errors["length"][0]
                  }}</span>
                </div>
                <div class="col-12 col-md-6">
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("width") }}
                  </label>
                  <el-form-item prop="width">
                    <el-input v-model="TypeForm.width" type="width"/>
                  </el-form-item>
                  <span v-if="Errors['width']" class="text-danger">{{
                    Errors["width"][0]
                  }}</span>
                </div>
                <div class="col-12 col-md-6">
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("height") }}
                  </label>
                  <el-form-item prop="height">
                    <el-input v-model="TypeForm.height" type="height"/>
                  </el-form-item>
                  <span v-if="Errors['height']" class="text-danger">{{
                    Errors["height"][0]
                  }}</span>
                </div>
                <div class="col-12 col-md-6">
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("weight") }}
                  </label>
                  <el-form-item prop="weight">
                    <el-input v-model="TypeForm.weight" type="weight"/>
                  </el-form-item>
                  <span v-if="Errors['weight']" class="text-danger">{{
                    Errors["weight"][0]
                  }}</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column mb-7 fv-row">
              <label class="fs-6 fw-bold mb-2">
                <span class="required">{{ $t("status") }}</span>
              </label>
              <select v-model="TypeForm.status" class="form-select">
                <option value="1">{{ $t("yes") }}</option>
                <option value="0">{{ $t("no") }}</option>
              </select>

              <span v-if="Errors['status']" class="text-danger">{{
                Errors["status"][0]
              }}</span>
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
                ><inline-svg src="/media/icons/duotune/arrows/arr064.svg"/>
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
  <translation-model :object="transObject"></translation-model>
</template>

<script>
import ApiService from "@/core/services/ApiService";
import {hideModal} from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import KTModalCard from "@/components/cards/Card.vue";
import TranslationModel from "@/views/admin/components/translationModel";

export default {
  name: "serviceDimensions",
  props: ["serviceId"],
  components: {
    TranslationModel,
    KTModalCard,
  },
  data() {
    return {
      loading: false,
      tableDataTypes: [],
      TypeForm: {},
      Errors: [],
      isEditType: -1,
      transObject: {},
    };
  },
  beforeCreate() {
    ApiService.get("admin/service/dimension/" + this.serviceId).then((data) => {
      this.tableDataTypes = data.data.data;
    });
  },
  methods: {
    openModelTypeNew() {
      this.isEditType = -1;
      this.TypeForm = {};
    },
    openModelTypeEdit(i) {
      this.isEditType = i;
      this.TypeForm = this.tableDataTypes[i];
    },
    async submitModelForm() {
      this.loading = true;
      this.Errors = [];
      if (this.isEditType > -1) {
        await ApiService.put(
            `admin/service/dimension/${this.serviceId}/` +
            this.tableDataTypes[this.isEditType].id,
            this.TypeForm
        )
            .then((res) => {
              hideModal("kt_modal_Type_item");
              this.$toast.success(this.$t("messages.success"));
              this.tableDataTypes[this.isEditType] = res.data.data;
            })
            .catch();
      } else {
        await ApiService.post(
            `admin/service/dimension/${this.serviceId}`,
            this.TypeForm
        )
            .then((res) => {
              if (res) {
                this.$toast.success(this.$t("messages.success"));
                this.tableDataTypes.push(res.data.data);
                hideModal("kt_modal_Type_item");
              }
            })
            .catch();
      }
      this.Errors = ApiService.errors;
      this.loading = false;
    },

    async deleteType(i) {
      Swal.fire({
        title:
            this.$t("messages.areSureDeleted") +
            " ? ( " +
            this.tableDataTypes[i].title +
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
              `admin/service/dimension/${this.serviceId}/` +
              this.tableDataTypes[i].id
          ).then(() => {
            this.tableDataTypes.splice(i, 1);
            Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
            );
          });
        }
      });
    },
  },
};
</script>
