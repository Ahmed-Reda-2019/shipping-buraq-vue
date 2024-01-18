<template>
  <div id="kt_content" class="container-xxl d-flex flex-column-fluid align-items-start">
    <div class="content flex-row-fluid">
      <div class="d-flex flex-column flex-md-row">
        <div class="card p-4 me-sm-10 mb-4 min-w-100px">
          <ul class="nav nav-tabs nav-pills menu menu-column menu-title-gray-700 menu-bullet-gray-300 menu-state-bg menu-state-bullet-primary fw-bolder fs-6 mb-10 border-0">
            <li class="menu-item mb-1"><a class="menu-link px-6 py-4 active" data-bs-toggle="tab"
                                          href="#kt_vtab_pane_1"><span
                class="svg-icon svg-icon-2 svg-icon-primary me-3"><span class="menu-bullet"><span class="bullet"></span></span></span><span
                class="d-flex flex-column align-items-start">General Report</span></a></li>
            <li class="menu-item mb-1"><a class="menu-link px-6 py-4" data-bs-toggle="tab" href="#kt_vtab_pane_2"><span
                class="svg-icon svg-icon-2 svg-icon-primary me-3"><span class="menu-bullet"><span class="bullet"></span></span></span><span
                class="d-flex flex-column align-items-start">Customers in Countries</span></a></li>
            <li class="menu-item mb-1"><a class="menu-link px-6 py-4" data-bs-toggle="tab" href="#kt_vtab_pane_3"><span
                class="svg-icon svg-icon-2 svg-icon-primary me-3"><span class="menu-bullet"><span class="bullet"></span></span></span><span
                class="d-flex flex-column align-items-start">Service counts</span></a></li>
            <li class="menu-item mb-1"><a class="menu-link px-6 py-4" data-bs-toggle="tab" href="#kt_vtab_pane_4"><span
                class="svg-icon svg-icon-2 svg-icon-primary me-3"><span class="menu-bullet"><span class="bullet"></span></span></span><span
                class="d-flex flex-column align-items-start">Status Counts</span></a></li>
            <li class="menu-item mb-1"><a class="menu-link px-6 py-4" data-bs-toggle="tab" href="#kt_vtab_pane_5"><span
                class="svg-icon svg-icon-2 svg-icon-primary me-3"><span class="menu-bullet"><span class="bullet"></span></span></span><span
                class="d-flex flex-column align-items-start">Sender countries counts</span></a></li>
            <li class="menu-item mb-1"><a class="menu-link px-6 py-4" data-bs-toggle="tab" href="#kt_vtab_pane_6"><span
                class="svg-icon svg-icon-2 svg-icon-primary me-3"><span class="menu-bullet"><span class="bullet"></span></span></span><span
                class="d-flex flex-column align-items-start">Receiver countries counts</span></a></li>
            <li class="menu-item mb-1"><a class="menu-link px-6 py-4" data-bs-toggle="tab" href="#kt_vtab_pane_7"><span
                class="svg-icon svg-icon-2 svg-icon-primary me-3"><span class="menu-bullet"><span class="bullet"></span></span></span><span
                class="d-flex flex-column align-items-start">Customer Orders</span></a></li>
            <li class="menu-item mb-1"><a class="menu-link px-6 py-4" data-bs-toggle="tab" href="#kt_vtab_pane_8"><span
                class="svg-icon svg-icon-2 svg-icon-primary me-3"><span class="menu-bullet"><span class="bullet"></span></span></span><span
                class="d-flex flex-column align-items-start">Last Visits</span></a></li>
            <li class="menu-item mb-1"><a class="menu-link px-6 py-4" data-bs-toggle="tab" href="#kt_vtab_pane_9"><span
                class="svg-icon svg-icon-2 svg-icon-primary me-3"><span class="menu-bullet"><span class="bullet"></span></span></span><span
                class="d-flex flex-column align-items-start">Users Orders</span></a></li>
          </ul>
        </div>
        <div id="myTabContent" class="tab-content w-100">
          <div id="kt_vtab_pane_1" class="tab-pane fade active show" role="tabpanel">
            <div id="kt_content" class="content flex-row-fluid">
              <div class="row gy-5 g-xl-10">
                <div class="col-xl-4 mb-xl-10">
                  <div class="card h-md-100">
                    <div class="card-body d-flex flex-column flex-center">
                      <div class="mb-2"><h1 class="fw-bold text-gray-800 text-center lh-lg">Quick form to <br><span
                          class="fw-boldest">Add New Order</span></h1>
                        <div
                            class="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center card-rounded-bottom h-200px mh-200px mt-5 mt-lg-12"
                            style="background-image: url(&quot;/media/svg/illustrations/2.svg&quot;);"></div>
                      </div>
                      <div class="text-center mb-1"><a class="btn btn-sm btn-primary me-2">Start Now</a><a
                          class="btn btn-sm btn-light" href="/en/admin/Orders/list">Orders</a></div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-8 mb-5 mb-xl-10">
                  <div class="row g-lg-5 g-xl-10">
                    <div class="col-md-6 col-xl-6 mb-md-5 mb-xl-10">
                      <div class="card overflow-hidden h-md-50 mb-5 mb-xl-10">
                        <div class="card-body d-flex justify-content-between flex-column px-0 pb-0">
                          <div class="mb-4 px-9">
                            <div class="d-flex align-items-center mb-2"><span
                                class="fs-2hx fw-bolder text-gray-800 me-2 lh-1 ls-n2">36</span><span
                                class="d-flex align-items-end text-gray-400 fs-6 fw-bold">This month</span></div>
                            <span class="fs-6 fw-bold text-gray-400">Total Orders this month</span></div>
                          <div id="kt_card_widget_13_chart" class="min-h-auto"
                               style="height: 125px; min-height: 140px;">
                            <div id="apexcharts3rwsjmpc"
                                 class="apexcharts-canvas apexcharts3rwsjmpc apexcharts-theme-light"
                                 style="width: 332px; height: 125px;">
                              <svg id="SvgjsSvg1159" class="apexcharts-svg apexcharts-zoomable" height="125" style="background: transparent;"
                                   transform="translate(0, 0)" version="1.1"
                                   width="332" xmlns="http://www.w3.org/2000/svg"
                                   xmlns:data="ApexChartsNS" xmlns:svgjs="http://svgjs.dev"
                                   xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="SvgjsG1161" class="apexcharts-inner apexcharts-graphical"
                                   transform="translate(-10, 30)">
                                  <defs id="SvgjsDefs1160">
                                    <clipPath id="gridRectMask3rwsjmpc">
                                      <rect id="SvgjsRect1165" fill="#fff" height="85" opacity="1" rx="0" ry="0" stroke="none"
                                            stroke-dasharray="0" stroke-width="0" width="368" x="-3"
                                            y="-1"></rect>
                                    </clipPath>
                                    <clipPath id="forecastMask3rwsjmpc"></clipPath>
                                    <clipPath id="nonForecastMask3rwsjmpc"></clipPath>
                                    <clipPath id="gridRectMarkerMask3rwsjmpc">
                                      <rect id="SvgjsRect1166" fill="#fff" height="87" opacity="1" rx="0" ry="0" stroke="none"
                                            stroke-dasharray="0" stroke-width="0" width="366" x="-2"
                                            y="-2"></rect>
                                    </clipPath>
                                  </defs>
                                  <g id="SvgjsG1173" class="apexcharts-xaxis" transform="translate(0, 0)">
                                    <g id="SvgjsG1174" class="apexcharts-xaxis-texts-g" transform="translate(0, 4)"></g>
                                  </g>
                                  <g id="SvgjsG1188" class="apexcharts-grid">
                                    <g id="SvgjsG1189" class="apexcharts-gridlines-horizontal">
                                      <line id="SvgjsLine1191" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="362" y1="0"
                                            y2="0"></line>
                                      <line id="SvgjsLine1192" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="362" y1="16.6"
                                            y2="16.6"></line>
                                      <line id="SvgjsLine1193" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="362" y1="33.2"
                                            y2="33.2"></line>
                                      <line id="SvgjsLine1194" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4"
                                            stroke-linecap="butt" x1="0" x2="362"
                                            y1="49.800000000000004" y2="49.800000000000004"></line>
                                      <line id="SvgjsLine1195" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="362" y1="66.4"
                                            y2="66.4"></line>
                                      <line id="SvgjsLine1196" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="362" y1="83"
                                            y2="83"></line>
                                    </g>
                                    <g id="SvgjsG1190" class="apexcharts-gridlines-vertical"></g>
                                    <line id="SvgjsLine1198" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0" x2="362"
                                          y1="83" y2="83"></line>
                                    <line id="SvgjsLine1197" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0" x2="0"
                                          y1="1" y2="83"></line>
                                  </g>
                                  <g id="SvgjsG1167" class="apexcharts-area-series apexcharts-plot-series">
                                    <g id="SvgjsG1168" class="apexcharts-series" data:longestSeries="true"
                                       data:realIndex="0" rel="1" seriesName="Orders">
                                      <path id="SvgjsPath1171"
                                            class="apexcharts-area"
                                            clip-path="url(#gridRectMask3rwsjmpc)" d="M0 83L0 77.46666666666667C12.67 77.46666666666667 23.53 77.46666666666667 36.2 77.46666666666667C48.870000000000005 77.46666666666667 59.730000000000004 66.4 72.4 66.4C85.07000000000001 66.4 95.93 77.46666666666667 108.60000000000001 77.46666666666667C121.27000000000001 77.46666666666667 132.13000000000002 38.733333333333334 144.8 38.733333333333334C157.47 38.733333333333334 168.33 71.93333333333334 181 71.93333333333334C193.67000000000002 71.93333333333334 204.53 66.4 217.20000000000002 66.4C229.87 66.4 240.73000000000002 11.066666666666663 253.4 11.066666666666663C266.07 11.066666666666663 276.93 77.46666666666667 289.6 77.46666666666667C302.27000000000004 77.46666666666667 313.13 66.4 325.8 66.4C338.47 66.4 349.33 60.86666666666667 362 60.86666666666667C362 60.86666666666667 362 60.86666666666667 362 83M362 60.86666666666667C362 60.86666666666667 362 60.86666666666667 362 60.86666666666667 " fill="rgba(80,205,137,0)"
                                            fill-opacity="1" index="0" pathFrom="M -1 83L -1 83L 36.2 83L 72.4 83L 108.60000000000001 83L 144.8 83L 181 83L 217.20000000000002 83L 253.4 83L 289.6 83L 325.8 83L 362 83"
                                            pathTo="M 0 83L 0 77.46666666666667C 12.67 77.46666666666667 23.53 77.46666666666667 36.2 77.46666666666667C 48.870000000000005 77.46666666666667 59.730000000000004 66.4 72.4 66.4C 85.07000000000001 66.4 95.93 77.46666666666667 108.60000000000001 77.46666666666667C 121.27000000000001 77.46666666666667 132.13000000000002 38.733333333333334 144.8 38.733333333333334C 157.47 38.733333333333334 168.33 71.93333333333334 181 71.93333333333334C 193.67000000000002 71.93333333333334 204.53 66.4 217.20000000000002 66.4C 229.87 66.4 240.73000000000002 11.066666666666663 253.4 11.066666666666663C 266.07 11.066666666666663 276.93 77.46666666666667 289.6 77.46666666666667C 302.27000000000004 77.46666666666667 313.13 66.4 325.8 66.4C 338.47 66.4 349.33 60.86666666666667 362 60.86666666666667C 362 60.86666666666667 362 60.86666666666667 362 83M 362 60.86666666666667z" stroke-dasharray="0" stroke-linecap="butt"
                                            stroke-opacity="1"
                                            stroke-width="0"></path>
                                      <path id="SvgjsPath1172"
                                            class="apexcharts-area"
                                            clip-path="url(#gridRectMask3rwsjmpc)" d="M0 77.46666666666667C12.67 77.46666666666667 23.53 77.46666666666667 36.2 77.46666666666667C48.870000000000005 77.46666666666667 59.730000000000004 66.4 72.4 66.4C85.07000000000001 66.4 95.93 77.46666666666667 108.60000000000001 77.46666666666667C121.27000000000001 77.46666666666667 132.13000000000002 38.733333333333334 144.8 38.733333333333334C157.47 38.733333333333334 168.33 71.93333333333334 181 71.93333333333334C193.67000000000002 71.93333333333334 204.53 66.4 217.20000000000002 66.4C229.87 66.4 240.73000000000002 11.066666666666663 253.4 11.066666666666663C266.07 11.066666666666663 276.93 77.46666666666667 289.6 77.46666666666667C302.27000000000004 77.46666666666667 313.13 66.4 325.8 66.4C338.47 66.4 349.33 60.86666666666667 362 60.86666666666667C362 60.86666666666667 362 60.86666666666667 362 60.86666666666667 " fill="none" fill-opacity="1"
                                            index="0" pathFrom="M -1 83L -1 83L 36.2 83L 72.4 83L 108.60000000000001 83L 144.8 83L 181 83L 217.20000000000002 83L 253.4 83L 289.6 83L 325.8 83L 362 83" pathTo="M 0 77.46666666666667C 12.67 77.46666666666667 23.53 77.46666666666667 36.2 77.46666666666667C 48.870000000000005 77.46666666666667 59.730000000000004 66.4 72.4 66.4C 85.07000000000001 66.4 95.93 77.46666666666667 108.60000000000001 77.46666666666667C 121.27000000000001 77.46666666666667 132.13000000000002 38.733333333333334 144.8 38.733333333333334C 157.47 38.733333333333334 168.33 71.93333333333334 181 71.93333333333334C 193.67000000000002 71.93333333333334 204.53 66.4 217.20000000000002 66.4C 229.87 66.4 240.73000000000002 11.066666666666663 253.4 11.066666666666663C 266.07 11.066666666666663 276.93 77.46666666666667 289.6 77.46666666666667C 302.27000000000004 77.46666666666667 313.13 66.4 325.8 66.4C 338.47 66.4 349.33 60.86666666666667 362 60.86666666666667"
                                            stroke="#3f4254" stroke-dasharray="0" stroke-linecap="butt"
                                            stroke-opacity="1"
                                            stroke-width="2"></path>
                                      <g id="SvgjsG1169" class="apexcharts-series-markers-wrap" data:realIndex="0">
                                        <g class="apexcharts-series-markers">
                                          <circle id="SvgjsCircle1206" class="apexcharts-marker wklhri0tqh no-pointer-events" cx="0" cy="0"
                                                  default-marker-size="0"
                                                  fill="#50cd89" fill-opacity="1" r="0" stroke="#3f4254"
                                                  stroke-opacity="0.9" stroke-width="2"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g id="SvgjsG1170" class="apexcharts-datalabels" data:realIndex="0"></g>
                                  </g>
                                  <line id="SvgjsLine1200" class="apexcharts-xcrosshairs" fill="#b1b9c4" fill-opacity="0.9" filter="none" height="83"
                                        stroke="#3f4254" stroke-dasharray="3" stroke-linecap="butt" stroke-width="1"
                                        width="1" x="0" x1="0" x2="0" y="0" y1="0"
                                        y2="83"></line>
                                  <line id="SvgjsLine1201" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt" stroke-width="1"
                                        x1="0" x2="362" y1="0"
                                        y2="0"></line>
                                  <line id="SvgjsLine1202" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0" x1="0"
                                        x2="362" y1="0"
                                        y2="0"></line>
                                  <g id="SvgjsG1203" class="apexcharts-yaxis-annotations"></g>
                                  <g id="SvgjsG1204" class="apexcharts-xaxis-annotations"></g>
                                  <g id="SvgjsG1205" class="apexcharts-point-annotations"></g>
                                  <rect id="SvgjsRect1207" class="apexcharts-zoom-rect" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none"
                                        stroke-dasharray="0" stroke-width="0" width="0" x="0"
                                        y="0"></rect>
                                  <rect id="SvgjsRect1208" class="apexcharts-selection-rect" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none"
                                        stroke-dasharray="0" stroke-width="0" width="0" x="0"
                                        y="0"></rect>
                                </g>
                                <g id="SvgjsG1186" class="apexcharts-yaxis" rel="0" transform="translate(-8, 0)">
                                  <g id="SvgjsG1187" class="apexcharts-yaxis-texts-g"></g>
                                </g>
                                <rect id="SvgjsRect1199" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none" stroke-dasharray="0"
                                      stroke-width="0" width="0" x="0" y="0"></rect>
                                <g id="SvgjsG1162" class="apexcharts-annotations"></g>
                              </svg>
                              <div class="apexcharts-legend" style="max-height: 62.5px;"></div>
                              <div class="apexcharts-tooltip apexcharts-theme-light">
                                <div class="apexcharts-tooltip-title"
                                     style="font-family: inherit; font-size: 12px;"></div>
                                <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                                    class="apexcharts-tooltip-marker"
                                    style="background-color: rgb(80, 205, 137);"></span>
                                  <div class="apexcharts-tooltip-text" style="font-family: inherit; font-size: 12px;">
                                    <div class="apexcharts-tooltip-y-group"><span
                                        class="apexcharts-tooltip-text-y-label"></span><span
                                        class="apexcharts-tooltip-text-y-value"></span></div>
                                    <div class="apexcharts-tooltip-goals-group"><span
                                        class="apexcharts-tooltip-text-goals-label"></span><span
                                        class="apexcharts-tooltip-text-goals-value"></span></div>
                                    <div class="apexcharts-tooltip-z-group"><span
                                        class="apexcharts-tooltip-text-z-label"></span><span
                                        class="apexcharts-tooltip-text-z-value"></span></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                  class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                <div class="apexcharts-xaxistooltip-text"
                                     style="font-family: inherit; font-size: 12px;"></div>
                              </div>
                              <div
                                  class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div class="apexcharts-yaxistooltip-text"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card card-flush h-md-50 mb-lg-10">
                        <div class="card-header pt-5">
                          <div class="card-title d-flex flex-column"><span
                              class="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">181</span><span
                              class="text-gray-400 pt-1 fw-bold fs-6">New Customers This Month</span></div>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-end pe-0"><span
                            class="fs-6 fw-boldest text-gray-800 d-block mb-2">Last Customers</span>
                          <div class="symbol-group symbol-hover flex-nowrap">
                            <div class="symbol symbol-35px symbol-circle" title="ايهم الفارس"><a
                                class="" href="/en/admin/customers/2337/view"><span
                                class="symbol-label fw-bolder text-white bg-danger">ا</span></a></div>
                            <div class="symbol symbol-35px symbol-circle" title="زكور ابو احمد"><a
                                class="" href="/en/admin/customers/2336/view"><span
                                class="symbol-label fw-bolder text-white bg-warning">ز</span></a></div>
                            <div class="symbol symbol-35px symbol-circle" title="عمر العابد"><a
                                class="" href="/en/admin/customers/2335/view"><span
                                class="symbol-label fw-bolder text-white bg-warning">ع</span></a></div>
                            <div class="symbol symbol-35px symbol-circle" title="فراس البظ"><a
                                class="" href="/en/admin/customers/2334/view"><span
                                class="symbol-label fw-bolder text-white bg-danger">ف</span></a></div>
                            <div class="symbol symbol-35px symbol-circle" title="ابو النور مصري"><a
                                class="" href="/en/admin/customers/2333/view"><span
                                class="symbol-label fw-bolder text-white bg-danger">ا</span></a></div>
                            <div class="symbol symbol-35px symbol-circle" title="فادي رنكوسي"><a
                                class="" href="/en/admin/customers/2332/view"><span
                                class="symbol-label fw-bolder text-white bg-success">ف</span></a></div>
                            <div class="symbol symbol-35px symbol-circle"><a class=""
                                                                             href="/en/admin/customers/list"><span
                                class="symbol-label bg-light text-gray-400 fs-8 fw-bolder"> +175</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-xl-6 mb-5 mb-xl-10">
                      <div class="card overflow-hidden h-md-50 mb-5 mb-xl-10">
                        <div class="card-body d-flex justify-content-between flex-column px-0 pb-0">
                          <div class="mb-4 px-9">
                            <div class="d-flex align-items-center mb-2"><span
                                class="fs-2hx fw-bolder text-gray-800 me-2 lh-1 ls-n2">28</span><span
                                class="d-flex align-items-end text-gray-400 fs-6 fw-bold">Shipment</span></div>
                            <span class="fs-6 fw-bold text-gray-400">Total shipments this year</span></div>
                          <div id="kt_card_widget_12_chart" class="min-h-auto"
                               style="height: 125px; min-height: 140px;">
                            <div id="apexchartswoc3pn79"
                                 class="apexcharts-canvas apexchartswoc3pn79 apexcharts-theme-light"
                                 style="width: 332px; height: 125px;">
                              <svg id="SvgjsSvg1209" class="apexcharts-svg apexcharts-zoomable" height="125" style="background: transparent;"
                                   transform="translate(0, 0)" version="1.1"
                                   width="332" xmlns="http://www.w3.org/2000/svg"
                                   xmlns:data="ApexChartsNS" xmlns:svgjs="http://svgjs.dev"
                                   xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="SvgjsG1211" class="apexcharts-inner apexcharts-graphical"
                                   transform="translate(-10, 30)">
                                  <defs id="SvgjsDefs1210">
                                    <clipPath id="gridRectMaskwoc3pn79">
                                      <rect id="SvgjsRect1214" fill="#fff" height="102" opacity="1" rx="0" ry="0" stroke="none"
                                            stroke-dasharray="0" stroke-width="0" width="367" x="-3"
                                            y="-1"></rect>
                                    </clipPath>
                                    <clipPath id="forecastMaskwoc3pn79"></clipPath>
                                    <clipPath id="nonForecastMaskwoc3pn79"></clipPath>
                                    <clipPath id="gridRectMarkerMaskwoc3pn79">
                                      <rect id="SvgjsRect1215" fill="#fff" height="104" opacity="1" rx="0" ry="0" stroke="none"
                                            stroke-dasharray="0" stroke-width="0" width="365" x="-2"
                                            y="-2"></rect>
                                    </clipPath>
                                  </defs>
                                  <g id="SvgjsG1223" class="apexcharts-xaxis" transform="translate(0, 0)">
                                    <g id="SvgjsG1224" class="apexcharts-xaxis-texts-g"
                                       transform="translate(0, -4)"></g>
                                  </g>
                                  <g id="SvgjsG1228" class="apexcharts-grid">
                                    <g id="SvgjsG1229" class="apexcharts-gridlines-horizontal">
                                      <line id="SvgjsLine1231" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="361" y1="0"
                                            y2="0"></line>
                                      <line id="SvgjsLine1232" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="361" y1="25"
                                            y2="25"></line>
                                      <line id="SvgjsLine1233" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="361" y1="50"
                                            y2="50"></line>
                                      <line id="SvgjsLine1234" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="361" y1="75"
                                            y2="75"></line>
                                      <line id="SvgjsLine1235" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                            x2="361" y1="100"
                                            y2="100"></line>
                                    </g>
                                    <g id="SvgjsG1230" class="apexcharts-gridlines-vertical"></g>
                                    <line id="SvgjsLine1237" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0" x2="361"
                                          y1="100" y2="100"></line>
                                    <line id="SvgjsLine1236" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0" x2="0"
                                          y1="1" y2="100"></line>
                                  </g>
                                  <g id="SvgjsG1216" class="apexcharts-area-series apexcharts-plot-series">
                                    <g id="SvgjsG1217" class="apexcharts-series" data:longestSeries="true"
                                       data:realIndex="0" rel="1" seriesName="Shipments">
                                      <g id="SvgjsG1218" class="apexcharts-series-markers-wrap" data:realIndex="0">
                                        <g id="SvgjsG1220" class="" clip-path="url(#gridRectMarkerMaskwoc3pn79)">
                                          <circle id="SvgjsCircle1221" class="apexcharts-marker no-pointer-events wiqsylikeg" cx="180.5" cy="1.4210854715202004e-14"
                                                  default-marker-size="1"
                                                  fill="#50cd89" fill-opacity="1" index="0" j="0"
                                                  r="1" rel="0" stroke="#3f4254" stroke-opacity="0.9"
                                                  stroke-width="2"></circle>
                                          <circle id="SvgjsCircle1222" class="apexcharts-nullpoint" cx="180.5" cy="0"
                                                  default-marker-size="1" fill="#50cd89" fill-opacity="1"
                                                  index="0" j="1" r="0" rel="1" stroke="#3f4254"
                                                  stroke-opacity="0.9" stroke-width="2"></circle>
                                        </g>
                                        <g class="apexcharts-series-markers">
                                          <circle id="SvgjsCircle1245" class="apexcharts-marker w596kdn77 no-pointer-events" cx="0" cy="0"
                                                  default-marker-size="0" fill="#50cd89"
                                                  fill-opacity="1" r="0" stroke="#3f4254" stroke-opacity="0.9"
                                                  stroke-width="2"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g id="SvgjsG1219" class="apexcharts-datalabels" data:realIndex="0"></g>
                                  </g>
                                  <line id="SvgjsLine1239" class="apexcharts-xcrosshairs" fill="#b1b9c4" fill-opacity="0.9" filter="none" height="100"
                                        stroke="#3f4254" stroke-dasharray="3" stroke-linecap="butt" stroke-width="1"
                                        width="1" x="0" x1="0" x2="0" y="0" y1="0"
                                        y2="100"></line>
                                  <line id="SvgjsLine1240" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt" stroke-width="1"
                                        x1="0" x2="361" y1="0"
                                        y2="0"></line>
                                  <line id="SvgjsLine1241" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0" x1="0"
                                        x2="361" y1="0"
                                        y2="0"></line>
                                  <g id="SvgjsG1242" class="apexcharts-yaxis-annotations"></g>
                                  <g id="SvgjsG1243" class="apexcharts-xaxis-annotations"></g>
                                  <g id="SvgjsG1244" class="apexcharts-point-annotations"></g>
                                  <rect id="SvgjsRect1246" class="apexcharts-zoom-rect" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none"
                                        stroke-dasharray="0" stroke-width="0" width="0" x="0"
                                        y="0"></rect>
                                  <rect id="SvgjsRect1247" class="apexcharts-selection-rect" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none"
                                        stroke-dasharray="0" stroke-width="0" width="0" x="0"
                                        y="0"></rect>
                                </g>
                                <g id="SvgjsG1226" class="apexcharts-yaxis" rel="0" transform="translate(-8, 0)">
                                  <g id="SvgjsG1227" class="apexcharts-yaxis-texts-g"></g>
                                </g>
                                <rect id="SvgjsRect1238" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none" stroke-dasharray="0"
                                      stroke-width="0" width="0" x="0" y="0"></rect>
                                <g id="SvgjsG1212" class="apexcharts-annotations"></g>
                              </svg>
                              <div class="apexcharts-legend" style="max-height: 62.5px;"></div>
                              <div class="apexcharts-tooltip apexcharts-theme-light">
                                <div class="apexcharts-tooltip-title"
                                     style="font-family: inherit; font-size: 12px;"></div>
                                <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                                    class="apexcharts-tooltip-marker"
                                    style="background-color: rgb(80, 205, 137);"></span>
                                  <div class="apexcharts-tooltip-text" style="font-family: inherit; font-size: 12px;">
                                    <div class="apexcharts-tooltip-y-group"><span
                                        class="apexcharts-tooltip-text-y-label"></span><span
                                        class="apexcharts-tooltip-text-y-value"></span></div>
                                    <div class="apexcharts-tooltip-goals-group"><span
                                        class="apexcharts-tooltip-text-goals-label"></span><span
                                        class="apexcharts-tooltip-text-goals-value"></span></div>
                                    <div class="apexcharts-tooltip-z-group"><span
                                        class="apexcharts-tooltip-text-z-label"></span><span
                                        class="apexcharts-tooltip-text-z-value"></span></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                  class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                <div class="apexcharts-xaxistooltip-text"
                                     style="font-family: inherit; font-size: 12px;"></div>
                              </div>
                              <div
                                  class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div class="apexcharts-yaxistooltip-text"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card card-flush h-md-50 mb-lg-10">
                        <div class="card-header pt-5">
                          <div class="card-title d-flex flex-column"><span
                              class="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">6</span><span
                              class="text-gray-400 pt-1 fw-bold fs-6">Your Orders this month</span></div>
                        </div>
                        <div class="card-body d-flex align-items-end pt-0">
                          <div class="d-flex align-items-center flex-wrap">
                            <div id="kt_card_widget_10_chart" class="min-h-auto"
                                 style="height: 125px; min-height: 101.7px;">
                              <div id="apexcharts8qti1xho"
                                   class="apexcharts-canvas apexcharts8qti1xho apexcharts-theme-light"
                                   style="width: 273px; height: 101.7px;">
                                <svg id="SvgjsSvg1248" class="apexcharts-svg" height="101.7" style="background: transparent;"
                                     transform="translate(0, 0)" version="1.1"
                                     width="273" xmlns="http://www.w3.org/2000/svg" xmlns:data="ApexChartsNS"
                                     xmlns:svgjs="http://svgjs.dev" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <foreignObject height="101.7" width="273" x="0" y="0">
                                    <div class="apexcharts-legend apexcharts-align-center apx-legend-position-right"
                                         style="position: absolute; left: auto; top: 24px; right: 5px;"
                                         xmlns="http://www.w3.org/1999/xhtml">
                                      <div class="apexcharts-legend-series" data:collapsed="false" rel="1"
                                           seriesname="Complteted" style="margin: 2px 5px;"><span
                                          class="apexcharts-legend-marker" data:collapsed="false" rel="1"
                                          style="background: rgb(80, 205, 137) !important; color: rgb(80, 205, 137); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span
                                          class="apexcharts-legend-text" data:collapsed="false" data:default-text="Complteted" i="0"
                                          rel="1"
                                          style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Complteted</span>
                                      </div>
                                      <div class="apexcharts-legend-series" data:collapsed="false" rel="2"
                                           seriesname="Inxprogress" style="margin: 2px 5px;"><span
                                          class="apexcharts-legend-marker" data:collapsed="false" rel="2"
                                          style="background: rgb(0, 158, 247) !important; color: rgb(0, 158, 247); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span
                                          class="apexcharts-legend-text" data:collapsed="false" data:default-text="In%20progress" i="1"
                                          rel="2"
                                          style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">In progress</span>
                                      </div>
                                      <div class="apexcharts-legend-series" data:collapsed="false" rel="3"
                                           seriesname="Uncompleted" style="margin: 2px 5px;"><span
                                          class="apexcharts-legend-marker" data:collapsed="false" rel="3"
                                          style="background: rgb(241, 65, 108) !important; color: rgb(241, 65, 108); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span
                                          class="apexcharts-legend-text" data:collapsed="false" data:default-text="Uncompleted" i="2"
                                          rel="3"
                                          style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Uncompleted</span>
                                      </div>
                                    </div>
                                    <style type="text/css">

                                      .apexcharts-legend {
                                        display: flex;
                                        overflow: auto;
                                        padding: 0 10px;
                                      }

                                      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {
                                        flex-wrap: wrap
                                      }

                                      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
                                        flex-direction: column;
                                        bottom: 0;
                                      }

                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
                                        justify-content: flex-start;
                                      }

                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
                                        justify-content: center;
                                      }

                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
                                        justify-content: flex-end;
                                      }

                                      .apexcharts-legend-series {
                                        cursor: pointer;
                                        line-height: normal;
                                      }

                                      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {
                                        display: flex;
                                        align-items: center;
                                      }

                                      .apexcharts-legend-text {
                                        position: relative;
                                        font-size: 14px;
                                      }

                                      .apexcharts-legend-text *, .apexcharts-legend-marker * {
                                        pointer-events: none;
                                      }

                                      .apexcharts-legend-marker {
                                        position: relative;
                                        display: inline-block;
                                        cursor: pointer;
                                        margin-right: 3px;
                                        border-style: solid;
                                      }

                                      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {
                                        display: inline-block;
                                      }

                                      .apexcharts-legend-series.apexcharts-no-click {
                                        cursor: auto;
                                      }

                                      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
                                        display: none !important;
                                      }

                                      .apexcharts-inactive-legend {
                                        opacity: 0.45;
                                      }</style>
                                  </foreignObject>
                                  <g id="SvgjsG1250" class="apexcharts-inner apexcharts-graphical"
                                     transform="translate(22, 0)">
                                    <defs id="SvgjsDefs1249">
                                      <clipPath id="gridRectMask8qti1xho">
                                        <rect id="SvgjsRect1252" fill="#fff" height="127" opacity="1" rx="0" ry="0" stroke="none"
                                              stroke-dasharray="0" stroke-width="0" width="105" x="-3"
                                              y="-1"></rect>
                                      </clipPath>
                                      <clipPath id="forecastMask8qti1xho"></clipPath>
                                      <clipPath id="nonForecastMask8qti1xho"></clipPath>
                                      <clipPath id="gridRectMarkerMask8qti1xho">
                                        <rect id="SvgjsRect1253" fill="#fff" height="129" opacity="1" rx="0" ry="0" stroke="none"
                                              stroke-dasharray="0" stroke-width="0" width="103" x="-2"
                                              y="-2"></rect>
                                      </clipPath>
                                      <filter id="SvgjsFilter1264" filterUnits="userSpaceOnUse" height="200%"
                                              width="200%" x="-50%" y="-50%">
                                        <feFlood id="SvgjsFeFlood1265" flood-color="#000000" flood-opacity="0.45"
                                                 in="SourceGraphic" result="SvgjsFeFlood1265Out"></feFlood>
                                        <feComposite id="SvgjsFeComposite1266" in="SvgjsFeFlood1265Out"
                                                     in2="SourceAlpha" operator="in"
                                                     result="SvgjsFeComposite1266Out"></feComposite>
                                        <feOffset id="SvgjsFeOffset1267" dx="1" dy="1" in="SvgjsFeComposite1266Out"
                                                  result="SvgjsFeOffset1267Out"></feOffset>
                                        <feGaussianBlur id="SvgjsFeGaussianBlur1268" in="SvgjsFeOffset1267Out"
                                                        result="SvgjsFeGaussianBlur1268Out"
                                                        stdDeviation="1 "></feGaussianBlur>
                                        <feMerge id="SvgjsFeMerge1269" in="SourceGraphic" result="SvgjsFeMerge1269Out">
                                          <feMergeNode id="SvgjsFeMergeNode1270"
                                                       in="SvgjsFeGaussianBlur1268Out"></feMergeNode>
                                          <feMergeNode id="SvgjsFeMergeNode1271" in="[object Arguments]"></feMergeNode>
                                        </feMerge>
                                        <feBlend id="SvgjsFeBlend1272" in="SourceGraphic" in2="SvgjsFeMerge1269Out"
                                                 mode="normal" result="SvgjsFeBlend1272Out"></feBlend>
                                      </filter>
                                      <filter id="SvgjsFilter1277" filterUnits="userSpaceOnUse" height="200%"
                                              width="200%" x="-50%" y="-50%">
                                        <feFlood id="SvgjsFeFlood1278" flood-color="#000000" flood-opacity="0.45"
                                                 in="SourceGraphic" result="SvgjsFeFlood1278Out"></feFlood>
                                        <feComposite id="SvgjsFeComposite1279" in="SvgjsFeFlood1278Out"
                                                     in2="SourceAlpha" operator="in"
                                                     result="SvgjsFeComposite1279Out"></feComposite>
                                        <feOffset id="SvgjsFeOffset1280" dx="1" dy="1" in="SvgjsFeComposite1279Out"
                                                  result="SvgjsFeOffset1280Out"></feOffset>
                                        <feGaussianBlur id="SvgjsFeGaussianBlur1281" in="SvgjsFeOffset1280Out"
                                                        result="SvgjsFeGaussianBlur1281Out"
                                                        stdDeviation="1 "></feGaussianBlur>
                                        <feMerge id="SvgjsFeMerge1282" in="SourceGraphic" result="SvgjsFeMerge1282Out">
                                          <feMergeNode id="SvgjsFeMergeNode1283"
                                                       in="SvgjsFeGaussianBlur1281Out"></feMergeNode>
                                          <feMergeNode id="SvgjsFeMergeNode1284" in="[object Arguments]"></feMergeNode>
                                        </feMerge>
                                        <feBlend id="SvgjsFeBlend1285" in="SourceGraphic" in2="SvgjsFeMerge1282Out"
                                                 mode="normal" result="SvgjsFeBlend1285Out"></feBlend>
                                      </filter>
                                    </defs>
                                    <g id="SvgjsG1254" class="apexcharts-pie">
                                      <g id="SvgjsG1255" transform="translate(0, 0) scale(1)">
                                        <circle id="SvgjsCircle1256" cx="49.5" cy="49.5" fill="transparent"
                                                r="27.49024390243903"></circle>
                                        <g id="SvgjsG1257" class="apexcharts-slices">
                                          <g id="SvgjsG1258" class="apexcharts-series apexcharts-pie-series"
                                             data:realIndex="0" rel="1" seriesName="Complteted">
                                            <path id="SvgjsPath1259"
                                                  class="apexcharts-pie-area apexcharts-donut-slice-0"
                                                  d="M 49.5 7.207317073170728 A 42.29268292682927 42.29268292682927 0 0 1 49.5 7.207317073170728 L 49.5 22.00975609756097 A 27.49024390243903 27.49024390243903 0 0 0 49.5 22.00975609756097 L 49.5 7.207317073170728 z" data:angle="0" data:pathOrig="M 49.5 7.207317073170728 A 42.29268292682927 42.29268292682927 0 0 1 49.5 7.207317073170728 L 49.5 22.00975609756097 A 27.49024390243903 27.49024390243903 0 0 0 49.5 22.00975609756097 L 49.5 7.207317073170728 z"
                                                  data:startAngle="0" data:strokeWidth="2" data:value="0"
                                                  fill="rgba(80,205,137,1)" fill-opacity="1" index="0"
                                                  j="0" stroke="#ffffff" stroke-dasharray="0" stroke-linecap="butt"
                                                  stroke-opacity="1"
                                                  stroke-width="2"></path>
                                          </g>
                                          <g id="SvgjsG1260" class="apexcharts-series apexcharts-pie-series"
                                             data:realIndex="1" rel="2" seriesName="Inxprogress">
                                            <path id="SvgjsPath1261"
                                                  class="apexcharts-pie-area apexcharts-donut-slice-1"
                                                  d="M 49.5 7.207317073170728 A 42.29268292682927 42.29268292682927 0 1 1 37.03850429879601 9.084877161659023 L 41.40002779421741 23.230170155078362 A 27.49024390243903 27.49024390243903 0 1 0 49.5 22.00975609756097 L 49.5 7.207317073170728 z" data:angle="342.863510386011" data:pathOrig="M 49.5 7.207317073170728 A 42.29268292682927 42.29268292682927 0 1 1 37.03850429879601 9.084877161659023 L 41.40002779421741 23.230170155078362 A 27.49024390243903 27.49024390243903 0 1 0 49.5 22.00975609756097 L 49.5 7.207317073170728 z"
                                                  data:startAngle="0" data:strokeWidth="2" data:value="33333"
                                                  fill="rgba(0,158,247,1)" fill-opacity="1" index="0"
                                                  j="1" stroke="#ffffff" stroke-dasharray="0"
                                                  stroke-linecap="butt"
                                                  stroke-opacity="1"
                                                  stroke-width="2"></path>
                                          </g>
                                          <g id="SvgjsG1273" class="apexcharts-series apexcharts-pie-series"
                                             data:realIndex="2" rel="3" seriesName="Uncompleted">
                                            <path id="SvgjsPath1274"
                                                  class="apexcharts-pie-area apexcharts-donut-slice-2"
                                                  d="M 37.03850429879601 9.084877161659023 A 42.29268292682927 42.29268292682927 0 0 1 49.492618534371715 7.207317717325118 L 49.495202047341614 22.009756516261326 A 27.49024390243903 27.49024390243903 0 0 0 41.40002779421741 23.230170155078362 L 37.03850429879601 9.084877161659023 z" data:angle="17.136489613989" data:pathOrig="M 37.03850429879601 9.084877161659023 A 42.29268292682927 42.29268292682927 0 0 1 49.492618534371715 7.207317717325118 L 49.495202047341614 22.009756516261326 A 27.49024390243903 27.49024390243903 0 0 0 41.40002779421741 23.230170155078362 L 37.03850429879601 9.084877161659023 z"
                                                  data:startAngle="342.863510386011" data:strokeWidth="2" data:value="1666"
                                                  fill="rgba(241,65,108,1)" fill-opacity="1" index="0"
                                                  j="2" stroke="#ffffff"
                                                  stroke-dasharray="0" stroke-linecap="butt"
                                                  stroke-opacity="1"
                                                  stroke-width="2"></path>
                                          </g>
                                          <g id="SvgjsG1262" class="apexcharts-datalabels">
                                            <text id="SvgjsText1263" class="apexcharts-text apexcharts-pie-label"
                                                  dominant-baseline="auto" fill="#ffffff" filter="url(#SvgjsFilter1264)"
                                                  font-family="Helvetica, Arial, sans-serif" font-size="12px" font-weight="600"
                                                  style="font-family: Helvetica, Arial, sans-serif;" text-anchor="middle"
                                                  x="54.69838560456127"
                                                  y="84.00204350934948">95.2%
                                            </text>
                                          </g>
                                          <g id="SvgjsG1275" class="apexcharts-datalabels">
                                            <text id="SvgjsText1276" class="apexcharts-text apexcharts-pie-label"
                                                  dominant-baseline="auto" fill="#ffffff" filter="url(#SvgjsFilter1277)"
                                                  font-family="Helvetica, Arial, sans-serif" font-size="12px" font-weight="600"
                                                  style="font-family: Helvetica, Arial, sans-serif;" text-anchor="middle"
                                                  x="44.30161439543875"
                                                  y="14.99795649065053">4.8%
                                            </text>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <line id="SvgjsLine1286" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt" stroke-width="1"
                                          x1="0" x2="99" y1="0"
                                          y2="0"></line>
                                    <line id="SvgjsLine1287" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0" x1="0"
                                          x2="99" y1="0"
                                          y2="0"></line>
                                  </g>
                                  <g id="SvgjsG1251" class="apexcharts-annotations"></g>
                                </svg>
                                <div class="apexcharts-tooltip apexcharts-theme-dark">
                                  <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                                      class="apexcharts-tooltip-marker"
                                      style="background-color: rgb(80, 205, 137);"></span>
                                    <div class="apexcharts-tooltip-text"
                                         style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                      <div class="apexcharts-tooltip-y-group"><span
                                          class="apexcharts-tooltip-text-y-label"></span><span
                                          class="apexcharts-tooltip-text-y-value"></span></div>
                                      <div class="apexcharts-tooltip-goals-group"><span
                                          class="apexcharts-tooltip-text-goals-label"></span><span
                                          class="apexcharts-tooltip-text-goals-value"></span></div>
                                      <div class="apexcharts-tooltip-z-group"><span
                                          class="apexcharts-tooltip-text-z-label"></span><span
                                          class="apexcharts-tooltip-text-z-value"></span></div>
                                    </div>
                                  </div>
                                  <div class="apexcharts-tooltip-series-group" style="order: 2;"><span
                                      class="apexcharts-tooltip-marker"
                                      style="background-color: rgb(0, 158, 247);"></span>
                                    <div class="apexcharts-tooltip-text"
                                         style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                      <div class="apexcharts-tooltip-y-group"><span
                                          class="apexcharts-tooltip-text-y-label"></span><span
                                          class="apexcharts-tooltip-text-y-value"></span></div>
                                      <div class="apexcharts-tooltip-goals-group"><span
                                          class="apexcharts-tooltip-text-goals-label"></span><span
                                          class="apexcharts-tooltip-text-goals-value"></span></div>
                                      <div class="apexcharts-tooltip-z-group"><span
                                          class="apexcharts-tooltip-text-z-label"></span><span
                                          class="apexcharts-tooltip-text-z-value"></span></div>
                                    </div>
                                  </div>
                                  <div class="apexcharts-tooltip-series-group" style="order: 3;"><span
                                      class="apexcharts-tooltip-marker"
                                      style="background-color: rgb(241, 65, 108);"></span>
                                    <div class="apexcharts-tooltip-text"
                                         style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                      <div class="apexcharts-tooltip-y-group"><span
                                          class="apexcharts-tooltip-text-y-label"></span><span
                                          class="apexcharts-tooltip-text-y-value"></span></div>
                                      <div class="apexcharts-tooltip-goals-group"><span
                                          class="apexcharts-tooltip-text-goals-label"></span><span
                                          class="apexcharts-tooltip-text-goals-value"></span></div>
                                      <div class="apexcharts-tooltip-z-group"><span
                                          class="apexcharts-tooltip-text-z-label"></span><span
                                          class="apexcharts-tooltip-text-z-value"></span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row gy-5 g-xl-10">
                <div class="col-xl-4 mb-xl-10">
                  <div class="card card-flush h-lg-100">
                    <div class="card-header pt-7"><h3 class="card-title align-items-start flex-column"><span
                        class="card-label fw-bolder text-gray-800">Order History</span><span
                        class="text-gray-400 mt-1 fw-bold fs-6">0 New order</span></h3>
                      <div class="card-toolbar"><a class="btn btn-sm btn-light" href="/en/admin/Orders/list">View
                        All</a></div>
                    </div>
                    <div class="card-body">
                      <div class="m-0">
                        <div class="d-flex align-items-sm-center mb-5">
                          <div class="symbol symbol-45px me-4"><span class="symbol-label bg-primary"><span
                              class="svg-icon svg-icon-2x svg-icon-white"><i class="dash-icon"><i
                              class="fas fa-box"></i></i></span></span></div>
                          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div class="flex-grow-1 me-2"><a class="text-gray-400 fs-6 fw-bold"
                                                             href="/en/admin/Orders/BOXjt-2206243/view">Box Carton</a><span
                                class="text-gray-800 fw-bolder d-block fs-4"> #BOXjt-2206243</span></div>
                            <span class="badge badge-lg fw-bolder my-2 btn-warning">Accepted</span></div>
                        </div>
                        <div class="timeline">
                          <div class="timeline-item align-items-center mb-7">
                            <div class="timeline-line w-40px mt-6 mb-n12"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24"
                                                                                 viewBox="0 0 24 24" width="24"
                                                                                 xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span
                                class="fs-6 text-gray-400 fw-bold d-block">Gaziantep</span><span
                                class="fs-6 fw-bolder text-gray-800"><!----> Turkey</span></div>
                          </div>
                          <div class="timeline-item align-items-center">
                            <div class="timeline-line w-40px"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24"
                                                                               viewBox="0 0 24 24" width="24"
                                                                               xmlns="http://www.w3.org/2000/svg">
