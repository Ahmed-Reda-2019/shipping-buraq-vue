import { ref } from 'vue'
import { useRouter } from 'vue-router';
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import i18n from '@/core/plugins/i18n'
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({position:'top-right' /* options */ });

const { t } = i18n.global
export default function useGroups() {
    const list = ref([])
    const allData = ref({})
    const item = ref([])
    const currentItem = ref({})
    const key = ref('data');
    // const page = ref(1)
    const filters = ref({page:1})
    const url = ref('admin/group')

    const router = useRouter()
    const errors = ref([])

    const getList = async () => {
        let response = await ApiService.get("admin/group");
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

    const store = async (data , append = true ) => {
        errors.value = []
        try {
            let status = true;
            console.log(data)
            return  await ApiService.post('/admin/group', data).then((response) =>{
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
    }
}