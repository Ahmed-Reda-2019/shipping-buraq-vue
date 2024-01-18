import { ref } from 'vue'
import { useRouter } from 'vue-router';
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import i18n from '@/core/plugins/i18n'
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({position:'top-right' /* options */ });

const { t } = i18n.global
export default function useOrders() {
    const list = ref([])
    const allData = ref({})
    const item = ref([])
    const currentItem = ref({

      invoices:[]
    })
    const key = ref('data');
    // const page = ref(1)
    const filters = ref({page:1})
    const url = ref('admin/orders')

    const router = useRouter()
    const errors = ref({})
    const loading = ref(false);

    const getList = async () => {
        let response = await ApiService.get("admin/company");
        allData.value = response.data;
        list.value = response.data[key.value];
    }
    const setCurrentItem = (index) =>{
        currentItem.value = list.value[index]
    }

    const getOne = async (id) => {
        let response = await ApiService.get('admin/group/' + id)
        item.value = response.data.data;
    }

    const store = async (invoice , callBack = undefined, append = true ) => {
      loading.value = true;
        errors.value = []

      return await ApiService.post(url.value, invoice).then((res)=>{
        console.log("ssssssssssss");
        toaster.success(t('messages.success'));
        if (callBack) callBack(res)
        return res.data;

      }).catch((err)=>{
        console.log("ffffffffffff");
        toaster.error(t('messages.failed'));
        errors.value = ApiService.errors
        console.log(ApiService.errors)
        return false;// Promise.reject();
      });
        // return false;
    }

    const save = async (data , index = -1,  append = true ) => {
        item.value = data;
        if (data.slug && data.slug != "")
         return update(data.slug , index )
        else
            return store(item.value , append)
    }

    const update = async (id , index = -1) => {
        errors.value = []
        try {
            await ApiService.put('/admin/group/' + id, item.value).then((res)=>{
                toaster.success(t('messages.success'));
                if (index > -1 && list.value[index] ){
                    list.value[index] = res.data.data;
                }
            }).catch((err)=>{
                toaster.error(t('messages.failed'));
                errors.value = ApiService.errors
                return false;
            })
            // await router.push({name: 'companies.index'})
            return true;
        } catch (e) {
            errors.value = ApiService.errors;
        }
        return false;
    }

    const destroy = async (item , index = -1) => {
        console.log(item);
        Swal.fire({
            title:
                t("messages.areSureDeleted") +
                " ? ( " +
                item.name +
                " )",
            text: t("messages.notAble"),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: t("Cancel"),
            confirmButtonText: t("messages.sureDeleted"),
        }).then((result) => {
            if (result.isConfirmed) {
                ApiService.delete(
                    "admin/group/" + item.slug
                ).then(() => {
                    Swal.fire(
                        t("messages.delteted"),
                        t("messages.hasBeenDeleted"),
                        "success"
                    );
                    if (index > -1 && list.value[index]){
                        list.value.splice(index, 1)
                    }

                });
            }
        });
    }

    const actIndebtedness = async (order , status , success = undefined) => {
      let message ,data;
      if (status == 5){
        message =  'are you sure to reject ?';
        data = {status:5}
      }else {
         message =  'are you sure to accept ?';
         data = {status:1}
      }
      Swal.fire({
            title: message,
            text: t("messages.notAble"),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: t("Cancel"),
            confirmButtonText: t("messages.sure"),
        }).then((result) => {
            if (result.isConfirmed) {
                ApiService.put(
                    "admin/order/" + order.id +'/change/indebtedness/'+order.indebtedness.id,
                  data
                ).then((res) => {
                  console.log(res.data)

                  Swal.fire(
                        t("messages.Status Changed"),
                        "",
                        "success"
                    );
                  order.paid_status = res.data.data.paid_status
                  order.indebtedness = res.data.indebtedness
                  if (success) success(res);
                });
            }
        });
    }
    const clientWithdrawUpdate = async (order ,item , status , success = undefined) => {
      let message ,data;
      if (status == 5){
        message =  'are you sure to reject ?';
        data = {status:5}
      }else {
         message =  'are you sure to accept ?';
         data = {status:1}
      }
      Swal.fire({
            title: message,
            text: t("messages.notAble"),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: t("Cancel"),
            confirmButtonText: t("messages.sure"),
        }).then((result) => {
            if (result.isConfirmed) {
                ApiService.put(
                    "admin/order/" + order.id +'/update/clientWithdraw/'+item.slug,
                  data
                ).then((res) => {
                  Swal.fire(
                        t("messages.Status Changed"),
                        "",
                        "success"
                    );
                  order.paid_status = res.data.data.paid_status
                  order.clientWithdraws = res.data.clientWithdraws
                  if (success) success(res.data.data);
                });
            }
        });
    }


    const box = async (id , box , success =undefined) => {
        errors.value = []
        var url = '/admin/order/' + id+'/box';
        if (box.id)
            url += '/'+box.id;

        return await ApiService.post(url, box).then((res)=>{
            console.log("ssssssssssss");
            toaster.success(t('messages.success'));
            if (success) success(res)
            return res.data;

        }).catch((err)=>{
            console.log("ffffffffffff");
            toaster.error(t('messages.failed'));
            errors.value = ApiService.errors
            console.log(ApiService.errors)
            return false;// Promise.reject();
        });
    }
    const requestInvoice = async (id , invoice , success = undefined) => {
      Swal.fire({
        title:
          t("messages.are Sure send invoice to") +
          " ? ( " +
          invoice.company.name +
          " )",
        text: t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: t("Cancel"),
        confirmButtonText: t("messages.sureDeleted"),
      }).then( async (result) => {
        if (result.isConfirmed) {
          var url = '/admin/order/' + id+'/request/invoice/'+invoice.slug;
          return await ApiService.get(url)
            .then((res)=>{
            toaster.success(t('messages.success'));

            if (success) success(res.data)
            return res.data;

          })
            .catch((err)=>{
              toaster.error(t('messages.failed'));
              errors.value = ApiService.errors
              console.log(ApiService.errors)
              return false;// Promise.reject();
            });
        }
      });

    }
    const vatInvoice = async (id , invoice , success =undefined) => {
        errors.value = []
        var url = '/admin/order/' + id+'/vat/invoice/'+invoice.slug;

        return await ApiService.post(url, invoice).then((res)=>{
            toaster.success(t('messages.success'));
            if (success) success(res)
            return res.data;

        }).catch((err)=>{
            toaster.error(t('messages.failed'));
            errors.value = ApiService.errors
            console.log(ApiService.errors)
            return false;// Promise.reject();
        });
    }
    const addClientPayment = async (payment , order , success =undefined) => {
        errors.value = []
        var url = '/admin/order/' + order.id+'/make/payed';

        return await ApiService.post(url, payment).then((res)=>{
            toaster.success(t('messages.success'));
            if (success) success(res)
            return res.data;

        }).catch((err)=>{
            toaster.error(t('messages.failed'));
            errors.value = ApiService.errors
            console.log(ApiService.errors)
            return false;// Promise.reject();
        });
    }
    const requestPaymentFromBranch = async (  order,payment , success =undefined) => {
      errors.value = []
        var url = '/admin/order/' + order.id+'/create/indebtedness';

        return await ApiService.post(url, payment).then((res)=>{
            console.log("ssssssssssss");
            toaster.success(t('messages.success'));
            if (success) success(res.data)
            return res.data;

        }).catch((err)=>{
            toaster.error(t('messages.failed'));
            errors.value = ApiService.errors
            console.log(ApiService.errors)
            return false;// Promise.reject();
        });
    }


    return {
        list,
        item,
        errors,
        allData,
        currentItem,
        setCurrentItem,
        getList,
        getOne,
        store,
        save,
        update,
        destroy,
        box,
        vatInvoice,
      requestInvoice,
      addClientPayment,
      requestPaymentFromBranch,
      actIndebtedness,
      clientWithdrawUpdate
    }
}
