<template>
  <div
    class="card mt-3"
    v-if="items "
  >
    <!--begin::Header-->
    <div class="card-header">
      <!--begin::Title-->
      <div class="card-title">
        <h2>{{ $t("order Invoices Items") }}</h2>
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
          v-if="items.length > 1"
        :list="items"
        :tableHeader="[
          { name: 'Name', key: 'name' },
          { name: 'Quantity', key: 'qty' },
          { name: 'price', key: 'price' },
          { name: 'total', key: 'total' },
          { name: 'text', key: 'text' },
          { name: 'status', key: 'status' },
          { name: 'Box', key: 'box' },
          { name: 'date', key: 'updated_at' },
        ]"
      >
        <template v-slot:cell-number="{ row: item }">
          <a
            class="text-gray-800 text-hover-primary fw-bolder cursor-pointer"
            @click="
              this.$parent.copy(
                this.order.code +
                  '$' +
                  item.number
              )
            "
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="/media/icons/duotune/general/gen054.svg" />
            </span>
            {{
              this.order.code +
              ":" +
              item.number +
              "-" +
              this.order.service_number
            }}
          </a>
        </template>
        <template v-slot:cell-status="{ row: item }">
          <template v-if="item.is_received > 0">
          <span class="btn btn-sm badge badge-success">
            {{ $t('received') }}
          </span>
            <span class="btn btn-sm badge badge-info" v-if="item.receiver">
              {{item.receiver.name}}
            </span>
            <span class="btn btn-sm btn btn-info">
              {{item.box_number}}
            </span>
          </template>
          <template v-else>{{$t('Not Received')}}</template>
        </template>
        <template v-slot:cell-box="{ row: item }">
          <template v-if="boxes[item.box_number]">
            <div class="fs-5 d-flex">
              <div class="flex-column">
                <p>{{ boxes[item.box_number].length }} M/</p>
                <p>{{ boxes[item.box_number].width }}M/</p>
              </div>
              <div>
                <p>{{ boxes[item.box_number].height }}M/</p>
                <p>{{ boxes[item.box_number].weight }}kg</p>
              </div>
              </div>

          </template>
        </template>
        <template v-slot:cell-updated_at="{ row: item }">
          {{ formatDate(item.updated_at) }}
        </template>
      </my-table>
      <h3 v-else>
        {{ $t('No invoice Items')}}
      </h3>
    </div>

    <!--end::Card body-->
  </div>
</template>

<script>
import moment from "moment";
import MyTable from "@/views/admin/components/myTable";

export default {
  name: "OrderInvoiceItems",
  props: ["items" , 'boxes'],
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
