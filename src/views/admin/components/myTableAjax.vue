<template>
  <div v-if="loading == true" class="blockui-overlay bg-dark bg-opacity-25">
    <span class="spinner-border text-primary"></span>
  </div>

  <template v-else>
    <div
      v-if="list && (list.length > 0 || Object.keys(list).length)"
      class="table-responsive"
    >
      <table
        class="
          table
          align-middle
          table-row-dashed
          fs-6
          gy-5
          dataTable
          no-footer
        "
      >
        <!--begin::Table head-->
        <thead>
          <!--begin::Table row-->
          <tr
            class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0"
            role="row"
          >
            <template v-for="(cell, i) in tableHeader" :key="i">
              <th colspan="1" rowspan="1" style="cursor: pointer" tabindex="0">
                {{ $t(cell.name) }}
              </th>
            </template>
          </tr>
          <!--end::Table row-->
        </thead>
        <!--end::Table head-->
        <!--begin::Table body-->
        <tbody class="fw-bold text-gray-600">
          <template v-for="(item, i) in list" :key="i">
            <tr class="odd">
              <template v-for="(cell, ii) in tableHeader" :key="ii">
                <td :class="{ 'text-end': tableHeader.length - 1 === ii }">
                  <slot :index="i" :name="`cell-${cell.key}`" :row="item">
                    {{ item[prop] }}
                  </slot>
                </td>
              </template>
              <!--end::Item=-->
            </tr>
          </template>
        </tbody>
        <!--end::Table body-->
      </table>
      <pagnation
        v-if="PageData.total"
        v-model:number="current_filters.page"
        :page="PageData"
        @change="loadData"
      ></pagnation>
    </div>
    <div v-else>
      <KTModalCard
        :button-text="btn !== undefined ? btn : $t('Add New')"
        :description="desc ? desc : $t('noData')"
        :title="title ? title : $t('Welcome')"
        image="/media/illustrations/sigma-1/n18.png"
      ></KTModalCard>
    </div>
  </template>
</template>

<script>
import KTModalCard from "@/components/cards/Card.vue";
import Pagnation from "@/components/pagnation";
import ApiService from "@/core/services/ApiService";

export default {
  name: "myTableAjax",
  props: ["url", "tableHeader", "modal", "title", "desc", "btn", "filters_key"],
  components: { Pagnation, KTModalCard },
  data() {
    return {
      page: 1,
      PageData: {},
      loading: true,
      current_filters: {
        page: 1,
      },
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData(page = 0) {
      if (!this.url) return;
      this.loading = true;
      if (page > 0) this.current_filters.page = page;
      await ApiService.query(this.url, this.filters)
        .then((data) => {
          this.PageData = data.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    list() {
      if (this.PageData && this.PageData.data) return this.PageData.data;
      return [];
    },
    filters() {
      if (this.filters_key && this.$parent[this.filters_key]) {
        return Object.assign(
          this.$parent[this.filters_key],
          this.current_filters
        );
      }
      return this.current_filters;
    },
  },
};
</script>
