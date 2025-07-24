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

    // List of allowed MoonPay parameters
    const allowedParams = [
      'apiKey',
      'baseCurrencyAmount',
      'baseCurrencyCode',
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
