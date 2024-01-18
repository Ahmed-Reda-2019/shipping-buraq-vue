<template>
  <div class="table-responsive">
  <table
      class="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9"
  >
    <thead>
    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Receiver Name") }}</th>
      <th>{{ order.receiver_name }}</th>
    </tr>
    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Receiver Email") }}</th>
      <th>{{ order.receiver_email }}</th>
    </tr>
    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Receiver Phone") }}</th>
      <th>{{ order.receiver_phone }}</th>
    </tr>
    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Receiver address") }}</th>
      <th>
                            <span v-if="order.toAdrress">
                              {{ order.toAdrress }}
                            </span>
      </th>
    </tr>
    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Street Line") }}</th>
      <th>{{ order.receiver_address }}</th>
    </tr>

    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Post Code") }}</th>
      <th>{{ order.receiver_zip }}</th>
    </tr>
    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Floor") }}</th>
      <th>{{ order.receiver_floor }}</th>
    </tr>

    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Receipt From Branch") }}</th>
      <th>
                            <span v-if="order.receipt_from_branch == 1">
                              {{ $t("yes") }}
                            </span>
        <span v-else>
                              {{ $t("no") }}
                            </span>
      </th>
    </tr>
    </thead>
  </table>
  </div>
</template>

<script>
export default {
  name: "orderReceiver",
  props:['order']
}
</script>