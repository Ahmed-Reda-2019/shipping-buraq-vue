<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-xl-row">
      <!--begin::Sidebar-->
      <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10 px-md-10">
        <div class="card mb-5 mb-xl-8">
          <div class="card-body pt-15">
            <div class="d-flex flex-center flex-column mb-5">
              <!--begin::Avatar-->
              <div class="symbol symbol-200px mb-7">
                <img :src="order.qrcode" alt="image" class="d-block" />
                <img
                  :src="order.BarcodeImg"
                  alt="image"
                  class="mt-3 w-200px h-50px d-none"
                />
              </div>
              <!--end::Avatar-->
              <!--begin::Name-->
              <a
                class="
                  fs-3
                  text-gray-800 text-hover-primary
                  fw-bolder
                  mb-1
                  cursor-pointer
                "
                @click="copyCode()"
              >
                {{ order.code }}
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="/media/icons/duotune/general/gen054.svg" />
                </span>
              </a>
              <a class="fs-3 text-gray-800">
                {{ order.date }}
              </a>
              {{order.status_ob}}
              <div class="d-flex flex-column align-items-center">

                <div class="d-flex">
                  <template v-if="order.status_ob">
                    <span :class="'badge ' + order.status_ob.class">
                      {{ order.status_ob.name }}
                      <template
                        v-if="order.is_returning == 0 && order.status == 62"
                      >
                        - {{ $t("to_branch") }}</template
                      >
                    </span>
                  </template>
                  <template v-if="order.is_returning == 1">
                    <span class="badge badge-danger ms-1">
                      {{ $t("returning") }}
                    </span>
                  </template>
                </div>
              </div>

              <div class="d-flex flex-wrap flex-center"></div>
              <!--end::Info-->
            </div>
          </div>
        </div>


        <div class="card mb-5 mb-xl-8 ">
          <!--begin::Card body-->
          <div class="card-body">
            <button
              class="btn btn-primary mb-3 w-100 "
              type="button"
            >
              <span class="svg-icon svg-icon-3">
                <i class="fas fa-compress-arrows-alt"> </i>
              </span>
              {{ $t("Order Size") }}
              <span class="bold">
              {{ order.size }}
              </span>
              {{ $t("meter") }}<sup>3</sup>
            </button>
            <!--begin::Notice-->
            <div
              class="
                notice
                d-flex
                flex-column
                bg-light-primary
                rounded
                border-primary border border-dashed
                mb-9
                p-6
              "
            >
              <!--begin::Content-->
              <div class="fs-1 text-center text-gray-700">
                {{$t('Order costs')}}
              </div>
              <table
                class="
                  table
                  align-middle
                  table-row-dashed
                  fs-6
                  gy-5
                  mb-0
                  table-responsive
                "
              >
                <template v-for="(invoice , i) in order.invoices" :key="i">
                <tr class="w-100" >
                  <td>
                    {{ $t("invoice cost") }}  ({{i+1}})
                  </td>
                  <td>
                    {{invoice.p_total}} {{invoice.p_currency_key}}
                  </td>
                </tr>
                  <tr class="w-100" >
                    <td>
                      {{ $t("shipping Cost") }}  ({{i+1}})
                    </td>
                    <td>
                      {{invoice.shipping_cost}}  {{invoice.p_currency_key}}
                    </td>
                  </tr>
                </template>
                <tr class="w-100">
                  <td>
                    {{ $t("Extra charge") }}
                  </td>
                  <td>
                    {{ order.shipping_cost }} {{order.shipping_currency_iso }}
                  </td>
                </tr>
                <tr class="w-100">
                  <td>
                    {{ $t("total costs") }}
                  </td>
                  <td>
                    {{ order.total_cost }} {{order.main_currency_iso}}
                  </td>
                </tr>
                <tr class="w-100">
                  <td>
                    {{ $t("total payed") }}
                  </td>
                  <td>
                    {{ order.total_payed }} {{ order.main_currency_iso }}
                  </td>
                </tr>


              </table>
              <!--end::Content-->
            </div>

            <!--end::Notice-->
            <!--begin::Items-->
            <div class="py-2">
<!--              v-if="can('shipping-money-order')"-->
              <div  class="d-flex flex-stack">
                <div class="d-flex">
                  <div class="d-flex flex-column">
                    <a class="fs-5 text-dark text-hover-primary fw-bolder">
                      {{ $t("payment Status") }}:
                    </a>
                  </div>
                </div>
                <div class="d-flex justify-content-end flex-column">
                  <!--begin::Switch-->
                  <template v-if="order.paid_status == 0">
                    <span class="badge badge-danger mb-1">
                      {{ $t("notPaid") }}
                    </span>
                  </template>
                  <template v-else-if="order.paid_status == 1">
                    <span class="badge badge-success mb-1">
                      {{ $t("Paid") }}
                    </span>
                  </template>

                  <!--end::Switch-->
                  <template v-else>
                    <span class="badge badge-warning mb-1">
                      {{ $t(order.paid_status) }}
                    </span>
                  </template>

                </div>
              </div>
