<template>
  <div
      id="kt_content_container"
      class="d-flex flex-column-fluid align-items-start"
  >
    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid px-0">
      <!--begin::Hero-->
      <div
          class="
          bgi-no-repeat bgi-position-center bgi-size-cover
          d-flex
          flex-column

        "
      >
<!--        h-200px h-lg-250px-->
        <div class="container py-10 py-lg-13 tracking-box">
          <!--begin::Title-->
          <h3 class="fs-2x fw-bolder text-white text-center mb-10 mb-lg-13">
            {{ $t("Track your order") }}
          </h3>
          <!--end::Title-->
          <!--begin::Input group-->
          <div
              class="position-relative w-100 mw-600px mx-auto"
              style="background: rgba(255, 255, 255, 0.05)"
          >
            <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
            <span
                v-if="!loading"
                class="
                svg-icon svg-icon-2qx svg-icon-white
                position-absolute
                top-50
                translate-middle
                ms-9
              "
                @click="serchOrder()"
            >
              <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                    fill="black"
                    height="2"
                    opacity="0.5"
                    rx="1"
                    transform="rotate(45 17.0365 15.1223)"
                    width="8.15546"
                    x="17.0365"
                    y="15.1223"
                />
                <path
                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                    fill="black"
                />
              </svg>
            </span>
            <span
                v-if="loading"
                class="text-white position-absolute mt-7 ms-5 spinner-border"
            ></span>
            <!--end::Svg Icon-->

            <input
                v-model="order.code"
                :disabled="loading"
                :placeholder="$t('Tracking')"
                class="
                form-control
                bg-transparent
                fs-2
                py-6
                ps-17
                placeholder-white
                text-white
              "
                name="search"
                style="border: 1px solid rgba(255, 255, 255, 0.24)"
                type="text"
                @change="serchOrder()"
            />
          </div>
          <!--end::Input group-->
        </div>
        <!--end::Container-->
      </div>

      <div class="container-xxl" v-if="order.id && order.id >0">
        <div class="card mb-5 mb-xl-10" >
          <div class="card-body pt-9 pb-0">
            <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
              <div class="me-7 mb-4">
                <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"><img
                    :alt=order.code
                    :src="order.qrcode">
                </div>
              </div>
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                  <div class="d-flex flex-column">
                    <div class="d-flex align-items-center mb-2"><span
                        class="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">{{order.code}}</span>
                      <span>
                        <span class="svg-icon svg-icon-1 svg-icon-primary">
                          <svg height="24px" viewBox="0 0 24 24" width="24px"
                                                                          xmlns="http://www.w3.org/2000/svg">
  <path
      d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
      fill="#00A3FF"
      xmlns="http://www.w3.org/2000/svg"></path>
  <path class="permanent"
        d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"></path>
</svg>
                        </span>
                      </span>
                      <span class="badge badge-warning me-1 badge-lg" v-if="order.receipt_from_branch == 1">{{$t('Receiving From Branch')}}</span>
                      <span class="badge badge-warning me-1 badge-lg" v-if="order.delivery_to_branch == 1">{{$t('Deliver To Branch')}}</span>

                      <template v-if="currentStatus.id">
          <span :class="'badge ' + currentStatus.class" class="badge-lg">
            {{ currentStatus.name }}
            <template v-if="order.is_returning == 0 && currentStatus.id == 62">
              - {{ t("to_branch") }}</template
            >
          </span>
                      </template>
                      <template v-if="order.is_returning == 1">
          <span class="badge badge-danger ms-1 badge-lg">
            {{ t("returning") }}
          </span>
                      </template>


                      <span class="btn-info btn btn-sm fw-bolder ms-2 fs-8 py-1 px-3">
                        {{ currentStatus.name }}
                      </span>
                    </div>
                    <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                      <div class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                        </div>
                      <div class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                        <span class="svg-icon svg-icon-4 me-1">
                          <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                                                xmlns="http://www.w3.org/2000/svg">
