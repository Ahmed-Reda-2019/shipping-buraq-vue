<template>
  <div v-if="!order.history || order.history.length == 0">
    <KTModalCard
      :description="$t('noData')"
      :title="$t('history')"
      image="/media/illustrations/sigma-1/n18.png"
    ></KTModalCard>
  </div>
  <div v-else class="card mb-6">
    <!--begin::Header-->
    <div class="card-header">
      <!--begin::Title-->
      <div class="card-title">
        <h2>{{ $t("history") }}</h2>
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
      <table
        class="table align-middle table-row-dashed fs-6 gy-5 mb-0 no-footer"
      >
        <!--begin::Table head-->
        <thead>
          <!--begin::Table row-->
          <tr
            class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0"
          >
            <th class="">#</th>
            <th class="">{{ $t("name") }}</th>
            <th class="">{{ $t("time") }}</th>
            <th>{{ $t("username") }}</th>
            <th>{{ $t("branch") }}</th>
            <th>{{ $t("note") }}</th>
          </tr>
          <!--end::Table row-->
        </thead>
        <tbody class="fw-bold text-gray-600">
          <tr
            v-for="(item, i) in order.history"
            :key="i"
            class="text-start text-gray-800 fw-bolder fs-7 text-uppercase gs-0"
          >
            <th>{{ order.history.length - i }}</th>
            <th class="min-w-125px">
              <span :class="item.status.class" class="btn btn-sm">
                {{ item.status.name }}
              </span>
            </th>
            <th class="min-w-125px">{{ formatDate(item.created_at) }}</th>
            <th class="min-w-125px">{{ item.user.name }}</th>
            <th class="min-w-125px">{{ item.branch }}</th>
            <th class="min-w-125px">{{ item.note }}</th>
          </tr>
        </tbody>
      </table>
    </div>

    <!--end::Card body-->
  </div>
</template>

<script>
import KTModalCard from "@/components/cards/Card.vue";
import moment from "moment";

export default {
  name: "OrderHistory",
  props: ["order"],
  components: {
    KTModalCard,
  },
  data() {
    return {
      loading: false,
      OrderNoteForm: {},
    };
  },
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
};
</script>
