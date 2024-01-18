<template>
  <div class="table-responsive border-bottom" v-if="list && (list.length > 0 || Object.keys(list).length)">
    <table class="table table-flush align-middle table-row-bordered table-row-solid m-0 gy-4 gs-9">
      <thead class="border-gray-200 fs-5 fw-bold bg-lighten">
      <tr>
        <th class="min-w-50px">#</th>
        <th class="min-w-100px">{{$t('Type')}}</th>
        <th class="min-w-150px">{{$t('Quantity')}}</th>
        <th class="min-w-150px">{{$t('Content')}}</th>
      </tr>
      </thead>
      <tbody class="fw-6 fw-bold text-gray-600">
      <tr v-for="(item , i) in list" :key="i">
        <td>{{ i }}</td>
        <td>
          <template v-if="item.type.name">
            {{item.type.name}}
          </template>
        </td>
        <td>{{item.quantity}}</td>
        <td>{{item.other_content}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
name: "orderItems",
  props:['list']
}
</script>

<style scoped>

</style>