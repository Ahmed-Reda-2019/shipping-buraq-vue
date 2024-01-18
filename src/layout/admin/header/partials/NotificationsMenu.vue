<template>
  <!--begin::Menu-->
  <div class="d-flex align-items-center ms-1 ms-lg-3">
    <!--begin::Menu-->
    <div
      @click="showList"
      class="
        btn btn-icon btn-active-light-primary
        position-relative
        w-30px
        h-30px
        w-md-40px
        h-md-40px
      "
      data-kt-menu-attach="parent"
      data-kt-menu-flip="bottom"
      data-kt-menu-placement="bottom-end"
      data-kt-menu-trigger="click"
    >
      <span class="svg-icon svg-icon-1">
        <inline-svg src="/media/icons/duotune/general/gen007.svg" />
      </span>
      <span
        v-if="hasNew == true"
        class="
          bullet bullet-dot
          bg-success
          h-6px
          w-6px
          position-absolute
          translate-middle
          top-0
          start-50
          animation-blink
        "
      >
      </span>
    </div>
    <div
      class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
      data-kt-menu="true"
    >
      <!--begin::Heading-->
      <div
        class="d-flex flex-column bgi-no-repeat rounded-top"
        style="background-image: url('/media/misc/pattern-1.jpg')"
      >
        <!--begin::Title-->
        <h3 class="text-white fw-bold px-9 mt-10 mb-6">
          {{ $t("Notifications") }}
          <span class="fs-8 opacity-75 ps-3"> {{ notifications.length }}</span>
        </h3>
        <!--end::Title-->

        <!--begin::Tabs-->
        <ul
          class="
            nav nav-line-tabs nav-line-tabs-2x nav-stretch
            fw-bold
            px-9
            d-none
          "
        >
          <li class="nav-item">
            <a
              class="nav-link text-white opacity-75 opacity-state-100 pb-4"
              data-bs-toggle="tab"
              href="#kt_topbar_notifications_1"
              >Alerts</a
            >
          </li>

          <li class="nav-item">
            <a
              class="
                nav-link
                text-white
                opacity-75 opacity-state-100
                pb-4
                active
              "
              data-bs-toggle="tab"
              href="#kt_topbar_notifications_2"
              >Updates</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link text-white opacity-75 opacity-state-100 pb-4"
              data-bs-toggle="tab"
              href="#kt_topbar_notifications_3"
              >Logs</a
            >
          </li>
        </ul>
        <!--end::Tabs-->
      </div>
      <!--end::Heading-->

      <!--begin::Items-->
      <div class="scroll-y mh-325px my-5 px-8">
        <p v-if="notifications.length == 0">{{ $t("No Notifications") }}</p>
        <template v-for="(item, index) in notifications" :key="index">
          <notification-item :item="item"></notification-item>
        </template>
      </div>
      <!--end::Items-->

      <!--begin::View more-->
      <div class="py-3 text-center border-top">
        <router-link
          :to="{ name: 'notifications-list' }"
          class="btn btn-color-gray-600 btn-active-color-primary"
          href="#"
        >
          {{ $t("View All") }}
          <span class="svg-icon svg-icon-5 arrow"
            ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
          </span>
        </router-link>
      </div>
      <!--end::View more-->

      <!--end::Tab content-->
    </div>
    <!--end::Menu-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApiService from "@/core/services/ApiService";
import moment from "moment";
import JwtService from "@/core/services/JwtService";
import NotificationItem from "@/components/NotificationItem.vue";

export default defineComponent({
  name: "notifications-menu",
  components: { NotificationItem },
  data() {
    return {
      hasNew: false,
      notifications: [],
    };
  },
  created() {
      this.load();
  },
  methods: {
    load() {
      if (JwtService.isEmployee()) {
        ApiService.get("/admin/unread")
          .then((res) => {
            if (res.data.length > 0) {
              var oldLen = this.notifications.length;
              this.hasNew = true;
              this.notifications = res.data.concat(this.notifications);
              this.uniquid();
              if (oldLen < this.notifications.length) {
                var audio = new Audio("/media/sound/notify.wav");
                audio.play();
              }
            }
          })
          .finally(() => {
            setTimeout(() => {
              this.load();
            }, 10000);
          });
      }
    },
    since(time) {
      return moment(time).fromNow();
    },
    showList() {
      if (this.hasNew) {
        ApiService.get("/admin/notification/read/all").finally(() => {
          this.hasNew = false;
        });
      }
    },
    uniquid() {
      this.notifications = this.notifications.reduce((acc, current) => {
        const x = acc.find((item) => item["id"] === current["id"]);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
    },
  },
});
</script>
