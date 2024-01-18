<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
        <!--begin::Col-->

        <div v-for="(item, i) in tableDataroles" :key="i" class="col-md-4">
          <!--begin::Card-->
          <div class="card card-flush h-md-100">
            <!--begin::Card header-->
            <div class="card-header">
              <!--begin::Card title-->
              <div class="card-title">
                <h2>{{ item.title }}</h2>
              </div>
              <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-1">
              <!--begin::Permissions-->
              <div class="d-flex flex-column text-gray-600 h-250px scroll-y">
                <template v-for="preId in item.permissions" :key="preId">
                  <div class="d-flex align-items-center py-2">
                    <span class="bullet bg-primary me-3"></span>
                    {{ permissions[preId].name }}
                  </div>
                </template>
              </div>
              <!--end::Permissions-->
            </div>
            <!--end::Card body-->
            <!--begin::Card footer-->
            <div class="card-footer flex-wrap pt-0">
              <a
                  class="btn btn-light btn-active-primary my-1 me-2"
                  data-bs-target="#kt_modal_form_role"
                  data-bs-toggle="modal"
                  @click="openroleModelEdit(i)"
              >
                {{ $t("edit") }}</a
              >
              <button
                  class="btn btn-light btn-active-light-primary my-1"
                  data-bs-target="#kt_modal_trans"
                  data-bs-toggle="modal"
                  type="button"
                  @click="openModelTransObject(item)"
              >
                <i aria-hidden="true" class="fa fa-language"></i>
              </button>
              <a
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                  @click="deleterole(i)"
              >
                <i class="icon-xl fas fa-trash-alt"></i>
              </a>
            </div>
            <!--end::Card footer-->
          </div>
          <!--end::Card-->
        </div>
        <!--end::Col-->
        <!--begin::Add new card-->
        <div class="col-md-4 ol-md-4">
          <!--begin::Card-->
          <div class="card h-md-100">
            <!--begin::Card body-->
            <div class="card-body d-flex flex-center">
              <!--begin::Button-->
              <button
                  class="btn btn-clear d-flex flex-column flex-center"
                  data-bs-target="#kt_modal_add_role"
                  data-bs-toggle="modal"
                  type="button"
              >
                <!--begin::Illustration-->
                <img
                    alt=""
                    class="mw-100 mh-150px mb-7"
                    src="/media/illustrations/sigma-1/4.png"
                />
                <!--end::Illustration-->
                <!--begin::Label-->
                <div  data-bs-target="#kt_modal_form_role"
                      data-bs-toggle="modal"
                      @click="openroleModelNew" class="fw-bolder fs-3 text-gray-600 text-hover-primary">
                  Add New Role
                </div>
                <!--end::Label-->
              </button>
              <!--begin::Button-->
            </div>
            <!--begin::Card body-->
          </div>
          <!--begin::Card-->
        </div>
        <!--begin::Add new card-->
      </div>
    </div>

    <div
        id="kt_modal_form_role"
        ref="ModelroleRef"
        aria-hidden="true"
        class="modal fade"
        tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_branch_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="isEditrole > -1" class="fw-bolder">
              {{ $t("Edit Role") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("Add Role") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
                id="kt_modal_form_role_close"
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
          <el-form @submit.prevent="submitroleForm()">
            <!--begin::Modal body-->
            <div class="modal-body py-10 px-lg-17">
              <!--begin::Scroll-->
              <div
                  id="kt_modal_add_role_scroll"
                  class="scroll-y me-n7 pe-7"
                  data-kt-scroll="true"
                  data-kt-scroll-activate="{default: false, lg: true}"
                  data-kt-scroll-dependencies="#kt_modal_add_role_header"
                  data-kt-scroll-max-height="auto"
                  data-kt-scroll-offset="300px"
                  data-kt-scroll-wrappers="#kt_modal_add_role_scroll"
              >
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("name") }}
                  </label>
                  <el-form-item prop="name">
                    <el-input v-model="roleForm.name" :disabled="roleForm.id && roleForm.id > 0 " type="text"/>
                  </el-form-item>
                  <span v-if="roleError['name']" class="text-danger">{{
                    roleError["name"][0]
                  }}</span>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("title") }}
                  </label>
                  <el-form-item prop="name">
                    <el-input v-model="roleForm.title" type="text"/>
                  </el-form-item>
                  <span v-if="roleError['title']" class="text-danger">{{
                    roleError["title"][0]
                  }}</span>
                </div>
              </div>
              <div v-if="roleForm.id > 0" class="fv-row">
                <!--begin::Label-->
                <label class="fs-5 fw-bolder form-label mb-2"
                >Role Permissions</label
                >
                <!--end::Label-->
                <!--begin::Table wrapper-->
                <div class="table-responsive">
                  <!--begin::Table-->
                  <table class="table align-middle table-row-dashed fs-6 gy-5">
                    <!--begin::Table body-->
                    <tbody class="text-gray-600 fw-bold">
                    <!--begin::Table row-->
                    <tr>
                      <td class="text-gray-800">Administrator Access</td>
                      <td>
                        <!--begin::Checkbox-->
                        <label
                            class="
                              form-check
                              form-check-sm
                              form-check-custom
                              form-check-solid
                              me-9
                            "
                        >
                          <input
                              id="kt_roles_select_all"
                              class="form-check-input"
                              type="checkbox"
                              value=""
                          />
                          <span
                              class="form-check-label"
                              for="kt_roles_select_all"
                          >Select all</span
                          >
                        </label>
                        <!--end::Checkbox-->
                      </td>
                    </tr>
                    <!--end::Table row-->
                    <!--begin::Table row-->
                    <tr v-for="item in permissions" :key="item">
                      <!--begin::Label-->
                      <td class="text-gray-800">{{ item.name }}</td>
                      <!--end::Label-->
                      <!--begin::Input group-->
                      <td>
                        <!--begin::Wrapper-->
                        <div class="d-flex">
                          <!--begin::Checkbox-->
                          <label
                              class="
                                form-check
                                form-check-sm
                                form-check-custom
                                form-check-solid
                                me-5 me-lg-20
                              "
                          >
                            <input
                                v-model="roleForm.permissions"
                                :value="item.id"
                                class="form-check-input"
                                type="checkbox"
                            />
                          </label>
                          <!--end::Checkbox-->
                        </div>
                        <!--end::Wrapper-->
                      </td>
                      <!--end::Input group-->
                    </tr>
                    <!--end::Table row-->
                    </tbody>
                    <!--end::Table body-->
                  </table>
                  <!--end::Table-->
                </div>
                <!--end::Table wrapper-->
              </div>

              <!--end::Scroll-->
            </div>
            <!--end::Modal body-->

            <!--begin::Modal footer-->
            <div class="modal-footer flex-center">
              <!--begin::Button-->
              <button
                  id="kt_modal_add_role_cancel"
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

    <translation-model :object="transObject"/>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import {useI18n} from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import langs from "@/core/config/langs";
