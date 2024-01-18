<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid order-2 order-lg-1 mb-10 mb-lg-0">
        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <div class="blockui-overlay bg-dark bg-opacity-25" v-if="loading">
            <span class="spinner-border text-primary"></span>
          </div>

          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("Shipment Containers") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <router-link
                :to="{ name: 'shipment-Container-view' }"
                class="btn btn-light-primary"
              >
                {{ $t("Add Shipment Container") }}
              </router-link>
            </div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <my-table
              :list="list"
              :btn="null"
              :tableHeader="[
                { name: 'container name', key: 'name' },
                { name: 'type', key: 'type' },
                { name: 'from', key: 'from' },
                { name: 'to', key: 'to' },
                // { name: 'percent', key: 'percent' },
                { name: 'status', key: 'status' },
                { name: 'actions', key: 'actions' },
              ]"
            >
              <template v-slot:cell-name="{ row: item }">
                {{ item.name }}
              </template>
              <template v-slot:cell-type="{ row: item }">
                {{ item.type }}
              </template>
              <template v-slot:cell-from="{ row: item }">
                {{ item.from }}
              </template>
              <template v-slot:cell-to="{ row: item }">
                {{ item.to }}
              </template>
              <template v-slot:cell-percent="{ row: item }">
                {{ item.percent }} %
              </template>

              <template v-slot:cell-status="{ row: item }">
                <template v-if="ContainerStatus[item.status]">
                  <span :class="'badge ' + ContainerStatus[item.status].class">
                    {{ ContainerStatus[item.status].name }}
                  </span>
                </template>
              </template>
              <template v-slot:cell-actions="{ row: item }">
                <router-link
                  :to="{
                    name: 'shipment-Container-view',
                    params: { id: item.id },
                  }"
                  class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                >
                  <i class="icon-xl fas far fa-eye"></i>
                </router-link>
              </template>
            </my-table>
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import ContainerStatus from "@/core/config/ContainerStatus";
import MyTable from "@/views/admin/components/myTable";

export default defineComponent({
  name: "OrderContainer",
  components: { MyTable },
  data() {
    return {
      ContainerStatus: ContainerStatus,
      list: [],
      loading: true, //ref(useStore().getters.Submitted),
    };
  },
  created() {

    ApiService.get("admin/shipments/orders/Container")
      .then((data) => {
        this.list = data.data.data;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Shipment Containers"), [this.$t("cp")]);
  },
  methods: {
    async deleteType(i) {
      this.loading = true;
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDataTypes[i].name +
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
            ApiService.delete("admin/Types/" + this.tableDataTypes[i].id).then(
              () => {
                this.tableDataTypes.splice(i, 1);
                Swal.fire(
                  this.$t("messages.delteted"),
                  this.$t("messages.hasBeenDeleted"),
                  "success"
                );
              }
            );
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
</script>
