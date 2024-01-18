enum Actions {
  // action types
  ADD_BODY_CLASSNAME = "addBodyClassName",
  REMOVE_BODY_CLASSNAME = "removeBodyClassName",
  ADD_BODY_ATTRIBUTE = "addBodyAttribute",
  ADD_HTML_ATTRIBUTE = "addHtmlAttribute",
  REMOVE_BODY_ATTRIBUTE = "removeBodyAttribute",
  // REMOVE_BODY_ATTRIBUTE = "removeBodyAttribute",
  SET_RTL = "setRTL",
  SET_LTR = "setLTR",
  ADD_CLASSNAME = "addClassName",
  VERIFY_AUTH = "verifyAuth",
  LOGIN = "login",
  LOGOUT = "logout",
  REGISTER = "register",
  UPDATE_USER = "updateUser",
  GET_USER = "getUser",
  FORGOT_PASSWORD = "forgotPassword",
  SET_BREADCRUMB_ACTION = "setBreadcrumbAction",

  LOGINCustomer = "loginCustomer",
  LOGOUTCustomer = "logoutCustomer",
}

enum Mutations {
  // mutation types
  SET_CLASSNAME_BY_POSITION = "appendBreadcrumb",
  PURGE_AUTH = "logOut",
  SET_AUTH = "setAuth",
  SET_USER = "setUser",
  GET_USER = "getUser",
  SET_PASSWORD = "setPassworzd",
  SET_ERROR = "setError",
  SET_Submitted = "setSumitted",
  SET_BREADCRUMB_MUTATION = "setBreadcrumbMutation",
  SET_LAYOUT_CONFIG = "setLayoutConfig",
  RESET_LAYOUT_CONFIG = "resetLayoutConfig",
  OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig",
  OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig",

  GETSETTING = "getSetting",
  SET_Currencies = "SET_Currencies",
  SET_ALL_Currencies = "SET_ALL_Currencies",
}

export { Actions, Mutations };
