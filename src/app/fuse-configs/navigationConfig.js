import i18next from "i18next";
import id from "./navigation-i18n/id";
import en from "./navigation-i18n/en";

i18next.addResourceBundle("id", "navigation", id);
i18next.addResourceBundle("en", "navigation", en);

const navigationConfig = [
  {
    id: "applications",
    title: "Applications",
    translate: "APPLICATIONS",
    type: "group",
    icon: "apps",
    children: [
      // {
      //   id: "example-component",
      //   title: "Example",
      //   translate: "EXAMPLE",
      //   type: "item",
      //   icon: "whatshot",
      //   url: "/example",
      // },
    ],
  },
];

export default navigationConfig;
