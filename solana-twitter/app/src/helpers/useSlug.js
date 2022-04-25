import { useMemo } from "react";

export const useSlug = (text) => {
  return useMemo(() => {
    return (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  });
};
