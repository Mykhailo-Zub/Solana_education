import { useEffect } from "react";

export const useAutoresizeTextarea = (element) => {
  const resizeTextarea = () => {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };

  useEffect(() => {
    if (!element) return;
    resizeTextarea();
    element.addEventListener("input", resizeTextarea);
    return () => element?.removeEventListener("input", resizeTextarea);
    // eslint-disable-next-line
  }, [element]);
};
