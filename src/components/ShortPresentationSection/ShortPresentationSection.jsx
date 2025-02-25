import React, { useState, useEffect, useRef} from "react";
import { Wrapper } from "./ShortPresentationSection.styles";
import preciseIcon from 'src/assets/images/6426180251667369404.svg';
import personIcon from 'src/assets/images/20223058681640072063.svg';
import clientIcon from 'src/assets/images/3015048451678688795.svg';
import specIcon from 'src/assets/images/12989963951595119023.svg';
import buildIcon from 'src/assets/images/18104400711600701944.svg';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const ShortPresentationSection = () => {
    
   const { isIntersecting, elementRef } = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: '0px',
      });
    
    return (
        <Wrapper ref={elementRef} isVisible={isIntersecting}>
            <div>
                <div><img src={preciseIcon} /></div>
                <p>Dbałość o szczegóły</p>
            </div>
            <div>
                <div><img src={personIcon} /></div>
                <p>Indywidualne podejście</p>
            </div>
            <div>
                <div><img src={clientIcon} /></div>
                <p>Zaangażowanie w dobro klienta</p>
            </div>
            <div>
                <div><img src={specIcon} /></div>
                <p>Współpraca ze specjalistami</p>
            </div>
            <div>
                <div><img src={buildIcon} /></div>
                <p>Kompleksowa usługa</p>
            </div>
        </Wrapper>
    );
}