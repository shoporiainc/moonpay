'use client';

import dynamic from 'next/dynamic';

const MoonPayWidget = dynamic(
  () => import('./components/MoonPayWidget').then(mod => mod.default),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

export default function Home() {
  return <MoonPayWidget />;
}


// 'use client';

// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [iframeUrl, setIframeUrl] = useState('');

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const moonpayUrl = new URL('https://buy.moonpay.com');
    
//     // Always set your default public API key
//     moonpayUrl.searchParams.set('apiKey', 'pk_test_SyBZ6KI7LwJuoPzSZ2378rfKyvajqC');


//     // List of allowed MoonPay parameters
//     const allowedParams = [
//       'baseCurrencyAmount',
//       'baseCurrencyCode',
//       'currencyCode',
//       'lockAmount',
//       'walletAddress',
//       'redirectURL',
//       'externalCustomerId',
//       'email',
//     ];

//     allowedParams.forEach((key) => {
//       const value = params.get(key);
//       if (value) {
//         moonpayUrl.searchParams.set(key, value);
//       }
//     });

//     setIframeUrl(moonpayUrl.toString());
//   }, []);

//   if (!iframeUrl) return <div>Loading MoonPay widget...</div>;

//   return (
//     <iframe
//       src={iframeUrl}
//       style={{
//         width: '100%',
//         height: '100vh',
//         border: 'none',
//       }}
//       allow="accelerometer; autoplay; camera; gyroscope; payment"
//     />
//   );
// }


// 'use client';

// import {
//   MoonPayProvider,
//   OnRampWidget,
// } from '@moonpay/moonpay-react';
// import { useSearchParams } from 'next/navigation';

// export default function Home() {
//   const searchParams = useSearchParams();

//   const baseCurrencyAmount = searchParams.get('baseCurrencyAmount') || '555';
//   const baseCurrencyCode = searchParams.get('baseCurrencyCode') || 'usd';
//   const lockAmount = searchParams.get('lockAmount') || 'true';
//   const walletAddress =
//     searchParams.get('walletAddress') ||
//     '0x6B28042E31dB951062624B03cDD5607c526758cC';
//   const currencyCode = searchParams.get('currencyCode') || 'eth';

//   return (
//     <MoonPayProvider
//       publishableApiKey="pk_test_SyBZ6KI7LwJuoPzSZ2378rfKyvajqC" // Replace with your test key
//       environment="sandbox" // Use "production" for live mode
//     >
//       <div style={{ width: '100%', height: '100vh' }}>
//         <OnRampWidget
//           variant="embedded"
//           params={{
//             baseCurrencyAmount,
//             baseCurrencyCode,
//             lockAmount,
//             walletAddress,
//             currencyCode,
//           }}
//           style={{ width: '100%', height: '100%' }}
//         />
//       </div>
//     </MoonPayProvider>
//   );
// }
