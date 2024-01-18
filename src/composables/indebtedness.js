import { ref } from 'vue'
import { useRouter } from 'vue-router';
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import i18n from '@/core/plugins/i18n'
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({position:'top-right' /* options */ });

const { t } = i18n.global
export default function useIndebtedness() {
    const list = ref([])
    const allData = ref({})
    const item = ref([])
    const currentItem = ref({})
    const currentItemIndex = ref(-1)
    const key = ref('data');
    // const page = ref(1)
    const filters = ref({page:1})
    const url = ref('admin/Dashboard/branch/Indebtedness')

    const router = useRouter()
    const status = ref({})
    const branches = ref({})
    const errors = ref([])
    const loading = ref(false)


    const getList = async (page = undefined) => {
      loading.value = true;
      if (page)
        filters.value.page = page;
      let response = await ApiService.query(url.value ,filters.value);
        console.log(response);
        allData.value = response.data.data;
        list.value = response.data.data[key.value];
        if (response.data.status)
        status.value = response.data.status;
        if (response.data.branches)
        branches.value = response.data.branches;
       loading.value = false;
    }
    const setCurrentItem = (item,index = -1) =>{
        currentItem.value = item;
        currentItemIndex.value = index
    }
    const setUrl = (cUrl) =>{
        url.value = cUrl;
    }
  const setEmptyItem = (item,index = -1) =>{
    currentItem.value = {
      phones:[''],
      accounts:[{}],
    };
    currentItemIndex.value = index
  }

    const getOne = async (id) => {
        let response = await ApiService.get('admin/group/' + id)
        item.value = response.data.data;
    }

    const store = async (data = undefined , append = true ,success =undefined  ,fail = undefined) => {
        errors.value = []
      // if (!data)
      //   currentItem.value = data
        try {
            let status = true;
            console.log(currentItem.value)
            return  await ApiService.post('/admin/company', currentItem.value).then((response) =>{
                if (append == true){
                    list.value.push(response.data.data);
                }
                toaster.success(t('messages.success'));
                return status;
            }).catch(() =>{
                toaster.error(t('messages.failed'));
                errors.value = ApiService.errors;
                status = false;
                return status;
            })
        } catch (e) {

        }
        return false;
    }

    const save = async (data = undefined , index = -1,  append = true ) => {
      // if (!data)
        // currentItem.value = data
       if (currentItem.value.id)
         return update(undefined , index )
        else
            return store(undefined , append)
    }
    const saveCurrent = async (index = -1,  append = true ) => {
        // item.value = data;
        if (currentItem.value.id)
         return update(undefined , index )
        else
            return store(item.value , append)
    }

    const update = async (id , index = -1) => {
        errors.value = []
      // if (!data)
      //   currentItem.value = data
      try {
            await ApiService.put('/admin/company/' + currentItem.value.id, currentItem.value).then((res)=>{
                toaster.success(t('messages.success'));
                // if (index > -1 && list.value[index] ){
                //     list.value[index] = res.data.data;
                // }
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


    return {
        list,
        item,
        errors,
        allData,
      filters,
        currentItem,
        loading ,
        branches,
        status,
        setCurrentItem,
        getList,
        getOne,
        store,
        save,
        update,
        destroy,
      setEmptyItem,
        setUrl
    }
}
