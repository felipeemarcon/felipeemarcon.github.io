import { useTranslation } from "react-i18next";
import { renderCurrentLocale } from "@utils/index";
import { useCookies } from "react-cookie";

// Site Components
import Icon from "@components/Icon";

// Styles
import styles from "@styles/components/ToggleLanguage.module.scss";

const ToggleLanguage = () => {
  const { t, i18n } = useTranslation("translation", { useSuspense: false });
  const { language: locale } = i18n;

  const [cookies, setCookie] = useCookies(["locale"]);

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang).then((t) => {
      setCookie("locale", lang);
    });
  };

  return (
    <div
      className={styles.navLanguage}
      onClick={() => changeLanguageHandler(locale === "en" ? "pt" : "en")}
      title={t("Change language", {
        locale: renderCurrentLocale(locale).name,
      })}
    >
      <Icon icon="language" size={32} />
      <span className={styles.navLanguageLabel}>
        {renderCurrentLocale(locale).alias}
      </span>
    </div>
  );
};

export default ToggleLanguage;
