<template>
  <div class="d-flex flex-column flex-column-fluid">

    <boxes :list="Report.branch_sizes" />

    <div class="row gy-5">


    <div class="row row-cols-1 row-cols-md-2">
      <div class="col-xl-4 mb-xl-10">
        <!--begin::Engage widget 1-->
        <div class="card h-md-100">
          <!--begin::Body-->
          <div class="card-body d-flex flex-column flex-center">
            <!--begin::Heading-->
            <div class="mb-2">
              <!--begin::Title-->
              <h1 class="fw-bold text-gray-800 text-center lh-lg">Quick form to
                <br>
                <span class="fw-boldest">Add New Shipment</span></h1>
              <!--end::Title-->
              <!--begin::Illustration-->
              <div class="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center card-rounded-bottom h-200px mh-200px my-5 my-lg-12" style="background-image:url('/media/svg/illustrations/easy/4.svg')"></div>
              <!--end::Illustration-->
            </div>
            <!--end::Heading-->
            <!--begin::Links-->
            <div class="text-center mb-1">
              <!--begin::Link-->
              <router-link :to="{name:'order-create'}" class="btn btn-sm btn-primary me-2" >Start Now</router-link>
              <!--end::Link-->
            </div>
            <!--end::Links-->
          </div>
          <!--end::Body-->
        </div>
        <!--end::Engage widget 1-->
      </div>


      <div class="col-xxl-6 mb-5 mb-xl-0">
        <!--begin::List widget 8-->
        <div class="card card-flush h-lg-100">
          <!--begin::Header-->
          <div class="card-header pt-7 mb-5">
            <!--begin::Title-->
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bolder text-gray-800">Country</span>
              <span class="text-gray-400 mt-1 fw-bold fs-6">20 countries share 97% visits</span>
            </h3>
            <!--end::Title-->
            <!--begin::Toolbar-->
            <div class="card-toolbar">

            </div>
            <!--end::Toolbar-->
          </div>
          <!--end::Header-->
          <!--begin::Body-->
          <div class="card-body pt-0">
            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <!--begin::Flag-->
              <img src="/media/countries/eg.svg" class="me-4 w-25px" style="border-radius: 4px" alt="">
              <!--end::Flag-->
              <!--begin::Section-->
              <div class="d-flex flex-stack flex-row-fluid d-grid gap-2">
                <!--begin::Content-->
                <div class="me-5">
                  <!--begin::Title-->
                  <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">United States</a>
                  <!--end::Title-->
                  <!--begin::Desc-->
                  <span class="text-gray-400 fw-bold fs-7 d-block text-start ps-0">Direct link clicks</span>
                  <!--end::Desc-->
                </div>
                <!--end::Content-->
                <!--begin::Info-->
                <div class="d-flex align-items-center">
                  <!--begin::Number-->
                  <span class="text-gray-800 fw-bolder fs-6 me-3 d-block">9,763</span>
                  <!--end::Number-->
                  <!--begin::Label-->
                  <div class="m-0">
                    <!--begin::Label-->
                    <span class="badge badge-success fs-base">
																		<!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
																		<span class="svg-icon svg-icon-5 svg-icon-white ms-n1">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
																				<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
																			</svg>
																		</span>
                      <!--end::Svg Icon-->2.6%</span>
                    <!--end::Label-->
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Section-->
            </div>
            <!--end::Item-->
            <!--begin::Separator-->
            <div class="separator separator-dashed my-3"></div>
            <!--end::Separator-->
            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <!--begin::Flag-->
              <img src="assets/media/flags/brazil.svg" class="me-4 w-25px" style="border-radius: 4px" alt="">
              <!--end::Flag-->
              <!--begin::Section-->
              <div class="d-flex flex-stack flex-row-fluid d-grid gap-2">
                <!--begin::Content-->
                <div class="me-5">
                  <!--begin::Title-->
                  <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">Brasil</a>
                  <!--end::Title-->
                  <!--begin::Desc-->
                  <span class="text-gray-400 fw-bold fs-7 d-block text-start ps-0">All Social Channels</span>
                  <!--end::Desc-->
                </div>
                <!--end::Content-->
                <!--begin::Info-->
                <div class="d-flex align-items-center">
                  <!--begin::Number-->
                  <span class="text-gray-800 fw-bolder fs-6 me-3 d-block">4,062</span>
                  <!--end::Number-->
                  <!--begin::Label-->
                  <div class="m-0">
                    <!--begin::Label-->
                    <span class="badge badge-danger fs-base">
																		<!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg-->
																		<span class="svg-icon svg-icon-5 svg-icon-white ms-n1">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
																				<path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"></path>
																			</svg>
																		</span>
                      <!--end::Svg Icon-->0.4%</span>
                    <!--end::Label-->
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Section-->
            </div>
            <!--end::Item-->
            <!--begin::Separator-->
            <div class="separator separator-dashed my-3"></div>
            <!--end::Separator-->
            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <!--begin::Flag-->
              <img src="assets/media/flags/turkey.svg" class="me-4 w-25px" style="border-radius: 4px" alt="">
              <!--end::Flag-->
              <!--begin::Section-->
              <div class="d-flex flex-stack flex-row-fluid d-grid gap-2">
                <!--begin::Content-->
                <div class="me-5">
                  <!--begin::Title-->
                  <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">Turkey</a>
                  <!--end::Title-->
                  <!--begin::Desc-->
                  <span class="text-gray-400 fw-bold fs-7 d-block text-start ps-0">Mailchimp Campaigns</span>
                  <!--end::Desc-->
                </div>
                <!--end::Content-->
                <!--begin::Info-->
                <div class="d-flex align-items-center">
                  <!--begin::Number-->
                  <span class="text-gray-800 fw-bolder fs-6 me-3 d-block">1,680</span>
                  <!--end::Number-->
                  <!--begin::Label-->
                  <div class="m-0">
                    <!--begin::Label-->
                    <span class="badge badge-success fs-base">
																		<!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
																		<span class="svg-icon svg-icon-5 svg-icon-white ms-n1">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
																				<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
																			</svg>
																		</span>
                      <!--end::Svg Icon-->0.2%</span>
                    <!--end::Label-->
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Section-->
            </div>
            <!--end::Item-->
            <!--begin::Separator-->
            <div class="separator separator-dashed my-3"></div>
            <!--end::Separator-->
            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <!--begin::Flag-->
              <img src="assets/media/flags/france.svg" class="me-4 w-25px" style="border-radius: 4px" alt="">
              <!--end::Flag-->
              <!--begin::Section-->
              <div class="d-flex flex-stack flex-row-fluid d-grid gap-2">
                <!--begin::Content-->
                <div class="me-5">
                  <!--begin::Title-->
                  <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">France</a>
                  <!--end::Title-->
                  <!--begin::Desc-->
                  <span class="text-gray-400 fw-bold fs-7 d-block text-start ps-0">Impact Radius visits</span>
                  <!--end::Desc-->
                </div>
                <!--end::Content-->
                <!--begin::Info-->
                <div class="d-flex align-items-center">
                  <!--begin::Number-->
                  <span class="text-gray-800 fw-bolder fs-6 me-3 d-block">849</span>
                  <!--end::Number-->
                  <!--begin::Label-->
                  <div class="m-0">
                    <!--begin::Label-->
                    <span class="badge badge-success fs-base">
																		<!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
																		<span class="svg-icon svg-icon-5 svg-icon-white ms-n1">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
																				<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
																			</svg>
																		</span>
                      <!--end::Svg Icon-->4.1%</span>
                    <!--end::Label-->
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Section-->
            </div>
            <!--end::Item-->
            <!--begin::Separator-->
            <div class="separator separator-dashed my-3"></div>
            <!--end::Separator-->
            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <!--begin::Flag-->
              <img src="assets/media/flags/india.svg" class="me-4 w-25px" style="border-radius: 4px" alt="">
              <!--end::Flag-->
              <!--begin::Section-->
              <div class="d-flex flex-stack flex-row-fluid d-grid gap-2">
                <!--begin::Content-->
                <div class="me-5">
                  <!--begin::Title-->
                  <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">India</a>
                  <!--end::Title-->
                  <!--begin::Desc-->
                  <span class="text-gray-400 fw-bold fs-7 d-block text-start ps-0">Many Sources</span>
                  <!--end::Desc-->
                </div>
                <!--end::Content-->
                <!--begin::Info-->
                <div class="d-flex align-items-center">
                  <!--begin::Number-->
                  <span class="text-gray-800 fw-bolder fs-6 me-3 d-block">604</span>
                  <!--end::Number-->
                  <!--begin::Label-->
                  <div class="m-0">
                    <!--begin::Label-->
                    <span class="badge badge-danger fs-base">
																		<!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg-->
																		<span class="svg-icon svg-icon-5 svg-icon-white ms-n1">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
																				<path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"></path>
																			</svg>
																		</span>
                      <!--end::Svg Icon-->8.3%</span>
                    <!--end::Label-->
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Section-->
            </div>
            <!--end::Item-->
            <!--begin::Separator-->
            <div class="separator separator-dashed my-3"></div>
            <!--end::Separator-->
            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <!--begin::Flag-->
              <img src="assets/media/flags/sweden.svg" class="me-4 w-25px" style="border-radius: 4px" alt="">
              <!--end::Flag-->
              <!--begin::Section-->
              <div class="d-flex flex-stack flex-row-fluid d-grid gap-2">
                <!--begin::Content-->
                <div class="me-5">
                  <!--begin::Title-->
                  <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">Sweden</a>
                  <!--end::Title-->
                  <!--begin::Desc-->
                  <span class="text-gray-400 fw-bold fs-7 d-block text-start ps-0">Social Network</span>
                  <!--end::Desc-->
                </div>
                <!--end::Content-->
                <!--begin::Info-->
                <div class="d-flex align-items-center">
                  <!--begin::Number-->
                  <span class="text-gray-800 fw-bolder fs-6 me-3 d-block">237</span>
                  <!--end::Number-->
                  <!--begin::Label-->
                  <div class="m-0">
                    <!--begin::Label-->
                    <span class="badge badge-success fs-base">
																		<!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
																		<span class="svg-icon svg-icon-5 svg-icon-white ms-n1">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
																				<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
																			</svg>
																		</span>
                      <!--end::Svg Icon-->1.9%</span>
                    <!--end::Label-->
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Section-->
            </div>
            <!--end::Item-->
          </div>
          <!--end::Body-->
        </div>
        <!--end::LIst widget 8-->
      </div>

      <div class="p-2">
      <new-customer
        :list="Report.customers"
        widget-classes="card-xxl-stretch mb-5 mb-xl-8"
      >
      </new-customer>
      </div>
      <div class="p-2"
           v-if="Report.status_counts && Object.keys(Report.status_counts).length > 0">
        <div
          class="card "
        >
          <div class="card-header border-0 pt-5">
            <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">{{
                $t("status counts")
              }}</span>
            </h3>

            <div
              class="card-toolbar"
              data-bs-placement="top"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              title="Click to add a user"
            ></div>
          </div>
          <div class="card-body py-3">
            <my-table
              :enable-items-per-page-dropdown="true"
              :list="Report.status_counts"
              :tableHeader="[
              { name: 'name', key: 'name' },
              { name: 'counts', key: 'counts' },
            ]"
              :modal="null"
              :title="$t('status counts')"
              desc=""
              :btn="null"
            >
              <template v-slot:cell-name="{ row: item }">
              <span :class="'btn btn-sm ' + item.StatusOb.classCss">
                {{ item.StatusOb.name }}
              </span>
              </template>
              <template v-slot:cell-counts="{ row: item }">
                {{ item.counts }}
              </template>
            </my-table>
          </div>
        </div>

      </div>
    </div>


    <div  class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
      <div v-if="Report.invoices_counts" class="card card-xl-stretch mb-xl-8">
        <!--begin::Body-->
        <div class="card-body p-0">
          <!--begin::Header-->
          <div class="px-9 pt-7 card-rounded h-175px w-100 bg-primary">
            <!--begin::Heading-->
            <div class="d-flex flex-stack">
              <h3 class="m-0 text-white fw-bolder fs-3">
                {{ $t('invoices status')}}
              </h3>
            </div>
            <!--end::Heading-->
            <!--begin::Balance-->
            <div class="d-flex text-center flex-column text-white pt-8">
              <span class="fw-bolder fs-1x pt-1">{{Report.invoices_counts.counts}}100</span>
            </div>
            <!--end::Balance-->
          </div>
          <!--end::Header-->
          <!--begin::Items-->
          <div class="bg-body shadow-sm card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1" style="margin-top: -100px">
            <!--begin::Item-->
            <div v-for="(item ,i) in Report.invoices_counts.items" :key="i"
                 class="d-flex align-items-center mb-6">
              <!--begin::Symbol-->
              <div class="symbol symbol-45px w-40px me-5">
                            <span class="symbol-label bg-lighten " :class="item.status.class">
                              <!--begin::Svg Icon | path: icons/duotune/maps/map004.svg-->
                              <span class="svg-icon svg-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor"></path>
                                  <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor"></path>
                                </svg>
                              </span>
                              <!--end::Svg Icon-->
                            </span>
              </div>
              <!--end::Symbol-->
              <!--begin::Description-->
              <div class="d-flex align-items-center flex-wrap w-100">
                <!--begin::Title-->
                <div class="mb-1 pe-3 flex-grow-1">
                  <a  class="fs-5 text-gray-800 text-hover-primary fw-bolder">{{item.status.name}}</a>
                </div>
                <!--end::Title-->
                <!--begin::Label-->
                <div class="d-flex align-items-center">
                  <div class="fw-bolder fs-5 text-gray-800 pe-1">({{item.counts}})</div>
                </div>
                <!--end::Label-->
              </div>
              <!--end::Description-->
            </div>
            <!--begin::EndItem-->
          </div>
          <!--end::Items-->
        </div>
        <!--end::Body-->
      </div>

    </div>

    <div v-if="Report.orders && Report.orders.length > 0" class="card mt-5 w-100">
      <div class="card-header border-0 pt-5 ">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bolder fs-3 mb-1">{{
            $t("Last Orders")
          }}</span>
        </h3>

        <div
          class="card-toolbar"
          data-bs-placement="top"
          data-bs-toggle="tooltip"
          data-bs-trigger="hover"
          title="Click to add a user"
        ></div>
      </div>

      <div class="card-body py-3">
        <my-table
          :list="Report.orders"
          :tableHeader="[
            { name: 'service', key: 'service' },
            { name: 'date', key: 'date' },
            { name: 'status', key: 'status' },
            { name: 'from', key: 'fromAdrress' },
            { name: 'to', key: 'toAdrress' },
            { name: 'actions', key: 'actions' },
          ]"
          :modal="null"
          :title="$t('Last Orders')"
          desc=""
          :btn="null"
        >
          <template v-slot:cell-service="{ row: item }">
           {{item.customer.code}}
          </template>
          <template v-slot:cell-date="{ row: item }">
            {{ item.date }}
          </template>
          <template v-slot:cell-fromAdrress="{ row: item }">
            {{ item.fromAdrress }}
          </template>
          <template v-slot:cell-toAdrress="{ row: item }">
            {{ item.toAdrress }}
          </template>
          <template v-slot:cell-actions="{ row: item }">
            <template v-if="can('view-order')">
              <router-link
                :to="{ name: 'order-view', params: { Id: item.code } }"
                class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
              >
                <i class="icon-xl fas far fa-eye"></i>
              </router-link>
            </template>
          </template>
          <template v-slot:cell-status="{ row: item }">
            <template v-if="item.status_ob">
              <span :class="'badge ' + item.status_ob.class">
                {{ item.status_ob.name }}
              </span>
            </template>

          </template>
        </my-table>
      </div>
    </div>

    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, onMounted , computed} from "vue";
