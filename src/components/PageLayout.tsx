import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";

type PageLayoutProps = {
    children: React.ReactNode;
    showFooter?: boolean;
    showContactInfo?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showFooter = true, showContactInfo = false }) => {
    const [isCookieConsentGiven, setIsCookieConsentGiven] = useState(false);
    const location = useLocation();
    

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.pathname === '/cookie-consent') {
            setIsCookieConsentGiven(true);
        }
    }, [location]);
    
    return (
        <div style={{ padding: '20px' }}>
            <Navbar />
            {children}
            {showContactInfo && <ContactInfo />}
            {/* Show cookie banner when consent is NOT given */}
            {!isCookieConsentGiven && (
                <div style={{ 
                    position: 'fixed', 
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    color: 'white',
                    padding: '20px',
                    zIndex: 1000,
                    boxShadow: '0 -2px 10px rgba(0,0,0,0.3)'
                }}>
                    <div style={{ 
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <div>
                            <h3 style={{ margin: '0 0 10px 0' }}>Cookie Consent</h3>
                            <p style={{ margin: 0 }}>We use cookies to enhance your experience and analyze our traffic.</p>
                        </div>
                        <button 
                            onClick={() => setIsCookieConsentGiven(true)}
                            style={{ 
                                backgroundColor: '#4CAF50', 
                                color: 'white', 
                                padding: '12px 24px', 
                                border: 'none', 
                                borderRadius: '5px', 
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            )}
            
            {showFooter && <Footer />}
            
            {isCookieConsentGiven && (
                <div style={{ 
                    marginTop: '20px', 
                    padding: '15px', 
                    background: '#e8f5e8', 
                    borderRadius: '5px',
                    border: '1px solid #4CAF50'
                }}>
                    <p>✅ Thank you for accepting cookies! Location tracking is now active.</p>
                </div>
            )}
        </div>
    );
};

export default PageLayout;