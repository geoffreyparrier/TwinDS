import "twind/shim";

import { setup } from "twind";

setup({
  theme: {
    extend: {
      colors: {
        main: {
          "50": "#FFFFFF",
          "100": "#FBFDFD",
          "200": "#DDEDF3",
          "300": "#BFDEE8",
          "400": "#A1CEDD",
          "500": "#83BFD2",
          "600": "#5AAAC3",
          "700": "#3D8EA8",
          "800": "#2E6B7F",
          "900": "#1F4856",
        },
      },
    },
  },
});

export * from "./components";
