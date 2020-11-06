import {InnerMenu, Menu} from "../types/types";

const menu: Array<Menu> = [
  {
    title: `ABOUT US`,
    link: `ABOUT_US`
  },
  {
    title: `PARTNERS`,
    link: `PARTNERS`,
  },
  {
    title: `PRODUCTS`,
    link: `PRODUCTS`,
    className: `main-header__menu-row submenu`,
    rowMenu: true,
    innerMenu: [
      {
        title: `Fasteners`,
        link: `Fasteners`,
      },
      {
        title: `Work gloves`,
        link: `Work_gloves`,
      },
      {
        title: `Technical aerosols`,
        link: `Technical_aerosols`,
      },
      {
        title: `ndustrial paper`,
        link: `ndustrial_paper`,
      },
      {
        title: `Nuts and washers`,
        link: `Nuts_and_washers`,
      },
    ],
  },
  {
    title: `WHOLESALE`,
    link: `WHOLESALE`,
    className: `main-header__menu-column submenu`,
    innerMenu: [
      {
        title: `Fasteners`,
        link: `Fasteners`,
      },
      {
        title: `Work gloves`,
        link: `Work_gloves`,
      },
      {
        title: `Work gloves`,
        link: `Work_gloves`,
      },
      {
        title: `Technical aerosols`,
        link: `Technical_aerosols`,
      },
      {
        title: `ndustrial paper`,
        link: `ndustrial_paper`,
      },
      {
        title: `Nuts and washers`,
        link: `Nuts_and_washers`,
      },
    ],
  },
  {
    title: `Contacts`,
    link: `Contacts`,
  },
];

export {menu};
