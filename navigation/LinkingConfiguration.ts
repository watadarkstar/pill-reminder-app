import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          HomeTab: {
            screens: {
              HomeTabScreen: "home",
            },
          },
          MedicationsTab: {
            screens: {
              MedicationsTabScreen: "medications",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
