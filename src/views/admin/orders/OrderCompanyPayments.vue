<template>
  <div
    class="card mt-3 mb-6"
    v-if="payments && payments.length > 1"
  >
    <!--begin::Header-->
    <div class="card-header">
      <!--begin::Title-->
      <div class="card-title">
        <h2>{{ $t("Company Payments") }}</h2>
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
        :list="payments"
        :tableHeader="[
          { name: 'invoice', key: 'invoice' },
          { name: 'amount', key: 'amount' },
          { name: 'official', key: 'official' },
          { name: 'payed', key: 'payed' },
          { name: 'note', key: 'note' },
          { name: 'created_at', key: 'created_at' },
        ]"
      >
        <template v-slot:cell-invoice="{ row: item }">
          #{{ item.invoice_id }}
          <br/>
          {{item.company  ?item.company.name : ''}}
        </template>
        <template v-slot:cell-amount="{ row: item }">
          {{item.amount + ' ' + item.amount_key + ' ('+ item.amount_rate + ')' }}
        </template>
        <template v-slot:cell-official="{ row: item }">
          <template v-if="item.vat_invoice == 0">{{$t('Not official')}}</template>
          <template v-else>{{ $t('official') }}</template>
        </template>

        <template v-slot:cell-payed="{ row: item }">
          <template v-if="item.payed_id == 0">{{$t('Not Payed')}}</template>
          <template v-else>${{ item.payed_id }}</template>
        </template>
        <template v-slot:cell-created_at="{ row: item }">
          {{ formatDate(item.created_at) }}
        </template>
      </my-table>
    </div>

    <!--end::Card body-->
  </div>
</template>

<script>
import moment from "moment";
import MyTable from "@/views/admin/components/myTable";

export default {
  name: "OrderCompanyPayments",
  props: ["order" , 'payments'],
  components: {
    MyTable,
  },
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
};
</script>
