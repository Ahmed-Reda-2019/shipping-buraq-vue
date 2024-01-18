<template>
  <!--begin::Menu wrapper-->
  <div
    class="header-menu align-items-stretch"
    data-kt-drawer="true"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-direction="start"
    data-kt-drawer-name="header-menu"
    data-kt-drawer-overlay="true"
    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
  >
    <!--begin::Menu-->
    <div
      id="#kt_header_menu"
      class="
        menu
        menu-lg-rounded
        menu-column
        menu-lg-row
        menu-state-bg
        menu-state-icon-primary
        menu-state-bullet-primary
        menu-arrow-gray-400
        fw-bold
        my-5 my-lg-0
        align-items-stretch
      "
      data-kt-menu="true"
    >
      <template v-for="(item, i) in MainMenuConfig" :key="i">
        <template v-if="!item.heading">
          <template v-for="(menuItem, j) in item.pages" :key="j">
            <div
              v-if="menuItem.heading && can(menuItem.permission)"
              class="menu-item menu-lg-down-accordion me-lg-1"
            >
              <router-link
                v-slot="{ href, navigate, isActive, isExactActive }"
                :to="menuItem.route"
              >
                <a
                  :class="[isActive && 'active', isExactActive && 'active']"
                  :href="href"
                  class="menu-link py-3"
                  @click="navigate"
                >
                  <span class="menu-title">{{ $t(menuItem.heading) }}</span>
                </a>
              </router-link>
            </div>
          </template>
        </template>
        <div
          v-if="item.heading"
          class="menu-item menu-lg-down-accordion me-lg-1"
          data-kt-menu-placement="bottom-start"
          data-kt-menu-trigger="click"
        >
          <span
            :class="{ active: hasActiveChildren(item.route) }"
            class="menu-link py-3"
          >
            <span class="menu-title">{{ $t(item.heading) }}</span>
            <span class="menu-arrow d-lg-none"></span>
          </span>
          <div
            class="
              menu-sub
              menu-sub-lg-down-accordion
              menu-sub-lg-dropdown
              menu-rounded-0
              py-lg-4
              w-lg-225px
            "
          >
            <template v-for="(menuItem, j) in item.pages" :key="j">
              <div
                v-if="menuItem.sectionTitle"
                class="menu-item menu-lg-down-accordion"
                data-kt-menu-placement="right-start"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
              >
                <span
                  :class="{ active: hasActiveChildren(menuItem.route) }"
                  class="menu-link py-3"
                >
                  <span class="menu-icon">
                    <i
                      v-if="headerMenuIcons === 'font'"
                      :class="menuItem.fontIcon"
                      class="bi fs-3"
                    ></i>
                    <span
                      v-if="headerMenuIcons === 'svg'"
                      class="svg-icon svg-icon-2"
                    >
                      <inline-svg :src="menuItem.svgIcon" />
                    </span>
                  </span>
                  <span class="menu-title">{{
                    $t(menuItem.sectionTitle)
                  }}</span>
                  <span class="menu-arrow"></span>
                </span>
                <div
                  class="
                    menu-sub
                    menu-sub-lg-down-accordion
                    menu-sub-lg-dropdown
                    menu-active-bg
                    py-lg-4
                    w-lg-225px
                  "
                >
                  <template v-for="(menuItem1, k) in menuItem.sub" :key="k">
                    <div
                      v-if="menuItem1.sectionTitle"
                      class="menu-item menu-lg-down-accordion"
                      data-kt-menu-placement="right-start"
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    >
                      <span
                        :class="{ active: hasActiveChildren(menuItem1.route) }"
                        class="menu-link py-3"
                      >
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">{{
                          $t(menuItem1.sectionTitle)
                        }}</span>
                        <span class="menu-arrow"></span>
                      </span>
                      <div
                        class="
                          menu-sub
                          menu-sub-lg-down-accordion
                          menu-sub-lg-dropdown
                          menu-active-bg
                          py-lg-4
                          w-lg-225px
                        "
                      >
                        <template
                          v-for="(menuItem2, l) in menuItem1.sub"
                          :key="l"
                        >
                          <div class="menu-item">
                            <router-link
                              :to="menuItem2.route"
                              active-class="active"
                              class="menu-link py-3"
                            >
                              <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                              </span>
                              <span class="menu-title">{{
                                $t(menuItem2.heading)
                              }}</span>
                            </router-link>
                          </div>
                        </template>
                      </div>
                    </div>
                    <div v-if="menuItem1.heading" class="menu-item">
                      <router-link :to="menuItem1.route" class="menu-link py-3">
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">{{
                          $t(menuItem1.heading)
                        }}</span>
                      </router-link>
                    </div>
                  </template>
                </div>
              </div>
              <div v-if="menuItem.heading" class="menu-item">
                <router-link :to="menuItem.route" class="menu-link py-3">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <inline-svg
                        src="/media/icons/duotune/layouts/lay009.svg"
                      />
                    </span>
                  </span>
                  <span class="menu-title">{{ $t(menuItem.heading) }}</span>
                </router-link>
              </div>
            </template>
          </div>
        </div>
      </template>

      <!--end::Menu-->
    </div>
  </div>
  <!--end::Menu wrapper-->
</template>

<style lang="scss" scoped>
.header-fixed:not([data-kt-sticky-header="on"])
  .menu-item
  > a
  > .menu-link.active {
  transition: color 0.2s ease, background-color 0.2s ease;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}

body[data-kt-drawer-header-menu="on"] .menu-item > a > .menu-link.active {
  color: #5e6278;
}

.header-fixed:not([data-kt-sticky-header="on"]) .menu-item > a > .menu-link {
  color: #fff;
}

.drawer-on .menu-item > a > .menu-link {
  color: #5e6278 !important;
}

.menu-sub a.menu-link {
  color: #5e6278;
}

.menu-link {
  color: #5e6278;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import JwtService, { can } from "@/core/services/JwtService";

export default defineComponent({
  name: "KTMenu",
  components: {},
  data() {
    return {
      user: {},
      role_id:
        JwtService.getUserData() && JwtService.getUserData()["role_id"]
          ? JwtService.getUserData()["role_id"]
          : 0,
      MainMenuConfig: MainMenuConfig,
    };
  },
  beforeCreate() {
    this.user = JwtService.getUserData();
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route.path.indexOf(match) !== -1;
    },
    can(permission) {
      if (permission == "") return true;
      return can(permission);
    },
  },
});
</script>
