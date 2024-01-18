<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px"
    data-kt-menu="true"
  >
    <!--begin::Heading-->
    <div
      class="
        d-flex
        flex-column flex-center
        bgi-no-repeat
        rounded-top
        px-9
        py-10
      "
      style="background-image: url('/media/misc/pattern-1.jpg')"
    >
      <!--begin::Title-->
      <h3 class="text-white fw-bold mb-3">{{ $t("Quick_Links") }}</h3>
      <!--end::Title-->
    </div>
    <!--end::Heading-->

    <!--begin:Nav-->
    <div class="row g-0 scroll-y h-300px">
      <div class="col-6" v-if="can('site-setting')">
        <router-link
          :to="{ name: 'site-setting' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  opacity="0.3"
                />
                <path
                  d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </span>
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("Settings") }}
          </span>
        </router-link>
      </div>
      <div class="col-6" v-if="can('countries-list')">
        <router-link
          :to="{ name: 'Countries-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                fill="currentColor"
              />
              <path
                d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("countries") }}
          </span>
        </router-link>
      </div>

      <div class="col-6" v-if="can('Order-Types-list')">
        <router-link
          :to="{ name: 'Order-Types-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <svg
              height="24px"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <rect height="24" width="24" x="0" y="0" />
                <path
                  d="M4,7 L20,7 L20,19.5 C20,20.3284271 19.3284271,21 18.5,21 L5.5,21 C4.67157288,21 4,20.3284271 4,19.5 L4,7 Z M10,10 C9.44771525,10 9,10.4477153 9,11 C9,11.5522847 9.44771525,12 10,12 L14,12 C14.5522847,12 15,11.5522847 15,11 C15,10.4477153 14.5522847,10 14,10 L10,10 Z"
                  fill="#000000"
                />
                <rect
                  fill="#000000"
                  height="4"
                  opacity="0.3"
                  rx="1"
                  width="20"
                  x="2"
                  y="3"
                />
              </g>
            </svg>
          </span>
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("orderTypes") }}
          </span>
        </router-link>
      </div>
      <div class="col-6" v-if="can('works-list')">
        <router-link
          :to="{ name: 'works-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2"
            ><svg
              height="24px"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <circle cx="12" cy="7" fill="#000000" opacity="0.3" r="2" />
                <path
                  d="M11,19 L4,19 L4,7 L7.03051599,7 C7.01035184,7.16416693 7,7.33099545 7,7.5 C7,9.67706212 8.71775968,11.4930404 11,11.9099837 L11,19 Z M13,19 L13,11.9099837 C15.2822403,11.4930404 17,9.67706212 17,7.5 C17,7.33099545 16.9896482,7.16416693 16.969484,7 L20,7 L20,19 L13,19 Z"
                  fill="#000000"
                />
              </g></svg
            ><!--end::Svg Icon--></span
          >
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("works") }}
          </span>
        </router-link>
      </div>

      <div class="col-6" v-if="can('crm-categories-list')">
        <router-link
          :to="{ name: 'crm-categories-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2"
            ><svg
              height="24px"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <circle cx="12" cy="7" fill="#000000" opacity="0.3" r="2" />
                <path
                  d="M11,19 L4,19 L4,7 L7.03051599,7 C7.01035184,7.16416693 7,7.33099545 7,7.5 C7,9.67706212 8.71775968,11.4930404 11,11.9099837 L11,19 Z M13,19 L13,11.9099837 C15.2822403,11.4930404 17,9.67706212 17,7.5 C17,7.33099545 16.9896482,7.16416693 16.969484,7 L20,7 L20,19 L13,19 Z"
                  fill="#000000"
                />
              </g></svg
            ><!--end::Svg Icon--></span
          >
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("crm categories") }}
          </span>
        </router-link>
      </div>
      <div class="col-6" v-if="can('branch-data-list')">
        <router-link
          :to="{ name: 'crm-branch-data-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M6 22H4V3C4 2.4 4.4 2 5 2C5.6 2 6 2.4 6 3V22Z"
                fill="currentColor"
              />
              <path
                d="M18 14H4V4H18C18.8 4 19.2 4.9 18.7 5.5L16 9L18.8 12.5C19.3 13.1 18.8 14 18 14Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("Branch Data") }}
          </span>
        </router-link>
      </div>

      <div class="col-6" v-if="can('Pyment-Methods-list')">
        <router-link
          :to="{ name: 'Pyment-Methods-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <inline-svg src="/media/icons/duotune/finance/fin009.svg" />
          </span>
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("Payment Methods") }}
          </span>
        </router-link>
      </div>
      <div class="col-6" v-if="can('Currencies-list')">
        <router-link
          :to="{ name: 'Currencies-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <svg
              height="24px"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <rect height="24" width="24" x="0" y="0" />
                <path
                  d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z"
                  fill="#000000"
                  opacity="0.3"
                  transform="translate(11.500000, 12.000000) rotate(-345.000000) translate(-11.500000, -12.000000) "
                />
                <path
                  d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z M11.5,14 C12.6045695,14 13.5,13.1045695 13.5,12 C13.5,10.8954305 12.6045695,10 11.5,10 C10.3954305,10 9.5,10.8954305 9.5,12 C9.5,13.1045695 10.3954305,14 11.5,14 Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </span>
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("currencies") }}
          </span>
        </router-link>
      </div>

      <div class="col-6" v-if="can('Order-Status-list')">
        <router-link
          :to="{ name: 'Order-Status-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <svg
              height="24px"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <rect height="24" width="24" x="0" y="0" />
                <path
                  d="M4,7 L20,7 L20,19.5 C20,20.3284271 19.3284271,21 18.5,21 L5.5,21 C4.67157288,21 4,20.3284271 4,19.5 L4,7 Z M10,10 C9.44771525,10 9,10.4477153 9,11 C9,11.5522847 9.44771525,12 10,12 L14,12 C14.5522847,12 15,11.5522847 15,11 C15,10.4477153 14.5522847,10 14,10 L10,10 Z"
                  fill="#000000"
                />
                <rect
                  fill="#000000"
                  height="4"
                  opacity="0.3"
                  rx="1"
                  width="20"
                  x="2"
                  y="3"
                />
              </g>
            </svg>
          </span>
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("OrderStatus") }}
          </span>
        </router-link>
      </div>
      <div class="col-6" v-if="can('shipment-types-list')">
        <router-link
          :to="{ name: 'shipment-types-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2"
            ><svg
              height="24px"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <circle cx="12" cy="7" fill="#000000" opacity="0.3" r="2" />
                <path
                  d="M11,19 L4,19 L4,7 L7.03051599,7 C7.01035184,7.16416693 7,7.33099545 7,7.5 C7,9.67706212 8.71775968,11.4930404 11,11.9099837 L11,19 Z M13,19 L13,11.9099837 C15.2822403,11.4930404 17,9.67706212 17,7.5 C17,7.33099545 16.9896482,7.16416693 16.969484,7 L20,7 L20,19 L13,19 Z"
                  fill="#000000"
                />
              </g></svg
            ><!--end::Svg Icon--></span
          >
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("Shipment company Types") }}
          </span>
        </router-link>
      </div>

      <div class="col-6" v-if="can('meta-list')">
        <router-link
          :to="{ name: 'crm-meta-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <svg
              height="24px"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <rect height="24" width="24" x="0" y="0" />
                <path
                  d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                  fill="#000000"
                  opacity="0.3"
                  transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641) "
                />
                <path
                  d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                  fill="#000000"
                  transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359) "
                />
                <path
                  d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                  fill="#000000"
                  opacity="0.3"
                  transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146) "
                />
                <path
                  d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                  fill="#000000"
                  opacity="0.3"
                  transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961) "
                />
              </g>
            </svg>
          </span>

          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("Meta") }}
          </span>
        </router-link>
      </div>
      <div class="col-6" v-if="can('roles-list')">
        <router-link
          :to="{ name: 'roles-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                fill="currentColor"
              />
              <path
                d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("Roles") }}
          </span>
        </router-link>
      </div>
      <div class="col-6" v-if="can('customer-service-manage')">
        <router-link
          :to="{ name: 'discussion-types-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success svg-icon-2x"
            ><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo2\dist/../src/media/svg/icons\Communication\Mail-error.svg--><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.98630124,11 4.48466491,11.0516454 4,11.1500272 L4,7 C4,5.8954305 4.8954305,5 6,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.9835977,18 Z M19.1444251,6.83964668 L13,10.1481833 L6.85557487,6.83964668 C6.4908718,6.6432681 6.03602525,6.77972206 5.83964668,7.14442513 C5.6432681,7.5091282 5.77972206,7.96397475 6.14442513,8.16035332 L12.6444251,11.6603533 C12.8664074,11.7798822 13.1335926,11.7798822 13.3555749,11.6603533 L19.8555749,8.16035332 C20.2202779,7.96397475 20.3567319,7.5091282 20.1603533,7.14442513 C19.9639747,6.77972206 19.5091282,6.6432681 19.1444251,6.83964668 Z"
                  fill="#000000"
                />
                <path
                  d="M6.5,14 C7.05228475,14 7.5,14.4477153 7.5,15 L7.5,17 C7.5,17.5522847 7.05228475,18 6.5,18 C5.94771525,18 5.5,17.5522847 5.5,17 L5.5,15 C5.5,14.4477153 5.94771525,14 6.5,14 Z M6.5,21 C5.94771525,21 5.5,20.5522847 5.5,20 C5.5,19.4477153 5.94771525,19 6.5,19 C7.05228475,19 7.5,19.4477153 7.5,20 C7.5,20.5522847 7.05228475,21 6.5,21 Z"
                  fill="#000000"
                  opacity="0.3"
                />
              </g></svg
            ><!--end::Svg Icon--></span
          >
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("Discussion types") }}
          </span>
        </router-link>
      </div>
      <div class="col-6" v-if="can('customer-service-manage')">
        <router-link
          :to="{ name: 'discussion-messages-list' }"
          class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
            text-center
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success svg-icon-2x"
            ><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo2\dist/../src/media/svg/icons\Communication\Readed-mail.svg--><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M4.875,20.75 C4.63541667,20.75 4.39583333,20.6541667 4.20416667,20.4625 L2.2875,18.5458333 C1.90416667,18.1625 1.90416667,17.5875 2.2875,17.2041667 C2.67083333,16.8208333 3.29375,16.8208333 3.62916667,17.2041667 L4.875,18.45 L8.0375,15.2875 C8.42083333,14.9041667 8.99583333,14.9041667 9.37916667,15.2875 C9.7625,15.6708333 9.7625,16.2458333 9.37916667,16.6291667 L5.54583333,20.4625 C5.35416667,20.6541667 5.11458333,20.75 4.875,20.75 Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  opacity="0.3"
                />
                <path
                  d="M12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.98630124,11 4.48466491,11.0516454 4,11.1500272 L4,7 C4,5.8954305 4.8954305,5 6,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.9835977,18 Z M19.1444251,6.83964668 L13,10.1481833 L6.85557487,6.83964668 C6.4908718,6.6432681 6.03602525,6.77972206 5.83964668,7.14442513 C5.6432681,7.5091282 5.77972206,7.96397475 6.14442513,8.16035332 L12.6444251,11.6603533 C12.8664074,11.7798822 13.1335926,11.7798822 13.3555749,11.6603533 L19.8555749,8.16035332 C20.2202779,7.96397475 20.3567319,7.5091282 20.1603533,7.14442513 C19.9639747,6.77972206 19.5091282,6.6432681 19.1444251,6.83964668 Z"
                  fill="#000000"
                />
              </g></svg
            ><!--end::Svg Icon--></span
          >
          <span class="fs-5 fw-bold text-gray-800 mb-0">
            {{ $t("Suggested Messages") }}
          </span>
        </router-link>
      </div>
      <!--end:Item-->
    </div>
    <!--end:Nav-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JwtService from "@/core/services/JwtService";

export default defineComponent({
  name: "kt-quick-links-menu",
  components: {},
  methods: {
    can(p) {
      return JwtService.can(p);
    },
  },
});
</script>
