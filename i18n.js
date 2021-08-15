import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

const NextI18n = () =>
  i18n
    .use(initReactI18next)
    .use(
      resourcesToBackend((language, namespace, callback) => {
        // console.log(`Language: ${language}, Namespace: ${namespace}`);
        import(`./locales/${language}/${namespace}.json`)
          .then((resources) => {
            callback(null, resources);
          })
          .catch((error) => {
            callback(error, null);
            console.log(`ERROR`);
          });
      })
    )
    .init({
      debug: true,
      lng: "en-US", // if you're using a language detector, do not define the lng option
      supportedLngs: ["en-US", "pt-BR"],
      fallbackLng: "en-US",
      load: "currentOnly",
      ns: ["general"],
      defaultNS: "general",
      interpolation: {
        escapeValue: false,
      },
    });

export default NextI18n;
