import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TodayTab: {
            screens: {
              TodayTabScreen: "today",
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
