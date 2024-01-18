<template>
  <div
    v-if="list && (list.length > 0 || Object.keys(list).length)"
    class="table-responsive"
  >
    <table
      class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
    >
      <!--begin::Table head-->
      <thead>
        <!--begin::Table row-->
        <tr
          class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0"
          role="row"
        >
          <template v-for="(cell, i) in tableHeader" :key="i">
            <th
              :class="[ (tableHeader.length - 1 == ii ? 'text-end' : '') ]"
            >
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
          <tr v-show=" !search ||
                      item.name.toLocaleLowerCase().includes(search)
                    ">
            <template v-for="(cell, ii) in tableHeader" :key="ii">
              <td
                  :class="[ (tableHeader.length - 1 == ii ? 'text-end' : '') , cell.class]"
                >
                <slot :index="i" :name="`cell-${cell.key}`" :row="item">
                  {{ item[cell.key] }}
                </slot>
              </td>
            </template>
            <!--end::Item=-->
          </tr>
        </template>
      </tbody>
      <!--end::Table body-->
    </table>
  </div>

  <div v-else>
    <KTModalCard
      :button-text="btn !== undefined ? btn : $t('Add New')"
      :description="desc ? desc : $t('noData')"
      :title="title ? title : $t('Welcome')"
      image="/media/illustrations/sigma-1/n18.png"
      :modal-id="modal"
    ></KTModalCard>
  </div>
</template>

<script>
import KTModalCard from "@/components/cards/Card.vue";

export default {
  name: "myTable",
  props: ["tableHeader", "modal", "title", "desc", "list", "btn", "prop" , 'search'],
  components: { KTModalCard },
};
</script>
