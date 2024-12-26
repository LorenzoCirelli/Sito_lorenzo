import en from "./en";
import it from "./it";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "it",
  messages: {
    en:en,
    it: it
  },
}));