import {setCurrentPageBreadcrumbs} from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import {hideModal} from "@/core/helpers/dom";
import TranslationModel from "@/views/admin/components/translationModel";

export default defineComponent({
  name: "roles-list",
  components: {
    TranslationModel
    // KTModalCard
  },
  data() {
    return {
      LocalI18n: useI18n(),
      langs: langs,
      loading: false, //ref(useStore().getters.Submitted),
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
          name: "Actions",
          key: "actions",
        },
      ]),
      tableDataroles: [],
      permissions: [],
      ModelroleRef: (ref < null) | (HTMLFormElement > null),
      roleForm: {},
      roleError: [],
      isEditrole: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),
    };
  },
  created() {
    ApiService.get("admin/roles").then((data) => {
      this.tableDataroles = data.data.data;
      this.permissions = data.data.permissions;
    });

  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("roles"), [
      this.$t("cp"),
    ]);
  },
  methods: {
    openroleModelNew() {
      this.isEditrole = -1;
      this.roleForm = {};
    },
    openroleModelEdit(i) {
      this.isEditrole = i;
      this.roleForm = this.tableDataroles[i];
    },
    async submitroleForm() {
      this.loading = true;
      this.roleError = [];
      if (this.isEditrole > -1) {
        await ApiService.put(
            "admin/roles/" + this.tableDataroles[this.isEditrole].id,
            this.roleForm
        )
            .then((res) => {
              hideModal("kt_modal_form_role");
              this.$toast.success(this.$t("messages.success"));
              this.tableDataroles[this.isEditrole] = res.data.data;
            })
            .catch(() => {
              this.roleError = ApiService.errors;
            });
      } else {
        await ApiService.post("admin/roles", this.roleForm)
            .then((res) => {
              if (res.data.data) {
                this.$toast.success(this.$t("messages.success"));
                this.tableDataroles.push(res.data.data);
                hideModal("kt_modal_form_role");
              }
              this.loading = false;
            })
            .catch(() => {
              this.roleError = ApiService.errors;
              this.loading = false;
            });
      }
      this.loading = false;

    },

    async deleterole(i) {
      Swal.fire({
        title:
            this.$t("messages.areSureDeleted") +
            " ? ( " +
            this.tableDataroles[i].name +
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
          ApiService.delete("admin/roles/" + this.tableDataroles[i].id).then(
              () => {
                this.tableDataroles.splice(i, 1);
                Swal.fire(
                    this.$t("messages.delteted"),
                    this.$t("messages.hasBeenDeleted"),
                    "success"
                );
              }
          );
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
        hideModal(this.transFormModalRef);
        this.$toast.success(this.$t("messages.delteted"));
      });
      this.loading = false;
    },
  },
});
</script>