<path d="M3 13V11C3 10.4 3.4 10 4 10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14H4C3.4 14 3 13.6 3 13Z"
      fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M13 21H11C10.4 21 10 20.6 10 20V4C10 3.4 10.4 3 11 3H13C13.6 3 14 3.4 14 4V20C14 20.6 13.6 21 13 21Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span>
                        {{formatDate(order.created_at)}}
                      </div>
                      <div class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                        <span class="svg-icon svg-icon-4 me-1">
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                             xmlns="http://www.w3.org/2000/svg"><path
    d="M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"></path>
<path
    d="M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z"
    fill="black"
    opacity="0.3"
    xmlns="http://www.w3.org/2000/svg"></path>
</svg></span> {{formatDate(order.date)}}
                      </div>
                    </div>
                  </div>
                  <div class="d-flex my-4"><a class="btn btn-sm btn-primary me-2" @click="copy(`${location.href}`)">{{$t('Copy Link')}}</a></div>
                </div>
                <div class="d-flex flex-wrap flex-stack">
                  <div class="d-flex flex-column flex-grow-1 pe-8">
                    <div class="d-flex flex-wrap"><!---->
                      <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3  ">
                        <div class="d-flex align-items-center"><span class="svg-icon svg-icon-3 svg-icon-success me-2"><svg
                            fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path
    d="M2 9.09998V3C2 2.4 2.4 2 3 2H9.10001L2 9.09998ZM22 9.09998V3C22 2.4 21.6 2 21 2H14.9L22 9.09998ZM2 14.9V21C2 21.6 2.4 22 3 22H9.10001L2 14.9ZM14.9 22H21C21.6 22 22 21.6 22 21V14.9L14.9 22Z"
    fill="black"
    opacity="0.3"
    xmlns="http://www.w3.org/2000/svg"></path>
<path
    d="M19.2 17.8L13.4 12L19.2 6.20001L17.8 4.79999L12 10.6L6.2 4.79999L4.8 6.20001L10.6 12L4.8 17.8L6.2 19.2L12 13.4L17.8 19.2L19.2 17.8Z"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"></path>
</svg></span>
                          <div class="fs-2 fw-bolder">{{ order.size}}<sup>3</sup></div>
                        </div>
                        <div class="fw-bold fs-6 text-gray-400">{{$t('Size')}}</div>
                      </div>
                      <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        <div class="d-flex align-items-center"><span class="svg-icon svg-icon-3 svg-icon-danger me-2"><svg
                            fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path
    d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
    fill="black"
    opacity="0.3"
    xmlns="http://www.w3.org/2000/svg"></path>
<path
    d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"></path>
