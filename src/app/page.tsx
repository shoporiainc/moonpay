// 'use client';

// import dynamic from 'next/dynamic';

// const MoonPayWidget = dynamic(
//   () => import('./components/MoonPayWidget').then(mod => mod.default),
//   {
//     ssr: false,
//     loading: () => <div>Loading...</div>,
//   }
// );

// export default function Home() {
//   return <MoonPayWidget />;
// }


'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const moonpayUrl = new URL('https://buy.moonpay.com');
    
    // Always set your default public API key
    moonpayUrl.searchParams.set('apiKey', 'pk_test_SyBZ6KI7LwJuoPzSZ2378rfKyvajqC');


    // List of allowed MoonPay parameters
    const allowedParams = [
      'baseCurrencyAmount',
      'baseCurrencyCode',
      'currencyCode',
      'lockAmount',
      'walletAddress',
      'redirectURL',
      'externalCustomerId',
      'email',
    ];

    allowedParams.forEach((key) => {
      const value = params.get(key);
      if (value) {
        moonpayUrl.searchParams.set(key, value);
      }
    });

    setIframeUrl(moonpayUrl.toString());
  }, []);

  if (!iframeUrl) return <div>Loading MoonPay widget...</div>;

  return (
    <iframe
      src={iframeUrl}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
      allow="accelerometer; autoplay; camera; gyroscope; payment"
    />
  );
}
