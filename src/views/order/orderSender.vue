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
      <th>{{ $t("Sender Name") }}</th>
      <th>{{ order.sender_name }}</th>
    </tr>
    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Sender Email") }}</th>
      <th>{{ order.sender_email }}</th>
    </tr>
    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Sender Phone") }}</th>
      <th>{{ order.sender_phone }}</th>
    </tr>
    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Sender address") }}</th>
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
      <th>{{ order.sender_address }}</th>
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
      <th>{{ order.sender_zip }}</th>
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
      <th>{{ order.sender_floor }}</th>
    </tr>

    <tr
        class="
                            fw-bold
                            fs-6
                            text-gray-800
                            border-bottom border-gray-200
                          "
    >
      <th>{{ $t("Deliver To Branch") }}</th>
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
  name: "orderSender",
  props:['order']
}
</script>