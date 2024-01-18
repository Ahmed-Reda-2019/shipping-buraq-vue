<script lang="ts">
import {defineComponent} from 'vue'
import IndebtednessStatus from "@/views/admin/components/indebtednessStatus.vue";

export default defineComponent({
  name: "clientWithdrawCard",
  components: {IndebtednessStatus},
  props:['item' ,'index' , 'loading']
})
</script>

<template>
  <div
       class="card card-flush py-4 flex-row-fluid" >
    <!--begin::Card header-->
    <div class="card-header">
      <div class="card-title">
        <h2> ({{index+1}}){{  $t("client Withdraws") }}</h2>
      </div>
      <div class="card-toolbar">
        <indebtedness-status :status_id="item.status_id" />
      </div>
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body pt-0">
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table align-middle table-row-bordered mb-0 fs-6 gy-5 min-w-300px">
          <!--begin::Table body-->
          <tbody class="fw-bold text-gray-600">
          <tr>
            <td class="text-muted">
              {{ $t("from Branch")}}
            </td>
            <td class="fw-bolder text-end">
              {{ item.branch.name}}
            </td>
            <td class="text-muted">
              {{ $t("from User")}}
            </td>
            <td class="fw-bolder text-end">
              {{ item.user.name}}
              ({{ item.user.id}})
            </td>
          </tr>

          <tr>
            <td class="text-muted">
              {{ $t("Customer")}}
            </td>
            <td class="fw-bolder text-end">
              <template v-if="item.customer">
                (({{ item.customer.code }}))
                {{ item.customer.name }}
              </template>
            </td>

            <td class="text-muted">
              {{ $t("total")}}
            </td>
            <td class="fw-bolder text-end">
              {{ item.amount }} $
            </td>
          </tr>

          <tr>
            <td class="text-muted">
              {{ $t("to Branch")}}
            </td>
            <td class="fw-bolder text-end">
              {{ item.to_branch.title}}
            </td>
            <td class="text-muted" >
              {{ $t("approved User")}}
            </td>
            <td class="fw-bolder text-end">
              <template v-if="item.approval">
                {{ item.approval.name}}
                ({{ item.approval.id}})
              </template>
              <span v-else>-</span>
            </td>
          </tr>

          <tr v-if="item.status_id == 0">
            <td rowspan="2">
              <a class="btn btn-sm btn-light-success"
                 :disabled="loading" @click="$emit('updateStatus', index  , 1)">
                {{$t('accept request')}}
              </a>
            </td>
            <td rowspan="2">
              <a class="btn btn-sm btn-light-danger"
                 :disabled="loading" @click="$emit('updateStatus' ,  index  ,5)">
                {{$t('reject request')}}
              </a>
            </td>
          </tr>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
    </div>
    <!--end::Card body-->
  </div>

</template>

<style scoped>

</style>