</svg></span>
                          <div class="fs-2 fw-bolder">{{order.service_number}}</div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                    <div class="d-flex justify-content-between w-100 mt-auto mb-2"><span
                        class="fw-bold fs-6 text-gray-400">Order Compleation</span><span
                        class="fw-bolder fs-6">33%</span></div>
                    <div class="h-5px mx-3 w-100 bg-light mb-3">
                      <div class="h-5px w-100 bg-light mb-3">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="bg-info rounded h-5px"
                             role="progressbar" style="width: 33%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-xxl-9">
          <div class="col-xxl-8">
            <div class="card card-xxl-stretch mb-5 mb-xl-10">
              <div class="card-header card-header-stretch">
                <div class="card-title"><h3 class="m-0 text-gray-900">{{$t('Order Movement')}}</h3></div>
                <div class="card-toolbar">
                  <ul id="kt_security_summary_tabs"
                      class="nav nav-tabs nav-line-tabs nav-stretch border-transparent fs-5 fw-bolder">
                    <li class="nav-item"><a class="nav-link text-active-primary active" data-bs-toggle="tab"
                                            data-kt-countup-tabs="true" href="#kt_security_summary_tab_pane_hours">
                      {{$t('Order Movement')}}
                    </a>
                    </li>
                    <li class="nav-item">
                      <a id="kt_security_summary_tab_day" class="nav-link text-active-primary"
                         data-bs-toggle="tab" data-kt-countup-tabs="true"
                         href="#kt_security_summary_tab_pane_day">{{$t('Sender Data')}}</a>
                    </li>

                    <li class="nav-item">
                      <a id="kt_security_summary_tab_week" class="nav-link text-active-primary"
                         data-bs-toggle="tab" data-kt-countup-tabs="true"
                         href="#kt_security_summary_tab_pane_week">{{$t('Receiver Data')}}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a id="kt_security_summary_tab_notes" class="nav-link text-active-primary"
                         data-bs-toggle="tab" data-kt-countup-tabs="true"
                         href="#kt_security_summary_tab_pane_notes">{{$t('Notes')}}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body p-0">
                <div class="tab-content">
                  <div id="kt_security_summary_tab_pane_hours" class="tab-pane fade active show" role="tabpanel">
                    <div class="row p-0 mb-5">
                      <order-items :list="order.items" />
                    </div>
                    <div class="tab-content px-9">
                      <svg class="mileage-map w-100" height="400" viewBox="-120 -180 1200 400" width="1200">
                        <path id="path" class="marker-connector"
                              d="M100,200A728.0109889280518,728.0109889280518 0 0,1 800,0"></path>
                        <g id="airplane" class="airplane" data-svg-origin="0.004272288177162409 -39.20000076293945"
                           style="transform-origin: 0px 0px;"
                           transform="matrix(0.89774,-0.44053,0.44053,0.89774,319.67759,48.67826)">
                          <g class="airplane__icon" style="transform: scaleX(0.01) scaleY(-0.01);">
                            <path d="M965 3906 c-43 -19 -75 -58 -86 -103 -5 -21 -9 -95 -9 -165 l0 -128