<!--              v-if="can('shipping-money-edit-order') && order.total_pay == 0"-->

                <div class="d-flex justify-content-between py-2" >
                    <a class="fs-5 text-dark text-hover-primary fw-bolder">
                        {{ $t("Client Balance") }}:
                    </a>
                    <a>
                      <span class="badge"
                      :class="{
                          'badge-success': order.customer.balance >= order.total_cost,
                          'badge-danger': order.customer.balance < order.total_cost,
                      }">
                  {{order.customer.balance}}
                      </span>
                    </a>
                </div>

              <template v-if="order.paid_status != 1">

                <button
                  v-if="order.customer.balance >= order.total_cost"
                  class="btn btn-warning mb-3 w-100 "
                  type="button"
                  data-bs-target="#kt_modal_payed_order"
                  data-bs-toggle="modal"
                >
                  <span class="svg-icon svg-icon-3">
                    <i class="fas fa-compress-arrows-alt"> </i>
                  </span>
                    {{ $t("Pay From Client Balance") }}
                </button>
                <button
                  v-else
                  class="btn btn-info mb-3 w-100 "
                  type="button"
                  data-bs-target="#kt_modal_payed_from_branch"
                  data-bs-toggle="modal"
                >
                <span class="svg-icon svg-icon-3">
                  <i class="fas fa-compress-arrows-alt"> </i>
                </span>
                  {{ $t("Send Request to Branch") }}
                </button>


                <div  v-if="order.paid_status != 0" class="d-flex flex-column my-5 d-none"
                >
                  <button
                    class="btn btn-success"
                    data-bs-target="#kt_modal_payed_order"
                    data-bs-toggle="modal"
                    type="button"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="/media/icons/duotune/art/art005.svg" />
                    </span>
                    {{ $t("Payment") }}
                  </button>
                </div>
              </template>

            </div>
            <!--end::Items-->
          </div>
          <!--end::Card body-->
        </div>

        <div
          v-if="order.customer && order.customer.id > 0"
          class="card mb-5 mb-xl-8"
        >
          <div class="card-body pt-15">
            <div class="d-flex flex-center flex-column mb-5">
              <!--begin::Avatar-->
              <div class="symbol symbol-200px symbol-circle pb-6">
                <span
                  class="symbol-label bg-light-danger fs-2 text-danger fw-bold"
                  >{{ order.customer.name.charAt(0) }}</span
                >
              </div>
              <!--end::Avatar-->
              <!--begin::Name-->
              <router-link
                :to="{
                  name: 'customers-view',
                  params: { customer: order.customer.id },
                }"
                class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1"
                >{{ order.customer.name }}
              </router-link>
            </div>

            <!--end::Info-->
          </div>
        </div>

        <div class="card card-flush py-4 flex-row-fluid" v-if="order.indebtedness">
          <!--begin::Card header-->
          <div class="card-header">
            <div class="card-title">
              <h2>{{ $t("Branch Indebtedness") }}</h2>
            </div>
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-0">
            <div class="table-responsive">
              <!--begin::Table-->
              <table class="table align-middle table-row-bordered mb-0 fs-6 gy-5 min-w-300px">
                <!--begin::Table body-->
                <tbody class="fw-bold text-gray-600">
                <tr>
                  <td class="text-muted">
                    {{ $t("from Branch")}}
                  </td>
                  <td class="fw-bolder text-end">
                    {{ order.indebtedness.from_branch.title}}
                  </td>
                </tr>
                <tr v-if="order.indebtedness.user">
                  <td class="text-muted">
                    {{ $t("from User")}}
                  </td>
                  <td class="fw-bolder text-end">
                    {{ order.indebtedness.user.name}}
                    ({{ order.indebtedness.user.id}})
                  </td>
                </tr>

                <tr>
                  <td class="text-muted">
                    {{ $t("to Branch")}}
                  </td>
                  <td class="fw-bolder text-end">
                    {{ order.indebtedness.to_branch.title}}
                  </td>
                </tr>
                <tr v-if="order.indebtedness.by_user">
                  <td class="text-muted" >
                    {{ $t("from User")}}
                  </td>
                  <td class="fw-bolder text-end">
                    {{ order.indebtedness.by_user.name}}
                    ({{ order.indebtedness.by_user.id}})
                  </td>
                </tr>
                <tr>
                  <td class="text-muted">
                    {{ $t("total")}}
                  </td>
                  <td class="fw-bolder text-end">
                    {{ order.indebtedness.amount }}
                    {{ order.indebtedness.amount_key }}
                  </td>
                </tr>
                <template v-if="order.customer">
                  <tr >
                    <td class="text-muted">
                      {{ $t("current balance")}}
                    </td>
                    <td class="fw-bolder text-end">
                      {{ order.customer.balance }}
                    </td>
                  </tr>
                  <tr >
                    <td class="text-muted">
                      {{ $t("need balance")}}
                    </td>
                    <td class="fw-bolder text-end">
                      <span class="badge badge-success">
                        {{ (order.indebtedness.amount - order.customer.balance ).toFixed(2) }}
                        {{ order.indebtedness.amount_key }}
                      </span>
                    </td>
                  </tr>
                </template>

                <tr v-if="order.indebtedness.status_id == 0">
                  <td >
                      <a class="btn btn-sm btn-light-success"
                         :disabled="loading" @click="apiOrders.actIndebtedness(order,1)">
                        {{$t('accept request')}}
                      </a>
                  </td>
                  <td >
                    <a class="btn btn-sm btn-light-danger"
                       :disabled="loading" @click="apiOrders.actIndebtedness(order,5)">
                      {{$t('reject request')}}
                    </a>
                  </td>
                </tr>
                </tbody>
                <!--end::Table body-->
              </table>
              <!--end::Table-->
            </div>
          </div>
          <!--end::Card body-->
        </div>

      </div>
      <!--end::Sidebar-->

      <div class="flex-lg-row-fluid ms-lg-15">
        <div class="card bg-lighten">
          <div class="card-header card-header-stretch bg-white">
            <div class="card-title">
              <ul class="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0">
                <!--begin:::Tab item-->
                <li class="nav-item">
                  <a
                    class="nav-link text-active-primary pb-4 active"
                    data-bs-toggle="tab"
                    href="#kt_customer_view_overview_tab"
                    >{{ $t("Overview") }}</a
                  >
                </li>
                <!--end:::Tab item-->
                <!--begin:::Tab item-->
                <li class="nav-item">
                  <a
                    class="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#kt_order_view_sender_data"
                    >{{ $t("Customer") }}</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#kt_order_view_resiver_data"
                    >{{ $t("client Withdraws") }}</a
                  >
                  <span class="badge badge-circle badge-danger" v-if="order.clientWithdraws && order.clientWithdraws.length>0">
                    {{order.clientWithdraws.length}}
                  </span>
                </li>
                <!--end:::Tab item-->
              </ul>
            </div>
            <div class="card-toolbar align-content-center">

              <div
                v-if="canChange.length > 0 && can('accept-order')"
                class="mx-2 my-3"
              >
                <select
                  v-if="
                    lockedStatus.indexOf(parseInt(order.status)) == -1 &&
                    canChange.indexOf(parseInt(order.status)) > -1
                  "
                  v-model="changeOrderStatusValue"
                  class="form-select h-100"
                  @change="changeOrderStatus(i)"
                >
                <template v-for="statusId in canChange"
                :key="statusId">
                  <option
                  v-if="status[statusId]"
                  :selected="statusId == order.status"
                  :value="statusId"
                >
                  {{ status[statusId].name  }}
                </option>
                </template>
                </select>
              </div>
              <div v-if="order.status_ob" class="align-items-center">
                <span class="badge " :class="order.status_ob.class">
                  {{order.status_ob.name}}
                </span>
              </div>
              <button
                class="
                  btn btn-success btn-shadow
                  font-weight-bold
                  mx-2
                  my-3
                  print-barCode
                "
                @click="currentBoxIndex = -1 ;printQrcode()"
              >
                <i class="fas fa-barcode p-0"></i>
              </button>
              <button
                class="
                  btn btn-success btn-shadow
                  font-weight-bold
                  mx-2
                  my-3
                  print-barCode
                "
                @click="printInvoice()"
              >
                <i class="fas fa-file-invoice p-0"></i>
              </button>
              <order-notify v-if="order.id" :orderId="order.id"></order-notify>
            </div>
          </div>
          <div class="card-body px-0">
            <div id="myTabContent" class="tab-content">
              <div
                id="kt_customer_view_overview_tab"
                class="tab-pane fade show active"
                role="tabpanel"
              >
                <!--begin::Card-->
                <div class="card pt-4 mb-6 mb-xl-9">
                  <!--begin::Card header-->
                  <div class="card-header border-0">
                    <!--begin::Card title-->
                    <div class="card-title">
                      <h2>{{ $t("Order Invoices") }}</h2>
                    </div>
                    <!--end::Card title-->
                    <!--begin::Card toolbar-->

                    <!--end::Card toolbar-->
                  </div>
                  <!--end::Card header-->
                  <!--begin::Card body-->
                  <div class="card-body pt-0 pb-5">
                    <!--begin::Table-->
                    <table
                      v-if="order.invoices && order.invoices.length > 0"
                      id="kt_table_customers_payment"
                      class="table align-middle table-row-dashed gy-5"
                    >
                      <!--begin::Table head-->
                      <thead
                        class="border-bottom border-gray-200 fs-7 fw-bolder"
                      >
                        <tr class="text-start text-muted text-uppercase gs-0">
                          <th>#</th>
                          <th>{{ $t("company") }}</th>
                          <th>{{ $t("date") }}</th>
                          <th>{{ $t("pricing list") }}</th>
                          <th>{{ $t("expected value") }}</th>
                          <th>{{ $t("invoice price") }}</th>
                          <th>{{ $t("vat difference") }}</th>
                          <th>{{ $t("status") }}</th>
                          <th>{{ $t("actions") }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, iInvoice) in order.invoices" :key="iInvoice">
                          <td>{{ iInvoice + 1 }}</td>
                          <td>
                            <template v-if="item.company ">
                              {{ item.company.name }}
                              <br/>
                              {{ item.company.title }}
                            </template>
                          </td>
                          <td>{{ item.date }}</td>
                          <td>
                            <p>{{ item.p_main_total }}
                              {{ item.main_currency }}
                            </p>
                            <p>{{ item.p_subtotal }}
                              {{ item.p_currency_key }}
                            </p>
                          </td>
                          <td>
                            {{ item.expected_value }}
                            {{ item.currency_key }}
                          </td>

                            <td>
                                {{ item.subtotal }}
                                {{ item.currency_key }}
                            </td>
                            <td>
                                {{ item.diff_vat }}
                            </td>
                          <td>
                            <span v-if="item.statusOb" class="badge " :class="item.statusOb.class">
                              {{item.statusOb.name}}
                            </span>
                            <a class="btn btn-sm btn-dark" v-if="item.status_id == 68" @click="requestInvoice(item)">
                              {{$t('Order Now')}}
                            </a>
                            <span
                              class="badge badge-success"
                              v-if="item.is_received == 1"
                            >
                              {{ $t('Received done')}}
                            </span>
                          </td>
                          <td>
