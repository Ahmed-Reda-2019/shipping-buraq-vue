<template>
  <!--begin::Tables Widget 9-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">{{$t('New Customers')}}</span>
      </h3>

      <div
          class="card-toolbar"
          data-bs-placement="top"
          data-bs-toggle="tooltip"
          data-bs-trigger="hover"
          title="Click to add a user"
      >
        <a
            class="btn btn-sm btn-light-primary"
            data-bs-target="#kt_modal_invite_friends"
            data-bs-toggle="modal"
            href="#"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="/media/icons/duotune/arrows/arr075.svg"/>
          </span>
          New Member
        </a>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div v-if="list && list.length > 0" class="table-responsive">
        <!--begin::Table-->
        <table
            class="
            table table-row-dashed table-row-gray-300
            align-middle
            gs-0
            gy-4
          "
        >
          <!--begin::Table head-->
          <thead>
          <tr class="fw-bolder text-muted">
            <th> {{$t('name')}}</th>
            <th> {{$t('email')}}</th>
            <th> {{$t('phone')}}</th>
            <th> {{$t('by')}}</th>
            <th> {{$t('actions')}}</th>
          </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
          <template v-for="(item) in list" :key="item.id">
            <tr>
              <td>{{item.name}}</td>
              <td>{{item.email}}</td>
              <td>{{item.phone}}</td>
              <td>
                <template v-if="item.byUser && item.byUser.name">
                  {{item.byUser.name }}
                </template>
              </td>


              <td class="text-end">
                <router-link
                    :to="{ name: 'customers-view', params: { customer: item.id } }"
                    class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                >
                  <i class="icon-xl fas far fa-eye"></i>
                </router-link>
              </td>
            </tr>
          </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "newCustomer",
  props: [
    "widgetClasses ",
    "list"
  ],
});
</script>
