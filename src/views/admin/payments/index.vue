<template>
  <currency></currency>
  <paymentMethods></paymentMethods>
</template>

<script>
import currency from "../settings/currency";
import paymentMethods from "../settings/paymentMethods";

export default {
  name: "index",
  components: {
    currency,
    paymentMethods,
  },
};
</script>

