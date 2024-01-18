<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "indebtednessStatus",
  props:['status_id']
})
</script>

<template>
  <span class="badge badge-warning" v-if="status_id == 0">{{$t('New')}}</span>
  <span class="badge badge-info" v-else-if="status_id == 1">{{$t('accepted')}}</span>
  <span class="badge badge-light-info" v-else-if="status_id == 2">{{$t('Payed From client')}}</span>
  <span class="badge badge-success" v-else-if="status_id == 3">{{$t('Done')}}</span>
  <span class="badge badge-danger" v-else>{{$t('Canceled')}}</span>
</template>

<style scoped>

</style>
