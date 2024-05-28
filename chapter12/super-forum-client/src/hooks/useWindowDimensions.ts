import { useEffect, useState } from "react";
import { MIN_DESKTOP_WINDOW_WIDTH } from "../constants";

export interface WindowDimensions {
  height: number;
  width: number;
  isMobile: boolean;
}

export const useWindowDimensions = (): WindowDimensions => {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    height: 0,
    width: 0,
    isMobile: true,
  });

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
      isMobile: window.innerWidth <= MIN_DESKTOP_WINDOW_WIDTH,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // [] means that this will run only once at the first load

  return dimensions;
};
