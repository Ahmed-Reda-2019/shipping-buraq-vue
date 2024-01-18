<template>
  <div
    id="kt_content_container"
    class="d-flex flex-column-fluid align-items-start"
  >
    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid">
      <!--begin::Hero-->
      <div
        class="
          bgi-no-repeat bgi-position-center bgi-size-cover
          d-flex
          flex-column
          h-400px h-lg-250px
        "
      >
        <!--begin::Container-->
        <div class="container">
          <!--begin::Head-->
          <div class="d-flex flex-stack py-3 py-lg-8">
            <!--begin::Title-->
            <!-- <h2 class="fw-bolder text-white pe-2 m-0">{{ $t("Contact") }}</h2> -->
            <!--end::Title-->
          </div>
          <!--end::Head-->
        </div>
        <!--end::Container-->
        <!--begin::Container-->
        <div class="container pt-10 pt-lg-13">
          <!--begin::Title-->
          <h3 class="fs-2x fw-bolder text-white text-center mb-10 mb-lg-13">
            {{ $t("How Can We Help") }}
          </h3>
          <!--end::Title-->
        </div>
        <!--end::Container-->
      </div>
      <!--end::Hero-->
      <!--begin::Svg-->
      <div class="mt-n15 text-page-bg"></div>
      <!--end::Svg-->
      <!--begin::Container-->
      <div class="container">
        <!--begin::Contact-->
        <div class="card">
          <!--begin::Body-->
          <div class="card-body p-lg-17">
            <!--begin::Row-->
            <div class="row mb-3">
              <!--begin::Col-->
              <div class="col">
                <!--begin::Form-->
                <form
                  id="kt_contact_form"
                  class="form mb-15"
                  method="post"
                  @submit.prevent="sendFeedback"
                >
                  <h1 class="fw-bolder text-dark mb-9">
                    {{ $t("Send Us Email") }}
                  </h1>
                  <!--begin::Input group-->
                  <div class="row mb-5">
                    <!--begin::Col-->
                    <div
                      :class="auth == false ? 'col-md-6' : ' col-md-12'"
                      class="fv-row"
                    >
                      <!--begin::Label-->
                      <label class="fs-5 fw-bold mb-2">{{ $t("name") }}</label>
                      <!--end::Label-->
                      <!--begin::Input-->
                      <input
                        v-model="contact.name"
                        class="form-control form-control-solid"
                        type="text"
                      />
                      <!--end::Input-->
                      <div v-if="errors['name']" class="text-danger">
                        {{ errors["name"][0] }}
                      </div>
                    </div>
                    <!--end::Col-->
                    <!--begin::Col-->
                    <div v-if="auth == false" class="col-md-6 fv-row">
                      <!--end::Label-->
                      <label class="fs-5 fw-bold mb-2">{{ $t("email") }}</label>
                      <!--end::Label-->
                      <!--end::Input-->
                      <input
                        v-model="contact.email"
                        class="form-control form-control-solid"
                        type="email"
                      />
                      <!--end::Input-->
                      <div v-if="errors['email']" class="text-danger">
                        {{ errors["email"][0] }}
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-5 fv-row">
                    <!--begin::Label-->
                    <label class="fs-5 fw-bold mb-2">{{ $t("Subject") }}</label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input
                      v-model="contact.subject"
                      class="form-control form-control-solid"
                      type="text"
                    />
                    <!--end::Input-->
                    <div v-if="errors['subject']" class="text-danger">
                      {{ errors["subject"][0] }}
                    </div>
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-10 fv-row">
                    <label class="fs-6 fw-bold mb-2">{{ $t("Message") }}</label>
                    <textarea
                      v-model="contact.message"
                      class="form-control form-control-solid"
                      name="message"
                      placeholder=""
                      rows="6"
                    ></textarea>
                    <div v-if="errors['message']" class="text-danger">
                      {{ errors["message"][0] }}
                    </div>
                  </div>
                  <!--end::Input group-->
                  <!--begin::Submit-->
                  <button
                    id="kt_contact_submit_button"
                    :data-kt-indicator="loading ? 'on' : null"
                    :disabled="loading"
                    class="btn btn-primary d-block m-auto"
                    type="submit"
                  >
                    <!--begin::Indicator-->
                    <span class="indicator-label">{{
                      $t("Send Feedback")
                    }}</span>
                    <span class="indicator-progress">
                      {{ $t("PleaseWait") }}
                      <span
                        class="
                          spinner-border spinner-border-sm
                          align-middle
                          ms-2
                        "
                      ></span>
                    </span>
                    <!--end::Indicator-->
                  </button>
                  <!--end::Submit-->
                </form>
                <!--end::Form-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <!-- <div class="col-md-6 ps-lg-10"> -->
              <!--begin::Map-->
              <!-- <div id="kt_contact_map" class="w-100 rounded mb-2 mb-lg-0 mt-2" style="height: 486px"></div> -->
              <!--end::Map-->
              <!-- </div> -->
              <!--end::Col-->
            </div>
            <!--end::Row-->

            <div class="mb-18">
              <!--begin::Heading-->
              <div class="text-center mb-17">
                <!--begin::Title-->
                <h3 class="fs-2hx text-dark mb-5">{{ $t("Our Branches") }}</h3>
                <!--end::Title-->
                <!--begin::Sub-title-->
                <div class="fs-5 text-muted fw-bold">
                  {{ $t("Our Branches text") }}
                </div>
                <!--end::Sub-title=-->
              </div>
              <!--end::Heading-->
              <!--begin::Wrapper-->
              <div
                class="
                  row row-cols-1 row-cols-sm-2 row-cols-xl-3
                  gy-10
                  justify-content-around
                "
              >
                <!--begin::Item-->
                <div
                  v-for="branch in branches"
                  :key="branch.id"
                  class="col text-center mb-9"
                >
                  <!--begin::Photo-->
                  <div
                    :style="'background-image:url(' + branch.image + ')'"
                    class="
                      octagon
                      mx-auto
                      mb-2
                      d-flex
                      w-300px
                      h-300px
                      bgi-no-repeat bgi-size-cover bgi-position-center
                    "
                  ></div>
                  <!--end::Photo-->
                  <!--begin::Person-->
                  <div class="mb-0">
                    <!--begin::Name-->
                    <a class="text-dark fw-bolder text-hover-primary fs-3">
                      {{ branch.name }}
                    </a>
                    <!--end::Name-->
                    <!--begin::Position-->
                    <div class="text-muted fs-6 fw-bold">
                      <a :href="'tel:' + branch.phone">{{ branch.phone }}</a>
                    </div>
                    <div class="text-muted fs-6 fw-bold">
                      <a :href="'mailto:' + branch.email">{{ branch.email }}</a>
                    </div>
                    <div class="text-muted fs-6 fw-bold">
                      {{ branch.address }}
                    </div>
                    <!--begin::Position-->
                  </div>
                  <!--end::Person-->
                </div>
                <!--end::Item-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--begin::Card-->
            <div class="card mb-4 bg-light text-center">
              <!--begin::Body-->
              <div class="card-body py-12">
                <!--begin::Icon-->
                <a class="mx-4" href="#">
                  <img
                    alt=""
                    class="h-30px my-2"
                    src="/media/svg/brand-logos/facebook-4.svg"
                  />
                </a>
                <!--end::Icon-->
                <!--begin::Icon-->
                <a class="mx-4" href="#">
                  <img
                    alt=""
                    class="h-30px my-2"
                    src="/media/svg/brand-logos/instagram-2-1.svg"
                  />
                </a>
                <!--end::Icon-->
                <!--begin::Icon-->
                <a class="mx-4" href="#">
                  <img
                    alt=""
                    class="h-30px my-2"
                    src="/media/svg/brand-logos/github.svg"
                  />
                </a>
                <!--end::Icon-->
                <!--begin::Icon-->
                <a class="mx-4" href="#">
                  <img
                    alt=""
                    class="h-30px my-2"
                    src="/media/svg/brand-logos/behance.svg"
                  />
                </a>
                <!--end::Icon-->
                <!--begin::Icon-->
                <a class="mx-4" href="#">
                  <img
                    alt=""
                    class="h-30px my-2"
                    src="/media/svg/brand-logos/pinterest-p.svg"
                  />
                </a>
                <!--end::Icon-->
                <!--begin::Icon-->
                <a class="mx-4" href="#">
                  <img
                    alt=""
                    class="h-30px my-2"
                    src="/media/svg/brand-logos/twitter.svg"
                  />
                </a>
                <!--end::Icon-->
                <!--begin::Icon-->
                <a class="mx-4" href="#">
                  <img
                    alt=""
                    class="h-30px my-2"
                    src="/media/svg/brand-logos/dribbble-icon-1.svg"
                  />
                </a>
                <!--end::Icon-->
              </div>
              <!--end::Body-->
            </div>
            <!--end::Card-->
          </div>
          <!--end::Body-->
        </div>
        <!--end::Contact-->
      </div>
      <!--end::Container-->
    </div>
    <!--end::Post-->
  </div>
</template>

<script>
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default {
  name: "contact",
  data() {
    return {
      contact: {},
      errors: [],
      loading: false,
      auth: JwtService.isCustomer(),
      branches: [],
    };
  },

  created() {
    useStore().dispatch(Actions.ADD_BODY_CLASSNAME, "page-bg-image-lg");
    ApiService.get("site/list/BranchData").then((res) => {
      if (res.status == 200) {
        this.branches = res.data;
      }
    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Contact"), []);
  },
  methods: {
    async sendFeedback() {
      this.loading = true;
      this.errors = [];
      await ApiService.put("site/contact", this.contact)
        .then((res) => {
          this.contact = {};
          this.$toast.success(res.data.message);
          Swal.fire(res.data.message, "", "success");
          this.loading = false;
        })
        .catch(() => {
          this.errors = ApiService.errors;
          this.loading = false;
        });
    },
  },
};
</script>
