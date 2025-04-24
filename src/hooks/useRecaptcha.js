// src/hooks/useRecaptcha.js
import { useEffect, useState } from 'react';

export function useRecaptcha(siteKey) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.grecaptcha) {
      setReady(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.grecaptcha) setReady(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [siteKey]);

  return ready;
}
