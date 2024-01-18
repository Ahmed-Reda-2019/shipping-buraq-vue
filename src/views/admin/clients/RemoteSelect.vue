<template>
  <div class="w-100">
    <div class="mb-5">
      <!--begin::Label-->
      <label class="FormL-label fw-bolder fs-6 text-gray-700 d-block"
        >{{ text ? text : $t("Select") }}
        {{ item.id ? item.name : "" }}
      </label>
      <!--end::Label-->
      <!--begin::Select-->
      <el-select
        v-model="item"
        :loading="loading"
        :remote-method="remoteMethod"
        class="w-100"
        filterable
        :placeholder="$t('Search')"
        remote
        @change="$emit('result', items[item] ? items[item] : {} )"
      >
        <el-option
          v-for="(Citem,i) in items"
          :key="Citem.id"
          :label="Citem.name"
          :value="i"
        />
      </el-select>
      <!--end::Select-->
    </div>
  </div>
</template>

<script>
import ApiService from "@/core/services/ApiService";

export default {
  name: "RemoteSelect",
  props: ["text" , 'url'],
  data() {
    return {
      item: {},
      items: [],
      loading: false,
    };
  },
  methods: {
    async remoteMethod(query) {
      this.loading = true;
      await ApiService.post(this.url+"?search=" + query)
        .then((res) => {
          this.items = res.data;
          this.loading = false;
        })
        .catch(() => {
          this.items = [];
          this.loading = false;
        });
    },
  },
};
</script>
