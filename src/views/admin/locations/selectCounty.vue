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
    <div v-if="FormL[key_country]" class="mb-10">
      <!--begin::Label-->
      <label class="FormL-label fw-bolder fs-6 text-gray-700">{{
        $t("county")
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

    <span v-if="FormLErrors && FormLErrors[key_country]" class="text-danger">{{
      FormLErrors[key_country][0]
    }}</span>
  </div>
</template>

<script>
import ApiService from "@/core/services/ApiService";
import Location from "@/core/data/Location";

export default {
  name: "select-country",
  props: [
    "FormData",
    "FormLErrors",
    "key_country",
    "key_county",

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
    change() {

      let op = {};
      op[this.key_country] = this.FormL[this.key_country];
      op[this.key_county] = this.FormL[this.key_county];
      this.$emit("change", op);
    },
  },
  watch: {
    async FormData(newVal) {
      this.FormL = newVal;
      this.getCounties().then(() => {
        this.FormL[this.key_county] = newVal[this.key_county];
        this.change()
      });
    },
  },
};
</script>