<!--                            v-if="item.is_received == 0"-->
                            <button
                              class="btn btn-sm btn-light-primary ms-3"
                              data-bs-target="#kt_modal_receive_invoice"
                              data-bs-toggle="modal"
                              type="button"
                              @click="invoice = item; invoiceIndex=iInvoice"
                            >
                              {{ $t("Add offial invoice") }}
                              <i class="fa fa-hamsa"></i>
                            </button>

<!--                            v-if="can('edit-address-order')"-->

                            <button
                                class="btn btn-sm btn-light-primary ms-3"
                                data-bs-target="#kt_modal_edit_invoice"
                                data-bs-toggle="modal"
                                type="button"
                                @click="invoice = item; invoiceIndex=iInvoice"
                            >
                              {{ $t("edit") }}
                              <i class="fa fa-edit"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!--end::Table-->
                    <div v-else class="text-center">
                      <h3>{{ $t("noData") }}</h3>
                    </div>
                  </div>
                  <!--end::Card body-->
                </div>
                <div class="card pt-4 mb-6 mb-xl-9">
                  <!--begin::Card header-->
                  <div class="card-header border-0">
                    <!--begin::Card title-->
                    <div class="card-title">
                      <h2>{{ $t("Order Boxes") }}</h2>
                    </div>
                    <!--end::Card title-->
                    <!--begin::Card toolbar-->
                    <div class="toolbarrrrrrrrrr">
                      <button
                        class="btn btn-warning btn-shadow font-weight-bold mx-2 my-3"
                        data-bs-target="#kt_modal_box"
                        data-bs-toggle="modal"
                        @click="box = {items_ids:[],type_id:1};boxIndex = -1"
                      >
                        <i class="fas fa-plus-circle p-0"></i>
                      </button>
                    </div>
                    <!--end::Card toolbar-->
                  </div>
                  <!--end::Card header-->
                  <!--begin::Card body-->
                  <div class="card-body pt-0 pb-5">
                    <!--begin::Table-->
                    <table
                        v-if="1 >0"
                      id="kt_table_customers_payment"
                      class="table align-middle table-row-dashed gy-5"
                    >
                      <!--begin::Table head-->
                      <thead
                        class="border-bottom border-gray-200 fs-7 fw-bolder"
                      >
                        <tr class="text-start text-muted text-uppercase gs-0">
                          <th>#</th>
                          <th>{{ $t("status") }}</th>
                          <th>{{ $t("size") }}</th>
                          <th>{{ $t("note") }}</th>
                          <th>{{ $t("user") }}</th>
                          <th>{{ $t("actions") }}</th>
                        </tr>
                      </thead>
                      <tbody>
                      <template v-if="Object.keys(order.boxes).length > 0">
                        <tr v-for="(box , iBox) in order.boxes" :key="iBox">
                          <td @click="copyCode(box.number)">  {{ order.code +'$'+ box.number}} </td>
                          <td> <span v-if="box.status_ob" class="badge " :class="box.status_ob.class">
                            {{box.status_ob.name}}
                          </span> </td>
                          <td>
                            {{box.size}} M
                            <br />
                            <p> l: {{ box.length}}/
                              w: {{ box.width}}/
                              h: {{ box.height}}/
                              w: {{ box.weight}}
                            </p>
                          </td>
                          <td> {{box.note}} </td>
                          <td> {{box.user.name}} </td>
                          <td>
