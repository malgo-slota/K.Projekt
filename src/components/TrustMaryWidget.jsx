import React, { useEffect, useRef, useState } from 'react';

export const TrustmaryWidget = () => {
    
    const widgetRef = useRef();

    useEffect(() => {

        const existingScript = document.querySelector('script[src="https://widget.trustmary.com/VHY6Ig_uo"]');
    
        if (widgetRef.current && !existingScript) {
          const script = document.createElement('script');
          script.src = 'https://widget.trustmary.com/VHY6Ig_uo';
          script.async = true;
          widgetRef.current.appendChild(script);
        }
    
        return () => {
            if (widgetRef.current) {
                widgetRef.current.innerHTML = '';
              }
        };
      }, []);

  return (
    <div ref={widgetRef} id="data-trustmary-widget">
    </div>
  );
};