<path d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span class="fs-6 text-gray-400 fw-bold d-block">Lübeckmoislinger berg. 15 Germany</span><span
                                class="fs-6 fw-bolder text-gray-800"><span> - </span> Germany</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="separator separator-dashed my-6"></div>
                      <div class="m-0">
                        <div class="d-flex align-items-sm-center mb-5">
                          <div class="symbol symbol-45px me-4"><span class="symbol-label bg-primary"><span
                              class="svg-icon svg-icon-2x svg-icon-white"><i class="dash-icon"><i
                              class="fas fa-box"></i></i></span></span></div>
                          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div class="flex-grow-1 me-2"><a class="text-gray-400 fs-6 fw-bold"
                                                             href="/en/admin/Orders/LBqVJ-2206563/view">Large Box</a><span
                                class="text-gray-800 fw-bolder d-block fs-4"> #LBqVJ-2206563</span></div>
                            <span class="badge badge-lg fw-bolder my-2 btn-warning">Accepted</span></div>
                        </div>
                        <div class="timeline">
                          <div class="timeline-item align-items-center mb-7">
                            <div class="timeline-line w-40px mt-6 mb-n12"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24"
                                                                                 viewBox="0 0 24 24" width="24"
                                                                                 xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span
                                class="fs-6 text-gray-400 fw-bold d-block">gaziantep</span><span
                                class="fs-6 fw-bolder text-gray-800"><!----> Turkey</span></div>
                          </div>
                          <div class="timeline-item align-items-center">
                            <div class="timeline-line w-40px"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24"
                                                                               viewBox="0 0 24 24" width="24"
                                                                               xmlns="http://www.w3.org/2000/svg">