import Widget1 from "@/components/widgets/charts/Widget1.vue";
import Widget2 from "@/components/widgets/charts/Widget2.vue";
import Widget3 from "@/components/widgets/charts/Widget3.vue";
import Widget4 from "@/components/widgets/charts/Widget4.vue";
import Widget5 from "@/components/widgets/charts/Widget5.vue";
import Widget6 from "@/components/widgets/charts/Widget6.vue";
import Widget7 from "@/components/widgets/charts/Widget7.vue";
import Widget8 from "@/components/widgets/charts/Widget8.vue";
import Widget9 from "@/components/widgets/charts/Widget9.vue";

import TableWidget5 from "@/components/widgets/tables/Widget5.vue";
import ListWidget1 from "@/components/widgets/lists/Widget1.vue";
import ListWidget2 from "@/components/widgets/lists/Widget2.vue";
import ListWidget3 from "@/components/widgets/lists/Widget3.vue";
import ListWidget5 from "@/components/widgets/lists/Widget5.vue";
import ListWidget6 from "@/components/widgets/lists/Widget6.vue";
import MixedWidget2 from "@/components/widgets/mixed/Widget2.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
import MixedWidget7 from "@/components/widgets/mixed/Widget7.vue";
import MixedWidget10 from "@/components/widgets/mixed/Widget10.vue";

