import {ref} from 'vue'
import {useRouter} from 'vue-router';
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import i18n from '@/core/plugins/i18n'
import {createToaster} from "@meforma/vue-toaster";
import {hideModal} from "@/core/helpers/dom";

const toaster = createToaster({position: 'top-right' /* options */});

const {t} = i18n.global
export default function useTrip() {
  const list = ref([])
  const allData = ref({})
  const item = ref([])
  const currentItem = ref({
    site_show:{}
  })
  const currentItemIndex = ref(-1)
  const key = ref('data');
  // const page = ref(1)
  const filters = ref({page: 1})
  const url = ref('admin/trips')

  const router = useRouter()
  const currencies = ref({})
  const errors = ref([])
  const loading = ref(false)
  const tableC = ref([
    {name: 'code', key: 'code'},
    {name: 'name', key: 'name'},
    {name: 'official Name', key: 'title'},
    {name: 'address', key: 'address'},
    {name: 'actions', key: 'actions'},
  ])


  const getList = async () => {
    loading.value = true;
    let response = await ApiService.query("admin/trips", filters.value);
    loading.value = false;
    console.log(response);
    allData.value = response.data.data;
    currencies.value = response.data.currencies;
    list.value = response.data.data[key.value];
  }
  const setCurrentItem = (item, index = -1) => {
    currentItem.value = item;
    currentItemIndex.value = index
  }
  const setEmptyItem = (item, index = -1) => {
    currentItem.value = {
      site_show:{}
    };
    currentItemIndex.value = index
  }

  const getOne = async (id) => {
    let response = await ApiService.get(url.value+'/' + id)
    item.value = response.data.data;
  }

  const store = async (data = undefined, append = true, success = undefined, fail = undefined) => {
    errors.value = []
    // if (!data)
    //   currentItem.value = data
    loading.value = true;
    try {
      let status = true;
      console.log(currentItem.value)
      return await ApiService.post(url.value, currentItem.value).then((response) => {
        if (append == true) {
          list.value.push(response.data.data);
        }
        toaster.success(t('messages.success'));
        hideModal('kt_modal_Blog_item')
        loading.value = false;
        return status;
      }).catch(() => {
        toaster.error(t('messages.failed'));
        errors.value = ApiService.errors;
        status = false;
        loading.value = false;
        return status;
      })
    } catch (e) {

    }
    loading.value = false;
    return false;
  }

  const save = async (data = undefined, index = -1, append = true) => {
    // if (!data)
    // currentItem.value = data
    if (currentItem.value.id)
      return update(undefined, index)
    else
      return store(undefined, append)
  }
  const saveCurrent = async (index = -1, append = true) => {
    // item.value = data;
    if (currentItem.value.id)
      return update(undefined, index)
    else
      return store(item.value, append)
  }

  const update = async (id, index = -1) => {
    errors.value = []
    // if (!data)
    //   currentItem.value = data
    loading.value = true;
    try {
      await ApiService.put(url.value+'/' + currentItem.value.id, currentItem.value).then((res) => {
        toaster.success(t('messages.success'));
        // if (index > -1 && list.value[index] ){
        //     list.value[index] = res.data.data;
        // }
        hideModal('kt_modal_Blog_item')
        loading.value = false;

      }).catch((err) => {
        toaster.error(t('messages.failed'));
        errors.value = ApiService.errors
        loading.value = false;

        return false;
      })
      // await router.push({name: 'companies.index'})
      return true;
    } catch (e) {
      errors.value = ApiService.errors;
      loading.value = false;

    }
    loading.value = false;

    return false;
  }

  const destroy = async (item, index = -1) => {
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
            url.value+'/' + item.slug
        ).then(() => {
          Swal.fire(
            t("messages.delteted"),
            t("messages.hasBeenDeleted"),
            "success"
          );
          if (index > -1 && list.value[index]) {
            list.value.splice(index, 1)
          }

        });
      }
    });
  }


  return {
    list,
    item,
    errors,
    allData,
    filters,
    currentItem,
    currencies,
    loading,
    setCurrentItem,
    getList,
    getOne,
    store,
    save,
    update,
    destroy,
    setEmptyItem
  }
}
