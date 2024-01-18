<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->
      <div class="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">
        <div v-if="tableContacts.length == 0">
          <KTModalCard
              :description="$t('noData')"
              :title="$t('Welcome')"
              image="/media/illustrations/sigma-1/n18.png"
          ></KTModalCard>
        </div>
        <div v-else class="card card-flush pt-3 mb-5 mb-xl-10">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("Contacts") }}</h2>
            </div>
            <!--begin::Card title-->
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
                <table
                    class="table align-middle table-row-dashed fs-6 gy-4 mb-0"
                >
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
                    <th>{{ $t("email") }}</th>
                    <th>{{ $t("Subject") }}</th>
                    <th>{{ $t("Date") }}</th>
                    <th class="text-center">{{ $t("actions") }}</th>
                  </tr>
                  <!--end::Table row-->
                  </thead>
                  <!--end::Table head-->
                  <!--begin::Table body-->
                  <tbody class="fw-bold text-gray-800">
                  <tr v-for="(item, i) in tableContacts" :key="i">
                    <td>
                      <label>{{ item.name }}</label>
                    </td>
                    <td>
                      <label>{{ item.email }}</label>
                    </td>
                    <td>
                      <label>{{ item.subject }}</label>
                    </td>
                    <td>
                      <label>{{ formatDate(item.created_at) }}</label>
                    </td>

                    <td class="text-end">
                      <a
                          class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                          data-bs-target="#kt_modal_1"
                          data-bs-toggle="modal"
                          @click="openMessage(item)"
                      >
                        <i class="icon-xl fas far fa-eye"></i>
                      </a>

                      <a
                          class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                          @click="deleteCat(i)"
                      >
                        <i class="icon-xl fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                  <!--end::Table body-->
                </table>
              </div>
              <!--end::Product table-->
            </div>
            <!--end::Section-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>
  </div>
  <div id="kt_modal_1" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ $t("Message") }} : {{ contatFrom.name }}
          </h5>

          <!--begin::Close-->
          <div
              aria-label="Close"
              class="btn btn-icon btn-sm btn-active-light-primary ms-2"
              data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-2x"></span>
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">
          <p>{{ contatFrom.message }}</p>
        </div>

        <div class="modal-footer">
          <button class="btn btn-light" data-bs-dismiss="modal" type="button">
            {{ $t("close") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KTModalCard from "@/components/cards/Card.vue";
import {defineComponent, ref} from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import {setCurrentPageBreadcrumbs} from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import moment from "moment";

export default defineComponent({
  name: "contacts-list",
  data() {
    return {
      loading: false, //ref(useStore().getters.Submitted),
      tableContacts: [],
      contatFrom: {},
    };
  },
  components: {
    KTModalCard,
  },
  created() {
    ApiService.get("admin/crm/contacts").then((data) => {
      this.tableContacts = data.data.data;
    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Contacts"), [this.$t("cp")]);
  },
  methods: {
    async deleteCat(i) {
      Swal.fire({
        title:
            this.$t("messages.areSureDeleted") +
            " ? ( " +
            this.tableContacts[i].name +
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
              "admin/crm/contacts/" + this.tableContacts[i].id
          ).then((res) => {
            this.tableContacts.splice(i, 1);
            Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
            );
          });
        }
      });
    },
    openMessage(item) {
      this.contatFrom = item;
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
});
</script>
