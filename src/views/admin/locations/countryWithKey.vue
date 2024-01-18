<template>
  <div class="w-100">
    <!--begin::Label-->
    <label class="FormL-label fw-bold mb-2 fs-5 text-gray-700 d-block">{{
      word
    }}</label>
    <!--end::Label-->
    <!--begin::Select-->
    <el-select v-model="form[keyy]" class="w-100" filterable>
      <el-option
        v-for="item in countires"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <!--end::Select-->
    <span v-if="FormLErrors && FormLErrors[key]" class="text-danger mt-5">{{
      FormLErrors[key][0]
    }}</span>
  </div>
</template>

<script>
import Location from "@/core/data/Location";

export default {
  name: "country-with-key",
  props: ["FormData", "FormLErrors", "keyy", "obj", "word"],
  data() {
    return {
      countires: [],
      counteis: [],
      FormL: {},
      key: null,
    };
  },
  created() {
    Location.getCountries().then(() => {
      this.countires = Location.$counries;
    });

  },
  methods: {},
  watch: {
    async FormData(newVal, oldVal) {
      this.FormL = newVal;
    },
  },
  computed: {
    form() {
      if (this.$parent[this.obj]) return this.$parent[this.obj];
      return this.FormL;
    },
  },
};
</script>