<!--                            <button-->
<!--                                class="btn btn-sm btn-light-primary ms-3"-->
<!--                                data-bs-target="#kt_modal_edit_invoice"-->
<!--                                data-bs-toggle="modal"-->
<!--                                type="button"-->
<!--                                @click="box = item; boxIndex=i"-->
<!--                            >-->
<!--                              {{ $t("edit") }}-->
<!--                              <i class="fa fa-edit"></i>-->
<!--                            </button>-->
                            <button
                                class="
                  btn btn-success btn-shadow
                  font-weight-bold
                  mx-2
                  my-3
                  print-barCode
                "
                                @click="currentBoxIndex= iBox;printQrcode()"
                            >
                              <i class="fas fa-barcode p-0"></i>
                            </button>
                          </td>
                        </tr>
                      </template>
                      <tr v-else>
                        <td rowspan="4"> {{$t('No Data')}}</td>
                      </tr>
                      </tbody>
                    </table>
                    <!--end::Table-->
                    <div v-else class="text-center">
                      <h3>{{ $t("noData") }}</h3>
                    </div>
                  </div>
                  <!--end::Card body-->
                </div>

                <OrderHistory :order="order"></OrderHistory>
                <OrderInvoiceItems :items="order.invoice_items" :boxes="order.boxes"></OrderInvoiceItems>
                <OrderItemsHistory :order="order"></OrderItemsHistory>

                <OrderCompanyPayments :order="order" :payments="order.companyPayments"></OrderCompanyPayments>

                <OrderNote :order="order"></OrderNote>
              </div>


              <div
                id="kt_modal_notify_order"
                aria-hidden="true"
                class="modal fade"
                tabindex="-1"
              >
                <!--begin::Modal dialog-->
                <div class="modal-dialog modal-dialog-centered mw-1000px">
                  <!--begin::Modal content-->
                  <div class="modal-content">
                    <!--begin::Modal header-->
                    <div class="modal-header py-7 d-flex justify-content-between">
                      <!--begin::Modal title-->
                      <h2>{{ $t("notify Order") }}</h2>
                      <!--end::Modal title-->
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
                    <div class="modal-body scroll-y m-5">
                      <form
                        id="kt_modal_offer_a_deal_form"
                        class="mx-auto pt-15 pb-10"
                        @submit.prevent="sendNotifyOrder"
                      >
                        <div class="w-100">
                          <!--begin::Input group-->
                          <div class="fv-row mb-8">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold mb-2">{{ $t("Description") }}</label>
                            <!--end::Label-->
                            <!--begin::Label-->
                            <textarea
                              v-model="sendNotifyForm.description"
                              :placeholder="$t('Enter Description')"
                              class="form-control form-control-solid"
                              name="details_description"
                              rows="3"
                            ></textarea>
                            <!--end::Label-->
                          </div>
                          <span
                            v-if="sendNotifyFormError['description']"
                            class="text-danger"
                          >{{ sendNotifyFormError["description"][0] }}</span
                          >

                          <!--end::Input group-->
                          <!--begin::Input group-->
                          <div class="fv-row mb-15">
                            <!--begin::Wrapper-->
                            <div class="d-flex flex-stack">
                              <!--begin::Label-->
                              <div class="me-5">
                                <label class="required fs-6 fw-bold"
                                >{{ $t("Notifications User") }}
                                </label>
                                <div class="fs-7 fw-bold text-muted"></div>
                              </div>
                              <!--end::Label-->
                              <!--begin::Checkboxes-->
                              <div class="d-flex">
                                <!--begin::Checkbox-->
                                <label
                                  class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                                >
                                  <!--begin::Input-->
                                  <input
                                    v-model="sendNotifyForm.user"
                                    class="form-check-input h-20px w-20px"
                                    type="checkbox"
                                    value="owner"
                                  />
                                  <!--end::Input-->
                                  <!--begin::Label-->
                                  <span class="form-check-label fw-bold">{{
                                      $t("Account")
                                    }}</span>
                                  <!--end::Label-->
                                </label>

                                <!--begin::Checkbox-->
                                <label
                                  class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                                >
                                  <!--begin::Input-->
                                  <input
                                    v-model="sendNotifyForm.user"
                                    class="form-check-input h-20px w-20px"
                                    type="checkbox"
                                    value="sender"
                                  />
                                  <!--end::Input-->
                                  <!--begin::Label-->
                                  <span class="form-check-label fw-bold">{{
                                      $t("sender")
                                    }}</span>
                                  <!--end::Label-->
                                </label>
                                <!--begin::Checkbox-->
                                <label
                                  class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                                >
                                  <!--begin::Input-->
                                  <input
                                    v-model="sendNotifyForm.user"
                                    class="form-check-input h-20px w-20px"
                                    type="checkbox"
                                    value="receiver"
                                  />
                                  <!--end::Input-->
                                  <!--begin::Label-->
                                  <span class="form-check-label fw-bold">{{
                                      $t("resiver")
                                    }}</span>
                                  <!--end::Label-->
                                </label>

                                <!--end::Checkbox-->
                              </div>

                              <!--end::Checkboxes-->
                            </div>
                            <span v-if="sendNotifyFormError['user']" class="text-danger">{{
                                sendNotifyFormError["user"][0]
                              }}</span>

                            <!--begin::Wrapper-->
                          </div>
                          <div class="fv-row mb-15">
                            <!--begin::Wrapper-->
                            <div class="d-flex flex-stack">
                              <!--begin::Label-->
                              <div class="me-5">
                                <label class="required fs-6 fw-bold">
                                  {{ $t("Notifications Type") }}
                                </label>
                                <div class="fs-7 fw-bold text-muted"></div>
                              </div>
                              <!--end::Label-->
                              <!--begin::Checkboxes-->
                              <div class="d-flex">
                                <!--begin::Checkbox-->
                                <label
                                  class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                                >
                                  <!--begin::Input-->
                                  <input
                                    v-model="sendNotifyForm.type"
                                    class="form-check-input h-20px w-20px"
                                    type="checkbox"
                                    value="email"
                                  />
                                  <!--end::Input-->
                                  <!--begin::Label-->
                                  <span class="form-check-label fw-bold">{{
                                      $t("email")
                                    }}</span>
                                  <!--end::Label-->
                                </label>
                                <!--end::Checkbox-->

                                <!--begin::Checkbox-->
                                <label
                                  class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                                >
                                  <!--begin::Input-->
                                  <input
                                    v-model="sendNotifyForm.type"
                                    class="form-check-input h-20px w-20px"
                                    type="checkbox"
                                    value="sms"
                                  />
                                  <!--end::Input-->
                                  <!--begin::Label-->
                                  <span class="form-check-label fw-bold">{{
                                      $t("SMS")
                                    }}</span>
                                  <!--end::Label-->
                                </label>
                                <label
                                  class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                                >
                                  <!--begin::Input-->
                                  <input
                                    v-model="sendNotifyForm.type"
                                    class="form-check-input h-20px w-20px"
                                    type="checkbox"
                                    value="whatsApp"
                                  />
                                  <!--end::Input-->
                                  <!--begin::Label-->
                                  <span class="form-check-label fw-bold">{{
                                      $t("whatsapp")
                                    }}</span>
                                  <!--end::Label-->
                                </label>
                                <!--end::Checkbox-->
                              </div>

                              <!--end::Checkboxes-->
                            </div>
                            <span v-if="sendNotifyFormError['type']" class="text-danger">{{
                                sendNotifyFormError["type"][0]
                              }}</span>
                            <!--begin::Wrapper-->
                          </div>
                        </div>
                        <div class="text-center">
                          <button
                            class="btn btn-light me-3"
                            data-bs-dismiss="modal"
                            type="reset"
                          >
                            {{ $t("discard") }}
                          </button>
                          <button
                            :data-kt-indicator="loading ? 'on' : null"
                            :disabled="loading"
                            class="btn btn-primary"
                            type="submit"
                          >
                            <span class="indicator-label">{{ $t("submit") }}</span>
                            <span class="indicator-progress">
                  {{ $t("PleaseWait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <!--begin::Modal body-->
                  </div>
                </div>
              </div>

              <div
                id="kt_order_view_sender_data"
                class="tab-pane fade"
                role="tabpanel"
              >
                <!--begin::Card-->
                <div class="card pt-4 mb-6 mb-xl-9">
                  <!--begin::Card header-->
                  <div class="card-header border-0">
                    <!--begin::Card title-->
                    <div class="card-title">
                      <h2>{{$t('Receiver')}}</h2>
                    </div>
                    <!--end::Card title-->
                    <!--begin::Card toolbar-->
                    <div class="card-toolbar">
                      <router-link
                        v-if="order.customer && order.customer.id"
                        :to="{
                          name: 'customers-view',
                          params: { customer: order.customer.id },
                        }"
                        class="btn btn-sm btn-light-primary mx-3"
                        >{{ order.customer.name }}
                      </router-link>

                      <button
                        v-if="can('edit-address-order')"
                        class="btn btn-sm btn-light-primary ms-3"
                        data-bs-target="#kt_modal_edit_Address"
                        data-bs-toggle="modal"
                        type="button"
                      >
                        {{ $t("edit") }}
                      </button>
                      <!--end::Button-->
                    </div>
                    <!--end::Card toolbar-->
                  </div>
                  <!--end::Card header-->
                  <!--begin::Card body-->
                  <div class="card-body py-0">
                    <!--begin::Table wrapper-->
                    <div class="table-responsive">
                      <!--begin::Table-->
                      <table
                        id="kt_table_customers_logs"
                        class="
                          table
                          align-middle
                          table-row-dashed
                          fw-bold
                          text-gray-600
                          fs-6
                          gy-5
                        "
                      >
                        <thead>
                        <tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                          <th>{{ $t("form") }}</th>
                          <th>{{ order.fromAdrress }}</th>
                        </tr>
                        <tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                          <th>{{ $t("to") }}</th>
                          <th>{{ order.toAdrress }}</th>
                        </tr>
                        <template v-if="order.receiver">
                          <tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                            <th>{{ $t("name") }}</th>
                            <th>{{ order.receiver.name }}</th>
                          </tr>
                          <tr
                            class="
                              fw-bold
                              fs-6
                              text-gray-800
                              border-bottom border-gray-200
                            "
                          >
                            <th>{{ $t("email") }}</th>
                            <th>{{ order.receiver.email }}</th>
                          </tr>
                          <tr
                            class="
                              fw-bold
                              fs-6
                              text-gray-800
                              border-bottom border-gray-200
                            "
                          >
                            <th>{{ $t("phone") }} 1 </th>
                            <th>{{ order.receiver.phone_1 }}</th>
                          </tr>
                          <tr
                            class="
                              fw-bold
                              fs-6
                              text-gray-800
                              border-bottom border-gray-200
                            "
                          >
                            <th>{{ $t("phone") }}</th>
                            <th>{{ order.receiver.phone_1 }}
                            </th>
                          </tr>
                        </template>
                        </thead>
                      </table>
                      <!--end::Table-->
                    </div>
                    <!--end::Table wrapper-->
                  </div>
                  <!--end::Card body-->
                </div>
                <!--end::Card-->
              </div>

              <div
                id="kt_order_view_resiver_data"
                class="tab-pane fade"
                role="tabpanel"
              >

                <div v-for="(item,i) in order.clientWithdraws" :key="item.id">
                  <client-withdraw-card
                    :loading="apiOrders.loading"
                    :index="i" :item="item"
                    @updateStatus="clientWithdrawUpdate"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end::Layout-->

    <div
      v-if="can('shipping-money-edit-order')"
      id="kt_modal_payed_order"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">{{ $t("payedOrder") }}</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              id="kt_modal_add_note_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <form
              id="kt_modal_adjust_order_price"
              class="form"
              @submit.prevent="adjustPriceOrder"
            >
              <div class="col-12  p-0">
                <label class="required fs-6 fw-bold mb-2">{{$t('Order Total cost')}}</label>
                <label class="form-control form-control-solid p-4 fw-bolder"> {{ order.total_cost }} {{order.main_currency_iso}}</label>
              </div>
              <!--begin::Input group-->
              <div class="fv-row mb-7 d-none">
                <!--begin::Label-->
                <label class="required fs-6 fw-bold form-label mb-2">
                  {{ $t("type") }}</label
                >
                <!--end::Label-->
                <!--begin::Dropdown-->
                <select
                  v-model="adjustPaymentForm.payment_id"
                  class="form-select form-select-solid fw-bolder"
                >
                  <option value=""></option>
                  <option v-for="pay in payments" :key="pay.id" :value="pay.id">
                    {{ pay.name }}
                  </option>
                </select>
                <!--end::Dropdown-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-bold form-label mb-2">{{
                  $t("refrence")
                }}</label>
                <!--end::Label-->
                <!--begin::Input-->
                <input
                  v-model="adjustPaymentForm.refrence"
                  class="form-control form-control-solid"
                  type="text"
                />
                <!--end::Input-->
              </div>
              <div class="text-center">
                <button
                  id="kt_modal_adjust_balance_cancel"
                  class="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  type="reset"
                >
                  {{ $t("discard") }}
                </button>
                <button
                  :data-kt-indicator="loading ? 'on' : null"
                  :disabled="loading"
                  class="btn btn-primary"
                  type="submit"
                >
                  <span class="indicator-label"> {{ $t("submit") }}</span>
                  <span class="indicator-progress">
                    {{ $t("PleaseWait") }}
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
              </div>
              <!--end::Actions-->
            </form>

            <!--end::Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <div
      v-if="can('shipping-money-edit-order')"
      id="kt_modal_payed_from_branch"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-850px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">{{ $t("Request Payment From Branch") }}</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              id="kt_modal_add_note_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <form
              id="kt_modal_adjust_payment"
              class="form"
              @submit.prevent="requestPaymentFromBranch"
            >

              <div class="d-flex justify-content-center">
                <div class="col-11 col-md-5 border border-solid border-gray-600 rounded mx-2 p-4" v-for="item in order.customer_balances" :key="item.id">
                  <div class="fs-6 fw-bold mb-2 text-muted">#{{item.branch_id}}</div>
                  <div class="fs-2 fw-bolder" >USD$ {{ item.balance}} </div>
                </div>
              </div>
              <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6 d-flex ">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#branch_payment_tap_1" @click="paymentForm.from = 'branch'">Payment From Branch</a>
                </li>
                <li class="nav-item d-none">
                  <a class="nav-link" data-bs-toggle="tab" href="#branch_payment_tap_2">Payment from Client</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#branch_payment_tap_3" @click="paymentForm.from = 'client'">Payment from Other Client</a>
                </li>
              </ul>
              <div class="tab-content" id="branch_payment_Content">
                <div class="tab-pane fade show active" id="branch_payment_tap_1" role="tabpanel">
                  <div class="d-flex justify-content-center">
                    <div class="col-11 col-md-5 border border-dashed border-gray-300 rounded mx-2 p-4">
                      <div class="fs-6 fw-bold mb-2 text-muted">Required Balance</div>
                      <div class="fs-2 fw-bolder" >USD$ {{ order.total_cost}} </div>
                    </div>

                    <div class="col-11 col-md-5 border border-dashed border-gray-300 rounded mx-2 p-4" v-if="order.customer">
                      <div class="fs-6 fw-bold mb-2 text-muted">Needed Balance</div>
                      <div class="fs-2 fw-bolder" >USD$ {{ (order.total_cost - order.customer.balance).toFixed(2) }} </div>
                    </div>

                  </div>
                  <!--begin::Input group-->
                  <div class="fv-row mb-7">
                    <!--begin::Label-->
                    <label class="required fs-6 fw-bold form-label mb-2">
                      {{ $t("Branch") }}</label
                    >
                    <!--end::Label-->
                    <!--begin::Dropdown-->
                    <select
                      v-model="paymentForm.branch_id"
                      class="form-select form-select-solid fw-bolder"
                    >
                      <option v-for="Branch in Branches" :key="Branch.id" :value="Branch.id">
                        {{ Branch.name }}
                      </option>
                    </select>
                    <!--end::Dropdown-->
                  </div>
                  <!--end::Input group-->

                </div>
                <div class="tab-pane" id="branch_payment_tap_2" role="tabpanel">

                </div>
                <div class="tab-pane" id="branch_payment_tap_3" role="tabpanel">
                  <div class="d-flex justify-content-center">
                    <div class="col-11 col-md-5 border border-dashed border-gray-300 rounded mx-2 p-4">
                      <div class="fs-6 fw-bold mb-2 text-muted">Required Balance</div>
                      <div class="fs-2 fw-bolder" >USD$ {{ order.total_cost}} </div>
                    </div>
                  </div>

                  <select-customer url="admin/select/customer?with=balances&search="
                                   :text="$t('select client to withdraw form him')"
                                   :show-add="false"
                                   @result="(customer)=>{
                                     paymentForm.wanted_customer = customer;
                                     paymentForm.client_id = customer.id;
                                     // paymentForm.branch_id = customer.balance.branch_id;
                                   }"
                                   />
                  <template v-if="paymentForm.wanted_customer && paymentForm.wanted_customer.balances">
                  <div class=""  v-for="item in paymentForm.wanted_customer.balances"
                       :key="item.id">
                    <label class="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6" data-kt-button="true">
                      <!--begin::Radio button-->
                      <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																	<input class="form-check-input" type="radio"
                                         v-model="paymentForm.branch_id"
                                         :value="item.branch_id"
                                         :disabled="item.balance < order.total_cost"
                                  >
																</span>
                      <!--end::Radio button-->
                      <span class="ms-5">
																	<span class="fs-4 fw-bolder mb-1 ">
                                    {{item.branch.name}}
                                  </span>
                        <span class="fs-4 fw-bolder badge badge-light-info mb-1 ">
                                    {{item.balance}} $
                                  </span>

                      </span>
                    </label>
                  </div>
                  </template>

                </div>
              </div>





              <!--begin::Input group-->
              <div class="text-center">
                <button
                  id="kt_modal_adjust_balance_cancel"
                  class="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  type="reset"
                >
                  {{ $t("discard") }}
                </button>
                <button
                  :data-kt-indicator="loading ? 'on' : null"
                  :disabled="loading"
                  class="btn btn-primary"
                  type="submit"
                >
                  <span class="indicator-label"> {{ $t("submit") }}</span>
                  <span class="indicator-progress">
                    {{ $t("PleaseWait") }}
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
              </div>
              <!--end::Actions-->
            </form>

            <!--end::Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>


    <div
      v-if="can('shipping-money-edit-order')"
      id="kt_modal_price"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">{{ $t("changePrice") }}</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              id="kt_modal_price_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <form
              id="kt_modal_adjust_kt_modal_price"
              class="form"
              @submit.prevent="changePrice"
            >
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-bold form-label mb-2">{{
                  $t("price")
                }}</label>
                <!--end::Label-->
                <!--begin::Input-->
                <input
                  v-model="changePriceForm.price"
                  class="form-control form-control-solid"
                  step=".25"
                  type="number"
                />
                <!--end::Input-->
              </div>
              <div class="text-center">
                <button
                  class="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  type="reset"
                >
                  {{ $t("discard") }}
                </button>
                <button
                  :data-kt-indicator="loading ? 'on' : null"
                  :disabled="loading"
                  class="btn btn-primary"
                  type="submit"
                >
                  <span class="indicator-label"> {{ $t("submit") }}</span>
                  <span class="indicator-progress">
                    {{ $t("PleaseWait") }}
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
              </div>
              <!--end::Actions-->
            </form>

            <!--end::Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <div
      id="kt_modal_receive_invoice"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-fullscreen">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">
              {{ $t("Receive official Invoice") }}
            </h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              id="kt_modal_receive_invoice"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">

              <div class="row row-cols-1 row-cols-md-2">
                <div class="fv-row mb-2 ">

                  <invoice-vat-inputs
                    :value="invoice" :currencies="currencies" :errors="orderErrors"
                    v-model:subtotal="invoice.subtotal" :index="invoiceIndex"
                    v-model:currency="invoice.currency"
                    v-model:currency_id="invoice.currency_id"
                    v-model:currency_code="invoice.currency_code"
                    v-model:multiplier="invoice.multiplier"

                    v-model:vat="invoice.vat"
                    v-model:prices_with_vat="invoice.prices_with_vat"

                  />

                </div>

                <div >
                  <div class="fv-row mb-2">
                    <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("plz upload invoice image") }}
                    </label>
                    <input
                      :ref="`oImageFileInvoicePrices`"
                      class="form-control"
                      type="file"
                      @change="imageToInvoice(`oImageFileInvoicePrices` , 'p_file')"
                    />
                    <span v-if="orderErrors['p_file']" class="text-danger">{{
                        orderErrors["p_file"][0]
                      }}</span>
                  </div>
                  <div class="image-preview d-flex">
                    <img
                      class="preview-invoice "
                      v-if="invoice.p_file_url"
                      :src="invoice.p_file_url"
                    />
                  </div>

                </div>
              </div>
            <!--end::Form-->
          </div>
          <!--end::Modal body-->
          <div class="modal-footer">
            <button
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              type="reset"
            >
              {{ $t("discard") }}
            </button>
            <button
              :data-kt-indicator="loading ? 'on' : null"
              :disabled="loading"
              class="btn btn-primary"
              type="submit"
              @click="submitVatInvoice"
            >
              <span class="indicator-label"> {{ $t("submit") }}</span>
              <span class="indicator-progress">
                    {{ $t("PleaseWait") }}
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
            </button>
          </div>

        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>

    <div
      v-if="can('change-order-size')"
      id="kt_modal_size"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">{{ $t("Change Size") }}</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              id="kt_modal_size_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
              <!--end::Svg Icon-->
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <form
              id="kt_modal_adjust_kt_modal_size"
              class="form"
              @submit.prevent="changeSize"
            >
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-bold form-label mb-2">{{
                  $t("size")
                }}</label>
                <!--end::Label-->
                <!--begin::Input-->
                <input
                  v-model="changePriceForm.size"
                  class="form-control form-control-solid"
                  step=".001"
                  type="number"
                />
                <!--end::Input-->
              </div>
              <div class="text-center">
                <button
                  class="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  type="reset"
                >
                  {{ $t("discard") }}
                </button>
                <button
                  :data-kt-indicator="loading ? 'on' : null"
                  :disabled="loading"
                  class="btn btn-primary"
                  type="submit"
                >
                  <span class="indicator-label"> {{ $t("submit") }}</span>
                  <span class="indicator-progress">
                    {{ $t("PleaseWait") }}
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
              </div>
              <!--end::Actions-->
            </form>

            <!--end::Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>

    <div
      v-if="can('edit-address-order')"
      id="kt_modal_edit_Address"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-1000px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">{{ $t("edit") }}</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              id="kt_modal_edit_Addressr_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->

          <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">


            <!--end::Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <div
      id="kt_modal_box"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-1000px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">{{ $t("create New Box") }}</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              id="kt_modal_box_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->

          <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">


            <template v-for="(invoice , Iinvoice) in order.invoices" :key="Iinvoice">
              <h3> {{$t('Invoice') }} ({{Iinvoice + 1}})  </h3>
              <h4> {{$t('select items in the box')}}  </h4>
              <div class="invoice_item ps-3" v-for="(invoiceItem , i) in invoice.items" :key="i">
                <label class="form-check form-check-custom form-check-solid m-2"
                       v-if="invoiceItem.is_received == 0"
                >
                  <input class="form-check-input" type="checkbox"  v-model="box.items_ids" :value="invoiceItem.id"/>
                  <span class="form-check-label">
                  {{ invoiceItem.name }} ( {{invoiceItem.qty}})
              </span>
                </label>
                <label class="form-check form-check-custom form-check-solid m-2"
                       v-else
                >
                  <input class="form-check-input" type="checkbox" disabled />
                  <span class="form-check-label">
                  {{ invoiceItem.name }} ( {{invoiceItem.qty}})
              </span>
                </label>
              </div>
              <span class="text-danger" v-if="apiErrors['items_ids']">{{apiErrors['items_ids'][0]}}</span>

            </template>

            <div>
              <label class="required fs-6 fw-bold mb-2">
                {{ $t("Box Type") }}
              </label>
              <div class="row w-100 row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div class=""  v-for="item in boxes"
                     :key="item.id">
                  <label class="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6" data-kt-button="true">
                    <!--begin::Radio button-->
                    <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																	<input class="form-check-input" type="radio" v-model="box.type_id" :value="item.id"
                                         @change=" ()=>{
                           if(boxes[box.type_id]){
                             box.length = boxes[box.type_id].length;
                             box.width = boxes[box.type_id].width;
                             box.height = boxes[box.type_id].height;
                             box.weight = boxes[box.type_id].weight;
                           }
                         }"
                                  >
																</span>
                    <!--end::Radio button-->
                    <span class="ms-5">
																	<span class="fs-4 fw-bolder mb-1 d-block">{{$t(item.name)}}</span>
																	<span class="fw-bold fs-7 ">
                                                  l: {{ item.length}}/
                                                  w: {{ item.width}}/
                                                  h: {{ item.height}}/
                                                  w: {{ item.weight}}
                                  </span>
																</span>
                  </label>
                </div>
                <div class="">
                  <label class="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6" data-kt-button="true">
                    <!--begin::Radio button-->
                    <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																	<input class="form-check-input" type="radio" v-model="box.type_id" :value="0"
                                  >
																</span>
                    <!--end::Radio button-->
                    <span class="ms-5">
																	<span class="fs-4 fw-bolder mb-1 d-block">{{$t('custom')}}</span>
																	<span class="fw-bold fs-7 ">
                                  </span>
																</span>
                  </label>
                </div>
              </div>
              <span v-if="apiErrors[ `type_id`]" class="text-danger">
          {{apiErrors[`type_id`][0] }}
        </span>

            </div>
            <template v-if="box.type_id == 0" >
              <div class="row row-cols-2 row-cols-md-4">
                <div class="form-floating mb-3" >
                  <input type="number" step=".01" class="form-control" :class="{
                    'is-invalid': apiErrors['length']
                  }" v-model="box.length">
                  <label >{{ $t('length') }} (m)</label>
                </div>
                <div class="form-floating mb-3" >
                  <input type="number" step=".01" class="form-control" :class="{
                    'is-invalid': apiErrors['width']
                  }" v-model="box.width">
                  <label >{{ $t('width') }} (m)</label>
                </div>
                <div class="form-floating mb-3" >
                  <input type="number" step=".01" class="form-control" :class="{
                    'is-invalid': apiErrors['height']
                  }" v-model="box.height">
                  <label >{{ $t('height') }} (m)</label>
                </div>
                <div class="form-floating mb-3" >
                  <input type="number" step=".01" class="form-control" :class="{
                    'is-invalid': apiErrors['weight']
                  }" v-model="box.weight">
                  <label >{{ $t('weight') }} (KG)</label>
                </div>
              </div>
            </template>
            <div v-else>
              l: {{ box.length}}/
              w: {{ box.width}}/
              h: {{ box.height}}/
              w: {{ box.weight}}
            </div>


            <!--end::Form-->
          </div>
          <div class="modal-footer">
            <button
                :data-kt-indicator="loading ? 'on' : null"
                :disabled="loading"
                class="btn btn-lg btn-primary me-3"
                data-kt-stepper-action="submit"
                type="button"
                @click="submitBox"
            >
            <span class="indicator-label"
            >{{ $t("submit") }}
              <span
                  class="svg-icon svg-icon-3 ms-2 me-0 d-sm-inline d-none arrow"
              >
                <inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
              </span>
            </span>
              <span class="indicator-progress">
              {{ $t("PleaseWait") }}
              <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
            </button>

          </div>

          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <div
      id="kt_modal_edit_invoice"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-1000px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">{{ $t("Invoice Data") }}
              <template v-if="invoice.id"> {{ $t('edit') }}  ( #{{ invoiceIndex}})</template>
            </h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              id="kt_modal_edit_invoice_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->

          <div class="modal-body scroll-y">

            <div class="invoice-data row" >

              <div class="col-12 col-lg-8 col-md-6 row row-cols-1 row-cols-md-1 row-cols-lg-2">

                <div class="fv-row mb-2 w-100">
                  <label class="required fs-6 fw-bold mb-2 d-block">
                    {{ $t("Date") }}
                  </label>
                  <el-date-picker class="w-100" v-model="invoice.date" placeholder="Please input" clearable />
                </div>

                <div class="fv-row mb-2">
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("company name") }}
                  </label>
                  <el-input v-model="invoice.company.name" disabled clearable />
                </div>

                <div class="fv-row mb-2">
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("company name official") }}
                  </label>
                  <el-input v-model="invoice.company.title" />
                </div>
                <div class="fv-row mb-2">
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("contact Phone") }}
                  </label>
                  <el-input v-model="invoice.company.phone"  />
                </div>
                <div class="fv-row mb-2">
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("contacter Name") }}
                  </label>
                  <el-input v-model="invoice.company.res_name"  />
                </div>

                <div class="fv-row mb-2 w-100">

                  <invoice-price-inputs
                      :value="invoice" :currencies="currencies" :errors="apiInvoices.errors"
                      v-model:p_subtotal="invoice.p_subtotal" :index="invoiceIndex"
                      v-model:p_currency="invoice.p_currency"
                      v-model:p_currency_id="invoice.p_currency_id"
                      v-model:p_currency_code="invoice.p_currency_code"
                      v-model:p_multiplier="invoice.p_multiplier"

                      v-model:p_vat="invoice.p_vat"
                      v-model:p_prices_with_vat="invoice.p_prices_with_vat"

                  />
                </div>

                <div class="d-flex justify-content-between w-100">
                  <h4>{{$t("Invoice Items")}}</h4>
                  <div class="card-toolbar">
                    <a class="btn btn-sm btn-secondary" @click="invoice.items.push({ qty: 1 })">
                      {{$t('add Item')}}
                      <i class="fa fa-plus-circle"></i>
                    </a>
                  </div>
                </div>

                <div class="w-100 row" v-for="(product , number) in invoice.items" :key="number">

                  <invoice-item v-if="product.is_received != 0"  :value="product" :index="number" :errors="orderErrors"
                                 v-model:name="product.name"
                                 v-model:price="product.price"
                                 v-model:qty="product.qty"
                                 v-model:text="product.text"
                                 @removeItem="(i)=>{ invoice.items.splice(i, 1) }"
                  />
                  <div v-else class="w-100">
                    {{product.name }} ({{product.qty}}) {{$t('Is Received')}}
                  </div>

                </div>


                <div class="fv-row mb-2 w-100 d-none">
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("Shipping cost") }}
                  </label>
                  <el-input v-model="invoice.shipping_cost"  />
                </div>

              </div>
              <div class="col-12 col-lg-4 col-md-6">
                <div class="fv-row mb-2">
                  <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("plz upload invoice image") }}
                  </label>
                  <input
                      :ref="`oImageFileInvoicePrices`"
                      class="form-control"
                      type="file"
                      @change="imageToInvoice(`oImageFileInvoicePrices`)"
                  />
                  <span v-if="orderErrors['file']" class="text-danger">{{
                      orderErrors["file"][0]
                    }}</span>
                </div>
                <div class="image-preview d-flex">
                  <img
                      class="preview-invoice "
                      v-if="invoice.url"
                      :src="invoice.url"
                  />
                </div>

                <div>

                </div>

              </div>
            </div>

          </div>
          <!--end::Modal body-->
          <div class="modal-footer">
            <button
                :data-kt-indicator="apiInvoices.loading ? 'on' : null"
                :disabled="apiInvoices.loading"
                class="btn btn-lg btn-primary me-3"
                data-kt-stepper-action="submit"
                type="button"
                @click="submitInvoice"
            >
            <span class="indicator-label"
            >{{ $t("submit") }}
              <span
                  class="svg-icon svg-icon-3 ms-2 me-0 d-sm-inline d-none arrow"
              >
                <inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
              </span>
            </span>
              <span class="indicator-progress">
              {{ $t("PleaseWait") }}
              <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
            </button>
          </div>
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>

    <div id="print-bar-code" class="card d-none">
      <bar-code v-bind:invoiceData="order" :currentIndex="currentBoxIndex"></bar-code>
    </div>
    <div v-if="can('invoice-order')" id="print-invoice" class="card d-none">
      <invoice v-bind:invoiceData="order"></invoice>
    </div>
  </div>





