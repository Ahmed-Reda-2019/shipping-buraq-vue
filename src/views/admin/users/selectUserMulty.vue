<template>
  <div class="w-100">
    <!--begin::Label-->
    <label class="FormL-label fw-bold fs-5 text-gray-700 d-block mb-2"
      >{{ $t("Select User") }}
    </label>
    <!--end::Label-->
    <!--begin::Select-->
    <el-select
      v-model="user"
      :loading="loading"
      :remote-method="remoteMethod"
      class="w-100"
      filterable
      :placeholder="$t('Search by username')"
      remote
      reserve-keyword
    >
      <el-option :key="0" :label="$t('all')" :value="0" />
      <el-option
        v-for="item in users"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      >
        {{ item.name }} - {{ item.email }}
      </el-option>
    </el-select>
    <!--end::Select-->
  </div>
</template>

<script>
import ApiService from "@/core/services/ApiService";

export default {
  name: "selectUserMulty",
  props: ["ob_word", "key_word"],
  data() {
    return {
      user: {},
      users: [],
      loading: false,
    };
  },
  methods: {
    async remoteMethod(query) {
      this.loading = true;
      await ApiService.post("admin/select/user?search=" + query)
        .then((res) => {
          this.users = res.data;
          this.loading = false;
        })
        .catch(() => {
          this.users = [];
          this.loading = false;
        });
    },

    changeUser() {
      if (this.ob_word && this.key_word && this.user.id) {
        this.$parent[this.ob_word][this.key_word] = this.user.id;
      }
      this.$emit("result", this.user);
    },
  },
};
</script>