<path d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span class="fs-6 text-gray-400 fw-bold d-block">wien / 0221 / telephone Weg 265 G8 Osterreich</span><span
                                class="fs-6 fw-bolder text-gray-800"><span>Vienna - </span> Austria</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="separator separator-dashed my-6"></div>
                      <div class="m-0">
                        <div class="d-flex align-items-sm-center mb-5">
                          <div class="symbol symbol-45px me-4"><span class="symbol-label bg-primary"><span
                              class="svg-icon svg-icon-2x svg-icon-white"><i class="dash-icon"><i
                              class="fas fa-expand-arrows-alt"></i></i></span></span></div>
                          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div class="flex-grow-1 me-2"><a class="text-gray-400 fs-6 fw-bold"
                                                             href="/en/admin/Orders/CBMji-2206715/view">CBM</a><span
                                class="text-gray-800 fw-bolder d-block fs-4"> #CBMji-2206715</span></div>
                            <span class="badge badge-lg fw-bolder my-2 btn-warning">Accepted</span></div>
                        </div>
                        <div class="timeline">
                          <div class="timeline-item align-items-center mb-7">
                            <div class="timeline-line w-40px mt-6 mb-n12"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24"
                                                                                 viewBox="0 0 24 24" width="24"
                                                                                 xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span
                                class="fs-6 text-gray-400 fw-bold d-block">gaziantep</span><span
                                class="fs-6 fw-bolder text-gray-800"><!----> Turkey</span></div>
                          </div>
                          <div class="timeline-item align-items-center">
                            <div class="timeline-line w-40px"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24"
                                                                               viewBox="0 0 24 24" width="24"
                                                                               xmlns="http://www.w3.org/2000/svg">
