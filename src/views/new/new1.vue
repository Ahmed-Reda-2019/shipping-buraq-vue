<template>
  <div id="kt_content" class="container-xxl d-flex flex-column-fluid align-items-start">
    <div class="content flex-row-fluid">
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
                    <div id="kt_card_widget_13_chart" class="min-h-auto" style="height: 125px; min-height: 140px;">
                      <div id="apexchartsqc7cdkdwg" class="apexcharts-canvas apexchartsqc7cdkdwg apexcharts-theme-light"
                           style="width: 497px; height: 125px;">
                        <svg id="SvgjsSvg1531" class="apexcharts-svg apexcharts-zoomable" height="125" style="background: transparent;" transform="translate(0, 0)"
                             version="1.1" width="497"
                             xmlns="http://www.w3.org/2000/svg" xmlns:data="ApexChartsNS"
                             xmlns:svgjs="http://svgjs.dev" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="SvgjsG1533" class="apexcharts-inner apexcharts-graphical"
                             transform="translate(-10, 30)">
                            <defs id="SvgjsDefs1532">
                              <clipPath id="gridRectMaskqc7cdkdwg">
                                <rect id="SvgjsRect1536" fill="#fff" height="102" opacity="1" rx="0" ry="0" stroke="none"
                                      stroke-dasharray="0" stroke-width="0" width="532" x="-3"
                                      y="-1"></rect>
                              </clipPath>
                              <clipPath id="forecastMaskqc7cdkdwg"></clipPath>
                              <clipPath id="nonForecastMaskqc7cdkdwg"></clipPath>
                              <clipPath id="gridRectMarkerMaskqc7cdkdwg">
                                <rect id="SvgjsRect1537" fill="#fff" height="104" opacity="1" rx="0" ry="0" stroke="none"
                                      stroke-dasharray="0" stroke-width="0" width="530" x="-2"
                                      y="-2"></rect>
                              </clipPath>
                            </defs>
                            <g id="SvgjsG1544" class="apexcharts-xaxis" transform="translate(0, 0)">
                              <g id="SvgjsG1545" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g>
                            </g>
                            <g id="SvgjsG1559" class="apexcharts-grid">
                              <g id="SvgjsG1560" class="apexcharts-gridlines-horizontal">
                                <line id="SvgjsLine1562" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="0" y2="0"></line>
                                <line id="SvgjsLine1563" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="20" y2="20"></line>
                                <line id="SvgjsLine1564" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="40" y2="40"></line>
                                <line id="SvgjsLine1565" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="60" y2="60"></line>
                                <line id="SvgjsLine1566" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="80" y2="80"></line>
                                <line id="SvgjsLine1567" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="100" y2="100"></line>
                              </g>
                              <g id="SvgjsG1561" class="apexcharts-gridlines-vertical"></g>
                              <line id="SvgjsLine1569" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0" x2="526"
                                    y1="100" y2="100"></line>
                              <line id="SvgjsLine1568" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0" x2="0"
                                    y1="1" y2="100"></line>
                            </g>
                            <g id="SvgjsG1538" class="apexcharts-area-series apexcharts-plot-series">
                              <g id="SvgjsG1539" class="apexcharts-series" data:longestSeries="true" data:realIndex="0"
                                 rel="1" seriesName="Orders">
                                <path id="SvgjsPath1542"
                                      class="apexcharts-area"
                                      clip-path="url(#gridRectMaskqc7cdkdwg)" d="M 0 100L 0 93.33333333333333C 18.41 93.33333333333333 34.19 93.33333333333333 52.6 93.33333333333333C 71.01 93.33333333333333 86.79 80 105.2 80C 123.61 80 139.39000000000001 93.33333333333333 157.8 93.33333333333333C 176.21 93.33333333333333 191.99 46.666666666666664 210.4 46.666666666666664C 228.81 46.666666666666664 244.59 86.66666666666667 263 86.66666666666667C 281.41 86.66666666666667 297.19 80 315.6 80C 334.01 80 349.79 13.333333333333329 368.2 13.333333333333329C 386.61 13.333333333333329 402.39 93.33333333333333 420.8 93.33333333333333C 439.21000000000004 93.33333333333333 454.99 80 473.40000000000003 80C 491.81 80 507.59000000000003 73.33333333333333 526 73.33333333333333C 526 73.33333333333333 526 73.33333333333333 526 100M 526 73.33333333333333z" fill="rgba(80,205,137,0)"
                                      fill-opacity="1" index="0" pathFrom="M -1 100L -1 100L 52.6 100L 105.2 100L 157.8 100L 210.4 100L 263 100L 315.6 100L 368.2 100L 420.8 100L 473.40000000000003 100L 526 100"
                                      pathTo="M 0 100L 0 93.33333333333333C 18.41 93.33333333333333 34.19 93.33333333333333 52.6 93.33333333333333C 71.01 93.33333333333333 86.79 80 105.2 80C 123.61 80 139.39000000000001 93.33333333333333 157.8 93.33333333333333C 176.21 93.33333333333333 191.99 46.666666666666664 210.4 46.666666666666664C 228.81 46.666666666666664 244.59 86.66666666666667 263 86.66666666666667C 281.41 86.66666666666667 297.19 80 315.6 80C 334.01 80 349.79 13.333333333333329 368.2 13.333333333333329C 386.61 13.333333333333329 402.39 93.33333333333333 420.8 93.33333333333333C 439.21000000000004 93.33333333333333 454.99 80 473.40000000000003 80C 491.81 80 507.59000000000003 73.33333333333333 526 73.33333333333333C 526 73.33333333333333 526 73.33333333333333 526 100M 526 73.33333333333333z" stroke-dasharray="0" stroke-linecap="butt"
                                      stroke-opacity="1"
                                      stroke-width="0"></path>
                                <path id="SvgjsPath1543"
                                      class="apexcharts-area"
                                      clip-path="url(#gridRectMaskqc7cdkdwg)" d="M 0 93.33333333333333C 18.41 93.33333333333333 34.19 93.33333333333333 52.6 93.33333333333333C 71.01 93.33333333333333 86.79 80 105.2 80C 123.61 80 139.39000000000001 93.33333333333333 157.8 93.33333333333333C 176.21 93.33333333333333 191.99 46.666666666666664 210.4 46.666666666666664C 228.81 46.666666666666664 244.59 86.66666666666667 263 86.66666666666667C 281.41 86.66666666666667 297.19 80 315.6 80C 334.01 80 349.79 13.333333333333329 368.2 13.333333333333329C 386.61 13.333333333333329 402.39 93.33333333333333 420.8 93.33333333333333C 439.21000000000004 93.33333333333333 454.99 80 473.40000000000003 80C 491.81 80 507.59000000000003 73.33333333333333 526 73.33333333333333" fill="none" fill-opacity="1"
                                      index="0" pathFrom="M -1 100L -1 100L 52.6 100L 105.2 100L 157.8 100L 210.4 100L 263 100L 315.6 100L 368.2 100L 420.8 100L 473.40000000000003 100L 526 100" pathTo="M 0 93.33333333333333C 18.41 93.33333333333333 34.19 93.33333333333333 52.6 93.33333333333333C 71.01 93.33333333333333 86.79 80 105.2 80C 123.61 80 139.39000000000001 93.33333333333333 157.8 93.33333333333333C 176.21 93.33333333333333 191.99 46.666666666666664 210.4 46.666666666666664C 228.81 46.666666666666664 244.59 86.66666666666667 263 86.66666666666667C 281.41 86.66666666666667 297.19 80 315.6 80C 334.01 80 349.79 13.333333333333329 368.2 13.333333333333329C 386.61 13.333333333333329 402.39 93.33333333333333 420.8 93.33333333333333C 439.21000000000004 93.33333333333333 454.99 80 473.40000000000003 80C 491.81 80 507.59000000000003 73.33333333333333 526 73.33333333333333"
                                      stroke="#3f4254" stroke-dasharray="0" stroke-linecap="butt"
                                      stroke-opacity="1"
                                      stroke-width="2"></path>
                                <g id="SvgjsG1540" class="apexcharts-series-markers-wrap" data:realIndex="0">
                                  <g class="apexcharts-series-markers">
                                    <circle id="SvgjsCircle1577" class="apexcharts-marker wigts0vvo no-pointer-events" cx="0" cy="0"
                                            default-marker-size="0" fill="#50cd89"
                                            fill-opacity="1" r="0" stroke="#3f4254" stroke-opacity="0.9"
                                            stroke-width="2"></circle>
                                  </g>
                                </g>
                              </g>
                              <g id="SvgjsG1541" class="apexcharts-datalabels" data:realIndex="0"></g>
                            </g>
                            <line id="SvgjsLine1571" class="apexcharts-xcrosshairs" fill="#b1b9c4" fill-opacity="0.9" filter="none" height="100" stroke="#3f4254"
                                  stroke-dasharray="3" stroke-linecap="butt" stroke-width="1" width="1" x="0"
                                  x1="0" x2="0" y="0" y1="0" y2="100"></line>
                            <line id="SvgjsLine1572" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt" stroke-width="1" x1="0"
                                  x2="526" y1="0" y2="0"></line>
                            <line id="SvgjsLine1573" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0" x1="0" x2="526"
                                  y1="0" y2="0"></line>
                            <g id="SvgjsG1574" class="apexcharts-yaxis-annotations"></g>
                            <g id="SvgjsG1575" class="apexcharts-xaxis-annotations"></g>
                            <g id="SvgjsG1576" class="apexcharts-point-annotations"></g>
                            <rect id="SvgjsRect1578" class="apexcharts-zoom-rect" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none"
                                  stroke-dasharray="0" stroke-width="0" width="0" x="0"
                                  y="0"></rect>
                            <rect id="SvgjsRect1579" class="apexcharts-selection-rect" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none"
                                  stroke-dasharray="0" stroke-width="0" width="0" x="0"
                                  y="0"></rect>
                          </g>
                          <g id="SvgjsG1557" class="apexcharts-yaxis" rel="0" transform="translate(-8, 0)">
                            <g id="SvgjsG1558" class="apexcharts-yaxis-texts-g"></g>
                          </g>
                          <rect id="SvgjsRect1570" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none" stroke-dasharray="0"
                                stroke-width="0" width="0" x="0" y="0"></rect>
                          <g id="SvgjsG1534" class="apexcharts-annotations"></g>
                        </svg>
                        <div class="apexcharts-legend" style="max-height: 62.5px;"></div>
                        <div class="apexcharts-tooltip apexcharts-theme-light">
                          <div class="apexcharts-tooltip-title" style="font-family: inherit; font-size: 12px;"></div>
                          <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                              class="apexcharts-tooltip-marker" style="background-color: rgb(80, 205, 137);"></span>
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
                        <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
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
                    <div class="card-title d-flex flex-column"><span class="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">181</span><span
                        class="text-gray-400 pt-1 fw-bold fs-6">New Customers This Month</span></div>
                  </div>
                  <div class="card-body d-flex flex-column justify-content-end pe-0"><span
                      class="fs-6 fw-boldest text-gray-800 d-block mb-2">Last Customers</span>
                    <div class="symbol-group symbol-hover flex-nowrap">
                      <div class="symbol symbol-35px symbol-circle" title="ايهم الفارس"><a
                          class="" href="/en/admin/customers/2337/view"><span
                          class="symbol-label fw-bolder text-white bg-info">ا</span></a></div>
                      <div class="symbol symbol-35px symbol-circle" title="زكور ابو احمد"><a
                          class="" href="/en/admin/customers/2336/view"><span
                          class="symbol-label fw-bolder text-white bg-warning">ز</span></a></div>
                      <div class="symbol symbol-35px symbol-circle" title="عمر العابد"><a
                          class="" href="/en/admin/customers/2335/view"><span
                          class="symbol-label fw-bolder text-white bg-warning">ع</span></a></div>
                      <div class="symbol symbol-35px symbol-circle" title="فراس البظ"><a
                          class="" href="/en/admin/customers/2334/view"><span
                          class="symbol-label fw-bolder text-white bg-info">ف</span></a></div>
                      <div class="symbol symbol-35px symbol-circle" title="ابو النور مصري"><a
                          class="" href="/en/admin/customers/2333/view"><span
                          class="symbol-label fw-bolder text-white bg-info">ا</span></a></div>
                      <div class="symbol symbol-35px symbol-circle" title="فادي رنكوسي"><a
                          class="" href="/en/admin/customers/2332/view"><span
                          class="symbol-label fw-bolder text-white bg-warning">ف</span></a></div>
                      <div class="symbol symbol-35px symbol-circle"><a class="" href="/en/admin/customers/list"><span
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
                    <div id="kt_card_widget_12_chart" class="min-h-auto" style="height: 125px; min-height: 140px;">
                      <div id="apexcharts7kdtshy5" class="apexcharts-canvas apexcharts7kdtshy5 apexcharts-theme-light"
                           style="width: 497px; height: 125px;">
                        <svg id="SvgjsSvg1339" class="apexcharts-svg apexcharts-zoomable" height="125" style="background: transparent;" transform="translate(0, 0)"
                             version="1.1" width="497"
                             xmlns="http://www.w3.org/2000/svg" xmlns:data="ApexChartsNS"
                             xmlns:svgjs="http://svgjs.dev" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="SvgjsG1341" class="apexcharts-inner apexcharts-graphical"
                             transform="translate(-10, 30)">
                            <defs id="SvgjsDefs1340">
                              <clipPath id="gridRectMask7kdtshy5">
                                <rect id="SvgjsRect1344" fill="#fff" height="102" opacity="1" rx="0" ry="0" stroke="none"
                                      stroke-dasharray="0" stroke-width="0" width="532" x="-3"
                                      y="-1"></rect>
                              </clipPath>
                              <clipPath id="forecastMask7kdtshy5"></clipPath>
                              <clipPath id="nonForecastMask7kdtshy5"></clipPath>
                              <clipPath id="gridRectMarkerMask7kdtshy5">
                                <rect id="SvgjsRect1345" fill="#fff" height="104" opacity="1" rx="0" ry="0" stroke="none"
                                      stroke-dasharray="0" stroke-width="0" width="530" x="-2"
                                      y="-2"></rect>
                              </clipPath>
                            </defs>
                            <g id="SvgjsG1353" class="apexcharts-xaxis" transform="translate(0, 0)">
                              <g id="SvgjsG1354" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g>
                            </g>
                            <g id="SvgjsG1358" class="apexcharts-grid">
                              <g id="SvgjsG1359" class="apexcharts-gridlines-horizontal">
                                <line id="SvgjsLine1361" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="0" y2="0"></line>
                                <line id="SvgjsLine1362" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="25" y2="25"></line>
                                <line id="SvgjsLine1363" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="50" y2="50"></line>
                                <line id="SvgjsLine1364" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="75" y2="75"></line>
                                <line id="SvgjsLine1365" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="526" y1="100" y2="100"></line>
                              </g>
                              <g id="SvgjsG1360" class="apexcharts-gridlines-vertical"></g>
                              <line id="SvgjsLine1367" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0" x2="526"
                                    y1="100" y2="100"></line>
                              <line id="SvgjsLine1366" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0" x2="0"
                                    y1="1" y2="100"></line>
                            </g>
                            <g id="SvgjsG1346" class="apexcharts-area-series apexcharts-plot-series">
                              <g id="SvgjsG1347" class="apexcharts-series" data:longestSeries="true"
                                 data:realIndex="0" rel="1" seriesName="Shipments">
                                <g id="SvgjsG1348" class="apexcharts-series-markers-wrap" data:realIndex="0">
                                  <g id="SvgjsG1350" class="" clip-path="url(#gridRectMarkerMask7kdtshy5)">
                                    <circle id="SvgjsCircle1351" class="apexcharts-marker no-pointer-events wjqtbk41li" cx="263" cy="1.4210854715202004e-14"
                                            default-marker-size="1" fill="#50cd89"
                                            fill-opacity="1" index="0" j="0" r="1"
                                            rel="0" stroke="#3f4254" stroke-opacity="0.9" stroke-width="2"></circle>
                                    <circle id="SvgjsCircle1352" class="apexcharts-nullpoint" cx="263" cy="0" default-marker-size="1"
                                            fill="#50cd89" fill-opacity="1" index="0" j="1"
                                            r="0" rel="1" stroke="#3f4254" stroke-opacity="0.9"
                                            stroke-width="2"></circle>
                                  </g>
                                  <g class="apexcharts-series-markers">
                                    <circle id="SvgjsCircle1375" class="apexcharts-marker w2n3lp1ay no-pointer-events" cx="0" cy="0"
                                            default-marker-size="0" fill="#50cd89"
                                            fill-opacity="1" r="0" stroke="#3f4254" stroke-opacity="0.9"
                                            stroke-width="2"></circle>
                                  </g>
                                </g>
                              </g>
                              <g id="SvgjsG1349" class="apexcharts-datalabels" data:realIndex="0"></g>
                            </g>
                            <line id="SvgjsLine1369" class="apexcharts-xcrosshairs" fill="#b1b9c4" fill-opacity="0.9" filter="none" height="100" stroke="#3f4254"
                                  stroke-dasharray="3" stroke-linecap="butt" stroke-width="1" width="1" x="0"
                                  x1="0" x2="0" y="0" y1="0" y2="100"></line>
                            <line id="SvgjsLine1370" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt" stroke-width="1" x1="0"
                                  x2="526" y1="0" y2="0"></line>
                            <line id="SvgjsLine1371" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0" x1="0" x2="526"
                                  y1="0" y2="0"></line>
                            <g id="SvgjsG1372" class="apexcharts-yaxis-annotations"></g>
                            <g id="SvgjsG1373" class="apexcharts-xaxis-annotations"></g>
                            <g id="SvgjsG1374" class="apexcharts-point-annotations"></g>
                            <rect id="SvgjsRect1376" class="apexcharts-zoom-rect" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none"
                                  stroke-dasharray="0" stroke-width="0" width="0" x="0"
                                  y="0"></rect>
                            <rect id="SvgjsRect1377" class="apexcharts-selection-rect" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none"
                                  stroke-dasharray="0" stroke-width="0" width="0" x="0"
                                  y="0"></rect>
                          </g>
                          <g id="SvgjsG1356" class="apexcharts-yaxis" rel="0" transform="translate(-8, 0)">
                            <g id="SvgjsG1357" class="apexcharts-yaxis-texts-g"></g>
                          </g>
                          <rect id="SvgjsRect1368" fill="#fefefe" height="0" opacity="1" rx="0" ry="0" stroke="none" stroke-dasharray="0"
                                stroke-width="0" width="0" x="0" y="0"></rect>
                          <g id="SvgjsG1342" class="apexcharts-annotations"></g>
                        </svg>
                        <div class="apexcharts-legend" style="max-height: 62.5px;"></div>
                        <div class="apexcharts-tooltip apexcharts-theme-light">
                          <div class="apexcharts-tooltip-title" style="font-family: inherit; font-size: 12px;"></div>
                          <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                              class="apexcharts-tooltip-marker" style="background-color: rgb(80, 205, 137);"></span>
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
                        <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
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
                    <div class="card-title d-flex flex-column"><span class="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">6</span><span
                        class="text-gray-400 pt-1 fw-bold fs-6">Your Orders this month</span></div>
                  </div>
                  <div class="card-body d-flex align-items-end pt-0">
                    <div class="d-flex align-items-center flex-wrap">
                      <div id="kt_card_widget_10_chart" class="min-h-auto" style="height: 125px; min-height: 127.7px;">
                        <div id="apexchartsogxsq5b1" class="apexcharts-canvas apexchartsogxsq5b1 apexcharts-theme-light"
                             style="width: 300px; height: 127.7px;">
                          <svg id="SvgjsSvg1378" class="apexcharts-svg" height="127.7" style="background: transparent;"
                               transform="translate(0, 0)" version="1.1" width="300"
                               xmlns="http://www.w3.org/2000/svg" xmlns:data="ApexChartsNS" xmlns:svgjs="http://svgjs.dev"
                               xmlns:xlink="http://www.w3.org/1999/xlink">
                            <foreignObject height="127.7" width="300" x="0" y="0">
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
                            <g id="SvgjsG1380" class="apexcharts-inner apexcharts-graphical"
                               transform="translate(22, 0)">
                              <defs id="SvgjsDefs1379">
                                <clipPath id="gridRectMaskogxsq5b1">
                                  <rect id="SvgjsRect1382" fill="#fff" height="127" opacity="1" rx="0" ry="0" stroke="none"
                                        stroke-dasharray="0" stroke-width="0" width="132" x="-3"
                                        y="-1"></rect>
                                </clipPath>
                                <clipPath id="forecastMaskogxsq5b1"></clipPath>
                                <clipPath id="nonForecastMaskogxsq5b1"></clipPath>
                                <clipPath id="gridRectMarkerMaskogxsq5b1">
                                  <rect id="SvgjsRect1383" fill="#fff" height="129" opacity="1" rx="0" ry="0" stroke="none"
                                        stroke-dasharray="0" stroke-width="0" width="130" x="-2"
                                        y="-2"></rect>
                                </clipPath>
                                <filter id="SvgjsFilter1394" filterUnits="userSpaceOnUse" height="200%" width="200%"
                                        x="-50%" y="-50%">
                                  <feFlood id="SvgjsFeFlood1395" flood-color="#000000" flood-opacity="0.45"
                                           in="SourceGraphic" result="SvgjsFeFlood1395Out"></feFlood>
                                  <feComposite id="SvgjsFeComposite1396" in="SvgjsFeFlood1395Out" in2="SourceAlpha"
                                               operator="in" result="SvgjsFeComposite1396Out"></feComposite>
                                  <feOffset id="SvgjsFeOffset1397" dx="1" dy="1" in="SvgjsFeComposite1396Out"
                                            result="SvgjsFeOffset1397Out"></feOffset>
                                  <feGaussianBlur id="SvgjsFeGaussianBlur1398" in="SvgjsFeOffset1397Out"
                                                  result="SvgjsFeGaussianBlur1398Out"
                                                  stdDeviation="1 "></feGaussianBlur>
                                  <feMerge id="SvgjsFeMerge1399" in="SourceGraphic" result="SvgjsFeMerge1399Out">
                                    <feMergeNode id="SvgjsFeMergeNode1400"
                                                 in="SvgjsFeGaussianBlur1398Out"></feMergeNode>
                                    <feMergeNode id="SvgjsFeMergeNode1401" in="[object Arguments]"></feMergeNode>
                                  </feMerge>
                                  <feBlend id="SvgjsFeBlend1402" in="SourceGraphic" in2="SvgjsFeMerge1399Out"
                                           mode="normal" result="SvgjsFeBlend1402Out"></feBlend>
                                </filter>
                                <filter id="SvgjsFilter1407" filterUnits="userSpaceOnUse" height="200%" width="200%"
                                        x="-50%" y="-50%">
                                  <feFlood id="SvgjsFeFlood1408" flood-color="#000000" flood-opacity="0.45"
                                           in="SourceGraphic" result="SvgjsFeFlood1408Out"></feFlood>
                                  <feComposite id="SvgjsFeComposite1409" in="SvgjsFeFlood1408Out" in2="SourceAlpha"
                                               operator="in" result="SvgjsFeComposite1409Out"></feComposite>
                                  <feOffset id="SvgjsFeOffset1410" dx="1" dy="1" in="SvgjsFeComposite1409Out"
                                            result="SvgjsFeOffset1410Out"></feOffset>
                                  <feGaussianBlur id="SvgjsFeGaussianBlur1411" in="SvgjsFeOffset1410Out"
                                                  result="SvgjsFeGaussianBlur1411Out"
                                                  stdDeviation="1 "></feGaussianBlur>
                                  <feMerge id="SvgjsFeMerge1412" in="SourceGraphic" result="SvgjsFeMerge1412Out">
                                    <feMergeNode id="SvgjsFeMergeNode1413"
                                                 in="SvgjsFeGaussianBlur1411Out"></feMergeNode>
                                    <feMergeNode id="SvgjsFeMergeNode1414" in="[object Arguments]"></feMergeNode>
                                  </feMerge>
                                  <feBlend id="SvgjsFeBlend1415" in="SourceGraphic" in2="SvgjsFeMerge1412Out"
                                           mode="normal" result="SvgjsFeBlend1415Out"></feBlend>
                                </filter>
                              </defs>
                              <g id="SvgjsG1384" class="apexcharts-pie">
                                <g id="SvgjsG1385" transform="translate(0, 0) scale(1)">
                                  <circle id="SvgjsCircle1386" cx="63" cy="62.5" fill="transparent"
                                          r="35.73414634146342"></circle>
                                  <g id="SvgjsG1387" class="apexcharts-slices">
                                    <g id="SvgjsG1388" class="apexcharts-series apexcharts-pie-series"
                                       data:realIndex="0" rel="1" seriesName="Complteted">
                                      <path id="SvgjsPath1389"
                                            class="apexcharts-pie-area apexcharts-donut-slice-0"
                                            d="M 63 7.524390243902431 A 54.97560975609757 54.97560975609757 0 0 1 63 7.524390243902431 L 63 26.765853658536578 A 35.73414634146342 35.73414634146342 0 0 0 63 26.765853658536578 L 63 7.524390243902431 z" data:angle="0" data:pathOrig="M 63 7.524390243902431 A 54.97560975609757 54.97560975609757 0 0 1 63 7.524390243902431 L 63 26.765853658536578 A 35.73414634146342 35.73414634146342 0 0 0 63 26.765853658536578 L 63 7.524390243902431 z"
                                            data:startAngle="0" data:strokeWidth="2" data:value="0"
                                            fill="rgba(80,205,137,1)" fill-opacity="1" index="0"
                                            j="0" stroke="#ffffff" stroke-dasharray="0" stroke-linecap="butt"
                                            stroke-opacity="1"
                                            stroke-width="2"></path>
                                    </g>
                                    <g id="SvgjsG1390" class="apexcharts-series apexcharts-pie-series"
                                       data:realIndex="1" rel="2" seriesName="Inxprogress">
                                      <path id="SvgjsPath1391"
                                            class="apexcharts-pie-area apexcharts-donut-slice-1"
                                            d="M 63 7.524390243902431 A 54.97560975609757 54.97560975609757 0 1 1 46.80149290051108 9.965001800680177 L 52.4709703853322 28.352251170442116 A 35.73414634146342 35.73414634146342 0 1 0 63 26.765853658536578 L 63 7.524390243902431 z" data:angle="342.863510386011" data:pathOrig="M 63 7.524390243902431 A 54.97560975609757 54.97560975609757 0 1 1 46.80149290051108 9.965001800680177 L 52.4709703853322 28.352251170442116 A 35.73414634146342 35.73414634146342 0 1 0 63 26.765853658536578 L 63 7.524390243902431 z"
                                            data:startAngle="0" data:strokeWidth="2" data:value="33333"
                                            fill="rgba(0,158,247,1)" fill-opacity="1" index="0"
                                            j="1" stroke="#ffffff" stroke-dasharray="0"
                                            stroke-linecap="butt"
                                            stroke-opacity="1"
                                            stroke-width="2"></path>
                                    </g>
                                    <g id="SvgjsG1403" class="apexcharts-series apexcharts-pie-series"
                                       data:realIndex="2" rel="3" seriesName="Uncompleted">
                                      <path id="SvgjsPath1404"
                                            class="apexcharts-pie-area apexcharts-donut-slice-2"
                                            d="M 46.80149290051108 9.965001800680177 A 54.97560975609757 54.97560975609757 0 0 1 62.99040494606335 7.524391081228849 L 62.993763214941175 26.76585420279875 A 35.73414634146342 35.73414634146342 0 0 0 52.4709703853322 28.352251170442116 L 46.80149290051108 9.965001800680177 z" data:angle="17.136489613989" data:pathOrig="M 46.80149290051108 9.965001800680177 A 54.97560975609757 54.97560975609757 0 0 1 62.99040494606335 7.524391081228849 L 62.993763214941175 26.76585420279875 A 35.73414634146342 35.73414634146342 0 0 0 52.4709703853322 28.352251170442116 L 46.80149290051108 9.965001800680177 z"
                                            data:startAngle="342.863510386011" data:strokeWidth="2" data:value="1666"
                                            fill="rgba(241,65,108,1)" fill-opacity="1" index="0"
                                            j="2" stroke="#ffffff"
                                            stroke-dasharray="0" stroke-linecap="butt"
                                            stroke-opacity="1"
                                            stroke-width="2"></path>
                                    </g>
                                    <g id="SvgjsG1392" class="apexcharts-datalabels">
                                      <text id="SvgjsText1393" class="apexcharts-text apexcharts-pie-label"
                                            dominant-baseline="auto" fill="#ffffff" filter="url(#SvgjsFilter1394)"
                                            font-family="Helvetica, Arial, sans-serif" font-size="12px" font-weight="600" style="font-family: Helvetica, Arial, sans-serif;"
                                            text-anchor="middle" x="69.75730170281494"
                                            y="107.34867708770109">95.2%
                                      </text>
                                    </g>
                                    <g id="SvgjsG1405" class="apexcharts-datalabels">
                                      <text id="SvgjsText1406" class="apexcharts-text apexcharts-pie-label"
                                            dominant-baseline="auto" fill="#ffffff" filter="url(#SvgjsFilter1407)"
                                            font-family="Helvetica, Arial, sans-serif" font-size="12px" font-weight="600" style="font-family: Helvetica, Arial, sans-serif;"
                                            text-anchor="middle" x="56.242698297185086"
                                            y="17.6513229122989">4.8%
                                      </text>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <line id="SvgjsLine1416" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt" stroke-width="1"
                                    x1="0" x2="126" y1="0"
                                    y2="0"></line>
                              <line id="SvgjsLine1417" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0" x1="0"
                                    x2="126" y1="0" y2="0"></line>
                            </g>
                            <g id="SvgjsG1381" class="apexcharts-annotations"></g>
                          </svg>
                          <div class="apexcharts-tooltip apexcharts-theme-dark">
                            <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                                class="apexcharts-tooltip-marker" style="background-color: rgb(80, 205, 137);"></span>
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
                                class="apexcharts-tooltip-marker" style="background-color: rgb(0, 158, 247);"></span>
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
                                class="apexcharts-tooltip-marker" style="background-color: rgb(241, 65, 108);"></span>
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
                <div class="card-toolbar"><a class="btn btn-sm btn-light" href="/en/admin/Orders/list">View All</a>
                </div>
              </div>
              <div class="card-body">
                <div class="m-0">
                  <div class="d-flex align-items-sm-center mb-5">
                    <div class="symbol symbol-45px me-4"><span class="symbol-label bg-primary"><span
                        class="svg-icon svg-icon-2x svg-icon-white"><i class="dash-icon"><i class="fas fa-box"></i></i></span></span>
                    </div>
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
                          class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                           width="24"
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
                          class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                         width="24" xmlns="http://www.w3.org/2000/svg">
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
                        class="svg-icon svg-icon-2x svg-icon-white"><i class="dash-icon"><i class="fas fa-box"></i></i></span></span>
                    </div>
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
                          class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                           width="24"
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
                          class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                         width="24" xmlns="http://www.w3.org/2000/svg">
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
                          class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                           width="24"
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
                          class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                         width="24" xmlns="http://www.w3.org/2000/svg">
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
                        class="svg-icon svg-icon-2x svg-icon-white"><i class="dash-icon"><i class="fas fa-box"></i></i></span></span>
                    </div>
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
                          class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                           width="24"
                                                                           xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                      <div class="timeline-content m-0"><span
                          class="fs-6 text-gray-400 fw-bold d-block">سلطان غازي</span><span
                          class="fs-6 fw-bolder text-gray-800"><!----> Turkey</span></div>
                    </div>
                    <div class="timeline-item align-items-center">
                      <div class="timeline-line w-40px"></div>
                      <div class="timeline-icon" style="margin-left: 11px;"><span
                          class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                         width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black"
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"></path>
<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"></path>
</svg></span></div>
                      <div class="timeline-content m-0"><span class="fs-6 text-gray-400 fw-bold d-block">Mettlach</span><span
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
                          class="svg-icon svg-icon-2 svg-icon-danger"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                           width="24"
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
                          class="svg-icon svg-icon-2 svg-icon-info"><svg fill="none" height="24" viewBox="0 0 24 24"
                                                                         width="24" xmlns="http://www.w3.org/2000/svg">
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
                    <div class="card-toolbar"><a class="btn btn-sm btn-light" href="/en/admin/reports#kt_vtab_pane_3">View
                      All</a></div>
                  </div>
                  <div class="card-body py-0 ps-6 mt-n12">
                    <div id="kt_charts_widget_6" style="min-height: 365px;">
                      <div id="apexcharts42obkm6x" class="apexcharts-canvas apexcharts42obkm6x apexcharts-theme-light"
                           style="width: 962px; height: 350px;">
                        <svg id="SvgjsSvg1418" class="apexcharts-svg" height="350" style="background: transparent;" transform="translate(0, 0)"
                             version="1.1" width="962"
                             xmlns="http://www.w3.org/2000/svg" xmlns:data="ApexChartsNS" xmlns:svgjs="http://svgjs.dev"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="SvgjsG1420" class="apexcharts-inner apexcharts-graphical"
                             transform="translate(103.5, 30)">
                            <defs id="SvgjsDefs1419">
                              <linearGradient id="SvgjsLinearGradient1424" x1="0" x2="0" y1="0" y2="1">
                                <stop id="SvgjsStop1425" offset="0" stop-color="rgba(216,227,240,0.4)"
                                      stop-opacity="0.4"></stop>
                                <stop id="SvgjsStop1426" offset="1" stop-color="rgba(190,209,230,0.5)"
                                      stop-opacity="0.5"></stop>
                                <stop id="SvgjsStop1427" offset="1" stop-color="rgba(190,209,230,0.5)"
                                      stop-opacity="0.5"></stop>
                              </linearGradient>
                              <clipPath id="gridRectMask42obkm6x">
                                <rect id="SvgjsRect1429" fill="#fff" height="273.93439876556397" opacity="1" rx="0" ry="0"
                                      stroke="none" stroke-dasharray="0" stroke-width="0" width="852.5" x="-2"
                                      y="0"></rect>
                              </clipPath>
                              <clipPath id="forecastMask42obkm6x"></clipPath>
                              <clipPath id="nonForecastMask42obkm6x"></clipPath>
                              <clipPath id="gridRectMarkerMask42obkm6x">
                                <rect id="SvgjsRect1430" fill="#fff" height="277.93439876556397" opacity="1" rx="0" ry="0"
                                      stroke="none" stroke-dasharray="0" stroke-width="0" width="852.5" x="-2"
                                      y="-2"></rect>
                              </clipPath>
                            </defs>
                            <rect id="SvgjsRect1428" class="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient1424)" fill-opacity="0.9" filter="none" height="273.93439876556397" opacity="1"
                                  rx="0" ry="0" stroke-dasharray="3" stroke-width="0"
                                  width="0" x="0" y="0"
                                  y2="273.93439876556397"></rect>
                            <g id="SvgjsG1494" class="apexcharts-yaxis apexcharts-xaxis-inversed" rel="0">
                              <g id="SvgjsG1495" class="apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g"
                                 transform="translate(-78.9659652709961, 0)">
                                <text id="SvgjsText1496" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                      font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                      text-anchor="start" x="-15"
                                      y="23.345537566147843">
                                  <tspan id="SvgjsTspan1497">Pallet</tspan>
                                  <title>Pallet</title></text>
                                <text id="SvgjsText1498" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                      font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                      text-anchor="start" x="-15"
                                      y="62.479023104085556">
                                  <tspan id="SvgjsTspan1499">Box Carton</tspan>
                                  <title>Box Carton</title></text>
                                <text id="SvgjsText1500" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                      font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                      text-anchor="start" x="-15"
                                      y="101.61250864202327">
                                  <tspan id="SvgjsTspan1501">Truck</tspan>
                                  <title>Truck</title></text>
                                <text id="SvgjsText1502" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                      font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                      text-anchor="start" x="-15"
                                      y="140.74599417996097">
                                  <tspan id="SvgjsTspan1503">KG</tspan>
                                  <title>KG</title></text>
                                <text id="SvgjsText1504" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                      font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                      text-anchor="start" x="-15"
                                      y="179.87947971789868">
                                  <tspan id="SvgjsTspan1505">Large Box</tspan>
                                  <title>Large Box</title></text>
                                <text id="SvgjsText1506" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                      font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                      text-anchor="start" x="-15"
                                      y="219.01296525583638">
                                  <tspan id="SvgjsTspan1507">Furniture</tspan>
                                  <title>Furniture</title></text>
                                <text id="SvgjsText1508" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#3f4254"
                                      font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                      text-anchor="start" x="-15"
                                      y="258.1464507937741">
                                  <tspan id="SvgjsTspan1509">CBM</tspan>
                                  <title>CBM</title></text>
                              </g>
                            </g>
                            <g id="SvgjsG1477" class="apexcharts-xaxis apexcharts-yaxis-inversed">
                              <g id="SvgjsG1478" class="apexcharts-xaxis-texts-g"
                                 transform="translate(0, -9.333333333333334)">
                                <text id="SvgjsText1479" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto" fill="#3f4254"
                                      font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                      text-anchor="middle" x="848.5"
                                      y="303.93439876556397">
                                  <tspan id="SvgjsTspan1481">8</tspan>
                                  <title>8</title></text>
                                <text id="SvgjsText1482" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto" fill="#3f4254"
                                      font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                      text-anchor="middle" x="636.275"
                                      y="303.93439876556397">
                                  <tspan id="SvgjsTspan1484">6</tspan>
                                  <title>6</title></text>
                                <text id="SvgjsText1485" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto"
                                      fill="#3f4254" font-family="inherit" font-size="14px"
                                      font-weight="600" style="font-family: inherit;" text-anchor="middle"
                                      x="424.05000000000007" y="303.93439876556397">
                                  <tspan id="SvgjsTspan1487">4</tspan>
                                  <title>4</title></text>
                                <text id="SvgjsText1488" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto"
                                      fill="#3f4254" font-family="inherit" font-size="14px"
                                      font-weight="600" style="font-family: inherit;" text-anchor="middle"
                                      x="211.82500000000005" y="303.93439876556397">
                                  <tspan id="SvgjsTspan1490">2</tspan>
                                  <title>2</title></text>
                                <text id="SvgjsText1491" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto"
                                      fill="#3f4254" font-family="inherit" font-size="14px"
                                      font-weight="600" style="font-family: inherit;" text-anchor="middle"
                                      x="-0.39999999999997726" y="303.93439876556397">
                                  <tspan id="SvgjsTspan1493">0</tspan>
                                  <title>0</title></text>
                              </g>
                            </g>
                            <g id="SvgjsG1510" class="apexcharts-grid">
                              <g id="SvgjsG1511" class="apexcharts-gridlines-horizontal"></g>
                              <g id="SvgjsG1512" class="apexcharts-gridlines-vertical">
                                <line id="SvgjsLine1513" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt" x1="0"
                                      x2="0" y1="0" y2="273.93439876556397"></line>
                                <line id="SvgjsLine1515" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt"
                                      x1="212.425" x2="212.425" y1="0"
                                      y2="273.93439876556397"></line>
                                <line id="SvgjsLine1517" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt"
                                      x1="424.85" x2="424.85" y1="0"
                                      y2="273.93439876556397"></line>
                                <line id="SvgjsLine1519" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt"
                                      x1="637.275" x2="637.275" y1="0"
                                      y2="273.93439876556397"></line>
                                <line id="SvgjsLine1521" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4"
                                      stroke-linecap="butt" x1="849.6999999999999" x2="849.6999999999999"
                                      y1="0" y2="273.93439876556397"></line>
                              </g>
                              <line id="SvgjsLine1514" class="apexcharts-xaxis-tick" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                                    x1="0" x2="0" y1="274.93439876556397"
                                    y2="280.93439876556397"></line>
                              <line id="SvgjsLine1516" class="apexcharts-xaxis-tick" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" x1="212.425" x2="212.425" y1="274.93439876556397"
                                    y2="280.93439876556397"></line>
                              <line id="SvgjsLine1518" class="apexcharts-xaxis-tick" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" x1="424.85" x2="424.85" y1="274.93439876556397"
                                    y2="280.93439876556397"></line>
                              <line id="SvgjsLine1520" class="apexcharts-xaxis-tick" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" x1="637.275" x2="637.275" y1="274.93439876556397"
                                    y2="280.93439876556397"></line>
                              <line id="SvgjsLine1522" class="apexcharts-xaxis-tick" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" x1="849.6999999999999" x2="849.6999999999999"
                                    y1="274.93439876556397" y2="280.93439876556397"></line>
                              <line id="SvgjsLine1524" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0"
                                    x2="848.5" y1="273.93439876556397" y2="273.93439876556397"></line>
                              <line id="SvgjsLine1523" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0" x2="0"
                                    y1="1" y2="273.93439876556397"></line>
                            </g>
                            <g id="SvgjsG1431" class="apexcharts-bar-series apexcharts-plot-series">
                              <g id="SvgjsG1432" class="apexcharts-series" data:realIndex="0" rel="1"
                                 seriesName="Order">
                                <path id="SvgjsPath1436"
                                      barHeight="19.566742768968854"
                                      barWidth="848.5" class="apexcharts-bar-area" clip-path="url(#gridRectMask42obkm6x)"
                                      cx="848.6" cy="48.916856922422134" d="M 0.1 9.783371384484427L 840.6 9.783371384484427Q 848.6 9.783371384484427 848.6 17.783371384484425L 848.6 21.350114153453283Q 848.6 29.350114153453283 840.6 29.350114153453283L 840.6 29.350114153453283L 0.1 29.350114153453283L 0.1 29.350114153453283z"
                                      fill="rgba(62,151,255,0.85)" fill-opacity="1" index="0"
                                      j="0"
                                      pathFrom="M 0.1 9.783371384484427L 0.1 9.783371384484427L 0.1 29.350114153453283L 0.1 29.350114153453283L 0.1 29.350114153453283L 0.1 29.350114153453283L 0.1 29.350114153453283L 0.1 9.783371384484427"
                                      pathTo="M 0.1 9.783371384484427L 840.6 9.783371384484427Q 848.6 9.783371384484427 848.6 17.783371384484425L 848.6 21.350114153453283Q 848.6 29.350114153453283 840.6 29.350114153453283L 840.6 29.350114153453283L 0.1 29.350114153453283L 0.1 29.350114153453283z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1" stroke-width="0"
                                      val="8"></path>
                                <path id="SvgjsPath1442"
                                      barHeight="19.566742768968854"
                                      barWidth="848.5" class="apexcharts-bar-area" clip-path="url(#gridRectMask42obkm6x)"
                                      cx="848.6" cy="88.05034246035984" d="M 0.1 48.916856922422134L 840.6 48.916856922422134Q 848.6 48.916856922422134 848.6 56.916856922422134L 848.6 60.48359969139099Q 848.6 68.48359969139099 840.6 68.48359969139099L 840.6 68.48359969139099L 0.1 68.48359969139099L 0.1 68.48359969139099z"
                                      fill="rgba(241,65,108,0.85)" fill-opacity="1" index="0"
                                      j="1"
                                      pathFrom="M 0.1 48.916856922422134L 0.1 48.916856922422134L 0.1 68.48359969139099L 0.1 68.48359969139099L 0.1 68.48359969139099L 0.1 68.48359969139099L 0.1 68.48359969139099L 0.1 48.916856922422134"
                                      pathTo="M 0.1 48.916856922422134L 840.6 48.916856922422134Q 848.6 48.916856922422134 848.6 56.916856922422134L 848.6 60.48359969139099Q 848.6 68.48359969139099 840.6 68.48359969139099L 840.6 68.48359969139099L 0.1 68.48359969139099L 0.1 68.48359969139099z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1" stroke-width="0"
                                      val="8"></path>
                                <path id="SvgjsPath1448"
                                      barHeight="19.566742768968854"
                                      barWidth="636.375" class="apexcharts-bar-area" clip-path="url(#gridRectMask42obkm6x)"
                                      cx="636.475" cy="127.18382799829755" d="M 0.1 88.05034246035984L 628.475 88.05034246035984Q 636.475 88.05034246035984 636.475 96.05034246035984L 636.475 99.6170852293287Q 636.475 107.6170852293287 628.475 107.6170852293287L 628.475 107.6170852293287L 0.1 107.6170852293287L 0.1 107.6170852293287z"
                                      fill="rgba(80,205,137,0.85)" fill-opacity="1" index="0"
                                      j="2"
                                      pathFrom="M 0.1 88.05034246035984L 0.1 88.05034246035984L 0.1 107.6170852293287L 0.1 107.6170852293287L 0.1 107.6170852293287L 0.1 107.6170852293287L 0.1 107.6170852293287L 0.1 88.05034246035984"
                                      pathTo="M 0.1 88.05034246035984L 628.475 88.05034246035984Q 636.475 88.05034246035984 636.475 96.05034246035984L 636.475 99.6170852293287Q 636.475 107.6170852293287 628.475 107.6170852293287L 628.475 107.6170852293287L 0.1 107.6170852293287L 0.1 107.6170852293287z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1" stroke-width="0"
                                      val="6"></path>
                                <path id="SvgjsPath1454"
                                      barHeight="19.566742768968854"
                                      barWidth="636.375" class="apexcharts-bar-area" clip-path="url(#gridRectMask42obkm6x)"
                                      cx="636.475" cy="166.31731353623525" d="M 0.1 127.18382799829755L 628.475 127.18382799829755Q 636.475 127.18382799829755 636.475 135.18382799829755L 636.475 138.7505707672664Q 636.475 146.7505707672664 628.475 146.7505707672664L 628.475 146.7505707672664L 0.1 146.7505707672664L 0.1 146.7505707672664z"
                                      fill="rgba(255,199,0,0.85)" fill-opacity="1" index="0"
                                      j="3"
                                      pathFrom="M 0.1 127.18382799829755L 0.1 127.18382799829755L 0.1 146.7505707672664L 0.1 146.7505707672664L 0.1 146.7505707672664L 0.1 146.7505707672664L 0.1 146.7505707672664L 0.1 127.18382799829755"
                                      pathTo="M 0.1 127.18382799829755L 628.475 127.18382799829755Q 636.475 127.18382799829755 636.475 135.18382799829755L 636.475 138.7505707672664Q 636.475 146.7505707672664 628.475 146.7505707672664L 628.475 146.7505707672664L 0.1 146.7505707672664L 0.1 146.7505707672664z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1" stroke-width="0"
                                      val="6"></path>
                                <path id="SvgjsPath1460"
                                      barHeight="19.566742768968854"
                                      barWidth="530.3125" class="apexcharts-bar-area" clip-path="url(#gridRectMask42obkm6x)"
                                      cx="530.4125" cy="205.45079907417295" d="M 0.1 166.31731353623525L 522.4125 166.31731353623525Q 530.4125 166.31731353623525 530.4125 174.31731353623525L 530.4125 177.8840563052041Q 530.4125 185.8840563052041 522.4125 185.8840563052041L 522.4125 185.8840563052041L 0.1 185.8840563052041L 0.1 185.8840563052041z"
                                      fill="rgba(114,57,234,0.85)" fill-opacity="1" index="0"
                                      j="4"
                                      pathFrom="M 0.1 166.31731353623525L 0.1 166.31731353623525L 0.1 185.8840563052041L 0.1 185.8840563052041L 0.1 185.8840563052041L 0.1 185.8840563052041L 0.1 185.8840563052041L 0.1 166.31731353623525"
                                      pathTo="M 0.1 166.31731353623525L 522.4125 166.31731353623525Q 530.4125 166.31731353623525 530.4125 174.31731353623525L 530.4125 177.8840563052041Q 530.4125 185.8840563052041 522.4125 185.8840563052041L 522.4125 185.8840563052041L 0.1 185.8840563052041L 0.1 185.8840563052041z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1" stroke-width="0"
                                      val="5"></path>
                                <path id="SvgjsPath1466"
                                      barHeight="19.566742768968854"
                                      barWidth="212.125" class="apexcharts-bar-area" clip-path="url(#gridRectMask42obkm6x)"
                                      cx="212.225" cy="244.58428461211065" d="M 0.1 205.45079907417295L 204.225 205.45079907417295Q 212.225 205.45079907417295 212.225 213.45079907417295L 212.225 217.0175418431418Q 212.225 225.0175418431418 204.225 225.0175418431418L 204.225 225.0175418431418L 0.1 225.0175418431418L 0.1 225.0175418431418z"
                                      fill="rgba(62,151,255,0.85)" fill-opacity="1" index="0"
                                      j="5"
                                      pathFrom="M 0.1 205.45079907417295L 0.1 205.45079907417295L 0.1 225.0175418431418L 0.1 225.0175418431418L 0.1 225.0175418431418L 0.1 225.0175418431418L 0.1 225.0175418431418L 0.1 205.45079907417295"
                                      pathTo="M 0.1 205.45079907417295L 204.225 205.45079907417295Q 212.225 205.45079907417295 212.225 213.45079907417295L 212.225 217.0175418431418Q 212.225 225.0175418431418 204.225 225.0175418431418L 204.225 225.0175418431418L 0.1 225.0175418431418L 0.1 225.0175418431418z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1" stroke-width="0"
                                      val="2"></path>
                                <path id="SvgjsPath1472"
                                      barHeight="19.566742768968854"
                                      barWidth="106.0625" class="apexcharts-bar-area" clip-path="url(#gridRectMask42obkm6x)"
                                      cx="106.1625" cy="283.71777015004835" d="M 0.1 244.58428461211065L 98.1625 244.58428461211065Q 106.1625 244.58428461211065 106.1625 252.58428461211065L 106.1625 256.15102738107953Q 106.1625 264.15102738107953 98.1625 264.15102738107953L 98.1625 264.15102738107953L 0.1 264.15102738107953L 0.1 264.15102738107953z"
                                      fill="rgba(241,65,108,0.85)" fill-opacity="1" index="0"
                                      j="6"
                                      pathFrom="M 0.1 244.58428461211065L 0.1 244.58428461211065L 0.1 264.15102738107953L 0.1 264.15102738107953L 0.1 264.15102738107953L 0.1 264.15102738107953L 0.1 264.15102738107953L 0.1 244.58428461211065"
                                      pathTo="M 0.1 244.58428461211065L 98.1625 244.58428461211065Q 106.1625 244.58428461211065 106.1625 252.58428461211065L 106.1625 256.15102738107953Q 106.1625 264.15102738107953 98.1625 264.15102738107953L 98.1625 264.15102738107953L 0.1 264.15102738107953L 0.1 264.15102738107953z" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1" stroke-width="0"
                                      val="1"></path>
                                <g id="SvgjsG1434" class="apexcharts-bar-goals-markers" style="pointer-events: none">
                                  <g id="SvgjsG1435" className="apexcharts-bar-goals-groups"></g>
                                  <g id="SvgjsG1441" className="apexcharts-bar-goals-groups"></g>
                                  <g id="SvgjsG1447" className="apexcharts-bar-goals-groups"></g>
                                  <g id="SvgjsG1453" className="apexcharts-bar-goals-groups"></g>
                                  <g id="SvgjsG1459" className="apexcharts-bar-goals-groups"></g>
                                  <g id="SvgjsG1465" className="apexcharts-bar-goals-groups"></g>
                                  <g id="SvgjsG1471" className="apexcharts-bar-goals-groups"></g>
                                </g>
                              </g>
                              <g id="SvgjsG1433" class="apexcharts-datalabels" data:realIndex="0">
                                <g id="SvgjsG1438" class="apexcharts-data-labels" transform="rotate(0)">
                                  <text id="SvgjsText1440" class="apexcharts-datalabel" cx="26.100000000000023"
                                        cy="26.166743150438577" dominant-baseline="auto" fill="#ffffff"
                                        font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                        text-anchor="start" x="26.100000000000023" y="26.166743150438577">8
                                  </text>
                                </g>
                                <g id="SvgjsG1444" class="apexcharts-data-labels" transform="rotate(0)">
                                  <text id="SvgjsText1446" class="apexcharts-datalabel" cx="26.100000000000023"
                                        cy="65.30022868837628" dominant-baseline="auto" fill="#ffffff"
                                        font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                        text-anchor="start" x="26.100000000000023" y="65.30022868837628">8
                                  </text>
                                </g>
                                <g id="SvgjsG1450" class="apexcharts-data-labels" transform="rotate(0)">
                                  <text id="SvgjsText1452" class="apexcharts-datalabel" cx="26.100000000000023"
                                        cy="104.433714226314" dominant-baseline="auto" fill="#ffffff"
                                        font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                        text-anchor="start" x="26.100000000000023" y="104.433714226314">6
                                  </text>
                                </g>
                                <g id="SvgjsG1456" class="apexcharts-data-labels" transform="rotate(0)">
                                  <text id="SvgjsText1458" class="apexcharts-datalabel" cx="26.100000000000023"
                                        cy="143.5671997642517" dominant-baseline="auto" fill="#ffffff"
                                        font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                        text-anchor="start" x="26.100000000000023" y="143.5671997642517">6
                                  </text>
                                </g>
                                <g id="SvgjsG1462" class="apexcharts-data-labels" transform="rotate(0)">
                                  <text id="SvgjsText1464" class="apexcharts-datalabel" cx="25.100000000000023"
                                        cy="182.7006853021894" dominant-baseline="auto" fill="#ffffff"
                                        font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                        text-anchor="start" x="25.100000000000023" y="182.7006853021894">5
                                  </text>
                                </g>
                                <g id="SvgjsG1468" class="apexcharts-data-labels" transform="rotate(0)">
                                  <text id="SvgjsText1470" class="apexcharts-datalabel" cx="21.099999999999994"
                                        cy="221.83417084012711" dominant-baseline="auto" fill="#ffffff"
                                        font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                        text-anchor="start" x="21.099999999999994" y="221.83417084012711">2
                                  </text>
                                </g>
                                <g id="SvgjsG1474" class="apexcharts-data-labels" transform="rotate(0)">
                                  <text id="SvgjsText1476" class="apexcharts-datalabel" cx="20.099999999999994"
                                        cy="260.9676563780648" dominant-baseline="auto" fill="#ffffff"
                                        font-family="inherit" font-size="14px" font-weight="600" style="font-family: inherit;"
                                        text-anchor="start" x="20.099999999999994" y="260.9676563780648">1
                                  </text>
                                </g>
                              </g>
                            </g>
                            <line id="SvgjsLine1525" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt" stroke-width="1"
                                  x1="0" x2="848.5" y1="0"
                                  y2="0"></line>
                            <line id="SvgjsLine1526" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0" x1="0"
                                  x2="848.5" y1="0" y2="0"></line>
                            <g id="SvgjsG1527" class="apexcharts-yaxis-annotations"></g>
                            <g id="SvgjsG1528" class="apexcharts-xaxis-annotations"></g>
                            <g id="SvgjsG1529" class="apexcharts-point-annotations"></g>
                          </g>
                          <g id="SvgjsG1421" class="apexcharts-annotations"></g>
                        </svg>
                        <div class="apexcharts-legend" style="max-height: 175px;"></div>
                        <div class="apexcharts-tooltip apexcharts-theme-light">
                          <div class="apexcharts-tooltip-title" style="font-family: inherit; font-size: 12px;"></div>
                          <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                              class="apexcharts-tooltip-marker" style="background-color: rgb(62, 151, 255);"></span>
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
                    <div class="card-toolbar"><a class="btn btn-sm btn-light" href="/en/admin/reports#kt_vtab_pane_5">View
                      All</a></div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="d-flex flex-stack"><img class="me-4 w-25px" src="/media/flags/iso/TR.svg"
                                                        style="border-radius: 4px;">
                      <div class="d-flex flex-stack flex-row-fluid d-grid gap-2">
                        <div class="me-5"><a class="text-gray-800 fw-bolder text-hover-primary fs-6">Turkey</a></div>
                        <div class="d-flex align-items-center"><span class="text-gray-800 fw-bolder fs-6 me-3 d-block">35</span><span
                            class="badge badge-success fs-base"><span class="svg-icon svg-icon-5 svg-icon-white ms-n1"><svg
                            fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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
                            class="badge badge-success fs-base"><span class="svg-icon svg-icon-5 svg-icon-white ms-n1"><svg
                            fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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
                          <div id="apexchartsn7pqw3qv"
                               class="apexcharts-canvas apexchartsn7pqw3qv apexcharts-theme-light"
                               style="width: 978px; height: 270px;">
                            <svg id="SvgjsSvg1292" class="apexcharts-svg" height="270" style="background: transparent;"
                                 transform="translate(0, 0)" version="1.1" width="978"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:data="ApexChartsNS" xmlns:svgjs="http://svgjs.dev"
                                 xmlns:xlink="http://www.w3.org/1999/xlink">
                              <g id="SvgjsG1294" class="apexcharts-inner apexcharts-graphical"
                                 transform="translate(31.16249990463257, 30)">
                                <defs id="SvgjsDefs1293">
                                  <linearGradient id="SvgjsLinearGradient1298" x1="0" x2="0" y1="0" y2="1">
                                    <stop id="SvgjsStop1299" offset="0" stop-color="rgba(216,227,240,0)"
                                          stop-opacity="0"></stop>
                                    <stop id="SvgjsStop1300" offset="1" stop-color="rgba(190,209,230,0)"
                                          stop-opacity="0"></stop>
                                    <stop id="SvgjsStop1301" offset="1" stop-color="rgba(190,209,230,0)"
                                          stop-opacity="0"></stop>
                                  </linearGradient>
                                  <clipPath id="gridRectMaskn7pqw3qv">
                                    <rect id="SvgjsRect1303" fill="#fff" height="197.228800617218" opacity="1"
                                          rx="0" ry="0" stroke="none" stroke-dasharray="0" stroke-width="0" width="942.8375000953674"
                                          x="-3" y="-1"></rect>
                                  </clipPath>
                                  <clipPath id="forecastMaskn7pqw3qv"></clipPath>
                                  <clipPath id="nonForecastMaskn7pqw3qv"></clipPath>
                                  <clipPath id="gridRectMarkerMaskn7pqw3qv">
                                    <rect id="SvgjsRect1304" fill="#fff" height="199.228800617218" opacity="1"
                                          rx="0" ry="0" stroke="none" stroke-dasharray="0" stroke-width="0" width="940.8375000953674"
                                          x="-2" y="-2"></rect>
                                  </clipPath>
                                </defs>
                                <rect id="SvgjsRect1302" class="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient1298)" fill-opacity="0.9"
                                      filter="none" height="195.228800617218" opacity="1" rx="0" ry="0" stroke-dasharray="3"
                                      stroke-width="0" width="206.10425002098083"
                                      x="0" y="0" y2="195.228800617218"></rect>
                                <g id="SvgjsG1315" class="apexcharts-xaxis" transform="translate(0, 0)">
                                  <g id="SvgjsG1316" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                    <text id="SvgjsText1318" class="apexcharts-text apexcharts-xaxis-label " dominant-baseline="auto"
                                          fill="#a1a5b7" font-family="inherit" font-size="13px"
                                          font-weight="400" style="font-family: inherit;" text-anchor="middle"
                                          x="468.4187500476837" y="224.228800617218">
                                      <tspan id="SvgjsTspan1319">May</tspan>
                                      <title>May</title></text>
                                  </g>
                                </g>
                                <g id="SvgjsG1326" class="apexcharts-grid">
                                  <g id="SvgjsG1327" class="apexcharts-gridlines-horizontal">
                                    <line id="SvgjsLine1329" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4" stroke-linecap="butt"
                                          x1="0" x2="936.8375000953674" y1="0"
                                          y2="0"></line>
                                    <line id="SvgjsLine1330" class="apexcharts-gridline" stroke="#e0e0e0" stroke-dasharray="4"
                                          stroke-linecap="butt" x1="0" x2="936.8375000953674"
                                          y1="195.228800617218" y2="195.228800617218"></line>
                                  </g>
                                  <g id="SvgjsG1328" class="apexcharts-gridlines-vertical"></g>
                                  <line id="SvgjsLine1332" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"
                                        x1="0" x2="936.8375000953674" y1="195.228800617218"
                                        y2="195.228800617218"></line>
                                  <line id="SvgjsLine1331" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" x1="0"
                                        x2="0" y1="1" y2="195.228800617218"></line>
                                </g>
                                <g id="SvgjsG1305" class="apexcharts-bar-series apexcharts-plot-series">
                                  <g id="SvgjsG1306" class="apexcharts-series" data:realIndex="0" rel="1"
                                     seriesName="Orders">
                                    <path id="SvgjsPath1310"
                                          barHeight="195.228800617218"
                                          barWidth="206.10425002098083" class="apexcharts-bar-area" clip-path="url(#gridRectMaskn7pqw3qv)"
                                          cx="1301.2041251325609" cy="0" d="M 365.36662503719333 195.228800617218L 365.36662503719333 5Q 365.36662503719333 0 370.36662503719333 0L 564.4708750581742 0Q 569.4708750581742 0 569.4708750581742 5L 569.4708750581742 5L 569.4708750581742 195.228800617218L 569.4708750581742 195.228800617218z"
                                          fill="rgba(0,158,247,1)" fill-opacity="1" index="0"
                                          j="0"
                                          pathFrom="M 365.36662503719333 195.228800617218L 365.36662503719333 195.228800617218L 569.4708750581742 195.228800617218L 569.4708750581742 195.228800617218L 569.4708750581742 195.228800617218L 569.4708750581742 195.228800617218L 569.4708750581742 195.228800617218L 365.36662503719333 195.228800617218"
                                          pathTo="M 365.36662503719333 195.228800617218L 365.36662503719333 5Q 365.36662503719333 0 370.36662503719333 0L 564.4708750581742 0Q 569.4708750581742 0 569.4708750581742 5L 569.4708750581742 5L 569.4708750581742 195.228800617218L 569.4708750581742 195.228800617218z"
                                          stroke="transparent" stroke-dasharray="0" stroke-linecap="round" stroke-opacity="1" stroke-width="2"
                                          val="1"></path>
                                    <g id="SvgjsG1308" class="apexcharts-bar-goals-markers"
                                       style="pointer-events: none">
                                      <g id="SvgjsG1309" className="apexcharts-bar-goals-groups"></g>
                                    </g>
                                  </g>
                                  <g id="SvgjsG1307" class="apexcharts-datalabels" data:realIndex="0">
                                    <g id="SvgjsG1312" class="apexcharts-data-labels" transform="rotate(0)">
                                      <text id="SvgjsText1314" class="apexcharts-datalabel" cx="467.41875004768383" cy="2"
                                            dominant-baseline="auto" fill="labelColor" font-family="inherit"
                                            font-size="13px" font-weight="600" style="font-family: inherit;"
                                            text-anchor="middle" x="467.41875004768383" y="2">1
                                      </text>
                                    </g>
                                  </g>
                                </g>
                                <line id="SvgjsLine1333" class="apexcharts-ycrosshairs" stroke="#b6b6b6" stroke-dasharray="0" stroke-linecap="butt" stroke-width="1"
                                      x1="0" x2="936.8375000953674" y1="0"
                                      y2="0"></line>
                                <line id="SvgjsLine1334" class="apexcharts-ycrosshairs-hidden" stroke-dasharray="0" stroke-linecap="butt" stroke-width="0"
                                      x1="0" x2="936.8375000953674" y1="0"
                                      y2="0"></line>
                                <g id="SvgjsG1335" class="apexcharts-yaxis-annotations"></g>
                                <g id="SvgjsG1336" class="apexcharts-xaxis-annotations"></g>
                                <g id="SvgjsG1337" class="apexcharts-point-annotations"></g>
                              </g>
                              <g id="SvgjsG1320" class="apexcharts-yaxis" rel="0"
                                 transform="translate(1.1624999046325684, 0)">
                                <g id="SvgjsG1321" class="apexcharts-yaxis-texts-g">
                                  <text id="SvgjsText1322" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#a1a5b7" font-family="inherit"
                                        font-size="13px" font-weight="400" style="font-family: inherit;" text-anchor="end"
                                        x="20" y="31.1">
                                    <tspan id="SvgjsTspan1323">1</tspan>
                                    <title>1</title></text>
                                  <text id="SvgjsText1324" class="apexcharts-text apexcharts-yaxis-label " dominant-baseline="auto" fill="#a1a5b7"
                                        font-family="inherit" font-size="13px" font-weight="400" style="font-family: inherit;"
                                        text-anchor="end" x="20"
                                        y="226.328800617218">
                                    <tspan id="SvgjsTspan1325">0</tspan>
                                    <title>0</title></text>
                                </g>
                              </g>
                              <g id="SvgjsG1295" class="apexcharts-annotations"></g>
                            </svg>
                            <div class="apexcharts-legend" style="max-height: 135px;"></div>
                            <div class="apexcharts-tooltip apexcharts-theme-light">
                              <div class="apexcharts-tooltip-title"
                                   style="font-family: inherit; font-size: 12px;"></div>
                              <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                                  class="apexcharts-tooltip-marker" style="background-color: rgb(0, 158, 247);"></span>
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
  </div>
</template>

<script>
export default {
  name: "new1"
}
</script>

<style scoped>

</style>