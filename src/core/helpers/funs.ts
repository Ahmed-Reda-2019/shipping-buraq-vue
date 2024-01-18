import langs from "@/core/config/langs";

export const initLang = (): void => {
  const lang = window.location.href.split("/", 4).pop() as string;
  if (lang != localStorage.getItem("lang") && langs[lang]) {
    localStorage.setItem("lang", lang);
  }
};