<path d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span class="fs-6 text-gray-400 fw-bold d-block">Uerdinger Str, 20—22 47799 Krefeld</span><span
                                class="fs-6 fw-bolder text-gray-800"><span>Wilsdruff - </span> Germany</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="separator separator-dashed my-6"></div>
                      <div class="m-0">
                        <div class="d-flex align-items-sm-center mb-5">
                          <div class="symbol symbol-45px me-4"><span class="symbol-label bg-primary"><span
                              class="svg-icon svg-icon-2x svg-icon-white"><i class="dash-icon"><i
                              class="fas fa-box"></i></i></span></span></div>
                          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div class="flex-grow-1 me-2"><a class="text-gray-400 fs-6 fw-bold"
                                                             href="/en/admin/Orders/LBbrN-2206777/view">Large Box</a><span
                                class="text-gray-800 fw-bolder d-block fs-4"> #LBbrN-2206777</span></div>
                            <span class="badge badge-lg fw-bolder my-2 btn-warning">Accepted</span></div>
                        </div>
                        <div class="timeline">
                          <div class="timeline-item align-items-center mb-7">
                            <div class="timeline-line w-40px mt-6 mb-n12"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24"
                                                                                 viewBox="0 0 24 24" width="24"
                                                                                 xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span class="fs-6 text-gray-400 fw-bold d-block">سلطان غازي</span><span
                                class="fs-6 fw-bolder text-gray-800"><!----> Turkey</span></div>
                          </div>
                          <div class="timeline-item align-items-center">
                            <div class="timeline-line w-40px"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24"
                                                                               viewBox="0 0 24 24" width="24"
                                                                               xmlns="http://www.w3.org/2000/svg">
<path d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span
                                class="fs-6 text-gray-400 fw-bold d-block">Mettlach</span><span
                                class="fs-6 fw-bolder text-gray-800"><span>Brandenburg - </span> Germany</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="separator separator-dashed my-6"></div>
                      <div class="m-0">
                        <div class="d-flex align-items-sm-center mb-5">
                          <div class="symbol symbol-45px me-4"><span class="symbol-label bg-primary"><span
                              class="svg-icon svg-icon-2x svg-icon-white"><i class="dash-icon"><i
                              class="fas fa-couch"></i></i></span></span></div>
                          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div class="flex-grow-1 me-2"><a class="text-gray-400 fs-6 fw-bold"
                                                             href="/en/admin/Orders/FRYpA-2206583/view">Furniture</a><span
                                class="text-gray-800 fw-bolder d-block fs-4"> #FRYpA-2206583</span></div>
                            <span class="badge badge-lg fw-bolder my-2 btn-warning">Accepted</span></div>
                        </div>
                        <div class="timeline">
                          <div class="timeline-item align-items-center mb-7">
                            <div class="timeline-line w-40px mt-6 mb-n12"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24"
                                                                                 viewBox="0 0 24 24" width="24"
                                                                                 xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span
                                class="fs-6 text-gray-400 fw-bold d-block">gaziantep</span><span
                                class="fs-6 fw-bolder text-gray-800"><!----> Turkey</span></div>
                          </div>
                          <div class="timeline-item align-items-center">
                            <div class="timeline-line w-40px"></div>
                            <div class="timeline-icon" style="margin-left: 11px;"><span
                                class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24"
                                                                               viewBox="0 0 24 24" width="24"
                                                                               xmlns="http://www.w3.org/2000/svg">