</template>

<script>
import { defineComponent } from "vue";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import moment from "moment";
import OrderNote from "./OrderNote";
import OrderHistory from "./OrderHistory";
import Invoice from "@/views/print/invoice";
import BarCode from "@/views/print/barCode";
import { can } from "@/core/services/JwtService";
import EditAddressFrom from "@/views/admin/orders/editAddressFrom";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import OrderNotify from "@/views/admin/notify/orderNotify";
import OrderItemsHistory from "@/views/admin/orders/OrderHistoryItems";
import InvoicePriceInputs from "@/views/admin/orders/form/invoicePriceInputs.vue";
import InvoiceItem from "@/views/admin/orders/form/invoiceItem.vue";
import OrderInvoiceItems from "@/views/admin/orders/OrderInvoiceItems.vue";
import InvoiceVatInputs from "@/views/admin/orders/form/invoiceVatInputs.vue";
import useOrders from "@/composables/order";
import boxes from "@/core/config/boxes";
import OrderCompanyPayments from "@/views/admin/orders/OrderCompanyPayments.vue";
import useOrderInvoice from "@/composables/orderInvoice";
import SelectCustomer from "@/views/admin/clients/selectCustomer.vue";
import ClientWithdrawCard from "@/views/admin/components/clientWithdrawCard.vue";