-185 0 c-184 0 -186 0 -210 -25 -34 -33 -34 -87 0 -120 l24 -25 520 0 520 0
26 23 c38 32 38 92 0 124 -26 23 -30 23 -276 23 l-249 0 0 120 0 120 1320 0
1320 0 0 -1040 0 -1040 -579 0 -579 0 -12 38 c-40 124 -124 221 -240 276 -61
29 -71 31 -185 31 -114 0 -123 -2 -186 -31 -37 -18 -86 -49 -109 -70 -55 -49
-113 -139 -130 -198 l-13 -46 -303 0 -304 0 0 220 0 220 126 0 c125 0 156 7
181 39 21 27 15 79 -12 106 l-24 25 -544 0 -544 0 -21 -23 c-33 -35 -30 -99 4
-126 26 -20 38 -21 345 -21 l319 0 0 -264 c0 -271 6 -318 40 -336 11 -6 163
-10 379 -10 l359 0 7 -32 c10 -48 51 -127 92 -176 122 -149 358 -196 535 -107
106 53 190 151 225 261 l17 54 716 0 716 0 17 -54 c58 -181 227 -305 418 -306
205 0 371 122 429 318 l13 42 91 0 c101 0 139 15 173 67 16 25 18 54 17 318 0
274 -1 294 -22 353 -24 68 -446 834 -492 892 -15 19 -44 45 -66 57 -38 22 -46
23 -361 23 l-323 0 0 304 c0 298 0 304 -23 337 -12 19 -38 42 -57 51 -33 17
-120 18 -1405 18 -1119 -1 -1375 -3 -1400 -14z m3713 -1256 c118 -212 227
-412 241 -445 24 -58 25 -70 29 -297 l4 -238 -60 0 -60 0 -17 53 c-36 113
-120 207 -233 260 -64 30 -73 32 -187 32 -114 0 -124 -2 -185 -31 -90 -43
-160 -109 -202 -191 -20 -37 -38 -80 -42 -95 -6 -26 -10 -28 -61 -28 l-55 0 0
685 0 685 306 -2 306 -3 216 -385z m-2483 -824 c56 -26 119 -90 143 -145 8
-20 15 -64 15 -101 1 -77 -31 -149 -87 -198 -64 -56 -94 -67 -181 -67 -95 0
-139 19 -202 88 -125 136 -76 355 97 430 55 24 156 21 215 -7z m2319 -1 c81
-39 139 -122 152 -218 15 -106 -61 -231 -168 -277 -101 -43 -225 -15 -301 69
-132 146 -78 365 107 438 45 18 163 11 210 -12z"></path>
                            <path
                                d="M908 3166 c-33 -25 -38 -65 -38 -297 l0 -229 -123 0 c-113 0 -126 -2 -143 -21 -28 -31 -25 -96 5 -120 22 -18 52 -19 771 -19 l749 0 20 26 c27 34 27 74 0 108 l-20 26 -545 0 -544 0 0 248 c0 247 0 249 -23 270 -26 25 -82 29 -109 8z"></path>
                            <path
                                d="M30 3057 c-21 -11 -25 -21 -28 -66 -5 -95 -19 -91 343 -91 351 0 350 0 362 72 5 32 1 41 -25 68 l-30 30 -299 0 c-219 0 -305 -4 -323 -13z"></path>
                          </g>
                        </g>
                        <g class="marker" transform="translate(100,200)">
                          <path
                              d="M0 0l28.592-28.592c15.78-15.78 15.908-41.24.128-57.02a40.424 40.424 0 0 0-57.124 57.2z"></path>
                          <text class="" text-anchor="middle" x="0" y="42"> {{ order.fromAdrress}}</text>
                        </g>
                        <g class="marker" transform="translate(800,0)">
                          <path
                              d="M0 0l28.592-28.592c15.78-15.78 15.908-41.24.128-57.02a40.424 40.424 0 0 0-57.124 57.2z"></path>
                          <text class="" text-anchor="middle" x="0" y="42"> {{ order.toAdrress}}</text>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div id="kt_security_summary_tab_pane_day" class="tab-pane fade" role="tabpanel">
                    <order-sender :order="order"/>
                  </div>
                  <div id="kt_security_summary_tab_pane_week" class="tab-pane fade" role="tabpanel">
                    <order-receiver :order="order"/>
                  </div>
                  <div id="kt_security_summary_tab_pane_notes" class="tab-pane fade" role="tabpanel">
                    <order-site-note :list="notes" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4">
            <div class="card card-xxl-stretch-50 mb-5 mb-xl-10">
              <div class="card-body pt-5">
                <div  v-if="order.service && order.service.name">
                  <div class="d-flex flex-stack align-items-center flex-wrap"><h4
                      class="text-gray-400 fw-bold mb-0 pe-2"></h4></div>
                  <div class="carousel-inner pt-6">
                    <div class="carousel-item active">
                      <div class="carousel-wrapper">
                        <div class="d-flex flex-column flex-grow-1">
                          <p class="text-gray-600 service_icon fw-bold pt-3 mb-0 text-center" v-html="order.service.icon">
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-xxl-stretch-50 mb-5 mb-xl-10">
              <div class="card-body pt-5">
                <div id="kt_security_guidelines" class="carousel carousel-custom carousel-stretch slide"
                     data-bs-interval="8000" data-bs-ride="carousel">
                  <div class="d-flex flex-stack align-items-center flex-wrap"><h4
                      class="text-gray-400 fw-bold mb-0 pe-2"> Security Guidelines </h4>
                    <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
                      <li class="ms-1 active" data-bs-slide-to="0" data-bs-target="#kt_security_guidelines"></li>
                      <li class="ms-1" data-bs-slide-to="1" data-bs-target="#kt_security_guidelines"></li>
                      <li class="ms-1" data-bs-slide-to="2" data-bs-target="#kt_security_guidelines"></li>
                    </ol>
                  </div>
                  <div class="carousel-inner pt-6">
                    <div class="carousel-item active">
                      <div class="carousel-wrapper">
                        <div class="d-flex flex-column flex-grow-1"><a
                            class="fs-5 fw-bolder text-dark text-hover-primary"
                            href="#">Get
                          Start Your Security</a>
                          <p class="text-gray-600 fs-6 fw-bold pt-3 mb-0"> In the last year, you’ve probably had to
                            adapt to new ways of living and working. </p></div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="carousel-wrapper">
                        <div class="d-flex flex-column flex-grow-1"><a class="fw-bolder text-dark text-hover-primary"
                                                                       href="#">Security
                          Policy Update</a>
                          <p class="text-gray-600 fs-6 fw-bold pt-3 mb-0"> we wanted to take a look back and share some
                            ways teams around the world have collaborated effectively. </p></div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="carousel-wrapper">
                        <div class="d-flex flex-column flex-grow-1"><a class="fw-bolder text-dark text-hover-primary"
                                                                       href="#">Terms
                          Of Use Document</a>
                          <p class="text-gray-600 fs-6 fw-bold pt-3 mb-0"> Today we are excited to share an amazing
                            certification opportunity which is designed to teach you everything </p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-5 mb-xl-10">
          <div class="card-header">
            <div class="card-title">
              <h3>{{$t('History')}}</h3>
            </div>
          </div>
          <div class="card-body p-0">
            <order-site-history :history="history" />
          </div>
        </div><!----></div>
    </div>
    <!--end::Post-->

  </div>
