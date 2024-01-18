<template>
  <div class="table-responsive">
    <table class="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
      <thead class="border-gray-200 fs-5 fw-bold bg-lighten">
      <tr>
        <th class="min-w-250px">{{$t('Location')}}</th>
        <th class="min-w-100px">{{$t('Status')}}</th>
        <th class="min-w-150px">{{$t('Created At')}}</th>
        <th class="min-w-150px">{{$t('Note')}}</th>
      </tr>
      </thead>
      <tbody class="fw-6 fw-bold text-gray-600">
      <tr v-for="(item, i) in history"
          :key="i">
        <td><a class="text-hover-primary text-gray-600">{{item.branch? item.branch : $t('Main Branch')}}</a></td>
        <td><span class="badge fs-7 fw-bolder btn-info" :class="'badge ' + item.status.class" >{{item.status.name}}</span></td>
        <td>{{formatDate(item.created_at)}}</td>
        <td>{{item.note}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";

export default {
name: "orderSiteHistory",
  props:['history'],
  methods:{
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    }
  }
}
</script>

<style scoped>

</style>
