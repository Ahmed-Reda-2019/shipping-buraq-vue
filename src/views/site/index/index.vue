<template>

    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid p-0">
      <!--begin::Hero-->
      <div
        id="body-trans-height"
        class="
              bgi-no-repeat bgi-position-center bgi-size-cover
              d-flex
              flex-column
              h-400pxx h-lg-450pxx
              body-trans body-trans-height
              justify-content-center
            "
        style="height: 91vh !important"
      >
        <!--begin::Container-->
        <div
          class="
                container
                z-index-1
                container-logo
                hide
                text-center
                d-print-none
              "
        >
          <img
            :src="setting.getVal('site_main_image')"
            class="w-300px w-md-350px w-lg-400px"
          />
        </div>
        <div
          class="
                container
                z-index-1
                container-landding
                justify-content-center
                align-items-center
                row m-auto
              "
          style="display: flex"
        >

         <div class="col-12 justify-content-center">
           <h3 class="fw-bolder text-white text-center mb-10 mb-lg-13 d-sm-none d-md-block">
             {{ $t("Track your order") }}
             {{$t('By code')}}
           </h3>
           <form
             class="position-relative w-100 mw-900px d-sm-none d-md-block m-auto"
             style="background: rgba(255, 255, 255, 0.05)"
             @submit="serchOrderhOrder()"
           >
             <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
             <span
               class="
                    svg-icon svg-icon-2qx svg-icon-white
                    position-absolute
                    top-50
                    translate-middle
                    ms-9
                  "
               @click="serchOrderhOrder()"
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
             <!--end::Svg Icon-->

             <input
               v-model="code"
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
               autocomplete="off"
               @keydown.enter.prevent="serchOrderhOrder()"
               name="search"
               style="border: 1px solid rgba(255, 255, 255, 0.24)"
               type="text"
             />
           </form>

           <h1
             class="
                  fs-3x
                  fw-bolder
                  text-white
                  mt-3
                  mb-3 mb-lg-5
                  d-print-none
                  text-center
                "
           >
             {{ $t("home.title") }}
             <VTypical
               :loop="Infinity"
               :steps="[
                    $t('home.word1'),
                    600,
                    $t('home.word2'),
                    600,
                    $t('home.word3'),
                    600,
                  ]"
               :wrapper="'span'"
             ></VTypical>
           </h1>

           <p
             class="
                  text-white
                  mb-10 mb-lg-13
                  d-print-none
                  fs-2
                  w-50
                  text-center
                "
           >
             {{ setting.getTitle("site_text_down") }}
           </p>
         </div>
          <div class="col-12  d-md-none">
            <h3 class="fw-bolder text-white text-center mb-10 mb-lg-13">
            {{ $t("Track your order") }}
              {{$t('By code')}}
            </h3>

            <form
              class="position-relative w-100 mw-900px"
              style="background: rgba(255, 255, 255, 0.05)"
              @submit="serchOrderhOrder()"
            >
              <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
              <span
                class="
                    svg-icon svg-icon-2qx svg-icon-white
                    position-absolute
                    top-50
                    translate-middle
                    ms-9
                  "
                @click="serchOrderhOrder()"
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
              <!--end::Svg Icon-->

              <input
                v-model="code"
                :placeholder="$t('Tracking')"
                autocomplete="off"
                class="
                    form-control
                    bg-transparent
                    fs-2
                    py-6
                    ps-17
                    placeholder-white
                    text-white
                    m-auto
                  "
                @keydown.enter.prevent="serchOrderhOrder()"
                name="search"
                style="border: 1px solid rgba(255, 255, 255, 0.24)"
                type="text"
              />
            </form>
            <div >

              <qrcode-scanner
              :fps="10"
              :qrbox="250"
              :label="$t('Or Scan You Code')"
              class="position-relative w-100  mx-auto"
              @result="onScan"
            ></qrcode-scanner>
            </div>

          </div>

        </div>
        <video autoplay class="video-overlay" loop muted>
          <source
            src="/media/videos/video.mp4"
            type="video/mp4"
          />
        </video>
        <div class="video-overlay"></div>

        <!--end::Container-->
      </div>


      <div class="pb-15 pt-18 landing-dark-bg">
        <!--begin::Container-->
        <div class="container">
          <!--begin::Heading-->
          <div class="text-center mt-15 mb-18" id="achievements" data-kt-scroll-offset="{default: 100, lg: 150}">
            <!--begin::Title-->
            <h3 class="fs-2hx text-white fw-bolder mb-5">We Make Things Better</h3>
            <!--end::Title-->
            <!--begin::Description-->
            <div class="fs-5 text-gray-700 fw-bold">Save thousands to millions of bucks by using single tool
              <br>for different amazing and great useful admin</div>
            <!--end::Description-->
          </div>
          <!--end::Heading-->
          <!--begin::Statistics-->
          <div class="d-flex flex-center">
            <!--begin::Items-->
            <div class="d-flex flex-wrap flex-center justify-content-lg-between mb-15 mx-auto w-xl-900px">
              <!--begin::Item-->
              <div class="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain" style="background-image: url('assets/media/svg/misc/octagon.svg')">
                <!--begin::Symbol-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                <span class="svg-icon svg-icon-2tx svg-icon-white mb-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
											<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
											<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
											<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
										</svg>
									</span>
                <!--end::Svg Icon-->
                <!--end::Symbol-->
                <!--begin::Info-->
                <div class="mb-0">
                  <!--begin::Value-->
                  <div class="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                    <div class="min-w-70px counted" data-kt-countup="true" data-kt-countup-value="700" data-kt-countup-suffix="+">700+</div>
                  </div>
                  <!--end::Value-->
                  <!--begin::Label-->
                  <span class="text-gray-600 fw-bold fs-5 lh-0">Known Companies</span>
                  <!--end::Label-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain" style="background-image: url('assets/media/svg/misc/octagon.svg')">
                <!--begin::Symbol-->
                <!--begin::Svg Icon | path: icons/duotune/graphs/gra008.svg-->
                <span class="svg-icon svg-icon-2tx svg-icon-white mb-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z" fill="currentColor"></path>
											<path opacity="0.3" d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z" fill="currentColor"></path>
											<path opacity="0.3" d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z" fill="currentColor"></path>
										</svg>
									</span>
                <!--end::Svg Icon-->
                <!--end::Symbol-->
                <!--begin::Info-->
                <div class="mb-0">
                  <!--begin::Value-->
                  <div class="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                    <div class="min-w-70px counted" data-kt-countup="true" data-kt-countup-value="80" data-kt-countup-suffix="K+">80K+</div>
                  </div>
                  <!--end::Value-->
                  <!--begin::Label-->
                  <span class="text-gray-600 fw-bold fs-5 lh-0">Statistic Reports</span>
                  <!--end::Label-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain" style="background-image: url('assets/media/svg/misc/octagon.svg')">
                <!--begin::Symbol-->
                <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg-->
                <span class="svg-icon svg-icon-2tx svg-icon-white mb-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor"></path>
											<path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor"></path>
											<path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor"></path>
										</svg>
									</span>
                <!--end::Svg Icon-->
                <!--end::Symbol-->
                <!--begin::Info-->
                <div class="mb-0">
                  <!--begin::Value-->
                  <div class="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                    <div class="min-w-70px counted" data-kt-countup="true" data-kt-countup-value="35" data-kt-countup-suffix="M+">35M+</div>
                  </div>
                  <!--end::Value-->
                  <!--begin::Label-->
                  <span class="text-gray-600 fw-bold fs-5 lh-0">Secure Payments</span>
                  <!--end::Label-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Item-->
            </div>
            <!--end::Items-->
          </div>
          <!--end::Statistics-->
          <!--begin::Testimonial-->
          <div class="fs-2 fw-bold text-muted text-center mb-3">
            <span class="fs-1 lh-1 text-gray-700">“</span>When you care about your topic, you’ll write about it in a
            <br>
            <span class="text-gray-700 me-1">more powerful</span>, emotionally expressive way
            <span class="fs-1 lh-1 text-gray-700">“</span></div>
          <!--end::Testimonial-->
        </div>
        <!--end::Container-->
      </div>


      <section class="container pb-15 pt-18 ">

        <div class="text-center mt-5 mb-17">
          <!--begin::Title-->
          <h3 class="fs-2hx text-dark mb-5" id="how-it-works" data-kt-scroll-offset="{default: 100, lg: 150}">
            {{ $t("Our Shipment trips")}}
          </h3>
          <!--end::Title-->
          <!--begin::Text-->
          <div class="fs-5 text-muted fw-bold">
            Embarking on our shipment trips is a journey marked by precision and reliability.
          </div>
          <!--end::Text-->
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <trap-card :item='{
                vessel_name:"MV Ocean Voyager",
                from_country:"turkish",
                from_country_code:"turkish",
                to_country:"Egypt",
                port_of_loading:"Port of Istanbul",
                port_of_discharge:"Port of Shanghai:",
                liner:"liner shipping",
                 ets:"ETS",
                eta:"ETA",
              }' />
          <trap-card :item='{
                vessel_name:"SS Starlight Explorer",
                from_country:"turkish",
                to_country:"Jerusalem",
                port_of_loading:"Port of Istanbul",
                port_of_discharge:"Port of Aliaga",
                liner:"liner shipping",
                ets:"-",
                eta:"-",
              }' />
          <trap-card :item='{
                vessel_name:"MV Serenity Princess",
                from_country:"china",
                to_country:"Jerusalem",
                port_of_loading:"Port of Dalian",
                port_of_discharge:"Port of Jerusalem",
                liner:"liner shipping",
                ets:"ETS",
                eta:"ETA",
              }' />
          <trap-card :item='{
                vessel_name:"SS Golden Horizon",
                from_country:"china",
                to_country:"Jerusalem",
                port_of_loading:"Port of Istanbul",
                port_of_discharge:"",
                liner:"liner shipping",
                  ets:"-",
                eta:"-",
              }' />
          <trap-card :item='{
                vessel_name:"MV Arctic Spirit",
                from_country:"china",
                to_country:"turkey",
                port_of_loading:"Port of Mersin",
                port_of_discharge:"Port of Aliaga",
                liner:"liner shipping",
                 ets:"ETS",
                eta:"ETA",
              }' />
          <trap-card :item='{
                vessel_name:"SS Pacific Dreamer",
                from_country:"China",
                to_country:"Egypt",
                port_of_loading:"Port of Istanbul",
                port_of_discharge:"Port of Alex",
                liner:"liner shipping",
                 ets:"ETS",
                eta:"ETA",
              }' />



        </div>

      </section>

      <div class="pb-15 pt-18 landing-dark-bg">
        <!--begin::Container-->
        <div class="container">
          <!--begin::Heading-->
          <div class="text-center mt-15 mb-18" id="achievements" data-kt-scroll-offset="{default: 100, lg: 150}">
            <!--begin::Title-->
            <h3 class="fs-2hx text-white fw-bolder mb-5">
              {{ $t("Latest Articles") }}
            </h3>
            <!--end::Title-->
          </div>
          <div class="row row-cols-md-2 row-cols-lg-3 justify-content-center">
            <div v-for="blog in blogs" :key="blog.id">
              <!--begin::Hot sales post-->
              <blog-item :blog="blog"></blog-item>
              <!--end::Hot sales post-->
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <a  class="btn btn-primary">{{$t('show all')}}</a>
          </div>
        </div>
      </div>

      <gallery></gallery>


      <div class="pb-15 pt-18 landing-dark-bg d-none">
        <!--begin::Container-->
        <div class="container">
          <!--begin::Heading-->
          <div class="text-center mt-15 mb-18" id="achievements" data-kt-scroll-offset="{default: 100, lg: 150}">
            <!--begin::Title-->
            <h3 class="fs-2hx text-white fw-bolder mb-5">We Make Things Better</h3>
            <!--end::Title-->
          </div>
          <div class="row row-cols-md-2 row-cols-lg-3 justify-content-center">
            <div v-for="blog in blogs" :key="blog.id">
              <!--begin::Hot sales post-->
              <blog-item :blog="blog"></blog-item>
              <!--end::Hot sales post-->
            </div>
          </div>
        </div>
      </div>


      <div class="pb-15 pt-18 landing-white-bg">
        <!--begin::Container-->
        <div class="container">
          <!--begin::Heading-->
          <div class="text-center mt-15 mb-18" id="achievements" data-kt-scroll-offset="{default: 100, lg: 150}">
            <!--begin::Title-->
            <h3 class="fs-2hx fw-bolder mb-5">
              {{$t("Frequesntly Asked Questions")}}
            </h3>
            <p>{{$t("the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.")}}</p>
            <!--end::Title-->
          </div>
          <div class="m-0">
            <!--begin::Heading-->
            <div class="d-flex align-items-center collapsible py-3 toggle mb-0 collapsed" data-bs-toggle="collapse" data-bs-target="#kt_job_4_1" aria-expanded="false">
              <!--begin::Icon-->
              <div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
																		<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"></rect>
																	</svg>
																</span>
                <!--end::Svg Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
                <span class="svg-icon toggle-off svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
																		<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"></rect>
																		<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"></rect>
																	</svg>
																</span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Icon-->
              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">How does it work?</h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Body-->
            <div id="kt_job_4_1" class="fs-6 ms-1 collapse" style="">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</div>
              <!--end::Text-->
            </div>
            <!--end::Content-->
            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>

        </div>
      </div>

      <el-carousel :autoplay="false">
        <el-carousel-item >
          <div class="slider-box">
            <img src="/media/slider/1.jpg" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>{{$t('home.word1')}}</h5>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item >
          <div class="slider-box">
            <img src="/media/slider/2.jpg" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>
                {{$t('home.word2')}}
              </h5>

            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item >

          <div class="slider-box">
            <img src="/media/slider/3.jpg" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>
                {{$t('home.word3')}}
              </h5>

            </div>
          </div>
        </el-carousel-item>
      </el-carousel>

      <!--end::Hero-->
      <!--begin::Svg-->
      <div class="mt-n15 text-page-bg">
        <svg
          class=""
          height="56px"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 100 100"
          width="100%"
        >
          <path
            d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <!--end::Svg-->
      <!--begin::Container-->
      <div class="container">
        <!--begin::Card-->

        <div class="card new-service-container">
          <div
            class="position-relative w-100 mx-auto"
            style="background: rgba(255, 255, 255, 0.05)"
          >
          </div>
        </div>
        <!--end::Card-->
      </div>
      <!--end::Container-->
    </div>


