<template>
  <!--begin::Item-->
  <div class="d-flex flex-stack py-4"
  >
    <!--          :class=" item.read_at != null ? 'bg-light-info' : '' "-->
    <!--begin::Section-->
    <div class="d-flex align-items-center">
      <!--begin::Symbol-->
      <div class="symbol symbol-35px me-4">
                  <span :class="`bg-light-${item.data.type}`" class="symbol-label">
                    <span
                        :class="`svg-icon-${item.data.type}`"
                        class="svg-icon svg-icon-2"
                    >
                      <inline-svg v-if="item.data.icon && item.icon == ''" :src="item.icon"/>
                      <inline-svg src="/media/icons/duotune/technology/teh008.svg"/>
                    </span>
                  </span>
      </div>
      <!--end::Symbol-->

      <!--begin::Title-->
      <div class="mb-0 me-2">
        <router-link
            class="fs-6 text-gray-800 text-hover-primary fw-bolder"
            :to="item.data.vue_link ? item.data.vue_link : '#' "
        >{{  lang ?  $t(item.data.title) : item.data.title  }}</router-link
        >
        <div class="text-gray-400 fs-7">
          {{ lang ? $t(item.data.description) : item.data.description }}
        </div>
      </div>
      <!--end::Title-->
    </div>
    <!--end::Section-->

    <!--begin::Label-->
    <span class="badge badge-light fs-8">{{ since(item.created_at) }}</span>
    <!--end::Label-->
  </div>
  <!--end::Item-->

</template>

<script>
import moment from "moment";

export default {
name: "NotificationItem",
  props:['item'],
  methods:{
    since(time){
      return moment(time).fromNow()
    }
  },
  computed:{
    lang(){
      if (this.item.data.lang && this.item.data.lang == true )
        return  true
      return  false

    }
  }
}
</script>