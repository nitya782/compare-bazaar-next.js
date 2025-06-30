// components/WhitepaperDetailClientWrapper.jsx
'use client';

import { useRouter } from 'next/navigation';
import WhitepaperDetail from './WhitepaperDetail';

const WhitepaperDetailClientWrapper = ({ paper }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/Resources/Whitepaper');
  };

  return <WhitepaperDetail paper={paper} onBack={handleBack} />;
};

export default WhitepaperDetailClientWrapper;
