<template>
  <div v-if="!order.notes || order.notes.length == 0">
    <KTModalCard
      :button-text="$t('addNote')"
      :description="$t('noData')"
      :title="$t('notes')"
      class="mt-6"
      image="/media/illustrations/sigma-1/n18.png"
      modal-id="kt_modal_add_note"
    ></KTModalCard>
  </div>
  <div v-else class="card mt-6">
    <!--begin::Header-->
    <div class="card-header">
      <!--begin::Title-->
      <div class="card-title">
        <h2>{{ $t("notes") }}</h2>
      </div>
      <!--end::Title-->
      <!--begin::Toolbar-->
      <div class="card-toolbar">
        <!--begin::Tab nav-->
        <a
          class="btn btn-primary ps-7"
          data-bs-target="#kt_modal_add_note"
          data-bs-toggle="modal"
        >
          {{ $t("addNote") }}
        </a>
        <!--end::Tab nav-->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->
    <!--begin::Card body-->
    <div class="card-body pb-5">
      <table
        class="table align-middle table-row-dashed fs-6 gy-5 mb-0 no-footer"
      >
        <!--begin::Table head-->
        <thead>
          <!--begin::Table row-->
          <tr
            class="text-start text-gray-800 fw-bolder fs-7 text-uppercase gs-0"
          >
            <th>#</th>
            <th class="min-w-125px">{{ $t("time") }}</th>
            <th class="min-w-125px">{{ $t("username") }}</th>
            <th class="min-w-125px">{{ $t("note") }}</th>
            <th>{{ $t("Show to Client") }}</th>
            <th class="min-w-125px">{{ $t("image") }}</th>
            <th>{{ $t("actions") }}</th>
          </tr>
          <!--end::Table row-->
        </thead>
        <tbody class="fw-bold text-gray-600">
          <tr
            v-for="(item, iNote) in order.notes"
            :key="iNote"
            class="text-start text-gray-800 fw-bolder fs-7 text-uppercase gs-0"
          >
            <td>{{ order.notes.length - iNote }}</td>
            <td class="min-w-125px">{{ formatDate(item.created_at) }}</td>
            <td class="min-w-125px">{{ item.username }}</td>
            <td class="min-w-125px">{{ item.note }}</td>
            <td>
              <i
                v-if="item.show_client == 1"
                class="icon-xl fas far fa-eye"
              ></i>
              <i v-else class="fas fa-eye-slash"></i>
            </td>
            <td>
              <div class="symbol-group symbol-hover">
                <!--begin::Avatar-->
                <div
                  class="symbol symbol-60px"
                  :key="i"
                  v-for="(file, i) in item.files"
                >
                  <img :alt="file.ext" :src="file.src" />
                </div>
              </div>
            </td>
            <td>
              <a
                v-if="canDelete(item)"
                class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                @click="deleteNote(iNote)"
              >
                <i class="icon-xl fas fa-trash-alt"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--end::Card body-->
  </div>

  <div
    id="kt_modal_add_note"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">{{ $t("addNote") }}</h2>
          <!--end::Modal title-->
        </div>
        <!--end::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
          <form
            id="kt_modal_adjust_balance_form"
            class="form"
            @submit.prevent="AddNoteToOrder"
          >
            <div class="fv-row mb-7">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("addNote")
              }}</label>
              <textarea
                v-model="OrderNoteForm.note"
                class="form-control form-control-solid rounded-3 mb-5"
              ></textarea>
              <!--end::Input-->
            </div>
            <div class="fv-row mb-7">
              <label class="required fs-6 fw-bold mb-2"
                >{{ $t("Avatar") }}
              </label>
              <input
                ref="file"
                class="form-control"
                type="file"
                @change="handleFileUpload('file')"
              />
            </div>
            <div class="d-flex flex-stack">
              <!--begin::Label-->
              <div class="me-5">
                <label class="fs-6 fw-bold form-label">{{
                  $t("Show to Client")
                }}</label>
              </div>
              <!--end::Label-->
              <!--begin::Switch-->
              <label
                class="
                  form-check form-switch form-check-custom form-check-solid
                "
              >
                <input
                  v-model="OrderNoteForm.show_client"
                  class="form-check-input"
                  type="checkbox"
                  value="1"
                />
              </label>
              <!--end::Switch-->
            </div>

            <div class="text-center">
              <button
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                type="reset"
              >
                {{ $t("discard") }}
              </button>
              <button
                :data-kt-indicator="loading ? 'on' : null"
                :disabled="loading"
                class="btn btn-primary"
                type="submit"
              >
                <span class="indicator-label">{{ $t("submit") }}</span>
                <span class="indicator-progress">
                  {{ $t("PleaseWait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
            </div>
            <!--end::Actions-->
          </form>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
</template>

<script>
import KTModalCard from "@/components/cards/Card.vue";
import { useI18n } from "vue-i18n";
import moment from "moment";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import JwtService from "@/core/services/JwtService";

export default {
  name: "OrderNote",
  props: ["order"],
  components: {
    KTModalCard,
  },
  data() {
    return {
      loading: false,
      OrderNoteForm: {},
      files: [],
    };
  },
  methods: {
    handleFileUpload(name) {
      this.files[name] = this.$refs[name].files[0];
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
    AddNoteToOrder() {
      this.loading = true;

      const formData = new FormData();

      Object.keys(this.OrderNoteForm).forEach((value, key) => {
        formData.append(value, this.OrderNoteForm[value]);
      });
      Object.keys(this.files).forEach((value, key) => {
        formData.append(value, this.files[value]);
        if (this.files[value]) this.OrderNoteForm[value] = this.files[value];
      });

      ApiService.post(
        "admin/order/" + this.order.id + "/add/note",
        formData
      ).then((res) => {
        hideModal("kt_modal_add_note");
        this.OrderNoteForm = {};
        this.$parent.order.notes = [res.data.data].concat(
          this.$parent.order.notes
        );
        this.loading = false;
      });
    },
    deleteNote(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.notes[i].note +
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
            "admin/order/" + this.order.id + "/delete/note/" + this.notes[i].id
          ).then((res) => {
            this.notes.splice(i, 1);
            Swal.fire(
              this.$t("messages.delteted"),
              this.$t("messages.hasBeenDeleted"),
              "success"
            );
          });
        }
      });
    },
    canDelete(note) {
      if (JwtService.can("delete-note")) {
        return true;
      }
      return false;
    },
  },
  computed: {
    notes() {
      if (this.$parent.order && this.$parent.order.notes)
        return this.$parent.order.notes;
      else return [];
    },
    user() {
      return JwtService.getUserData() || {};
    },
  },
};
</script>

<style scoped>
</style>