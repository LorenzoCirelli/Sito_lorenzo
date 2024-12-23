import en from "./en";
import it from "./it";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en:en,
    it: it
  },
}));