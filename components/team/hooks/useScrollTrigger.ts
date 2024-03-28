import { useEffect } from "react";

const useSrcollTrigger = (
  scrollY: number,
  callback: (scroll: boolean) => void
) => {
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window && window.scrollY > scrollY) {
        callback(true);
      } else {
        callback(false);
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);
};

export default useSrcollTrigger;
