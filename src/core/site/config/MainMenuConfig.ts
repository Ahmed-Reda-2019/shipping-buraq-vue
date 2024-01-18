const DocMenuConfig = [
  {
    pages: [
      {
        heading: "Home",
        route: { name: "site-index" },
        value: "permissoins",
        svgIcon: "/media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "Tracking",
        route: { name: "site-tracking" },
        value: "permissoins",
        svgIcon: "/media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "Contact",
        route: { name: "site-contact" },
        svgIcon: "/media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "About",
        route: { name: "site-category", params: { id: "about" } },
        params: { id: "about" },
        svgIcon: "/media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "blogs",
        route: { name: "site-blog" },
        value: "permissoins",
        svgIcon: "/media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
    ],
  },
];

export default DocMenuConfig;
