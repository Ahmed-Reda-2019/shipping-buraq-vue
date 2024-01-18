<template>
  <div v-if="!list || list.length == 0">
    <KTModalCard
      :button-text="$t('addNote')"
      :description="$t('noData')"
      :title="$t('notes')"
      class="mt-6"
      image="/media/illustrations/sigma-1/n18.png"
      modal-id="kt_modal_add_note"
    ></KTModalCard>
  </div>
<div class="table-responsive" v-else>
  <table
      class="table align-middle table-row-dashed fs-6 gy-5 mb-0 no-footer"
  >
    <!--begin::Table head-->
    <thead>
    <!--begin::Table row-->
    <tr
        class="text-start text-gray-800 fw-bolder fs-7 text-uppercase gs-0"
    >
      <th>#</th>
      <th class="min-w-125px">{{ $t("time") }}</th>
      <th class="min-w-125px">{{ $t("username") }}</th>
      <th class="min-w-125px">{{ $t("Note") }}</th>
      <th class="min-w-125px">{{ $t("image") }}</th>
    </tr>
    <!--end::Table row-->
    </thead>
    <tbody class="fw-bold text-gray-600">
    <tr
        v-for="(item, iNote) in list"
        :key="iNote"
        class="text-start text-gray-800 fw-bolder fs-7 text-uppercase gs-0"
    >
      <td>{{ list.length - iNote }}</td>
      <td class="min-w-125px">{{ formatDate(item.created_at) }}</td>
      <td class="min-w-125px">{{ item.username }}</td>
      <td class="min-w-125px">{{ item.note }}</td>
      <td>
        <div class="symbol-group symbol-hover">
          <!--begin::Avatar-->
          <div
              class="symbol symbol-60px"
              :key="i"
              v-for="(file, i) in item.files"
          >
            <img :alt="file.ext" :src="file.src" />
          </div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</div>

</template>

<script>
import KTModalCard from "@/components/cards/Card.vue";
import { useI18n } from "vue-i18n";
import moment from "moment";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import JwtService from "@/core/services/JwtService";

export default {
  name: "OrderSiteNote",
  props: ["list"],
  components: {
    KTModalCard,
  },
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  }
};
</script>

<style scoped>
</style>