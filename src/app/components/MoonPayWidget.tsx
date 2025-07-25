// 'use client';

// import { MoonPayBuyWidget } from '@moonpay/moonpay-react';
// import dynamic from 'next/dynamic';

// const MoonPayProvider = dynamic(
//   () => import('@moonpay/moonpay-react').then(mod => mod.MoonPayProvider),
//   {
//     ssr: false,
//     loading: () => <div>Loading MoonPay...</div>,
//   }
// );

// export default function MoonPayWidget() {
//   const handleUrlSignatureRequested = async (widgetUrl: string) => {
//     try {
//       const response = await fetch('/api/sign', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ url: widgetUrl }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to get signature');
//       }

//       const data = await response.json();
//       return data.signature;
//     } catch (error) {
//       console.error('Error getting signature:', error);
//       throw error;
//     }
//   };
//   return (
//     <main className="flex flex-col items-center justify-center fixed inset-0">
//       <div id="moonpay-container">
//         <MoonPayProvider
//           apiKey={process.env.NEXT_PUBLIC_WIDGET_API_KEY || ''}
//           debug
//         >
//           <div
//             id="moonpay-widget"
//             className="flex flex-col items-center justify-center"
//           >
//             <MoonPayBuyWidget
//               className="p-4"
//               variant="embedded"
//               onUrlSignatureRequested={handleUrlSignatureRequested}
//             />
//           </div>
//         </MoonPayProvider>
//       </div>
//     </main>
//   );
// }


'use client';

import {
  MoonPayProvider,
  OnRampWidget,
} from '@moonpay/moonpay-react';
import { useSearchParams } from 'next/navigation';

export default function MoonPayWidget() {
  const searchParams = useSearchParams();

  const baseCurrencyAmount = searchParams.get('baseCurrencyAmount') || '555';
  const baseCurrencyCode = searchParams.get('baseCurrencyCode') || 'usd';
  const lockAmount = searchParams.get('lockAmount') || 'true';
  const walletAddress =
    searchParams.get('walletAddress') ||
    '0x6B28042E31dB951062624B03cDD5607c526758cC';
  const currencyCode = searchParams.get('currencyCode') || 'eth';

  return (
    <MoonPayProvider
      publishableApiKey="pk_test_SyBZ6KI7LwJuoPzSZ2378rfKyvajqC" // Replace this!
      environment="sandbox"
    >
      <div style={{ width: '100%', height: '100vh' }}>
        <OnRampWidget
          variant="embedded"
          params={{
            baseCurrencyAmount,
            baseCurrencyCode,
            lockAmount,
            walletAddress,
            currencyCode,
          }}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </MoonPayProvider>
  );
}

