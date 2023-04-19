import { useLayoutEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<string>("light");

  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
