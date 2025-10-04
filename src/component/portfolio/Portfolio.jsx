import { useEffect, useState } from "react";
import "./portfolio.css";
import DesktopPortfolio from "./desktop/DesktopPortfolio";
import MobilePortfolio from "./mobile/MobilePortfolio";

// Hook مخصص للتحقق من حجم الشاشة
const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);
    return isMobile;
};

const Portfolio = () => {
    const isMobile = useIsMobile();
    return isMobile ? <MobilePortfolio /> : <DesktopPortfolio />;
};

export default Portfolio;