<path d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                            <div class="timeline-content m-0"><span class="fs-6 text-gray-400 fw-bold d-block">rue du reigersvliet 37 1040 etterbeek</span><span
                                class="fs-6 fw-bolder text-gray-800"><span>etterbeek - </span> Belgium</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="separator separator-dashed my-6"></div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-8 mb-5 mb-xl-10">
                  <div class="row g-5 g-xl-10 h-xxl-50 mb-0 mb-xl-10">
                    <div class="col-xxl-6">
                      <div class="card card-flush h-lg-100">
                        <div class="card-header py-7 mb-3"><h3 class="card-title align-items-start flex-column"><span
                            class="card-label fw-bolder text-gray-800">Top Selling Services</span><span
                            class="text-gray-400 mt-1 fw-bold fs-6">22% Of orders in Pallet</span></h3>
                          <div class="card-toolbar"><a aria-current="page" class="router-link-active router-link-exact-active btn btn-sm btn-light"
                                                       href="/en/admin/reports#kt_vtab_pane_3">View
                            All</a></div>
                        </div>
                        <div class="card-body py-0 ps-6 mt-n12">
                          <div id="kt_charts_widget_6" style="min-height: 365px;">
                            <div id="apexcharts9pl0y49b"
                                 class="apexcharts-canvas apexcharts9pl0y49b apexcharts-theme-light"
                                 style="width: 634px; height: 350px;">
                              <svg id="SvgjsSvg1047" class="apexcharts-svg" height="350" style="background: transparent;"
                                   transform="translate(0, 0)" version="1.1"
                                   width="634" xmlns="http://www.w3.org/2000/svg" xmlns:data="ApexChartsNS"
                                   xmlns:svgjs="http://svgjs.dev" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="SvgjsG1049" class="apexcharts-inner apexcharts-graphical"
                                   transform="translate(103.5, 30)">
                                  <defs id="SvgjsDefs1048">
                                    <linearGradient id="SvgjsLinearGradient1053" x1="0" x2="0" y1="0" y2="1">
                                      <stop id="SvgjsStop1054" offset="0" stop-color="rgba(216,227,240,0.4)"
                                            stop-opacity="0.4"></stop>
                                      <stop id="SvgjsStop1055" offset="1" stop-color="rgba(190,209,230,0.5)"
                                            stop-opacity="0.5"></stop>
                                      <stop id="SvgjsStop1056" offset="1" stop-color="rgba(190,209,230,0.5)"
                                            stop-opacity="0.5"></stop>
                                    </linearGradient>
                                    <clipPath id="gridRectMask9pl0y49b">
                                      <rect id="SvgjsRect1058" fill="#fff" height="273.93439876556397" opacity="1" rx="0"
                                            ry="0" stroke="none" stroke-dasharray="0" stroke-width="0" width="524.5"
                                            x="-2" y="0"></rect>
                                    </clipPath>
                                    <clipPath id="forecastMask9pl0y49b"></clipPath>
                                    <clipPath id="nonForecastMask9pl0y49b"></clipPath>
                                    <clipPath id="gridRectMarkerMask9pl0y49b">
                                      <rect id="SvgjsRect1059" fill="#fff" height="277.93439876556397" opacity="1" rx="0"
                                            ry="0" stroke="none" stroke-dasharray="0" stroke-width="0" width="524.5"
                                            x="-2" y="-2"></rect>
                                    </clipPath>
                                  </defs>
                                  <rect id="SvgjsRect1057" class="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient1053)" fill-opacity="0.9" filter="none" height="273.93439876556397"
                                        opacity="1" rx="0" ry="0" stroke-dasharray="3"
                                        stroke-width="0" width="0"
                                        x="0" y="0" y2="273.93439876556397"></rect>
                                  <g id="SvgjsG1123" class="apexcharts-yaxis apexcharts-xaxis-inversed" rel="0">
                                    <g id="SvgjsG1124"
                                       class="apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g"
                                       transform="translate(-78.9659652709961, 0)">
                                      <text id="SvgjsText1125" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                            font-family="inherit" font-size="14px" font-weight="600"
                                            style="font-family: inherit;" text-anchor="start"
                                            x="-15"
                                            y="23.345537566147843">
                                        <tspan id="SvgjsTspan1126">Pallet</tspan>
                                        <title>Pallet</title></text>
                                      <text id="SvgjsText1127" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                            font-family="inherit" font-size="14px" font-weight="600"
                                            style="font-family: inherit;" text-anchor="start"
                                            x="-15"
                                            y="62.479023104085556">
                                        <tspan id="SvgjsTspan1128">Box Carton</tspan>
                                        <title>Box Carton</title></text>
                                      <text id="SvgjsText1129" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                            font-family="inherit" font-size="14px" font-weight="600"
                                            style="font-family: inherit;" text-anchor="start"
                                            x="-15"
                                            y="101.61250864202327">
                                        <tspan id="SvgjsTspan1130">Truck</tspan>
                                        <title>Truck</title></text>
                                      <text id="SvgjsText1131" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                            font-family="inherit" font-size="14px" font-weight="600"
                                            style="font-family: inherit;" text-anchor="start"
                                            x="-15"
                                            y="140.74599417996097">
                                        <tspan id="SvgjsTspan1132">KG</tspan>
                                        <title>KG</title></text>
                                      <text id="SvgjsText1133" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                            font-family="inherit" font-size="14px" font-weight="600"
                                            style="font-family: inherit;" text-anchor="start"
                                            x="-15"
                                            y="179.87947971789868">
                                        <tspan id="SvgjsTspan1134">Large Box</tspan>
                                        <title>Large Box</title></text>
                                      <text id="SvgjsText1135" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                            font-family="inherit" font-size="14px" font-weight="600"
                                            style="font-family: inherit;" text-anchor="start"
                                            x="-15"
                                            y="219.01296525583638">
                                        <tspan id="SvgjsTspan1136">Furniture</tspan>
                                        <title>Furniture</title></text>
                                      <text id="SvgjsText1137" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                            font-family="inherit" font-size="14px" font-weight="600"
                                            style="font-family: inherit;" text-anchor="start"
                                            x="-15"
                                            y="258.1464507937741">
                                        <tspan id="SvgjsTspan1138">CBM</tspan>
                                        <title>CBM</title></text>
                                    </g>
                                  </g>
                                  <g id="SvgjsG1106" class="apexcharts-xaxis apexcharts-yaxis-inversed">
                                    <g id="SvgjsG1107" class="apexcharts-xaxis-texts-g"
                                       transform="translate(0, -9.333333333333334)">
                                      <text id="SvgjsText1108" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto" fill="#3f4254"
                                            font-family="inherit" font-size="14px" font-weight="600"
                                            style="font-family: inherit;" text-anchor="middle"
                                            x="520.5"
                                            y="303.93439876556397">
                                        <tspan id="SvgjsTspan1110">8</tspan>
                                        <title>8</title></text>
                                      <text id="SvgjsText1111" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto" fill="#3f4254"
                                            font-family="inherit" font-size="14px" font-weight="600"
                                            style="font-family: inherit;" text-anchor="middle"
                                            x="390.275"
                                            y="303.93439876556397">
                                        <tspan id="SvgjsTspan1113">6</tspan>
                                        <title>6</title></text>
                                      <text id="SvgjsText1114" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto"
                                            fill="#3f4254" font-family="inherit" font-size="14px"
                                            font-weight="600" style="font-family: inherit;" text-anchor="middle"
                                            x="260.05000000000007"
                                            y="303.93439876556397">
                                        <tspan id="SvgjsTspan1116">4</tspan>
                                        <title>4</title></text>
                                      <text id="SvgjsText1117" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto"
                                            fill="#3f4254" font-family="inherit" font-size="14px"
                                            font-weight="600" style="font-family: inherit;" text-anchor="middle"
                                            x="129.82500000000005"
                                            y="303.93439876556397">
                                        <tspan id="SvgjsTspan1119">2</tspan>
                                        <title>2</title></text>
                                      <text id="SvgjsText1120" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto"
                                            fill="#3f4254" font-family="inherit" font-size="14px"
                                            font-weight="600" style="font-family: inherit;" text-anchor="middle"
                                            x="-0.39999999999997726"
                                            y="303.93439876556397">
                                        <tspan id="SvgjsTspan1122">0</tspan>
                                        <title>0</title></text>
                                    </g>
                                  </g>
                                  <g id="SvgjsG1139" class="apexcharts-grid">
                                    <g id="SvgjsG1140" class="apexcharts-gridlines-horizontal"></g>
                                    <g id="SvgjsG1141" class="apexcharts-gridlines-vertical">
                                      <line id="SvgjsLine1142" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt"
                                            x1="0" x2="0" y1="0"
                                            y2="273.93439876556397"></line>
                                      <line id="SvgjsLine1144" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt"
                                            x1="130.425" x2="130.425" y1="0"
                                            y2="273.93439876556397"></line>
                                      <line id="SvgjsLine1146" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt"
                                            x1="260.85" x2="260.85" y1="0"
                                            y2="273.93439876556397"></line>
                                      <line id="SvgjsLine1148" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4"
                                            stroke-linecap="butt" x1="391.27500000000003" x2="391.27500000000003"
                                            y1="0" y2="273.93439876556397"></line>
                                      <line id="SvgjsLine1150" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt"
                                            x1="521.7" x2="521.7" y1="0"
                                            y2="273.93439876556397"></line>
                                    </g>
                                    <line id="SvgjsLine1143" class="apexcharts-xaxis-tick" stroke="#e0e0e0" stroke-dasharray="0"
                                          stroke-linecap="butt" x1="0" x2="0"
                                          y1="274.93439876556397" y2="280.93439876556397"></line>
                                    <line id="SvgjsLine1145" class="apexcharts-xaxis-tick" stroke="#e0e0e0" stroke-dasharray="0"
                                          stroke-linecap="butt" x1="130.425" x2="130.425"
                                          y1="274.93439876556397" y2="280.93439876556397"></line>
                                    <line id="SvgjsLine1147" class="apexcharts-xaxis-tick" stroke="#e0e0e0" stroke-dasharray="0"
                                          stroke-linecap="butt" x1="260.85" x2="260.85"
                                          y1="274.93439876556397" y2="280.93439876556397"></line>
                                    <line id="SvgjsLine1149" class="apexcharts-xaxis-tick" stroke="#e0e0e0"
                                          stroke-dasharray="0" stroke-linecap="butt" x1="391.27500000000003"
                                          x2="391.27500000000003" y1="274.93439876556397"
                                          y2="280.93439876556397"></line>
                                    <line id="SvgjsLine1151" class="apexcharts-xaxis-tick" stroke="#e0e0e0" stroke-dasharray="0"
                                          stroke-linecap="butt" x1="521.7" x2="521.7"
                                          y1="274.93439876556397" y2="280.93439876556397"></line>
                                    <line id="SvgjsLine1153" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"
                                          x1="0" x2="520.5" y1="273.93439876556397"
                                          y2="273.93439876556397"></line>
                                    <line id="SvgjsLine1152" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0"
                                          x2="0" y1="1" y2="273.93439876556397"></line>
                                  </g>
                                  <g id="SvgjsG1060" class="apexcharts-bar-series apexcharts-plot-series">
                                    <g id="SvgjsG1061" class="apexcharts-series" data:realIndex="0" rel="1"
                                       seriesName="Order">
                                      <path id="SvgjsPath1065"
                                            barHeight="19.566742768968854"
                                            barWidth="520.5" class="apexcharts-bar-area" clip-path="url(#gridRectMask9pl0y49b)"
                                            cx="520.6" cy="48.916856922422134" d="M0.1 9.783371384484427L512.6 9.783371384484427C517.9333333333334 9.783371384484427 520.6 12.450038051151093 520.6 17.783371384484425L520.6 21.350114153453283C520.6 26.683447486786616 517.9333333333334 29.350114153453283 512.6 29.350114153453283L512.6 29.350114153453283L0.1 29.350114153453283L0.1 29.350114153453283C0.1 29.350114153453283 0.1 9.783371384484427 0.1 9.783371384484427 "
                                            fill="rgba(62,151,255,0.85)" fill-opacity="1" index="0"
                                            j="0"
                                            pathFrom="M 0.1 9.783371384484427L 0.1 9.783371384484427L 0.1 29.350114153453283L 0.1 29.350114153453283L 0.1 29.350114153453283L 0.1 29.350114153453283L 0.1 29.350114153453283L 0.1 9.783371384484427"
                                            pathTo="M 0.1 9.783371384484427L 512.6 9.783371384484427Q 520.6 9.783371384484427 520.6 17.783371384484425L 520.6 21.350114153453283Q 520.6 29.350114153453283 512.6 29.350114153453283L 512.6 29.350114153453283L 0.1 29.350114153453283L 0.1 29.350114153453283z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1"
                                            stroke-width="0" val="8"></path>
                                      <path id="SvgjsPath1071"
                                            barHeight="19.566742768968854"
                                            barWidth="520.5" class="apexcharts-bar-area" clip-path="url(#gridRectMask9pl0y49b)"
                                            cx="520.6" cy="88.05034246035984" d="M0.1 48.916856922422134L512.6 48.916856922422134C517.9333333333334 48.91685692242213 520.6 51.5835235890888 520.6 56.916856922422134L520.6 60.48359969139099C520.6 65.81693302472434 517.9333333333334 68.48359969139099 512.6 68.48359969139099L512.6 68.48359969139099L0.1 68.48359969139099L0.1 68.48359969139099C0.1 68.48359969139099 0.1 48.916856922422134 0.1 48.916856922422134 "
                                            fill="rgba(241,65,108,0.85)" fill-opacity="1" index="0"
                                            j="1"
                                            pathFrom="M 0.1 48.916856922422134L 0.1 48.916856922422134L 0.1 68.48359969139099L 0.1 68.48359969139099L 0.1 68.48359969139099L 0.1 68.48359969139099L 0.1 68.48359969139099L 0.1 48.916856922422134"
                                            pathTo="M 0.1 48.916856922422134L 512.6 48.916856922422134Q 520.6 48.916856922422134 520.6 56.916856922422134L 520.6 60.48359969139099Q 520.6 68.48359969139099 512.6 68.48359969139099L 512.6 68.48359969139099L 0.1 68.48359969139099L 0.1 68.48359969139099z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1"
                                            stroke-width="0" val="8"></path>
                                      <path id="SvgjsPath1077"
                                            barHeight="19.566742768968854"
                                            barWidth="390.375" class="apexcharts-bar-area" clip-path="url(#gridRectMask9pl0y49b)"
                                            cx="390.475" cy="127.18382799829755" d="M0.1 88.05034246035984L382.475 88.05034246035984C387.80833333333334 88.05034246035984 390.475 90.7170091270265 390.475 96.05034246035984L390.475 99.6170852293287C390.475 104.95041856266204 387.80833333333334 107.6170852293287 382.475 107.6170852293287L382.475 107.6170852293287L0.1 107.6170852293287L0.1 107.6170852293287C0.1 107.6170852293287 0.1 88.05034246035984 0.1 88.05034246035984 "
                                            fill="rgba(80,205,137,0.85)" fill-opacity="1" index="0"
                                            j="2"
                                            pathFrom="M 0.1 88.05034246035984L 0.1 88.05034246035984L 0.1 107.6170852293287L 0.1 107.6170852293287L 0.1 107.6170852293287L 0.1 107.6170852293287L 0.1 107.6170852293287L 0.1 88.05034246035984"
                                            pathTo="M 0.1 88.05034246035984L 382.475 88.05034246035984Q 390.475 88.05034246035984 390.475 96.05034246035984L 390.475 99.6170852293287Q 390.475 107.6170852293287 382.475 107.6170852293287L 382.475 107.6170852293287L 0.1 107.6170852293287L 0.1 107.6170852293287z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1"
                                            stroke-width="0" val="6"></path>
                                      <path id="SvgjsPath1083"
                                            barHeight="19.566742768968854"
                                            barWidth="390.375" class="apexcharts-bar-area" clip-path="url(#gridRectMask9pl0y49b)"
                                            cx="390.475" cy="166.31731353623525" d="M0.1 127.18382799829755L382.475 127.18382799829755C387.80833333333334 127.18382799829755 390.475 129.8504946649642 390.475 135.18382799829755L390.475 138.7505707672664C390.475 144.08390410059974 387.80833333333334 146.7505707672664 382.475 146.7505707672664L382.475 146.7505707672664L0.1 146.7505707672664L0.1 146.7505707672664C0.1 146.7505707672664 0.1 127.18382799829755 0.1 127.18382799829755 "
                                            fill="rgba(255,199,0,0.85)" fill-opacity="1" index="0"
                                            j="3"
                                            pathFrom="M 0.1 127.18382799829755L 0.1 127.18382799829755L 0.1 146.7505707672664L 0.1 146.7505707672664L 0.1 146.7505707672664L 0.1 146.7505707672664L 0.1 146.7505707672664L 0.1 127.18382799829755"
                                            pathTo="M 0.1 127.18382799829755L 382.475 127.18382799829755Q 390.475 127.18382799829755 390.475 135.18382799829755L 390.475 138.7505707672664Q 390.475 146.7505707672664 382.475 146.7505707672664L 382.475 146.7505707672664L 0.1 146.7505707672664L 0.1 146.7505707672664z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1"
                                            stroke-width="0" val="6"></path>
                                      <path id="SvgjsPath1089"
                                            barHeight="19.566742768968854"
                                            barWidth="325.3125" class="apexcharts-bar-area" clip-path="url(#gridRectMask9pl0y49b)"
                                            cx="325.4125" cy="205.45079907417295" d="M0.1 166.31731353623525L317.4125 166.31731353623525C322.7458333333334 166.31731353623525 325.4125 168.9839802029019 325.4125 174.31731353623525L325.4125 177.8840563052041C325.4125 183.21738963853744 322.7458333333334 185.8840563052041 317.4125 185.8840563052041L317.4125 185.8840563052041L0.1 185.8840563052041L0.1 185.8840563052041C0.1 185.8840563052041 0.1 166.31731353623525 0.1 166.31731353623525 "
                                            fill="rgba(114,57,234,0.85)" fill-opacity="1" index="0"
                                            j="4"
                                            pathFrom="M 0.1 166.31731353623525L 0.1 166.31731353623525L 0.1 185.8840563052041L 0.1 185.8840563052041L 0.1 185.8840563052041L 0.1 185.8840563052041L 0.1 185.8840563052041L 0.1 166.31731353623525"
                                            pathTo="M 0.1 166.31731353623525L 317.4125 166.31731353623525Q 325.4125 166.31731353623525 325.4125 174.31731353623525L 325.4125 177.8840563052041Q 325.4125 185.8840563052041 317.4125 185.8840563052041L 317.4125 185.8840563052041L 0.1 185.8840563052041L 0.1 185.8840563052041z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1"
                                            stroke-width="0" val="5"></path>
                                      <path id="SvgjsPath1095"
                                            barHeight="19.566742768968854"
                                            barWidth="130.125" class="apexcharts-bar-area" clip-path="url(#gridRectMask9pl0y49b)"
                                            cx="130.225" cy="244.58428461211065" d="M0.1 205.45079907417295L122.225 205.45079907417295C127.55833333333334 205.45079907417295 130.225 208.1174657408396 130.225 213.45079907417295L130.225 217.0175418431418C130.225 222.35087517647514 127.55833333333334 225.0175418431418 122.225 225.0175418431418L122.225 225.0175418431418L0.1 225.0175418431418L0.1 225.0175418431418C0.1 225.0175418431418 0.1 205.45079907417295 0.1 205.45079907417295 "
                                            fill="rgba(62,151,255,0.85)" fill-opacity="1" index="0"
                                            j="5"
                                            pathFrom="M 0.1 205.45079907417295L 0.1 205.45079907417295L 0.1 225.0175418431418L 0.1 225.0175418431418L 0.1 225.0175418431418L 0.1 225.0175418431418L 0.1 225.0175418431418L 0.1 205.45079907417295"
                                            pathTo="M 0.1 205.45079907417295L 122.225 205.45079907417295Q 130.225 205.45079907417295 130.225 213.45079907417295L 130.225 217.0175418431418Q 130.225 225.0175418431418 122.225 225.0175418431418L 122.225 225.0175418431418L 0.1 225.0175418431418L 0.1 225.0175418431418z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1"
                                            stroke-width="0" val="2"></path>
                                      <path id="SvgjsPath1101"
                                            barHeight="19.566742768968854"
                                            barWidth="65.0625" class="apexcharts-bar-area" clip-path="url(#gridRectMask9pl0y49b)"
                                            cx="65.1625" cy="283.71777015004835" d="M0.1 244.58428461211065L57.162499999999994 244.58428461211065C62.49583333333332 244.58428461211065 65.1625 247.25095127877734 65.1625 252.58428461211065L65.1625 256.15102738107953C65.1625 261.48436071441284 62.49583333333332 264.15102738107953 57.162499999999994 264.15102738107953L57.162499999999994 264.15102738107953L0.1 264.15102738107953L0.1 264.15102738107953C0.1 264.15102738107953 0.1 244.58428461211065 0.1 244.58428461211065 "
                                            fill="rgba(241,65,108,0.85)" fill-opacity="1" index="0"
                                            j="6"
                                            pathFrom="M 0.1 244.58428461211065L 0.1 244.58428461211065L 0.1 264.15102738107953L 0.1 264.15102738107953L 0.1 264.15102738107953L 0.1 264.15102738107953L 0.1 264.15102738107953L 0.1 244.58428461211065"
                                            pathTo="M 0.1 244.58428461211065L 57.162499999999994 244.58428461211065Q 65.1625 244.58428461211065 65.1625 252.58428461211065L 65.1625 256.15102738107953Q 65.1625 264.15102738107953 57.162499999999994 264.15102738107953L 57.162499999999994 264.15102738107953L 0.1 264.15102738107953L 0.1 264.15102738107953z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1"
                                            stroke-width="0" val="1"></path>
                                      <g id="SvgjsG1063" class="apexcharts-bar-goals-markers"
                                         style="pointer-events: none">
                                        <g id="SvgjsG1064" className="apexcharts-bar-goals-groups"></g>
                                        <g id="SvgjsG1070" className="apexcharts-bar-goals-groups"></g>
                                        <g id="SvgjsG1076" className="apexcharts-bar-goals-groups"></g>
                                        <g id="SvgjsG1082" className="apexcharts-bar-goals-groups"></g>
                                        <g id="SvgjsG1088" className="apexcharts-bar-goals-groups"></g>
                                        <g id="SvgjsG1094" className="apexcharts-bar-goals-groups"></g>
                                        <g id="SvgjsG1100" className="apexcharts-bar-goals-groups"></g>
                                      </g>
                                    </g>
                                    <g id="SvgjsG1062" class="apexcharts-datalabels" data:realIndex="0">
                                      <g id="SvgjsG1067" class="apexcharts-data-labels" transform="rotate(0)">
                                        <text id="SvgjsText1069" class="apexcharts-datalabel" cx="26.100000000000023"
                                              cy="26.166743150438577" dominant-baseline="auto" fill="#ffffff"
                                              font-family="inherit" font-size="14px" font-weight="600"
                                              style="font-family: inherit;" text-anchor="start"
                                              x="26.100000000000023" y="26.166743150438577">8
                                        </text>
                                      </g>
                                      <g id="SvgjsG1073" class="apexcharts-data-labels" transform="rotate(0)">
                                        <text id="SvgjsText1075" class="apexcharts-datalabel" cx="26.100000000000023"
                                              cy="65.30022868837628" dominant-baseline="auto" fill="#ffffff"
                                              font-family="inherit" font-size="14px" font-weight="600"
                                              style="font-family: inherit;" text-anchor="start"
                                              x="26.100000000000023" y="65.30022868837628">8
                                        </text>
                                      </g>
                                      <g id="SvgjsG1079" class="apexcharts-data-labels" transform="rotate(0)">
                                        <text id="SvgjsText1081" class="apexcharts-datalabel" cx="26.100000000000023"
                                              cy="104.433714226314" dominant-baseline="auto" fill="#ffffff"
                                              font-family="inherit" font-size="14px" font-weight="600"
                                              style="font-family: inherit;" text-anchor="start" x="26.100000000000023"
                                              y="104.433714226314">6
                                        </text>
                                      </g>
                                      <g id="SvgjsG1085" class="apexcharts-data-labels" transform="rotate(0)">
                                        <text id="SvgjsText1087" class="apexcharts-datalabel" cx="26.100000000000023"
                                              cy="143.5671997642517" dominant-baseline="auto" fill="#ffffff"
                                              font-family="inherit" font-size="14px" font-weight="600"
                                              style="font-family: inherit;" text-anchor="start"
                                              x="26.100000000000023" y="143.5671997642517">6
                                        </text>
                                      </g>
                                      <g id="SvgjsG1091" class="apexcharts-data-labels" transform="rotate(0)">
                                        <text id="SvgjsText1093" class="apexcharts-datalabel" cx="25.100000000000023"
                                              cy="182.7006853021894" dominant-baseline="auto" fill="#ffffff"
                                              font-family="inherit" font-size="14px" font-weight="600"
                                              style="font-family: inherit;" text-anchor="start"
                                              x="25.100000000000023" y="182.7006853021894">5
                                        </text>
                                      </g>
                                      <g id="SvgjsG1097" class="apexcharts-data-labels" transform="rotate(0)">
                                        <text id="SvgjsText1099" class="apexcharts-datalabel" cx="21.099999999999994"
                                              cy="221.83417084012711" dominant-baseline="auto" fill="#ffffff"
                                              font-family="inherit" font-size="14px" font-weight="600"
                                              style="font-family: inherit;" text-anchor="start"
                                              x="21.099999999999994" y="221.83417084012711">2
                                        </text>
                                      </g>
                                      <g id="SvgjsG1103" class="apexcharts-data-labels" transform="rotate(0)">
                                        <text id="SvgjsText1105" class="apexcharts-datalabel" cx="20.099999999999994"
                                              cy="260.9676563780648" dominant-baseline="auto" fill="#ffffff"
                                              font-family="inherit" font-size="14px" font-weight="600"
                                              style="font-family: inherit;" text-anchor="start"
                                              x="20.099999999999994" y="260.9676563780648">1
                                        </text>
                                      </g>
                                    </g>
                                  </g>
                                  <line id="SvgjsLine1154" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt" stroke-width="1"
                                        x1="0" x2="520.5" y1="0"
                                        y2="0"></line>
                                  <line id="SvgjsLine1155" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0" x1="0"
                                        x2="520.5" y1="0"
                                        y2="0"></line>
                                  <g id="SvgjsG1156" class="apexcharts-yaxis-annotations"></g>
                                  <g id="SvgjsG1157" class="apexcharts-xaxis-annotations"></g>
                                  <g id="SvgjsG1158" class="apexcharts-point-annotations"></g>
                                </g>
                                <g id="SvgjsG1050" class="apexcharts-annotations"></g>
                              </svg>
                              <div class="apexcharts-legend" style="max-height: 175px;"></div>
                              <div class="apexcharts-tooltip apexcharts-theme-light">
                                <div class="apexcharts-tooltip-title"
                                     style="font-family: inherit; font-size: 12px;"></div>
                                <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                                    class="apexcharts-tooltip-marker"
                                    style="background-color: rgb(62, 151, 255);"></span>
                                  <div class="apexcharts-tooltip-text" style="font-family: inherit; font-size: 12px;">
                                    <div class="apexcharts-tooltip-y-group"><span
                                        class="apexcharts-tooltip-text-y-label"></span><span
                                        class="apexcharts-tooltip-text-y-value"></span></div>
                                    <div class="apexcharts-tooltip-goals-group"><span
                                        class="apexcharts-tooltip-text-goals-label"></span><span
                                        class="apexcharts-tooltip-text-goals-value"></span></div>
                                    <div class="apexcharts-tooltip-z-group"><span
                                        class="apexcharts-tooltip-text-z-label"></span><span
                                        class="apexcharts-tooltip-text-z-value"></span></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                  class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div class="apexcharts-yaxistooltip-text"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-6 mb-5 mb-xl-0">
                      <div class="card card-flush h-lg-100">
                        <div class="card-header pt-7 mb-5"><h3 class="card-title align-items-start flex-column"><span
                            class="card-label fw-bolder text-gray-800">Countries Orders this month</span><span
                            class="text-gray-400 mt-1 fw-bold fs-6">97% Of orders in Turkey</span></h3>
                          <div class="card-toolbar"><a aria-current="page" class="router-link-active router-link-exact-active btn btn-sm btn-light"
                                                       href="/en/admin/reports#kt_vtab_pane_5">View
                            All</a></div>
                        </div>
                        <div class="card-body pt-0">
                          <div class="d-flex flex-stack"><img class="me-4 w-25px" src="/media/flags/iso/TR.svg"
                                                              style="border-radius: 4px;">
                            <div class="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6">Turkey</a>
                              </div>
                              <div class="d-flex align-items-center"><span
                                  class="text-gray-800 fw-bolder fs-6 me-3 d-block">35</span><span
                                  class="badge badge-success fs-base"><span
                                  class="svg-icon svg-icon-5 svg-icon-white ms-n1"><svg fill="none" height="24"
                                                                                        viewBox="0 0 24 24" width="24"
                                                                                        xmlns="http://www.w3.org/2000/svg">
