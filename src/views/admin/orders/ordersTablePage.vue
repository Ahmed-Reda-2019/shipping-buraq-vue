<template>
  <my-table
    :list="list"
    :tableHeader="[
      { name: 'service', key: 'service' },
      { name: 'status', key: 'status' },
      { name: 'from', key: 'from' },
      { name: 'Payment', key: 'Payment' },
      { name: 'created_at', key: 'created_at' },
      { name: 'orderDate', key: 'orderDate' },
      { name: 'actions', key: 'actions' },
    ]"
  >
    <template v-slot:cell-service="{ row: item }">
      <div
        class="
          cursor-pointer
          d-flex
          justify-content-center
          align-content-center
          service-icon
        "
        @click="copyCode(item.code + `:1-${this.orsers[i].service_number}`)"
        v-html="item.service.icon"
      ></div>
    </template>
    <template v-slot:cell-lang="{ row: item }">
      {{ langs[item.lang].name }}
    </template>
    <template v-slot:cell-rate="{ row: item }">
      <template v-if="item.rate > 0">
        <i
          v-for="i in 5"
          :key="i"
          class="far fa-star"
          :class="{ 'text-warning': i <= item.rate }"
        >
        </i>
      </template>
    </template>
    <template v-slot:cell-created_at="{ row: item }">
      {{ formatDate(item.created_at) }}
    </template>
    <template v-slot:cell-code="{ row: item }">
      {{ item.shipment_code }}
    </template>
    <template v-slot:cell-user="{ row: item }">
      <template v-if="item.user.id">
        <router-link
          :to="{ name: 'user-view', params: { id: item.user.id } }"
          v-if="item.user.id"
        >
          {{ item.user.name }}
        </router-link>
      </template>
    </template>
    <template v-slot:cell-customer="{ row: item }">
      <template v-if="item.customer.id">
        <router-link
          :to="{
            name: 'customers-view',
            params: { customer: item.customer.id },
          }"
          v-if="item.user.id"
        >
          {{ item.customer }}
        </router-link>
      </template>
      <span v-else>
        {{ $t("visitor") }}
      </span>
    </template>
  </my-table>
</template>

<script>
import MyTable from "@/views/admin/components/myTable";
export default {
  name: "ordersTablePage",
  components: { MyTable },
  props: ["tableHeader", "page", "services"],
  computed: {
    list() {
      if (this.page && this.page.data) return this.page.data;
      return [];
    },
  },
  methods: {
    copyCode(code) {
      navigator.clipboard.writeText(code);
      this.$toast.success(this.$t("copied"));
    },
  },
};
</script>
