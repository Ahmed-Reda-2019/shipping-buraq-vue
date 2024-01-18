<template>
  <div id="kt_content" class="content flex-row-fluid">
    <div
      class="
        d-flex
        flex-wrap flex-stack
        justify-content-sm-between justify-content-center
        p-2 bg-secondary
"
    >
      <!--bepenModelNewgin::Title-->
      <div class="d-flex flex-wrap align-items-center my-1">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="/media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            v-model="search"
            :placeholder="$t('Search')"
            class="form-control form-control-solid w-250px ps-15"
            type="text"
            autocomplete="off"
            @change="load(1)"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Controls-->
      <div class="d-flex flex-wrap my-1">
        <!--begin::Tab nav-->
        <ul class="nav nav-pills mb-2 mb-sm-0">
          <li class="nav-item m-0">
            <a
              class="
                btn btn-icon btn-light btn-color-muted btn-active-primary
                me-3
              "
              data-bs-toggle="tab"
              href="#kt_project_users_card_pane"
            >
              <span class="svg-icon svg-icon-2">
                <inline-svg src="/media/icons/duotune/general/gen024.svg" />
              </span>
            </a>
          </li>
          <li class="nav-item m-0">
            <a
              class="
                btn btn-icon btn-light btn-color-muted btn-active-primary
                me-3
                active
              "
              data-bs-toggle="tab"
              href="#kt_project_users_table_pane"
            >
              <span class="svg-icon svg-icon-2">
                <inline-svg src="/media/icons/duotune/abstract/abs015.svg" />
              </span>
            </a>
          </li>
          <li class="nav-item m-0">
            <a
              class="btn btn-primary"
              @click="openModelNew()"
              data-bs-target="#kt_modal_form_user"
              data-bs-toggle="modal"
            >
              <span class="svg-icon svg-icon-2">
                <inline-svg src="/media/icons/duotune/arrows/arr013.svg" />
              </span>
              {{ $t("addUser") }}
            </a>
          </li>
        </ul>
        <!--end::Tab nav-->
      </div>
      <!--end::Controls-->
    </div>

    <div class="tab-content">
      <!--begin::Tab pane-->
      <div id="kt_project_users_card_pane" class="tab-pane fade">
        <!--begin::Row-->
        <div v-if="tableDataUserPageData.data.length == 0">
          <KTModalCard
            :button-text="$t('addUser')"
            :description="$t('noData')"
            :title="$t('Welcome')"
            image="/media/illustrations/sigma-1/n18.png"
            modal-id="kt_modal_form_user"
          ></KTModalCard>
        </div>
        <div v-else class="row g-6 g-xl-9">
          <!--begin::Col-->
          <div
            v-for="(item, i) in tableDataUserPageData.data"
            :key="i"
            class="col-md-6 col-xxl-4"
          >
            <!--begin::Card-->
            <div class="card">
              <!--begin::Card body-->
              <div class="card-body d-flex flex-center flex-column pt-12 p-9">
                <!--begin::Avatar-->
                <div class="symbol symbol-65px symbol-circle mb-5">
                  <span
                    class="
                      symbol-label
                      fs-2x
                      fw-bold
                      text-primary
                      bg-light-primary
                    "
                    >{{ item.username.charAt() }}</span
                  >
                  <!--                  <div class="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>-->
                </div>
                <!--end::Avatar-->
                <!--begin::Name-->
                <a
                  class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                  href="#"
                  >{{ item.username }}</a
                >
                <!--end::Name-->
                <!--begin::Position-->
                <div class="fw-bold text-gray-400 mb-6">{{ item.email }}</div>
                <!--end::Position-->
                <!--begin::Info-->
                <div class="d-flex flex-center flex-wrap">
                  <!--begin::Stats-->
                  <div
                    class="
                      border border-gray-300 border-dashed
                      rounded
                      min-w-80px
                      py-3
                      px-4
                      mx-2
                      mb-3
                    "
                  >
                    <div class="fs-6 fw-bolder text-gray-700 text-center">
                      <span v-if="item.branche != ''">
                        {{ item.branche }}
                      </span>
                      <span v-else> - </span>
                    </div>
                  </div>
                  <!--end::Stats-->
                  <!--begin::Stats-->
                  <div
                    :class="
                      item.status == 1
                        ? 'badge badge-light-success'
                        : 'badge badge-light-danger'
                    "
                    class="
                      border border-gray-300 border-dashed
                      rounded
                      min-w-80px
                      py-3
                      px-4
                      mx-2
                      mb-3
                    "
                  >
                    <span v-if="item.status == 1"> {{ $t("active") }} </span>
                    <span v-else>{{ $t("unactive") }}</span>
                  </div>
                  <!--end::Stats-->
                  <!--begin::Stats-->
                  <div
                    class="
                      border border-gray-300 border-dashed
                      rounded
                      min-w-80px
                      py-3
                      px-4
                      mx-2
                      mb-3
                    "
                  >
                    <div class="fs-6 fw-bolder text-gray-700 text-center">
                      {{ item.role.title }}
                    </div>
                  </div>
                  <!--end::Stats-->
                </div>
                <div class="d-flex flex-center flex-wrap">
                  <router-link
                    :to="{ name: 'user-view', params: { id: item.id } }"
                    class="
                      btn btn-icon btn-light-success
                      mt-0
                      mb-0
                      m-2
                      rounded
                      min-w-80px
                      py-3
                      px-4
                      mx-2
                      mb-3
                    "
                  >
                    <i class="icon-xl fas far fa-eye"></i>
                  </router-link>
                  <a
                    class="
                      btn btn-icon btn-light-primary
                      mt-0
                      mb-0
                      m-2
                      rounded
                      min-w-80px
                      py-3
                      px-4
                      mx-2
                      mb-3
                    "
                    data-bs-target="#kt_modal_form_user"
                    data-bs-toggle="modal"
                    @click="openModelEdit(i)"
                  >
                    <span class="svg-icon svg-icon-primary svg-icon-2x">
                      <inline-svg src="/media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>
                  <a
                    class="
                      btn btn-icon btn-light-danger
                      mt-0
                      mb-0
                      m-2
                      rounded
                      min-w-80px
                      py-3
                      px-4
                      mx-2
                      mb-3
                    "
                    @click="deleteUser(i)"
                  >
                    <i class="icon-xl fas fa-trash-alt"></i>
                  </a>
                </div>
                <!--end::Info-->
              </div>
              <!--end::Card body-->
            </div>
            <!--end::Card-->
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->
      </div>
      <!--end::Tab pane-->

      <!--begin::Tab pane-->
      <div
        id="kt_project_users_table_pane"
        class="tab-pane fade show active position-relative"
      >
        <div class="blockui-overlay bg-dark bg-opacity-25" v-if="loading">
          <span class="spinner-border text-primary"></span>
        </div>
        <!--begin::Card-->
        <div v-if="tableDataUserPageData.data.length == 0">
          <KTModalCard
            :button-text="$t('addUser')"
            :description="$t('noData')"
            :title="$t('Welcome')"
            image="/media/illustrations/sigma-1/n18.png"
            modal-id="kt_modal_form_user"
          ></KTModalCard>
        </div>
        <div v-else class="card card-flush">
          <!--begin::Card body-->
          <div class="card-body pt-0">
            <!--begin::Table container-->
            <div class="table-responsive mt-10">
              <!--begin::Table-->
              <table
                id="kt_project_users_table"
                class="
                  table table-row-bordered table-row-dashed
                  gy-4
                  align-middle
                  fw-bolder
                "
              >
                <!--begin::Head-->
                <thead class="fs-7 text-gray-400 text-uppercase">
                  <tr>
                    <th class="">{{ $t("username") }}</th>
                    <th class="">{{ $t("phone") }}</th>
                    <th class="">{{ $t("address") }}</th>
                    <th class="">{{ $t("branch") }}</th>
                    <th class="">{{ $t("role") }}</th>
                    <th class="">{{ $t("status") }}</th>
                    <th class="min-w-175px">{{ $t("actions") }}</th>
                  </tr>
                </thead>
                <!--end::Head-->
                <!--begin::Body-->
                <tbody class="fs-6">
                  <tr v-for="(item, i) in tableDataUserPageData.data" :key="i">
                    <td>
                      <div class="d-flex align-items-center">
                        <!--begin::Wrapper-->
                        <div class="me-5 position-relative">
                          <!--begin::Avatar-->
                          <div class="symbol symbol-35px symbol-circle">
                            <span
                              class="
                                symbol-label
                                bg-light-danger
                                text-danger
                                fw-bold
                              "
                              >{{ item.username.charAt(0) }}</span
                            >
                          </div>
                          <!--end::Avatar-->
                        </div>
                        <!--end::Wrapper-->
                        <!--begin::Info-->
                        <div class="d-flex flex-column justify-content-center">
                          <a
                            class="mb-1 text-gray-800 text-hover-primary"
                            href=""
                            >{{ item.username }}</a
                          >
                          <div class="fw-bold fs-6 text-gray-400">
                            {{ item.email }}
                          </div>
                        </div>
                        <!--end::Info-->
                      </div>

                      <!--end::User-->
                    </td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.address }}</td>
                    <td>
                      <span v-if="item.branche != ''">
                        {{ item.branche }}
                      </span>
                      <span v-else> - </span>
                    </td>
                    <td>{{ item.role.title }}</td>
                    <td>
                      <span
                        v-if="item.status == 1"
                        class="badge badge-light-success"
                      >
                        {{ $t("active") }}
                      </span>
                      <span v-else class="badge badge-light-danger">{{
                        $t("unactive")
                      }}</span>
                    </td>
                    <td class="text-end">
                      <router-link
                        :to="{ name: 'user-view', params: { id: item.id } }"
                        class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                      >
                        <i class="icon-xl fas far fa-eye"></i>
                      </router-link>
                      <a
                        class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                        data-bs-target="#kt_modal_form_user"
                        data-bs-toggle="modal"
                        @click="openModelEdit(i)"
                      >
                        <span class="svg-icon svg-icon-primary svg-icon-2x">
                          <inline-svg
                            src="/media/icons/duotune/art/art005.svg"
                          />
                        </span>
                      </a>
                      <a
                        class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                        @click="deleteUser(i)"
                      >
                        <i class="icon-xl fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                <!--end::Body-->
              </table>
              <!--end::Table-->
            </div>
            <!--end::Table container-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Card-->
      </div>
      <!--end::Tab pane-->
    </div>

    <pagnation
      v-model:pageNumber="userPage"
      :page="tableDataUserPageData"
      @change="load"
    ></pagnation>
  </div>

  <modal></modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import KTModalCard from "@/components/cards/Card.vue";
