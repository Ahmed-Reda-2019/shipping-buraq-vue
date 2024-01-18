import { App } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/JwtService";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

import router from "@/router";
import {reject} from "lodash";


/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static errors = [];
  public static submited = false;
  public static URL =
      (process.env.NODE_ENV == "development" ? "http://127.0.0.1:5555" : location.origin)  + '/api/';
  public static BaseURL  = process.env.NODE_ENV == "development" ? "http://127.0.0.1:5555" : location.origin;

  public static setError(errr){
    ApiService.errors = errr;
  }
  public static vueInstance: App;

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);

    ApiService.vueInstance.axios.defaults.baseURL = ApiService.URL;
    // ApiService.vueInstance.axios.defaults.baseURL = ;
    // ApiService.vueInstance.axios.interceptors.request.use(()=>{
    //   ApiService.errors = [];
    // })
    ApiService.vueInstance.axios.interceptors.response.use(
        response => {
          ApiService.errors = [];
          /*
         * Swal.fire({
              text: "All is cool! Now you submit this form",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            })*/
          return response;
        },
        error => {

          if (error.response.data && error.response.data.message)
            Swal.fire({
              text: error.response.data.message,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });

          console.log(error.response)
          if(error.response.data && error.response.data.errors){
            console.log(error.response.data)
            ApiService.errors = error.response.data.errors;
          }
          if (error.response.status == 422) {
            ApiService.errors = error.response.data.errors;
          } else if (error.response.status == 401) {
            JwtService.destroyToken();
            router.push({ name: "sign-in" });

          }

          return  Promise.reject();

        }
    );


    ApiService.setHeader();
  }

  /**
   * @description set the default HTTP request headers
   */

  public static setHeader(): void {

    ApiService.vueInstance.axios.defaults.headers.common["Authorization"] = `Bearer `+localStorage.getItem('id_token');
    ApiService.vueInstance.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    ApiService.vueInstance.axios.defaults.headers.common['Accept'] = "application/json";

    ApiService.vueInstance.axios.defaults.headers.common['Accept'] = "application/json";

    if (localStorage.getItem('lang'))
      ApiService.vueInstance.axios.defaults.headers.common['Accept-Languag'] = localStorage.getItem('lang');
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(
      resource: string,
      params
  ): Promise<AxiosResponse> {
    let q = "";
    if (params){
      q = "?";
      Object.keys(params).forEach((value , index) => {
        if (params[value]){
          if (index == 0){
            q +=value+'='+params[value];
          }else{
            q +="&"+value+'='+params[value];
          }
        }

      })
    }
    router.push({path:router.currentRoute.value.path, query:params});
    // router.push(path: currentPath, query: {...})
    return ApiService.vueInstance.axios.get(resource + q).catch((error) => {
      return error;
      throw new Error(`[KT] ApiService ${error}`);
    });
  }
  public  static  setFiltter(params){
    router.push({path:router.currentRoute.value.path, query:params});
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(
      resource: string,
      slug = "" as string
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios
        .get(`${resource}`)

  }

  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(
      resource: string,
      params
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.post(`${resource}`, params);
  }

  /**
   * @description send the UPDATE HTTP request
   * @param resource: string
   * @param slug: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static update(
      resource: string,
      slug: string,
      params: AxiosRequestConfig
  ): Promise<AxiosResponse> {

    return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params);
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(
      resource: string,
      params
  ): Promise<AxiosResponse> {
    // useStore().(Mutations.SET_Submitted , true)//.dispatch(, true)
    return ApiService.vueInstance.axios.put(`${resource}`, params);
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.delete(resource).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
}

export default ApiService;
