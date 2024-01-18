const ID_TOKEN_KEY = "id_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};
export const getUserData = () => {
  if (window.localStorage.getItem("userData"))
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return JSON.parse(window.localStorage.getItem("userData")!);
  return null;
};

export const isCustomer = () => {
  if (getToken() && window.localStorage.getItem("userData")) {
    const ob = JSON.parse(localStorage.getItem("userData") || '{guard:""}');
    if (ob["guard"] && ob["guard"] == "customer") return true;
    return false;
  }
  return false;
};

export const isBusiness = () => {
  if (getToken() && window.localStorage.getItem("userData")) {
    const ob = JSON.parse(
      localStorage.getItem("userData") || '{guard:"" , is_bussness:0}'
    );
    if (ob["guard"] && ob["guard"] == "customer" && ob["is_bussness"] == 1)
      return true;
    return false;
  }
  return false;
};

export const isBussness = () => {
  if (getToken() && window.localStorage.getItem("userData")) {
    const ob = JSON.parse(localStorage.getItem("userData") || '{guard:""}');
    if (
      ob["guard"] &&
      ob["guard"] == "customer" &&
      ob.is_bussness &&
      ob.is_bussness == 1
    )
      return true;
    return false;
  }
  return false;
};
export const isEmployee = () => {
  if (getToken() && window.localStorage.getItem("userData")) {
    const ob = JSON.parse(localStorage.getItem("userData") || '{guard:""}');
    if (ob["guard"] && ob["guard"] == "employee") return true;
    return false;
  }
  return false;
};
export const can = (permission) => {
  // if(permission == "")
    return true;
  // if (getToken() && window.localStorage.getItem("userData")) {
  //   const ob = JSON.parse(localStorage.getItem("userData") || '{guard:""}');
  //   if (ob["guard"] && ob["guard"] == "employee") {
  //     const permissions = ob["permissions"] ? ob["permissions"] : [];
  //     if (permissions.indexOf(permission) > -1) return true;
  //   }
  // }
  // return false;
};

export const hasRole = (name, user = null) => {
  if (getToken() && window.localStorage.getItem("userData")) {
    let ob;
    if (user == null)
      ob = JSON.parse(localStorage.getItem("userData") || '{guard:""}');
    else ob = user;
    if (ob.role && ob.role.name && ob.role.name == name) return true;
  }
  return false;
};

/**
 * @description save token into localStorage
 * @param token: string
 */

export const saveToken = (token: string, user): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
  window.localStorage.setItem("userData", JSON.stringify(user));
};
export const saveUser = (user): void => {
  window.localStorage.setItem("userData", JSON.stringify(user));
};
/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem("userData");
};

export default {
  getToken,
  getUserData,
  saveToken,
  destroyToken,
  isCustomer,
  isEmployee,
  isBusiness,
  saveUser,
  can,
  hasRole,
};
