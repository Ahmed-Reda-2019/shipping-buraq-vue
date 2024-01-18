<template>
  <div
    id="kt_modal_form_user"
    ref="my-modal"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div id="kt_modal_add_Country_header" class="modal-header">
          <!--begin::Modal title-->
          <h2 v-if="this.$parent.isEdit > -1" class="fw-bolder">
            {{ $t("editUser") }}
          </h2>
          <h2 v-else class="fw-bolder">{{ $t("addUser") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_form_user_close"
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
        <el-form
          enctype="multipart/form-data"
          @submit.prevent="this.$parent.submitUserModelForm()"
        >
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
                  >{{ $t("username") }}
                </label>
                <el-form-item prop="name">
                  <el-input
                    v-model="this.$parent.ItemFormUser.username"
                    type="text"
                  />
                </el-form-item>
                <span
                  v-if="this.$parent.userError['username']"
                  class="text-danger"
                  >{{ this.$parent.userError["username"][0] }}</span
                >
              </div>
              <div class="fv-row mb-7">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("name") }}
                </label>
                <el-form-item prop="name">
                  <el-input
                    v-model="this.$parent.ItemFormUser.name"
                    type="text"
                  />
                </el-form-item>
                <span
                  v-if="this.$parent.userError['name']"
                  class="text-danger"
                  >{{ this.$parent.userError["name"][0] }}</span
                >
              </div>

              <div class="fv-row mb-7">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("email") }}
                </label>
                <el-form-item prop="name">
                  <el-input
                    v-model="this.$parent.ItemFormUser.email"
                    type="email"
                  />
                </el-form-item>
                <span
                  v-if="this.$parent.userError['email']"
                  class="text-danger"
                  >{{ this.$parent.userError["email"][0] }}</span
                >
              </div>
              <div class="fv-row mb-7">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("phone") }}
                </label>
                <el-form-item prop="name">
                  <el-input
                    v-model="this.$parent.ItemFormUser.phone"
                    type="tel"
                  />
                </el-form-item>
                <span
                  v-if="this.$parent.userError['phone']"
                  class="text-danger"
                  >{{ this.$parent.userError["phone"][0] }}</span
                >
              </div>
              <div class="fv-row mb-7">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("address") }}
                </label>
                <el-form-item prop="name">
                  <el-input
                    v-model="this.$parent.ItemFormUser.address"
                    type="text"
                  />
                </el-form-item>
                <span
                  v-if="this.$parent.userError['address']"
                  class="text-danger"
                  >{{ this.$parent.userError["address"][0] }}</span
                >
              </div>
              <div class="fv-row mb-7">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("password") }}
                </label>
                <el-form-item prop="name">
                  <el-input
                    v-model="this.$parent.ItemFormUser.password"
                    type="password"
                  />
                </el-form-item>
                <span
                  v-if="this.$parent.userError['password']"
                  class="text-danger"
                  >{{ this.$parent.userError["password"][0] }}</span
                >
              </div>

              <div class="d-flex flex-column mb-7 fv-row">
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">{{ $t("status") }}</span>
                </label>
                <select
                  v-model="this.$parent.ItemFormUser.status"
                  class="form-select"
                >
                  <option value="1">{{ $t("yes") }}</option>
                  <option value="0">{{ $t("no") }}</option>
                </select>
                <span
                  v-if="this.$parent.userError['status']"
                  class="text-danger"
                  >{{ this.$parent.userError["status"][0] }}</span
                >
              </div>
              <div class="d-flex flex-column mb-7 fv-row">
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">{{ $t("role") }}</span>
                </label>
                <select
                  v-model="this.$parent.ItemFormUser.role_id"
                  class="form-select"
                >
                  <option
                    v-for="role in this.$parent.usersRoles"
                    :key="role.id"
                    :value="role.id"
                  >
                    {{ role.title }}
                  </option>
                </select>
                <span
                  v-if="this.$parent.userError['role_id']"
                  class="text-danger"
                  >{{ this.$parent.userError["role_id"][0] }}</span
                >
              </div>

              <div class="fv-row mb-7">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("Avatar") }}
                </label>
                <input
                  ref="profile"
                  class="form-control"
                  type="file"
                  @change="this.$parent.handleFileUpload($event, 'profile')"
                />
                <span
                  v-if="this.$parent.userError['profile']"
                  class="text-danger"
                  >{{ this.$parent.userError["profile"][0] }}</span
                >
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
              :data-kt-indicator="this.$parent.loading ? 'on' : null"
              :disabled="this.$parent.loading"
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
</template>

<script>
export default {};
</script>
