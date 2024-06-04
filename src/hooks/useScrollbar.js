// hooks/useScrollbar.js
import { useEffect } from "react";

const useScrollbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const html = document.documentElement;

      if (!html.classList.contains("on-scrollbar")) {
        html.classList.add("on-scrollbar");
      }

      clearTimeout(html.scrollTimeout);
      html.scrollTimeout = setTimeout(() => {
        html.classList.remove("on-scrollbar");
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
};

export default useScrollbar;
