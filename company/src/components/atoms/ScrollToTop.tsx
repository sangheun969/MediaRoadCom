import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 바뀔 때마다 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
