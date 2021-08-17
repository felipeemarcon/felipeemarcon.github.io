const renderCurrentLocale = (locale) => {
  switch (locale) {
    case "en":
      return {
        alias: "PT",
        name: "Português Brasil",
      };
    case "pt":
      return {
        alias: "EN",
        name: "English",
      };
    default:
      return {
        alias: "PT",
        name: "Português Brasil",
      };
  }
};

export default renderCurrentLocale;
