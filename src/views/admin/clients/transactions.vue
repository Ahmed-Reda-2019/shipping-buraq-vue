<script lang="ts">
import {defineComponent} from 'vue'
import MyTable from "@/views/admin/components/myTable.vue";
import moment from "moment/moment";

export default defineComponent({
  name: "transactions",
  components: {MyTable},
  props:['transactions'],
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
})
</script>

<template>
  <div
    class="card mt-3 mb-6"
    v-if="transactions && Object.keys(transactions).length > 1"
  >
    <!--begin::Header-->
    <div class="card-header">
      <!--begin::Title-->
      <div class="card-title">
        <h2>{{ $t("transactions") }}</h2>
      </div>
      <!--end::Title-->
      <!--begin::Toolbar-->
      <div class="card-toolbar">
        <!--begin::Tab nav-->
        <!--end::Tab nav-->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->
    <!--begin::Card body-->
    <div class="card-body table-responsive pb-5">
      <my-table
        :list="transactions"
        :tableHeader="[
          { name: 'branch', key: 'branch' },
          { name: 'type', key: 'type' },
          { name: 'amount', key: 'amount' },
          { name: 'order', key: 'order' },
          { name: 'created_at', key: 'created_at' },
        ]"
      >
        <template v-slot:cell-type="{ row: item }">
          <span class="badge " :class="{
            'badge-success': item.new_amount > item.old_amount,
            'badge-danger' : item.new_amount < item.old_amount,
          }">
            {{item.type}}
          </span>
        </template>
        <template v-slot:cell-branch="{ row: item }">
            {{item.branch? item.branch.name : ''}}
        </template>
        <template v-slot:cell-amount_value="{ row: item }">
            {{item.amount_value +' '+ item.amount_key}}
        </template>
        <template v-slot:cell-order="{ row: item }">
          #{{item.order_id}}
          {{item.order ? item.order.code : ''}}
        </template>

        <template v-slot:cell-created_at="{ row: item }">
          {{ formatDate(item.created_at) }}
        </template>
      </my-table>
    </div>

    <!--end::Card body-->
  </div>

</template>

<style scoped>

</style>
