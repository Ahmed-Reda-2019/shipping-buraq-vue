<template>
  <div class="w-100">
    <div class="mb-10">
      <!--begin::Label-->
      <label class="FormL-label fw-bolder fs-6 text-gray-700 d-block">{{
        $t("country")
      }}</label>
      <!--end::Label-->
      <!--begin::Select-->

      <el-select
        v-model="FormL[key_country]"
        :loading="loading"
        class="w-100"
        filterable
        @change="
          FormL[key_county] = null;
          getCounties();
          change();
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
    <span v-if="FormLErrors[key_country]" class="text-danger">{{
      FormLErrors[key_country][0]
    }}</span>

    <div v-if="FormL[key_country]" class="mb-10">
      <!--begin::Label-->
      <label class="FormL-label fw-bolder fs-6 text-gray-700">{{
        $t("county")  + $t("Optional")
      }}</label>
      <!--end::Label-->
      <!--begin::Select-->
      <el-select
        v-model="FormL[key_county]"
        :loading="loading"
        :loading-text="$t('PleaseWait')"
        class="w-100"
        filterable
        @change="
          FormL[key_area] = false;
          getAreas();
          change();
        "
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
    <span v-if="FormLErrors[key_county]" class="text-danger">{{
      FormLErrors[key_county][0]
    }}</span>

  </div>
</template>

<script>
import ApiService from "@/core/services/ApiService";
import Location from "@/core/data/Location";

export default {
  props: [
    "FormData",
    "FormLErrors",
    "key_country",
    "key_country_ob",
    "key_county",
    "key_area",
    "mode",
  ],
  data() {
    return {
      countires: [],
      counties: [],
      areas: [],
      FormL: {},
      loading: false,
    };
  },
  async created() {
    this.countires = await Location.getCountries();
  },
  methods: {
    async getCounties() {
      this.loading = true;
      let tempId = this.FormL[this.key_country];
      if (tempId) {
        await ApiService.get("site/locations/counties/" + tempId).then(
          (res) => {
            this.loading = false;
            if (res.data.counteis) this.counties = res.data.counteis;
          }
        );
      } else {
        this.counties = [];
        this.loading = false;
      }
    },
    async getAreas() {
      // this.loading = true;
      // let tempId = this.FormL[this.key_county];
      // if (tempId) {
      //   await ApiService.get("site/locations/areas/" + tempId).then((res) => {
      //     this.loading = false;
      //     if (res.data.areas) this.areas = res.data.areas;
      //   });
      // } else {
      //   this.areas = [];
      //   this.loading = false;
      // }
    },
    change() {
      let op = {};
      op[this.key_country] = this.FormL[this.key_country];
      if (this.FormL[this.key_country])
        op[this.key_country_ob] = this.countires[this.FormL[this.key_country]];
      op[this.key_county] = this.FormL[this.key_county];
      if (this.FormL[this.key_area] != false)
        op[this.key_area] = this.FormL[this.key_area];
      this.$emit("change", op);
    },
    async setAddress(add) {
      this.FormL[this.key_country] = add.country_id;
      await this.getCounties();
      this.FormL[this.key_county] = add.county_id;
      await this.getAreas();
      this.FormL[this.key_area] = add.area_id;
      this.change();
    },
  },
  watch: {
    async FormData(newVal) {
      this.FormL = newVal;
      this.getCounties().then(() => {
        this.FormL[this.key_county] = newVal[this.key_county];
        this.getAreas().then(() => {
          this.FormL[this.key_area] = newVal[this.key_area];
          this.change();
        });
      });
    },
  },
};
</script>