</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import "flatpickr/dist/flatpickr.css";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import flatPickr from "vue-flatpickr-component";
import Invoice from "@/views/print/invoice.vue";
import { hideModal } from "@/core/helpers/dom";
import { mapGetters } from "vuex";
import store from "@/store";

import { default as StripeCard } from "@/components/StripeVueCard.vue";
import { default as SArea } from "@/views/admin/locations/area.vue";
import { default as RArea } from "@/views/admin/locations/area.vue";
import * as Yup from "yup";
import VTypical from "vue-typical";
import TrapCard from "@/views/site/components/trapCard.vue";
import Setting from "@/core/config/Setting";
import QrcodeScanner from "@/components/qrcode-scanner.vue";
import BlogItem from "@/views/site/blog/blogItem.vue";

// import { StripeElementCard } from '@vue-stripe/vue-stripe';

const today = new Date();
let createOrderSchema = [];

export default defineComponent({
  name: "site-index",
  components: {
    BlogItem,
    QrcodeScanner,
    TrapCard, VTypical
  },
  data() {
    return {
      loadingPrice: false,
      loading: false,
      toc: false,
      code:"",
      blogs:[],
      trips:[],
    };
  },
  mounted() {
    this.isAuth = JwtService.isCustomer();
    ApiService.get("site/index").then((res) => {
      this.blogs = res.data.blogs;
      this.trips = res.data.trips;
    });

    // this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ (today.getDate()+1);
  },
  created() {
    setCurrentPageBreadcrumbs(this.$t("Home"));
    this.isAuth = JwtService.isCustomer();

  },
  computed: {
    ...mapGetters([
      "currency_iso_code",
      "currency_symbol",
      "currency_multiplier",
    ]),
    isEmployee() {
      return JwtService.isEmployee();
    },
    setting() {
      return Setting;
    },
  },
  methods: {
    goDown() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    },
    serchOrderhOrder() {
      this.$router.push({ name: "site-tracking", params: { code: this.code } });
    },
    onScan(decodedText, decodedResult) {
      this.code = decodedText.substr(
        decodedText.indexOf("tracking") + "tracking".length + 1
      );
      // this.order.code = decodedText;
      this.serchOrderhOrder();
      // handle the message here :)
    },
  },
  watch: {

  },
});
</script>
<style>
#qr-code-full-region {
  background: #e2ad6d7a !important;
  border-radius: 10px !important;
  border: 0 !important;
}
</style>
