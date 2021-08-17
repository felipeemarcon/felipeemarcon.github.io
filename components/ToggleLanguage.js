import { useTranslation } from "react-i18next";
import { renderCurrentLocale } from "@utils/index";

// Site Components
import Icon from "@components/Icon";

// Styles
import styles from "@styles/components/ToggleLanguage.module.scss";

const ToggleLanguage = () => {
  const { t, i18n } = useTranslation("translation", { useSuspense: false });

  const { language: locale } = i18n;

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div
      className={styles.navLanguage}
      onClick={() => changeLanguageHandler(locale === "en" ? "pt" : "en")}
      title={t("Change Language", {
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
