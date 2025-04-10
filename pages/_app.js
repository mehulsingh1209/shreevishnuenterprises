import { useState, useEffect } from 'react';
import { CartProvider } from '../context/CartContext';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

// Load Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // Handle page transitions
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    
    const handleComplete = () => {
      setLoading(false);
    };
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);
  
  return (
    <CartProvider>
      {loading && (
        <div className="page-loader">
          <div className="spinner"></div>
        </div>
      )}
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
