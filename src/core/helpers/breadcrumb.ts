import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";
import Setting from "@/core/config/Setting";

/**
 * Sets current page breadcrumbs
 * @param {string} pageTitle Current page title
 * @param {Array<string>} breadcrumbs Current page breadcrumbs
 */
export const setCurrentPageBreadcrumbs = (
  pageTitle: string,
  breadcrumbs: Array<string> | null = null
): void => {
  document.title = pageTitle + " | " + Setting.getTitle("brand");
  store.dispatch(Actions.SET_BREADCRUMB_ACTION, {
    title: pageTitle,
    pageBreadcrumbPath: breadcrumbs,
  });
};
