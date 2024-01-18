<template>
  <div class="w-100">
    <div class="mb-10">
      <!--begin::Label-->
      <label class="FormL-label fw-bold mb-3 fs-6 text-gray-700 d-block">{{
        $t("Branch Countries")
        }}</label>
      <!--end::Label-->
      <!--begin::Select-->
      <el-select v-model="FormL.countries" class="w-100" filterable multiple>
        <el-option
            v-for="item in countires"
            :key="item.id"
            :label="item.name"
            :value="item.id"
        >
        </el-option>
      </el-select>
      <!--end::Select-->
    </div>
    <span v-if="FormLErrors && FormLErrors['county_id']" class="text-danger">{{
      FormLErrors["county_id"][0]
    }}</span>
  </div>
</template>

<script>
import ApiService from "@/core/services/ApiService";

export default {
  name: "countries",
  props: ["FormData", "FormLErrors"],
  data() {
    return {
      countires: [],
      counteis: [],
      FormL: {},
    };
  },
  created() {
    ApiService.get("site/General/countries").then((res) => {
      this.countires = res.data;
    });
  },
  methods: {
    getCounties(id = null) {
      let tempId = this.FormL.country_id;
      if (parseInt(tempId) > 0)
        ApiService.get("site/locations/counties/" + tempId).then((res) => {
          if (res.data.counteis) {
            this.counties = res.data.counteis;
          }
        });
    },
  },
  watch: {
    async FormData(newVal, oldVal) {
      this.FormL = newVal;
    },
  },
};
</script>
