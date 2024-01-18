<template>
  <div
    class="card mt-3 mb-6"
    v-if="this.order.itemsHistory && this.order.itemsHistory.length > 1"
  >
    <!--begin::Header-->
    <div class="card-header">
      <!--begin::Title-->
      <div class="card-title">
        <h2>{{ $t("History Items") }}</h2>
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
      <pre>{{this.order.itemsHistory}}</pre>
      <my-table
        :list="this.order.itemsHistory"
        :tableHeader="[
          { name: 'unit number', key: 'number' },
          { name: 'status', key: 'status' },
          { name: 'created_at', key: 'created_at' },
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
              "$" +
              item.number
            }}
          </a>
        </template>
        <template v-slot:cell-status="{ row: item }">
          <span
            v-if="this.$parent.status[item.status_id]"
            :class="this.$parent.status[item.status_id].class"
            class="btn btn-sm"
          >
            {{ this.$parent.status[item.status_id].name }}
          </span>
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
  name: "OrderItemsHistory",
  props: ["order"],
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
