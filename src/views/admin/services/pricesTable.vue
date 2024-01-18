<template>
  <div v-if="tableDataservicesPrices.length == 0">
    <KTModalCard
      :button-text="$t('addservicesPrices')"
      :description="$t('noData')"
      :title="$t('areaservicesPrices')"
      image="/media/illustrations/sigma-1/n18.png"
      modal-id="kt_modal_services_prices_item"
    ></KTModalCard>
  </div>

  <div v-else class="table-responsive">
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
          <th v-if="withCustomer" class="min-w-150px">{{ $t("customer") }}</th>
          <th class="min-w-150px">{{ $t("from") }}</th>
          <th class="min-w-125px">{{ $t("to") }}</th>
          <th class="min-w-125px">{{ $t("price") }}</th>
          <th v-if="withCustomer" class="min-w-125px">
            {{ $t("bussnessPrice") }}
          </th>
          <th class="text-end min-w-70px">
            {{ $t("actions") }}
          </th>
        </tr>
        <!--end::Table row-->
      </thead>
      <!--end::Table head-->
      <!--begin::Table body-->
      <tbody class="fw-bold text-gray-800">
        <tr v-for="(item, i) in tableDataservicesPrices" :key="i">
          <td v-if="withCustomer" class="d-flex align-items-center">
            <!--begin:: Avatar -->
            <template v-if="item.customer">
              <div
                class="symbol symbol-circle symbol-50px overflow-hidden me-3"
              >
                <router-link
                  :to="{
                    name: 'customers-view',
                    params: { customer: item.customer.id },
                  }"
                >
                  <div class="symbol-label">
                    <img :src="item.customer.logo" class="w-100" />
                  </div>
                </router-link>
              </div>
              <!--end::Avatar-->
              <!--begin::User details-->
              <div class="d-flex flex-column">
                <router-link
                  :to="{
                    name: 'customers-view',
                    params: { customer: item.customer.id },
                  }"
                  class="text-gray-800 text-hover-primary mb-1"
                >
                  {{ item.customer.name }}
                </router-link>
                <span>{{ item.customer.email }}</span>
              </div>
              <!--begin::User details-->
            </template>
          </td>
          <td>
            {{ item.fromArea }}
          </td>
          <td>
            {{ item.toArea }}
          </td>
          <td>
            <label class="w-150px">{{ item.price_customer }}</label>
          </td>
          <td v-if="!withCustomer">
            <label class="w-150px">{{ item.price_business }}</label>
          </td>

          <td class="text-end">
            <!--begin::Action-->
            <a
              class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
              data-bs-target="#kt_modal_services_prices_item"
              data-bs-toggle="modal"
              @click="$emit('edit', item, i, withCustomer)"
            >
              <span class="svg-icon svg-icon-primary svg-icon-2x">
                <svg
                  height="24px"
                  version="1.1"
                  viewBox="0 0 24 24"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="none"
                    stroke-width="1"
                  >
                    <rect height="24" width="24" x="0" y="0" />
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
                  </g>
                </svg>
              </span>
            </a>
            <a
              class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
              @click="deleteservicesPrices(i)"
            >
              <i class="icon-xl fas fa-trash-alt"></i>
            </a>

            <!--end::Action-->
          </td>
        </tr>
      </tbody>
      <!--end::Table body-->
    </table>
    <!--end::Table-->
  </div>
  <pagnation
    v-model:pageNumber="filters.page"
    :page="tableDataservicesPricesPage"
    @change="loadData"
  ></pagnation>
</template>

<script>
import Pagnation from "@/components/pagnation";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import KTModalCard from "@/components/cards/Card.vue";
import { useRoute } from "vue-router";

export default {
  name: "pricesTable",
  props: ["withCustomer"],
  emits: ["edit"],
  data() {
    return {
      tableDataservicesPricesPage: {},
      filters: {
        page: 1,
      },
      url: "",
      loading: false,
    };
  },
  components: { Pagnation, KTModalCard },
  async created() {
    if (this.withCustomer)
      this.url =
        "admin/service/prices/" + useRoute().params.Id + "/withCustomer";
    else this.url = "admin/service/prices/" + useRoute().params.Id;
    this.loadData();
  },
  methods: {
    async loadData(page = 0) {
      if (page > 0) this.filters.page = page;
      this.loading = true;
      await ApiService.query(this.url, this.filters).then((data) => {
        if (data.status == 200) this.tableDataservicesPricesPage = data.data;
      });
      this.loading = false;
    },
    async deleteservicesPrices(i) {
      let tempPrice = this.tableDataservicesPricesPage.data[i];
      // if (this.withCustomer) {
      //   tempPrice = this.tableDataservicesPrices[i];
      // } else
      //   tempPrice = this.tableDataservicesPrices[i];

      Swal.fire({
        title: this.$t("messages.areSureDeleted") + " ? ",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("messages.sureDeleted"),
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete("admin/servicep-prices/" + tempPrice.id).then(
            (res) => {
              this.tableDataservicesPricesPage.data.splice(i, 1);
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
  },
  computed: {
    tableDataservicesPrices() {
      if (this.tableDataservicesPricesPage.data)
        return this.tableDataservicesPricesPage.data;
      return [];
    },
    countires() {
      if (window.countires) return window.countires;
      return [];
    },
  },
};
</script>