<rect fill="black" height="2" opacity="0.5" rx="1" transform="rotate(90 13 6)" width="13" x="13"
      xmlns="http://www.w3.org/2000/svg" y="6"></rect>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span> 97%</span></div>
                            </div>
                          </div>
                          <div class="separator separator-dashed my-3"></div>
                          <div class="d-flex flex-stack"><img class="me-4 w-25px" src="/media/flags/iso/SY.svg"
                                                              style="border-radius: 4px;">
                            <div class="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6">Syrian Arab
                                Republic</a></div>
                              <div class="d-flex align-items-center"><span
                                  class="text-gray-800 fw-bolder fs-6 me-3 d-block">1</span><span
                                  class="badge badge-success fs-base"><span
                                  class="svg-icon svg-icon-5 svg-icon-white ms-n1"><svg fill="none" height="24"
                                                                                        viewBox="0 0 24 24" width="24"
                                                                                        xmlns="http://www.w3.org/2000/svg">
<rect fill="black" height="2" opacity="0.5" rx="1" transform="rotate(90 13 6)" width="13" x="13"
      xmlns="http://www.w3.org/2000/svg" y="6"></rect>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span> 2%</span></div>
                            </div>
                          </div>
                          <div class="separator separator-dashed my-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row h-xxl-50">
                    <div class="col">
                      <div class="card card-flush h-xxl-100">
                        <div class="card-header pt-7"><h3 class="card-title align-items-start flex-column"><span
                            class="card-label fw-bolder text-gray-800">Service Orders this year</span><span
                            class="text-gray-400 mt-1 fw-bold fs-6">89 Order</span></h3></div>
                        <div class="card-body d-flex flex-column justify-content-between pb-5 px-0">
                          <ul class="nav nav-pills nav-pills-custom mb-3 mx-9">
                            <li class="nav-item mb-3 me-3 me-lg-6"><a
                                id="kt_charts_widget_10_tab_9"
                                class="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active" data-bs-toggle="pill"
                                href="#kt_charts_widget_10_tab_content_9">
                              <div class="nav-icon mb-3">
                                <div class="service-orders-icon"><i class="fas fa-envelope"></i></div>
                              </div>
                              <span class="nav-text text-gray-800 fw-bolder fs-6 lh-1">Envelope</span><span
                                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span></a></li>
                            <li class="nav-item mb-3 me-3 me-lg-6"><a
                                id="kt_charts_widget_10_tab_10"
                                class="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill"
                                href="#kt_charts_widget_10_tab_content_10">
                              <div class="nav-icon mb-3">
                                <div class="service-orders-icon"><i class="fas fa-box"></i></div>
                              </div>
                              <span class="nav-text text-gray-800 fw-bolder fs-6 lh-1">Box Carton</span><span
                                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span></a></li>
                            <li class="nav-item mb-3 me-3 me-lg-6"><a
                                id="kt_charts_widget_10_tab_11"
                                class="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill"
                                href="#kt_charts_widget_10_tab_content_11">
                              <div class="nav-icon mb-3">
                                <div class="service-orders-icon"><i class="fas fa-truck-loading"></i></div>
                              </div>
                              <span class="nav-text text-gray-800 fw-bolder fs-6 lh-1">Pallet</span><span
                                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span></a></li>
                            <li class="nav-item mb-3 me-3 me-lg-6"><a
                                id="kt_charts_widget_10_tab_14"
                                class="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill"
                                href="#kt_charts_widget_10_tab_content_14">
                              <div class="nav-icon mb-3">
                                <div class="service-orders-icon"><i class="fas fa-truck-moving"></i></div>
                              </div>
                              <span class="nav-text text-gray-800 fw-bolder fs-6 lh-1">Truck</span><span
                                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span></a></li>
                            <li class="nav-item mb-3 me-3 me-lg-6"><a
                                id="kt_charts_widget_10_tab_16"
                                class="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill"
                                href="#kt_charts_widget_10_tab_content_16">
                              <div class="nav-icon mb-3">
                                <div class="service-orders-icon"><i class="fas fa-expand-arrows-alt"></i></div>
                              </div>
                              <span class="nav-text text-gray-800 fw-bolder fs-6 lh-1">CBM</span><span
                                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span></a></li>
                            <li class="nav-item mb-3 me-3 me-lg-6"><a
                                id="kt_charts_widget_10_tab_17"
                                class="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill"
                                href="#kt_charts_widget_10_tab_content_17">
                              <div class="nav-icon mb-3">
                                <div class="service-orders-icon"><i class="fas fa-weight"></i></div>
                              </div>
                              <span class="nav-text text-gray-800 fw-bolder fs-6 lh-1">KG</span><span
                                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span></a></li>
                            <li class="nav-item mb-3 me-3 me-lg-6"><a
                                id="kt_charts_widget_10_tab_18"
                                class="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill"
                                href="#kt_charts_widget_10_tab_content_18">
                              <div class="nav-icon mb-3">
                                <div class="service-orders-icon"><i class="fas fa-couch"></i></div>
                              </div>
                              <span class="nav-text text-gray-800 fw-bolder fs-6 lh-1">Furniture</span><span
                                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span></a></li>
                            <li class="nav-item mb-3 me-3 me-lg-6"><a
                                id="kt_charts_widget_10_tab_19"
                                class="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill"
                                href="#kt_charts_widget_10_tab_content_19">
                              <div class="nav-icon mb-3">
                                <div class="service-orders-icon"><i class="fas fa-box"></i></div>
                              </div>
                              <span class="nav-text text-gray-800 fw-bolder fs-6 lh-1">Small Box</span><span
                                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span></a></li>
                            <li class="nav-item mb-3 me-3 me-lg-6"><a
                                id="kt_charts_widget_10_tab_21"
                                class="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill"
                                href="#kt_charts_widget_10_tab_content_21">
                              <div class="nav-icon mb-3">
                                <div class="service-orders-icon"><i class="fas fa-box"></i></div>
                              </div>
                              <span class="nav-text text-gray-800 fw-bolder fs-6 lh-1">Large Box</span><span
                                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span></a></li>
                          </ul>
                          <div class="tab-content ps-4 pe-6">
                            <div id="kt_charts_widget_10_tab_content_9" class="tab-pane fade active show">
                              <div id="kt_charts_widget_10_chart_9" class="min-h-auto"
                                   style="height: 270px; min-height: 285px;">
                                <div id="apexchartsplgi1in7"
                                     class="apexcharts-canvas apexchartsplgi1in7 apexcharts-theme-light"
                                     style="width: 650px; height: 270px;">
                                  <svg id="SvgjsSvg1001" class="apexcharts-svg" height="270" style="background: transparent;"
                                       transform="translate(0, 0)" version="1.1"
                                       width="650" xmlns="http://www.w3.org/2000/svg" xmlns:data="ApexChartsNS"
                                       xmlns:svgjs="http://svgjs.dev" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="SvgjsG1003" class="apexcharts-inner apexcharts-graphical"
                                       transform="translate(31.16249990463257, 30)">
                                      <defs id="SvgjsDefs1002">
                                        <linearGradient id="SvgjsLinearGradient1007" x1="0" x2="0" y1="0" y2="1">
                                          <stop id="SvgjsStop1008" offset="0" stop-color="rgba(216,227,240,0)"
                                                stop-opacity="0"></stop>
                                          <stop id="SvgjsStop1009" offset="1" stop-color="rgba(190,209,230,0)"
                                                stop-opacity="0"></stop>
                                          <stop id="SvgjsStop1010" offset="1" stop-color="rgba(190,209,230,0)"
                                                stop-opacity="0"></stop>
                                        </linearGradient>
                                        <clipPath id="gridRectMaskplgi1in7">
                                          <rect id="SvgjsRect1012" fill="#fff" height="197.228800617218"
                                                opacity="1" rx="0" ry="0" stroke="none" stroke-dasharray="0" stroke-width="0" width="614.8375000953674"
                                                x="-3" y="-1"></rect>
                                        </clipPath>
                                        <clipPath id="forecastMaskplgi1in7"></clipPath>
                                        <clipPath id="nonForecastMaskplgi1in7"></clipPath>
                                        <clipPath id="gridRectMarkerMaskplgi1in7">
                                          <rect id="SvgjsRect1013" fill="#fff" height="199.228800617218"
                                                opacity="1" rx="0" ry="0" stroke="none" stroke-dasharray="0" stroke-width="0" width="612.8375000953674"
                                                x="-2" y="-2"></rect>
                                        </clipPath>
                                      </defs>
                                      <rect id="SvgjsRect1011" class="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient1007)"
                                            fill-opacity="0.9" filter="none" height="195.228800617218" opacity="1" rx="0" ry="0" stroke-dasharray="3"
                                            stroke-width="0" width="133.94425002098083"
                                            x="0" y="0" y2="195.228800617218"></rect>
                                      <g id="SvgjsG1024" class="apexcharts-xaxis" transform="translate(0, 0)">
                                        <g id="SvgjsG1025" class="apexcharts-xaxis-texts-g"
                                           transform="translate(0, -4)">
                                          <text id="SvgjsText1027" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto"
                                                fill="#a1a5b7" font-family="inherit" font-size="13px"
                                                font-weight="400" style="font-family: inherit;" text-anchor="middle"
                                                x="304.4187500476837"
                                                y="224.228800617218">
                                            <tspan id="SvgjsTspan1028">May</tspan>
                                            <title>May</title></text>
                                        </g>
                                      </g>
                                      <g id="SvgjsG1035" class="apexcharts-grid">
                                        <g id="SvgjsG1036" class="apexcharts-gridlines-horizontal">
                                          <line id="SvgjsLine1038" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt"
                                                x1="0" x2="608.8375000953674" y1="0"
                                                y2="0"></line>
                                          <line id="SvgjsLine1039" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4"
                                                stroke-linecap="butt" x1="0" x2="608.8375000953674"
                                                y1="195.228800617218" y2="195.228800617218"></line>
                                        </g>
                                        <g id="SvgjsG1037" class="apexcharts-gridlines-vertical"></g>
                                        <line id="SvgjsLine1041" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"
                                              x1="0" x2="608.8375000953674" y1="195.228800617218"
                                              y2="195.228800617218"></line>
                                        <line id="SvgjsLine1040" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0"
                                              x2="0" y1="1" y2="195.228800617218"></line>
                                      </g>
                                      <g id="SvgjsG1014" class="apexcharts-bar-series apexcharts-plot-series">
                                        <g id="SvgjsG1015" class="apexcharts-series" data:realIndex="0" rel="1"
                                           seriesName="Orders">
                                          <path id="SvgjsPath1019"
                                                barHeight="195.228800617218"
                                                barWidth="133.94425002098083" class="apexcharts-bar-area" clip-path="url(#gridRectMaskplgi1in7)"
                                                cx="845.2841251325608" cy="0" d="M237.44662503719331 195.228800617218L237.44662503719331 5C237.44662503719331 1.6666666666666572 239.11329170385997 0 242.44662503719331 0L364.3908750581742 0C367.7242083915075 0 369.3908750581742 1.6666666666666572 369.3908750581742 5L369.3908750581742 5L369.3908750581742 195.228800617218L369.3908750581742 195.228800617218C369.3908750581742 195.228800617218 237.44662503719331 195.228800617218 237.44662503719331 195.228800617218 "
                                                fill="rgba(0,158,247,1)" fill-opacity="1" index="0"
                                                j="0"
                                                pathFrom="M 237.44662503719331 195.228800617218L 237.44662503719331 195.228800617218L 369.3908750581742 195.228800617218L 369.3908750581742 195.228800617218L 369.3908750581742 195.228800617218L 369.3908750581742 195.228800617218L 369.3908750581742 195.228800617218L 237.44662503719331 195.228800617218"
                                                pathTo="M 237.44662503719331 195.228800617218L 237.44662503719331 5Q 237.44662503719331 0 242.44662503719331 0L 364.3908750581742 0Q 369.3908750581742 0 369.3908750581742 5L 369.3908750581742 5L 369.3908750581742 195.228800617218L 369.3908750581742 195.228800617218z"
                                                stroke="transparent" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1" stroke-width="2"
                                                val="1"></path>
                                          <g id="SvgjsG1017" class="apexcharts-bar-goals-markers"
                                             style="pointer-events: none">
                                            <g id="SvgjsG1018" className="apexcharts-bar-goals-groups"></g>
                                          </g>
                                        </g>
                                        <g id="SvgjsG1016" class="apexcharts-datalabels" data:realIndex="0">
                                          <g id="SvgjsG1021" class="apexcharts-data-labels" transform="rotate(0)">
                                            <text id="SvgjsText1023" class="apexcharts-datalabel" cx="303.4187500476838" cy="2"
                                                  dominant-baseline="auto" fill="labelColor" font-family="inherit"
                                                  font-size="13px" font-weight="600" style="font-family: inherit;"
                                                  text-anchor="middle" x="303.4187500476838" y="2">1
                                            </text>
                                          </g>
                                        </g>
                                      </g>
                                      <line id="SvgjsLine1042" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt"
                                            stroke-width="1" x1="0" x2="608.8375000953674" y1="0"
                                            y2="0"></line>
                                      <line id="SvgjsLine1043" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0"
                                            x1="0" x2="608.8375000953674" y1="0"
                                            y2="0"></line>
                                      <g id="SvgjsG1044" class="apexcharts-yaxis-annotations"></g>
                                      <g id="SvgjsG1045" class="apexcharts-xaxis-annotations"></g>
                                      <g id="SvgjsG1046" class="apexcharts-point-annotations"></g>
                                    </g>
                                    <g id="SvgjsG1029" class="apexcharts-yaxis" rel="0"
                                       transform="translate(1.1624999046325684, 0)">
                                      <g id="SvgjsG1030" class="apexcharts-yaxis-texts-g">
                                        <text id="SvgjsText1031" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#a1a5b7" font-family="inherit"
                                              font-size="13px" font-weight="400" style="font-family: inherit;" text-anchor="end"
                                              x="20"
                                              y="31.1">
                                          <tspan id="SvgjsTspan1032">1</tspan>
                                          <title>1</title></text>
                                        <text id="SvgjsText1033" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#a1a5b7"
                                              font-family="inherit" font-size="13px" font-weight="400"
                                              style="font-family: inherit;" text-anchor="end"
                                              x="20"
                                              y="226.328800617218">
                                          <tspan id="SvgjsTspan1034">0</tspan>
                                          <title>0</title></text>
                                      </g>
                                    </g>
                                    <g id="SvgjsG1004" class="apexcharts-annotations"></g>
                                  </svg>
                                  <div class="apexcharts-legend" style="max-height: 135px;"></div>
                                  <div class="apexcharts-tooltip apexcharts-theme-light">
                                    <div class="apexcharts-tooltip-title"
                                         style="font-family: inherit; font-size: 12px;"></div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                                        class="apexcharts-tooltip-marker"
                                        style="background-color: rgb(0, 158, 247);"></span>
                                      <div class="apexcharts-tooltip-text"
                                           style="font-family: inherit; font-size: 12px;">
                                        <div class="apexcharts-tooltip-y-group"><span
                                            class="apexcharts-tooltip-text-y-label"></span><span
                                            class="apexcharts-tooltip-text-y-value"></span></div>
                                        <div class="apexcharts-tooltip-goals-group"><span
                                            class="apexcharts-tooltip-text-goals-label"></span><span
                                            class="apexcharts-tooltip-text-goals-value"></span></div>
                                        <div class="apexcharts-tooltip-z-group"><span
                                            class="apexcharts-tooltip-text-z-label"></span><span
                                            class="apexcharts-tooltip-text-z-value"></span></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                      class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                    <div class="apexcharts-yaxistooltip-text"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="kt_charts_widget_10_tab_content_10" class="tab-pane fade">
                              <div id="kt_charts_widget_10_chart_10" class="min-h-auto" style="height: 270px;"></div>
                            </div>
                            <div id="kt_charts_widget_10_tab_content_11" class="tab-pane fade">
                              <div id="kt_charts_widget_10_chart_11" class="min-h-auto" style="height: 270px;"></div>
                            </div>
                            <div id="kt_charts_widget_10_tab_content_14" class="tab-pane fade">
                              <div id="kt_charts_widget_10_chart_14" class="min-h-auto" style="height: 270px;"></div>
                            </div>
                            <div id="kt_charts_widget_10_tab_content_16" class="tab-pane fade">
                              <div id="kt_charts_widget_10_chart_16" class="min-h-auto" style="height: 270px;"></div>
                            </div>
                            <div id="kt_charts_widget_10_tab_content_17" class="tab-pane fade">
                              <div id="kt_charts_widget_10_chart_17" class="min-h-auto" style="height: 270px;"></div>
                            </div>
                            <div id="kt_charts_widget_10_tab_content_18" class="tab-pane fade">
                              <div id="kt_charts_widget_10_chart_18" class="min-h-auto" style="height: 270px;"></div>
                            </div>
                            <div id="kt_charts_widget_10_tab_content_19" class="tab-pane fade">
                              <div id="kt_charts_widget_10_chart_19" class="min-h-auto" style="height: 270px;"></div>
                            </div>
                            <div id="kt_charts_widget_10_tab_content_21" class="tab-pane fade">
                              <div id="kt_charts_widget_10_chart_21" class="min-h-auto" style="height: 270px;"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="kt_vtab_pane_2" class="tab-pane bg-white fade rounded border p-10" role="tabpanel">
            <div class="table-responsive" enable-items-per-page-dropdown="true">
              <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0" role="row">
                  <th class="">Name</th>
                  <th class="">Counts</th>
                </tr>
                </thead>
                <tbody class="fw-bold text-gray-600">
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/TR.svg" style="border-radius: 4px;">
                    Turkey
                  </td>
                  <td class="text-end">1746</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/DE.svg" style="border-radius: 4px;">
                    Germany
                  </td>
                  <td class="text-end">27</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/BE.svg" style="border-radius: 4px;">
                    Belgium
                  </td>
                  <td class="text-end">17</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/NL.svg" style="border-radius: 4px;">
                    Netherlands
                  </td>
                  <td class="text-end">6</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/SE.svg" style="border-radius: 4px;">
                    Sweden
                  </td>
                  <td class="text-end">5</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/AT.svg" style="border-radius: 4px;">
                    Austria
                  </td>
                  <td class="text-end">4</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/GB.svg" style="border-radius: 4px;">
                    United Kingdom
                  </td>
                  <td class="text-end">3</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/SY.svg" style="border-radius: 4px;">
                    Syrian Arab Republic
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/EG.svg" style="border-radius: 4px;"> Egypt
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/FR.svg" style="border-radius: 4px;">
                    France
                  </td>
                  <td class="text-end">1</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="kt_vtab_pane_3" class="tab-pane bg-white fade rounded border p-10" role="tabpanel">
            <div class="table-responsive" enable-items-per-page-dropdown="true">
              <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0" role="row">
                  <th class="">Name</th>
                  <th class="">Counts</th>
                </tr>
                </thead>
                <tbody class="fw-bold text-gray-600">
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center me-5">
                      <div class="symbol symbol-40px me-4"><span class="symbol-label"><i><i
                          class="fas fa-truck-loading"></i></i></span></div>
                      <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6" href="#">Pallet</a>
                      </div>
                    </div>
                  </td>
                  <td class="text-end"><span class="fw-bolder">34</span></td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center me-5">
                      <div class="symbol symbol-40px me-4"><span class="symbol-label"><i><i
                          class="fas fa-couch"></i></i></span></div>
                      <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6"
                                           href="#">Furniture</a></div>
                    </div>
                  </td>
                  <td class="text-end"><span class="fw-bolder">13</span></td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center me-5">
                      <div class="symbol symbol-40px me-4"><span class="symbol-label"><i><i
                          class="fas fa-truck-moving"></i></i></span></div>
                      <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6" href="#">Truck</a>
                      </div>
                    </div>
                  </td>
                  <td class="text-end"><span class="fw-bolder">13</span></td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center me-5">
                      <div class="symbol symbol-40px me-4"><span class="symbol-label"><i><i class="fas fa-box"></i></i></span>
                      </div>
                      <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6" href="#">Box
                        Carton</a></div>
                    </div>
                  </td>
                  <td class="text-end"><span class="fw-bolder">11</span></td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center me-5">
                      <div class="symbol symbol-40px me-4"><span class="symbol-label"><i><i class="fas fa-box"></i></i></span>
                      </div>
                      <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6" href="#">Large
                        Box</a></div>
                    </div>
                  </td>
                  <td class="text-end"><span class="fw-bolder">10</span></td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center me-5">
                      <div class="symbol symbol-40px me-4"><span class="symbol-label"><i><i
                          class="fas fa-weight"></i></i></span></div>
                      <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6" href="#">KG</a></div>
                    </div>
                  </td>
                  <td class="text-end"><span class="fw-bolder">8</span></td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center me-5">
                      <div class="symbol symbol-40px me-4"><span class="symbol-label"><i><i
                          class="fas fa-expand-arrows-alt"></i></i></span></div>
                      <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6" href="#">CBM</a>
                      </div>
                    </div>
                  </td>
                  <td class="text-end"><span class="fw-bolder">4</span></td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center me-5">
                      <div class="symbol symbol-40px me-4"><span class="symbol-label"><i><i class="fas fa-box"></i></i></span>
                      </div>
                      <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6" href="#">Small
                        Box</a></div>
                    </div>
                  </td>
                  <td class="text-end"><span class="fw-bolder">2</span></td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center me-5">
                      <div class="symbol symbol-40px me-4"><span class="symbol-label"><i><i class="fas fa-envelope"></i></i></span>
                      </div>
                      <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6" href="#">Envelope</a>
                      </div>
                    </div>
                  </td>
                  <td class="text-end"><span class="fw-bolder">1</span></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="kt_vtab_pane_4" class="tab-pane bg-white fade rounded border p-10" role="tabpanel">
            <div class="table-responsive" enable-items-per-page-dropdown="true">
              <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0" role="row">
                  <th class="">Name</th>
                  <th class="">Counts</th>
                </tr>
                </thead>
                <tbody class="fw-bold text-gray-600">
                <tr>
                  <td class=""><span class="badge btn-dark">Way To Europe</span></td>
                  <td class="text-end">40</td>
                </tr>
                <tr>
                  <td class=""><span class="badge btn-info">In branch</span></td>
                  <td class="text-end">36</td>
                </tr>
                <tr>
                  <td class=""><span class="badge btn-warning">Accepted</span></td>
                  <td class="text-end">13</td>
                </tr>
                <tr>
                  <td class=""><span class="badge btn-danger">Cancelled</span></td>
                  <td class="text-end">6</td>
                </tr>
                <tr>
                  <td class=""><span class="badge btn-success">Returned</span></td>
                  <td class="text-end">1</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="kt_vtab_pane_5" class="tab-pane bg-white fade rounded border p-10" role="tabpanel">
            <div class="table-responsive" enable-items-per-page-dropdown="true">
              <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0" role="row">
                  <th class="">Name</th>
                  <th class="">Counts</th>
                </tr>
                </thead>
                <tbody class="fw-bold text-gray-600">
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/TR.svg" style="border-radius: 4px;">
                    Turkey
                  </td>
                  <td class="text-end">89</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/SY.svg" style="border-radius: 4px;">
                    Syrian Arab Republic
                  </td>
                  <td class="text-end">3</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/IQ.svg" style="border-radius: 4px;"> Iraq
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/ES.svg" style="border-radius: 4px;"> Spain
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/BE.svg" style="border-radius: 4px;">
                    Belgium
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/DE.svg" style="border-radius: 4px;">
                    Germany
                  </td>
                  <td class="text-end">1</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="kt_vtab_pane_6" class="tab-pane bg-white fade rounded border p-10" role="tabpanel">
            <div class="table-responsive" enable-items-per-page-dropdown="true">
              <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0" role="row">
                  <th class="">Name</th>
                  <th class="">Counts</th>
                </tr>
                </thead>
                <tbody class="fw-bold text-gray-600">
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/DE.svg" style="border-radius: 4px;">
                    Germany
                  </td>
                  <td class="text-end">48</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/BE.svg" style="border-radius: 4px;">
                    Belgium
                  </td>
                  <td class="text-end">26</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/NL.svg" style="border-radius: 4px;">
                    Netherlands
                  </td>
                  <td class="text-end">8</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/SE.svg" style="border-radius: 4px;">
                    Sweden
                  </td>
                  <td class="text-end">4</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/AT.svg" style="border-radius: 4px;">
                    Austria
                  </td>
                  <td class="text-end">4</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/GB.svg" style="border-radius: 4px;">
                    United Kingdom
                  </td>
                  <td class="text-end">3</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/TR.svg" style="border-radius: 4px;">
                    Turkey
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class=""><img class="me-4 w-25px" src="/media/flags/iso/NO.svg" style="border-radius: 4px;">
                    Norway
                  </td>
                  <td class="text-end">1</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="kt_vtab_pane_7" class="tab-pane bg-white fade rounded border p-10" role="tabpanel">
            <div class="table-responsive" enable-items-per-page-dropdown="true">
              <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0" role="row">
                  <th class="">Name</th>
                  <th class="">Counts</th>
                </tr>
                </thead>
                <tbody class="fw-bold text-gray-600">
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2082/view">Mahmoud
                        Azizi</a><span
                          class="text-muted fw-bold text-muted d-block fs-7">mzyzy8300@gmail.com</span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+90 536 271 59 34</span></div>
                    </div>
                  </td>
                  <td class="text-end">5</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2141/view">Moustafa
                        Sawas</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905374663674</span></div>
                    </div>
                  </td>
                  <td class="text-end">5</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2086/view">Wassim
                        Asfour</a><span
                          class="text-muted fw-bold text-muted d-block fs-7">Wissem.Asfour.1979@gmail.com</span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+90 531 206 01 12</span></div>
                    </div>
                  </td>
                  <td class="text-end">3</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2139/view">Hani
                        Aljanah</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905357260239</span></div>
                    </div>
                  </td>
                  <td class="text-end">3</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2119/view">Anas
                        Yasin</a><span
                          class="text-muted fw-bold text-muted d-block fs-7">anasalihlil@gmail.com</span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905522453095</span></div>
                    </div>
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2144/view">Abo
                        Alaa</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+32622600101</span></div>
                    </div>
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2267/view">Bakri
                        Zahra</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+90 535 323 93 00</span></div>
                    </div>
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2125/view">Shawkt
                        sultanlar</a><span class="text-muted fw-bold text-muted d-block fs-7">sultanlar@sultanlarnakliyat.com</span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905327488426</span></div>
                    </div>
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2089/view">Ahmet
                        Saber</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905345462049</span></div>
                    </div>
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2131/view">Alaa
                        Baghdadi</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905355045617</span></div>
                    </div>
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2132/view">BAKRI
                        JIBRINI</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905061062051</span></div>
                    </div>
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2320/view">Turki
                        Elfarhan</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+90 537 547 51 28</span></div>
                    </div>
                  </td>
                  <td class="text-end">2</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2110/view">Makka
                        Dida</a><span class="text-muted fw-bold text-muted d-block fs-7">makkagida@gmail.com</span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905348329660</span></div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2142/view">Abo
                        Iyham</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905345534404</span></div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2257/view">أيهم
                        شنان</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+90 534 388 60 30</span></div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2078/view">Nizamettin
                        Arslan</a><span class="text-muted fw-bold text-muted d-block fs-7">NizamettinArslan1970@gmail.com</span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905348108346</span></div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2074/view">ِAbo
                        Alkher Salous</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905312919913</span></div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2145/view">Abo
                        Alaa</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+490622600101</span></div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2272/view">KHALED
                        MAHROUSEH</a><span class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+90 539 836 02 74</span></div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5"><img
                          src="https://mollerlogistic.com/public/uploads/customer/blank.png"></div>
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/customers/2077/view">Karem</a><span
                          class="text-muted fw-bold text-muted d-block fs-7"></span><span
                          class="text-muted fw-bold text-muted d-block fs-7">+905312393342</span></div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="kt_vtab_pane_8" class="tab-pane bg-white fade rounded border p-10" role="tabpanel">
            <div class="mb-8 d-flex align-items-center"><span
                class="bg-warning bullet bullet-vertical h-40px me-3"></span>
              <div class="flex-grow-1"><a class="text-gray-800 text-hover-primary fw-bolder fs-6"
                                          href="/en/admin/customers/2187/view">زيد القاسم</a><span
                  class="text-muted fw-bold d-block">2022-06-07 22:11:04</span></div>
              <a class="bg-warning badge fs-8 fw-bolder" href="/en/admin/users/48/view">علي سمعو</a></div>
            <div class="d-flex align-items-center"><span class="bg-warning bullet bullet-vertical h-40px me-3"></span>
              <div class="flex-grow-1"><a class="text-gray-800 text-hover-primary fw-bolder fs-6"
                                          href="/en/admin/customers/2111/view">Malek Halak</a><span
                  class="text-muted fw-bold d-block">2022-05-30 21:00:00</span></div>
              <a class="bg-warning badge fs-8 fw-bolder" href="/en/admin/users/58/view">Moustafa Asfour</a></div>
          </div>
          <div id="kt_vtab_pane_9" class="tab-pane bg-white fade rounded border p-10" role="tabpanel">
            <div class="table-responsive" enable-items-per-page-dropdown="true">
              <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0" role="row">
                  <th class="">Name</th>
                  <th class="">Counts</th>
                </tr>
                </thead>
                <tbody class="fw-bold text-gray-600">
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/users/58/view">Moustafa
                        Asfour</a><span class="text-muted fw-bold text-muted d-block fs-7">europe-salesmane@mollerlogistic.com</span>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">51</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/users/49/view">عبد
                        الحميد ارمنازي</a><span class="text-muted fw-bold text-muted d-block fs-7">a.armanazi@mollerlogistic.com</span>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">33</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/users/1/view">Admin</a><span
                          class="text-muted fw-bold text-muted d-block fs-7">admin@admin.com</span></div>
                    </div>
                  </td>
                  <td class="text-end">7</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/users/48/view">علي
                        سمعو</a><span
                          class="text-muted fw-bold text-muted d-block fs-7">a.elsamo@mollerlogistic.com</span></div>
                    </div>
                  </td>
                  <td class="text-end">3</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/users/77/view">عبد
                        الوهاب السعيد</a><span class="text-muted fw-bold text-muted d-block fs-7">a.alsaid@mollerlogistic.com</span>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column"><a class="text-dark fw-bolder text-hover-primary fs-6"
                                                                               href="/en/admin/users/78/view">Ahmad
                        Jabakji</a><span
                          class="text-muted fw-bold text-muted d-block fs-7">a.jabakji@mollerlogistic.com</span></div>
                    </div>
                  </td>
                  <td class="text-end">1</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new2"
}
</script>

<style scoped>

</style>
