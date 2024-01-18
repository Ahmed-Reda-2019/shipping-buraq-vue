<template>
  <div class="h-5px w-100 bg-light mb-3 d-none">
    <div
      :class="getClass"
      :style="'width: ' + getPercent + '%;'"
      aria-valuemax="100"
      aria-valuemin="0"
      aria-valuenow="50"
      class="rounded h-5px"
      role="progressbar"
    ></div>
  </div>
</template>

<script>
export default {
  name: "progressbar",
  props: ["percent"],
  computed: {
    getClass() {
      switch (Math.ceil(this.percent / 10) * 10) {
        case 100:
        case 90:
        case 80:
          return "bg-success";
        case 70:
        case 60:
          return "bg-primary";
        case 50:
        case 40:
          return "bg-info";
        case 30:
        case 20:
          return "bg-warning";
        default:
          return "bg-danger";
      }
    },
    getPercent() {
      if (this.percent > 100) {
        return 100;
      }
      return this.percent;
    },
  },
};
</script>
