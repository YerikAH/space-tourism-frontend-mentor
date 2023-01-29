import { useState, useEffect, useLayoutEffect } from "react";

function useWidth(maxWidth: number) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [renderImages, setRenderImages] = useState(false);

  useLayoutEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    windowWidth > maxWidth ? setRenderImages(true) : setRenderImages(false);
  }, [windowWidth]);

  return { windowWidth, renderImages };
}

export default useWidth;
