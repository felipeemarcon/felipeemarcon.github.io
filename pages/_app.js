import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

// Styles
import "@styles/_fonts.scss";
import "@styles/globals.scss";
import "@styles/_variables.scss";
import "@styles/_mixins.scss";

function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation("translation", { useSuspense: false });
  const { language: locale } = i18n;
  const [cookies, setCookie] = useCookies(["locale"]);

  useEffect(() => {
    setCookie("locale", locale);
  });

  return <Component {...pageProps} />;
}

export default MyApp;
