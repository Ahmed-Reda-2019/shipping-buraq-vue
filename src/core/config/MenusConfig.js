const MenuHeader = [
  {
    pages: [
      {
        heading: "branches",
        route: { name: "branches-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        role: [1],
        permission: "branches-list",
      },
      {
        heading: "Shipment Container list",
        route: { name: "shipment-Container-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        permission: "shipment-Container-list",
      },
      {
        heading: "orders",
        route: { name: "Orders-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        role: [1, 2, 3, 4, 5, 6],
        permission: "",
      },
      {
        heading: "Order invoices",
        route: { name: "invoices-order-list" },
        svgIcon: "/media/icons/duotune/general/gen001.svg",
        fontIcon: "bi-layers",
        role: [1, 2, 3, 4, 5, 6],
        permission: "",
      },
      {
        heading: "Scan Code",
        route: { name: "ScanCode-orders" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        role: [1, 2, 3, 4, 5, 6],
        permission: "",
      },
    ],
  }

];
const MenuConfig = [
  {
    pages: [
      {
        heading: "users",
        route: { name: "users-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "fas fa-user",
        role: [1],
        permission: "users-list",
      },
      {
        heading: "branches",
        route: { name: "branches-list" },
        svgIcon: "/media/icons/duotune/general/gen008.svg",
        fontIcon: "fas fa-code-branch",
        role: [1],
        permission: "branches-list",
      },

      {
        heading: "companies",
        route: { name: "company-list" },
        svgIcon: "/media/icons/duotune/general/gen004.svg",
        fontIcon: "bi-shop",
        role: [1],
        permission: "services-list",
      },

      {
        heading: "customers",
        route: { name: "customers-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "fas fa-users",
        role: [1],
        permission: "customers-list",
      },
      {
        heading: "Indebtedness",
        route: { name: "indebtedness-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "fas fa-hand-holding-usd",
        role: [1],
        permission: "customers-list",
      },
      {
        heading: "all payments",
        route: { name: "payments-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "fas fa-dollar-sign",
        role: [1],
        permission: "customers-list",
      },
      {
        heading: "orders",
        route: { name: "Orders-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "fas fa-shopping-cart",
        role: [1, 2, 3, 4, 5, 6],
        permission: "",
      },
      {
        heading: "Order invoices",
        route: { name: "invoices-order-list" },
        svgIcon: "/media/icons/duotune/general/gen001.svg",
        fontIcon: "bi-layers",
        role: [1, 2, 3, 4, 5, 6],
        permission: "",
      },
      {
        heading: "blogs",
        route: { name: "crm-blogs-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "fas fa-blog",
        role: [1, 2, 3, 4, 5, 6],
        permission: "blogs-list",
      },
      {
        heading: "Shipment Container list",
        route: { name: "shipment-Container-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "fas fa-shipping-fast",
        permission: "shipment-Container-list",
      },
      {
        heading: "Scan Code",
        route: { name: "ScanCode-orders" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "fas fa-qrcode",
        role: [1, 2, 3, 4, 5, 6],
        permission: "",
      },
      {
        heading: "Shipment Trips",
        route: { name: "trips-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "fas fa-truck",
        role: [1, 2, 3, 4, 5, 6],
        permission: "",
      },
    ],
  }

];
const QuickLinks = [
  {
      heading: "Settings",
      route: { name: "site-setting" },
      // svgIcon: "/media/icons/duotune/general/gen019.svg",
      fontIcon: "fas fa-flag",
      permission: "site-setting",
  },
  {
      heading: "countries",
      route: { name: "Countries-list" },
      // svgIcon: "/media/icons/duotune/general/gen019.svg",
      fontIcon: "fa-solid fa-gear",
      permission: "countries-list",
  },
  {
      heading: "orderTypes",
      route: { name: "Order-Types-list" },
      // svgIcon: "/media/icons/duotune/general/gen019.svg",
      fontIcon: "fas fa-fingerprint",
      permission: "Order-Types-list",
  },
  {
    heading: "Payment Methods",
    route: { name: "Pyment-Methods-list" },
    // svgIcon: "/media/icons/duotune/general/gen019.svg",
    fontIcon: "fas fa-fingerprint",
    permission: "Pyment-Methods-list",
},
{
  heading: "currencies",
  route: { name: "Currencies-list" },
  // svgIcon: "/media/icons/duotune/general/gen019.svg",
  fontIcon: "fas fa-fingerprint",
  permission: "Currencies-list",
},
{
  heading: "OrderStatus",
  route: { name: "Order-Status-list" },
  // svgIcon: "/media/icons/duotune/general/gen019.svg",
  fontIcon: "fas fa-fingerprint",
  permission: "Order-Status-list",
},
// {
//   heading: "Shipment company Types",
//   route: { name: "shipment-types-list" },
//   // svgIcon: "/media/icons/duotune/general/gen019.svg",
//   fontIcon: "fas fa-fingerprint",
//   permission: "shipment-types-list",
// },
{
  heading: "Meta",
  route: { name: "crm-meta-list" },
  // svgIcon: "/media/icons/duotune/general/gen019.svg",
  fontIcon: "fas fa-fingerprint",
  permission: "meta-list",
},
{
  heading: "Roles",
  route: { name: "roles-list" },
  // svgIcon: "/media/icons/duotune/general/gen019.svg",
  fontIcon: "fas fa-fingerprint",
  permission: "roles-list",
},
];
const BOX = "$";
export default  {MenuConfig , QuickLinks , MenuHeader,BOX};
