const DocMenuConfig = [
  {
    pages: [
      {
        heading: "users",
        route: { name: "users-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        role: [1],
        permission: "users-list",
      },
      {
        heading: "branches",
        route: { name: "branches-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        role: [1],
        permission: "branches-list",
      },

      {
        heading: "companies",
        route: { name: "company-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        role: [1],
        permission: "services-list",
      },

      {
        heading: "customers",
        route: { name: "customers-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        role: [1],
        permission: "customers-list",
      },
      {
        heading: "blogs",
        route: { name: "crm-blogs-list" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        role: [1, 2, 3, 4, 5, 6],
        permission: "blogs-list",
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
        heading: "Scan Code",
        route: { name: "ScanCode-orders" },
        svgIcon: "/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
        role: [1, 2, 3, 4, 5, 6],
        permission: "",
      },
    ],
  },
];

export default DocMenuConfig;
