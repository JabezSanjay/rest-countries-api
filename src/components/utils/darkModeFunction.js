export const isDarkMode = () => {
  const darkMode = localStorage.getItem("isDark");

  return darkMode ? true : false;
};
