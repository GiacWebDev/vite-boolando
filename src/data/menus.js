const main_menu = [
  {
    href: "#",
    text: "Uomo",
  },
  {
    href: "#",
    text: "Donna",
  },
  {
    href: "#",
    text: "Bimbino",
  },
];

const footer_menu = [
  {
    href: "#",
    text: "Informazioni legali",
  },
  {
    href: "#",
    text: "Informativa sulla privacy",
  },
  {
    href: "#",
    text: "Diritto di recesso",
  },
];

// questa variabile di oggetti sotto ha al suo interno due array -header -footer richiamabili con "social_menu.header / footer"
const social_menu = {
  header: [
    {
      href: "#",
      icon_class: "fa-regular fa-user",
    },
    {
      href: "#",
      icon_class: "fa-regular fa-heart",
    },
    {
      href: "#",
      icon_class: "fa-solid fa-bag-shopping",
    },
  ],

  footer: [
    {
      href: "#",
      icon_class: "fa-square-twitter",
    },
    {
      href: "#",
      icon_class: "fa-square-facebook",
    },
    {
      href: "#",
      icon_class: "fa-square-instagram",
    },
    {
      href: "#",
      icon_class: "fa-square-pinterest",
    },
    {
      href: "#",
      icon_class: "fa-square-youtube",
    },
  ],
};

export { main_menu, social_menu, footer_menu };
