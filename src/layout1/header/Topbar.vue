<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <div class="topbar d-flex align-items-stretch flex-shrink-0">
      <!--begin::Activities-->
      <div class="d-flex align-items-center ms-1 ms-lg-3 d-none">
        <!--begin::drawer toggle-->
        <div
            id="kt_activities_toggle"
            class="
            btn btn-icon btn-active-light-primary
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="/media/icons/duotune/general/gen032.svg" />
          </span>
        </div>
        <!--end::drawer toggle-->
      </div>
      <!--end::Activities-->

      <!--begin::Quick links-->
      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <!--begin::Menu-->
        <div
            class="
            btn btn-icon btn-active-light-primary
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
            <inline-svg src="/media/icons/duotune/general/gen025.svg" />
          </span>
        </div>
        <KTQuickLinksMenu></KTQuickLinksMenu>
        <!--end::Menu-->
      </div>
      <!--end::Quick links-->

      <!--begin::Contact-->
      <div
          class="position-relative d-flex align-items-center ms-1 ms-lg-3"
          v-if="can('crm-contacts-list')"
      >
        <!--begin::Menu wrapper-->
        <router-link
            :to="{ name: 'crm-contacts-list' }"
            class="
            btn btn-icon btn-active-light-primary
            position-relative
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
        >
          <span class="svg-icon svg-icon-1 svg-icon-2x">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
              <path
                  opacity="0.3"
                  d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                  fill="currentColor"
              />
              <rect
                  x="6"
                  y="12"
                  width="7"
                  height="2"
                  rx="1"
                  fill="currentColor"
              />
              <rect
                  x="6"
                  y="7"
                  width="12"
                  height="2"
                  rx="1"
                  fill="currentColor"
              />
            </svg>
          </span>
        </router-link>
        <span
            v-if="newContact > 0"
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

        <!--end::Menu wrapper-->
      </div>
      <!--end::Contact-->

      <!--begin::Chat-->

      <div
          class="position-relative d-flex align-items-center ms-1 ms-lg-3"
          v-if="can('customer-service-chat') || can('customer-service-manage')"
      >
        <!--begin::Menu wrapper-->
        <router-link
            :to="{ name: 'discussion-list' }"
            class="
            btn btn-icon btn-active-light-primary
            position-relative
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
        >
          <span class="svg-icon svg-icon-1 svg-icon-2x">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
              <path
                  opacity="0.3"
                  d="M9.10001 7.00005L6.2 12H2C2 8.30005 4 5.10005 7 3.30005L9.10001 7.00005ZM17 3.30005L14.9 7.00005L17.8 12H22C22 8.30005 20 5.10005 17 3.30005ZM14.9 17H9.10001L7 20.7C8.5 21.6 10.2 22 12 22C13.8 22 15.5 21.5 17 20.7L14.9 17Z"
                  fill="currentColor"
              />
              <path
                  d="M17 3.3L14.9 7H9.10001L7 3.3C8.5 2.5 10.2 2 12 2C13.8 2 15.5 2.5 17 3.3ZM17.8 12L14.9 17L17 20.7C20 19 22 15.7 22 12H17.8ZM6.2 12H2C2 15.7 4 18.9 7 20.7L9.10001 17L6.2 12Z"
                  fill="currentColor"
              />
            </svg>
          </span>
        </router-link>
        <!--end::Menu wrapper-->
        <span
            v-if="newDiscussions > 0"
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
      <!--end::Chat-->

      <!--begin::Notifications-->
      <KTNotificationsMenu></KTNotificationsMenu>
      <!--end::Notifications-->

      <!--begin::User-->
      <div
          id="kt_header_user_menu_toggle"
          class="d-flex align-items-center me-n3 ms-1 ms-lg-3"
      >
        <!--begin::Menu-->
        <div
            class="
            btn btn-icon btn-active-light-primary
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
          <img
              :src="userData.profile"
              alt="profile"
              class="h-25px w-25px rounded"
          />
          {{ userData.name }}
        </div>
        <KTUserMenu></KTUserMenu>
        <!--end::Menu-->
      </div>
      <!--end::User -->
    </div>
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import KTNotificationsMenu from "@/layout/admin/header/partials/NotificationsMenu.vue";
import KTUserMenu from "@/layout/admin/header/partials/UserMenu.vue";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { scrollToBottom } from "@/core/helpers/dom";
import KTQuickLinksMenu from "@/layout1/header/partials/QuickLinksMenu.vue";

export default defineComponent({
  name: "topbar",
  components: {
    KTNotificationsMenu,
    KTQuickLinksMenu,
    KTUserMenu,
  },
  data() {
    return {
      newContact: 0,
      newDiscussions: 0,
    };
  },
  methods: {
    can(p) {
      return JwtService.can(p);
    },
  },
  computed: {
    userData() {
      if (store.state.AuthModule.user) return store.state.AuthModule.user;
      return {};
    },
  },
});
</script>