</template>

<script>
import {Actions} from "@/store/enums/StoreEnums";
import {useStore} from "vuex";
import ApiService from "@/core/services/ApiService";
import {useI18n} from "vue-i18n";
import moment from "moment";
import {setCurrentPageBreadcrumbs} from "@/core/helpers/breadcrumb";
import OrderItems from "@/views/order/orderItems";
import OrderSender from "@/views/order/orderSender";
import OrderReceiver from "@/views/order/orderReceiver";
import OrderSiteHistory from "@/views/order/orderSiteHistory";
import OrderSiteNote from "@/views/order/OrderSiteNote";

export default {
  name: "tracking",
  components: {OrderSiteNote, OrderSiteHistory, OrderReceiver, OrderSender, OrderItems},
  data() {
    return {
      order: {
        service:{}
      },
      currentStatus: {},
      history:[],
      notes:[],

      status: [],
      useI18n: useI18n(),
      loading: false,
    };
  },
  // beforeCreate() {
  //   useStore().dispatch(Actions.ADD_BODY_CLASSNAME, "page-bg-image-lg");
  // },
  created() {
    if (this.$route.params.code) {
      this.order.code = this.$route.params.code;
      this.serchOrder();
    }
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Tracking"), []);
  },
  methods: {
    async serchOrder() {
      this.loading = true;
      this.history = [];

      // useStore().dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      this.currentStatus = {};
      try {
        let startIndex = this.order.code.indexOf("tracking/");
        if (startIndex == -1 )
          startIndex = 0;
        else startIndex +=9;
        this.order.code = this.order.code.substr(startIndex, 13);

        await ApiService.get("site/tracking/" + this.order.code).then((res) => {
          if (res.data.data) {
            this.history = res.data.data;
            this.currentStatus = res.data.current;
            this.order = res.data.order;
            this.order.notes = res.data.notes;
            history.pushState({}, null, "/tracking/" + this.order.code);
          }
        });
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }

      // useStore().dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
    t(text) {
      return useI18n().t(text);
    },
    copy($val) {
      navigator.clipboard.writeText($val).then(() => {
        this.$toast.success(this.$t("copied"));
      });
    },
  },
};
</script>
<style>
body {
  display: block !important;
  //background: var(--bs-page-bg);
  //background-image: url('/media/patterns/pattern-1.jpg');
}
.tracking-box{
  background: #1b5b8b;
}
</style>