import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { default as newCustomer } from "@/views/admin/components/newCustomers.vue";
import PieChart from "@/views/admin/components/pieChart.vue";
import MyTable from "@/views/admin/components/myTable.vue";
import { can } from "@/core/services/JwtService";

import { GoogleMap, Marker , Polyline } from "vue3-google-map";
import {useGeolocation} from "@/composables/useGeolocation";
import Map from "@/components/map2.vue";
import Boxes from "@/views/admin/branches/boxes.vue";

export default defineComponent({
  name: "dashboard",
  components: {
    Boxes,
    // Widget1,
    // Widget2,
    // Widget3,
    // Widget4,
    // Widget5,
    // Widget6,
    // Widget7,
    // Widget8,
    // Map,
    // PieChart,
    MyTable,
    newCustomer,
    // GoogleMap, Marker , Polyline
  },
  data() {
    return {
      Report: {},
      center: { lat: 0, lng: -180 },

    };
  },
  created() {
    onMounted(() => {
      setCurrentPageBreadcrumbs(this.$t("dashboard"));
    });
    ApiService.get("admin/Dashboard").then((res) => {
      if (res.status == 200) this.Report = res.data;
    });
  },
  methods: {
    mapLocation($event){
      console.log($event.lat);
    },
    can(p) {
      return can(p);
    },
  },
});
</script>
