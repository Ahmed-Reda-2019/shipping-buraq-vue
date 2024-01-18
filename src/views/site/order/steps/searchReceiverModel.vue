<template>
  <div
      :id="divId"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header pb-0 border-0 justify-content-end">
          <!--begin::Close-->
          <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
          >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
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
                        transform="rotate(-45 6 17.3137)"
                        width="16"
                        x="6"
                        y="17.3137"
                    />
                    <rect
                        fill="black"
                        height="2"
                        rx="1"
                        transform="rotate(45 7.41422 6)"
                        width="16"
                        x="7.41422"
                        y="6"
                    />
                  </svg>
                </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          <!--begin::Content-->
          <div class="text-center mb-13">
            <h1 class="mb-3">{{$t('Search in Receivers')}}</h1>
          </div>
          <!--end::Content-->
          <!--begin::Search-->
          <div
              id="kt_modal_resivers_search_handler"
              data-kt-search-enter="enter"
              data-kt-search-keypress="true"
              data-kt-search-layout="inline"
              data-kt-search-min-length="2"
          >
            <!--begin::Form-->
            <form
                autocomplete="off"
                class="w-100 position-relative mb-5"
                data-kt-search-element="form"
            >
                  <span
                      class="
                      svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500
                      position-absolute
                      top-50
                      ms-5
                      translate-middle-y
                    "
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
              <!--end::Icon-->
              <!--begin::Input-->
              <input
                  id="userSerach"
                  class="
                      form-control form-control-lg form-control-solid
                      px-15
                    "
                  data-kt-search-element="input"
                  name="search"
                  placeholder="Search by username, full name or email..."
                  type="text"
                  value=""
                  @keyup="serchInHtml('userSerach', 'userSerachContiner')"
              />
              <!--end::Input-->
              <!--begin::Spinner-->
              <span
                  class="
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      lh-0
                      d-none
                      me-5
                    "
                  data-kt-search-element="spinner"
              >
                    <span
                        class="
                        spinner-border
                        h-15px
                        w-15px
                        align-middle
                        text-muted
                      "
                    ></span>
                  </span>
              <!--end::Spinner-->
              <!--begin::Reset-->
              <span
                  class="
                      btn btn-flush btn-active-color-primary
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      lh-0
                      me-5
                      d-none
                    "
                  data-kt-search-element="clear"
              >
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                    <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
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
                            transform="rotate(-45 6 17.3137)"
                            width="16"
                            x="6"
                            y="17.3137"
                        />
                        <rect
                            fill="black"
                            height="2"
                            rx="1"
                            transform="rotate(45 7.41422 6)"
                            width="16"
                            x="7.41422"
                            y="6"
                        />
                      </svg>
                    </span>
                <!--end::Svg Icon-->
                  </span>
              <!--end::Reset-->
            </form>
            <!--end::Form-->
            <!--begin::Wrapper-->
            <div class="py-5">
              <!--begin::Suggestions-->
              <div data-kt-search-element="suggestions">
                <!--begin::Heading-->
                <h3 class="fw-bold mb-5">{{$t('searche')}}:</h3>
                <!--end::Heading-->
                <!--begin::Users-->
                <div
                    id="userSerachContiner"
                    class="mh-375px scroll-y me-n7 pe-7"
                >
                  <a
                      v-for="(reciver, i) in addresses"
                      :key="i"
                      class="
                          align-items-center
                          p-3
                          rounded
                          bg-state-light bg-state-opacity-50
                          mb-1
                        "
                      style="display: flex"
                      @click="setResiver(reciver)"
                  >
                        <span class="d-none"
                        >{{ reciver.reciever_address }}
                          {{ reciver.reciever_phone }}
                          {{ reciver.reciever_name }}
                        </span>

                    <div class="fw-bold">
                          <span class="fs-6 text-gray-800 me-2">{{
                              reciver.reciever_address
                            }}</span>
                      <span class="badge badge-light">{{
                          reciver.reciever_name
                        }}</span>
                      <span class="badge badge-light">{{
                          reciver.reciever_phone
                        }}</span>
                    </div>
                  </a>
                </div>
                <!--end::Users-->
              </div>
              <!--end::Suggestions-->
              <!--begin::Empty-->
              <div
                  class="text-center d-none"
                  data-kt-search-element="empty"
              >
                <!--begin::Message-->
                <div class="fw-bold py-10">
                  <div class="text-gray-600 fs-3 mb-2">No users found</div>
                  <div class="text-muted fs-6">
                    Try to search by username, full name or email...
                  </div>
                </div>
                <!--end::Message-->
                <!--begin::Illustration-->
                <div class="text-center px-5">
                  <img
                      alt=""
                      class="w-100 h-200px h-sm-325px"
                      src="assets/media/illustrations/sigma-1/1.png"
                  />
                </div>
                <!--end::Illustration-->
              </div>
              <!--end::Empty-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Search-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

</template>

<script>
import {hideModal} from "@/core/helpers/dom";

export default {
  name: "searchReceiverModel",
  props: ['sercheMode', 'addresses', 'divId'],
  data() {
    return {
      currentAddress: {},
    }
  },
  methods: {
    serchInHtml(inputId, CDivId) {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById(inputId);
      filter = input.value.toUpperCase();
      ul = document.getElementById(CDivId);
      li = ul.getElementsByTagName("a");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "flex";
        } else {
          li[i].style.display = "none";
        }
      }
    },
    setResiver(address) {
      let key = "sender_";
      if (this.$parent.sercheMode == 2) {
        key = 'receiver_';
      }
      this.order[key + 'address'] = address.reciever_address;
      this.order[key + 'zip'] = address.county_id;
      this.order[key + 'name'] = address.reciever_name;
      this.order[key + 'email'] = address.reciever_email;
      this.order[key + 'phone'] = address.reciever_phone;
      // this.$parent.fillOrder(this.currentAddress);
      hideModal(this.divId)

    }
  },
  computed: {
    order() {
      return this.$parent.order;
    }
  }
}
</script>

<style scoped>

</style>