export default defineComponent({
  name: "brancheView",
  components: {
    ClientWithdrawCard,
    SelectCustomer,
    OrderCompanyPayments,
      InvoiceVatInputs,
    OrderInvoiceItems,
    InvoiceItem, InvoicePriceInputs,
    OrderItemsHistory,
    OrderNotify,
    // EditAddressFrom,
    BarCode,
    Invoice,
    OrderHistory,
    OrderNote,
  },
  data() {
    return {
      currentBoxIndex:-1,
      boxes:boxes,
      loading: false,
      areaForm: {},
      areaFormErrors: [],
      branch: { id: 0, name: "" },
      order: {},
      OrderNoteForm: {},
      lockedStatus: [],
      canChange: [],
      changeOrderStatusValue: 0,
      status: [],
      payments: [],
      adjustPaymentForm: {},
      changePriceForm: {},
      collectMoneyForm: {},
      sendNotifyForm: {
        type: [],
        user: [],
      },
      currencies: [],
      orderErrors: [],
      sendNotifyFormError: [],

      box:{ items_ids:[]},
      boxIndex:{},
      invoice:{company:{},items:[],vat:0},
      invoiceIndex:{},
      apiOrders:useOrders(),
      apiInvoices:useOrderInvoice(),
      Branches:{},
      paymentForm:{}
    };
  },
  async created() {
    await this.loadOrder();
  },
  methods: {
    async loadOrder(){
      await ApiService.get("admin/orders/" + useRoute().params.Id).then(
        (data) => {
          this.order = data.data.data;
          this.changeOrderStatusValue = this.order.status;
          this.lockedStatus = data.data.lockedStatus;
          this.canChange = data.data.canChange;
          this.status = data.data.status;
          this.payments = data.data.payments;
          this.currencies = data.data.currencies;
          this.Branches = data.data.Branches;
          // this.tableDataBranches = data.data.data

          setCurrentPageBreadcrumbs(this.order.code, [
            this.$t("cp"),
            this.$t("orders"),
          ]);
        }
      );
    },
    imageToInvoice(key, i) {
      const file = this.$refs[key].files[0];
      this.invoice.file = file;
      this.invoice.url = URL.createObjectURL(file);
    },
    submitInvoice(){
      console.log(this.invoice)
      this.apiInvoices.setCurrentItem(this.invoice);
      let res = this.apiInvoices.save()
      if (res)
        this.loadOrder();
    },
    async requestPaymentFromBranch(){
      this.loading = true;
      this.paymentForm.amount = this.order.total_cost;
      await this.apiOrders.requestPaymentFromBranch(this.order , this.paymentForm , (res)=>{
        console.log(res);
        this.order.paid_status = res.data.paid_status
        this.order.indebtedness = res.data.indebtedness
        this.order.clientWithdraws = res.data.clientWithdraws

        // this.invoice = res.data.data;
        hideModal('kt_modal_payed_from_branch')

      })
      this.loading = false;
    },
    async clientWithdrawUpdate(i , status){
      this.loading = true;
      await this.apiOrders.clientWithdrawUpdate(this.order , this.order.clientWithdraws[i], status, (res)=>{
        console.log(res);
        this.order.paid_status = res.paid_status
        this.order.clientWithdraws = res.clientWithdraws
      })
      this.loading = false;
    },
    async submitVatInvoice(){
      this.loading = true;
      var res = await this.apiOrders.vatInvoice(this.order.id , this.invoice , (res)=>{
        console.log("done");
        this.invoice = res.data.data;
        hideModal('kt_modal_receive_invoice')
        // console.log(res , this.loading);
      })
      this.loading = false;
    },
    async submitBox(){
      // box
      this.loading = true;
      var res = await this.apiOrders.box(this.order.id , this.box , (res)=>{
        console.log("done");
        console.log(res , this.loading);
        this.order = res.data.data;
        hideModal('kt_modal_box');
      })
      this.loading = false;
      // var url = "admin/order/" + this.order.id+"/box";
      // if (this.box.id)
      //   url +=  +"/"+this.box.id;
      // ApiService.post( url, this.box
      // ).then((res) => {
      //     console.log(res)
      //   if (res.data){
      //     hideModal("kt_modal_box");
      //
      //   }else {
      //
      //   }
      //   this.loading = false;
      //   })
      //   .cache((err) => {
      //     console.log(err);
      //     this.loading = false;
      //   });

    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
    AddNoteToOrder() {
      this.loading = true;
      ApiService.post(
        "admin/order/" + this.order.id + "/add/note",
        this.OrderNoteForm
      )
        .then((res) => {
          hideModal("kt_modal_add_note");
          this.order.notes.push(res.data.data);
          this.loading = false;
        })
        .cache(() => {
          this.loading = false;
        });
    },
    async requestInvoice(invoice) {
      // box

      this.loading = true;
      var res = await this.apiOrders.requestInvoice(this.order.id, invoice, (res) => {
        console.log("done");
        console.log(res);
        invoice.status_id = res.data.status_id;
        invoice.statusOb = res.data.statusOb;
        // console.log(res, this.loading);
        // this.order = res.data.data;
        // hideModal('kt_modal_box');
      })
      this.loading = false;
    },
    changeOrderStatus() {
      Swal.fire({
        title:
          this.$t("areuSureToChangeOrderStateTo") +
          this.status[this.changeOrderStatusValue].name,
        text: this.order.code,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("yes"),
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.get(
            "admin/order/" +
              this.order.id +
              "/change/status/" +
              this.changeOrderStatusValue
          ).then((res) => {
            this.$toast.success(this.$t("messages.success"));
            this.order.history = [res.data.data].concat(this.order.history);
            this.order.status = this.changeOrderStatusValue;
            Swal.fire(
              this.$t("orderStatusChangedSuccessfly"),
              this.order.code,
              "success"
            );
          });
        } else {
          this.changeOrderStatusValue = this.order.status;
        }
      });
    },

    async adjustPriceOrder() {
      if (!this.adjustPaymentForm.refrence) {
        Swal.fire(this.$t("plzTryAgain"), this.order.code, "error");
        return;
      }
      this.loading = true;
      this.adjustPaymentForm.amount = this.order.total_cost;
      this.adjustPaymentForm.currency_iso = this.order.main_currency_iso;
     await this.apiOrders.addClientPayment(this.adjustPaymentForm,this.order ,(res)=>{
        this.$toast.success(this.$t("messages.success"));
        console.log(res);
        this.order.total_payed = res.data.total_payed;
        this.order.paid_status = res.data.paid_status;
        hideModal("kt_modal_payed_order");
        Swal.fire(
          this.$t("orderStatusChangedSuccessfly"),
          this.order.code,
          "success"
        );
      });
      this.loading = false;
    },

    changePrice() {
      if (!this.changePriceForm.price || this.changePriceForm.price < 0.5) {
        Swal.fire(this.$t("plzTryAgain"), this.order.code, "error");
        return;
      }
      this.loading = true;
      ApiService.post(
        "admin/order/" + this.order.id + "/change/price",
        this.changePriceForm
      )
        .then((res) => {
          if (res.status == 200) {
            this.$toast.success(this.$t("messages.success"));
            this.order.shipping_cost = this.changePriceForm.price;
            hideModal("kt_modal_price");
            Swal.fire(this.$t("messages.success"), this.order.code, "success");
          } else
            Swal.fire(this.$t("messages.failed"), this.order.code, "error");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    changeSize() {
      if (!this.changePriceForm.size || this.changePriceForm.size < 0.5) {
        Swal.fire(this.$t("plzTryAgain"), this.order.code, "error");
        return;
      }
      this.loading = true;
      ApiService.post(
        "admin/order/" + this.order.id + "/change/size",
        this.changePriceForm
      )
        .then((res) => {
          if (res.status == 200) {
            this.$toast.success(this.$t("messages.success"));
            this.order.size = this.changePriceForm.size;
            hideModal("kt_modal_size");
            Swal.fire(this.$t("messages.success"), this.order.code, "success");
          } else
            Swal.fire(this.$t("messages.failed"), this.order.code, "error");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    submitCollectMoney() {
      // if (!this.collectMoneyForm.bussiness_collect_money) {
      //   Swal.fire(this.$t("plzTryAgain"), this.order.code, "error");
      //   return;
      // }
      this.loading = true;
      ApiService.post(
        "admin/order/" + this.order.id + "/change/collect",
        this.collectMoneyForm
      ).then((res) => {
        if (res.status == 200) {
          this.$toast.success(this.$t("messages.success"));
          this.order.bussiness_collect_money_currency =
            this.collectMoneyForm.bussiness_collect_money_currency;
          this.order.bussiness_collect_money =
            this.collectMoneyForm.bussiness_collect_money;
          this.collectMoneyForm = {};
          hideModal("kt_modal_collect_money");
        } else Swal.fire(this.$t("messages.failed"), this.order.code, "error");
      }).finally(()=>      this.loading = false);
    },

    editOrderAddress() {
      hideModal("kt_modal_edit_Address");
      Swal.fire(this.$t("messages.success"), this.order.code, "success");
    },

    copyCode(i = undefined) {
      if(i)
        this.copy(this.order.code +'$'+i);
      else
        this.copy(this.order.code);
    },
    copy($val) {
      navigator.clipboard.writeText($val).then(() => {
        this.$toast.success(this.$t("copied"));
      });
    },
    async printQrcode() {
      BarCode.methods.printCurrentInvoice();
    },
    async printInvoice() {
      Invoice.methods.printCurrentInvoice();
    },
    can(p) {
      return can(p);
    },
  },
  computed:{
    apiErrors(){
      return this.apiOrders.errors;
    }
  }
});
</script>
<style>

</style>
