import React, { useState, useEffect, useRef} from "react";
import { Wrapper } from "./ShortPresentationSection.styles";
//react icons
// import { MdArchitecture } from "react-icons/md";
// import { IoHappy } from "react-icons/io5";
// import { PiBuildingsFill } from "react-icons/pi";
// import { FaPerson } from "react-icons/fa6";
// import { MdEngineering } from "react-icons/md";

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const ShortPresentationSection = () => {
    
   const { isIntersecting, elementRef } = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: '0px',
      });
    
    return (
        <Wrapper ref={elementRef} isVisible={isIntersecting}>
            <div>
                <div><span className="material-icons">architecture</span></div>
                <p>Dbałość o szczegóły</p>
            </div>
            <div>
                <div><span className="material-icons">person</span></div>
                <p>Indywidualne podejście</p>
            </div>
            <div>
                <div><span className="material-icons">sentiment_very_satisfied</span></div>
                <p>Zaangażowanie w dobro klienta</p>
            </div>
            <div>
                <div><span className="material-icons">engineering</span></div>
                <p>Współpraca ze specjalistami</p>
            </div>
            <div>
                <div><span className="material-icons">apartment</span></div>
                <p>Kompleksowa usługa</p>
            </div>
        </Wrapper>
    );
}