import Pagnation from "@/components/pagnation";
import modal from "./modal";

export default defineComponent({
  name: "users-list",
  components: {
    Pagnation,
    KTModalCard,
    modal,
  },
  data() {
    return {
      tableDataUserPageData: { data: [] },
      usersRoles: [],
      usersBranchs: [],
      userPage: 1,
      search: "",
      loading: true,
      ItemFormUser: {},
      userError: [],
      isEdit: -1,
      files: [],
    };
  },
  created() {
    this.load();
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("users"), [this.$t("cp")]);
  },
  methods: {
    load(page = 0) {
      this.loading = true;
      this.tableDataUserPageData = { data: [] };
      if (page > 0) this.userPage = page;
      let data = { page: this.userPage, search: this.search };
      ApiService.query("admin/users", data).then((data) => {
        this.tableDataUserPageData = data.data.users;
        if (data.data.branchs) this.usersBranchs = data.data.branchs;
        if (data.data.roles) this.usersRoles = data.data.roles;
        this.loading = false;
      });
    },
    handleFileUpload(event,name) {
      this.files[name] = event.target.files[0];
    },
    openModelNew() {
      this.userError = [];
      this.isEdit = -1;
      this.ItemFormUser = {};
    },
    openModelEdit(i) {
      this.userError = [];
      this.isEdit = i;
      this.ItemFormUser = this.tableDataUserPageData.data[i];
    },
    async submitUserModelForm() {
      this.loading = true;
      this.userError = [];
      const formData = new FormData();
      if (this.ItemFormUser.profile) delete this.ItemFormUser.profile;


      Object.keys(this.ItemFormUser).forEach((value, key) => {
        formData.append(value, this.ItemFormUser[value]);
      });
      Object.keys(this.files).forEach((value, key) => {
        formData.append(value, this.files[value]);
        if (this.files[value]) this.ItemFormUser[value] = this.files[value];
      });
      let url = "admin/users";
      if (this.isEdit > -1) {
        formData.append("_method", "PUT");
        url = "admin/users/" + this.tableDataUserPageData.data[this.isEdit].id;
      }
      await ApiService.post(url, formData)
        .then((res) => {
          if (res.data.data) {
            if (this.isEdit > -1)
              this.tableDataUserPageData.data[this.isEdit] = res.data.data;
            else this.tableDataUserPageData.data.push(res.data.data);

            this.$toast.success(this.$t("messages.success"));
            hideModal("kt_modal_form_user");
          }
        })
        .catch(() => {
          this.userError = ApiService.errors;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async deleteUser(i) {
      this.loading = true;
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDataUserPageData.data[i].name +
          " )",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("messages.sureDeleted"),
      })
        .then((result) => {
          if (result.isConfirmed) {
            ApiService.delete(
              "admin/users/" + this.tableDataUserPageData.data[i].id
            ).then((res) => {
              this.tableDataUserPageData.data.splice(i, 1);
              Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
              );
            });
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
</script>
