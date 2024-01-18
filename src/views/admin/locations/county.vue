<template>
  <div class="w-100">
    <div class="mb-10">
      <!--begin::Label-->
      <label class="required FormL-label fw-bolder fs-6 text-gray-700 d-block">{{
        $t("country")
        }}</label>
      <!--end::Label-->
      <!--begin::Select-->
      <el-select
          v-model="FormL.country_id"
          @change="$emit('update:country_id', FormL.country_id)"
          class="w-100"
          filterable
          @visible-change="
          FormL.county_id = '';
          getCounties();
        "
      >
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
    <div v-if="FormL.country_id" class="mb-10">
      <!--begin::Label-->
      <label class="FormL-label fw-bolder fs-6 text-gray-700">{{
        $t("county")
        }}</label>
      <!--end::Label-->
      <!--begin::Select-->
      <el-select
          v-model="FormL.county_id"
          @change="$emit('update:county_id', FormL.county_id)"
          class="w-100"
          filterable
          value-key="id"
      >
        <el-option
            v-for="item in counties"
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
  name: "country",
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

    async getCounties11(id = null) {
      if (id != null)
        return ApiService.get("site/locations/counties/" + id).then((res) => {
          if (res.data.counteis) {
            this.counties = res.data.counteis;
            return Promise.resolve();
          }
        });
    },
  },
  watch: {
    async FormData(newVal, oldVal) {
      await this.getCounties11(newVal.country_id).then(() => {
        this.FormL = newVal;
      });
    },
  },
};
</script>
