<template>
  <div class="w-100">
    <div class="mb-10">
      <!--begin::Label-->
      <label class="FormL-label fw-bolder fs-6 text-gray-700 d-block">
        {{ word }} {{ $t("country") }}</label>
      <!--end::Label-->
      <!--begin::Select-->
      <el-select
          v-model="FormL[key_form]"
          class="w-100"
          filterable
          @change="change"
      >
        <el-option
            v-for="item in countries"
            :key="item.id"
            :label="item.name"
            :value="item.id"
        >
        </el-option>
      </el-select>
      <!--end::Select-->
    </div>
    <span v-if="Errors && Errors[key_form]" class="text-danger">{{
      Errors[key_form][0]
    }}</span>
  </div>
</template>

<script>
import Location from "@/core/data/Location";

export default {
  name: "country",
  props: ["word", "key_form", "Errors"],
  data() {
    return {
      countries: [],
      // counteis: [],
      FormL: {},
    };
  },
  async created() {
    // ApiService.get("site/General/countries").then((res) => {
    //   this.countires = res.data;
    // });
    this.countries = await Location.getCountries();
  },
  methods: {
    async change() {
      await this.$parent.fillOrder(this.FormL);
      this.$parent.calcPrice();
    },
  },
  watch: {
    async FormData(newVal, oldVal) {
      this.FormL = newVal;
    },
  },
};
</script>
