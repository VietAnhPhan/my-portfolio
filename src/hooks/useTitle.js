// src/hooks/useTitle.js
import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title + " | Viet Anh Developer";
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
}

export default useTitle;
