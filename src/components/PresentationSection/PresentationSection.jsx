import React, { useState, useRef, useEffect } from 'react';
import {
	ContentWrapper,
    PresentationContent,
    TextWrapper,
    } from './PresentationSection.styles';

    import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const PresentationSection = () => {

    const { isIntersecting, elementRef } = useIntersectionObserver({
      threshold: 0.1, 
      rootMargin: '0px',
    });

   
	return (
        <ContentWrapper>
            <h2>Co sprawia, że klienci chętnie ze mną współpracują ?</h2>
            <PresentationContent>
            <TextWrapper ref={elementRef} isVisible={isIntersecting}>
                
                <p>
                    Nawiązując ze mną współpracę, możesz liczyć na osobiste zaangażowanie w Twoją sprawę. Dzięki mojemu doświadczeniu masz pewność, że Twój projekt zostanie zrealizowany zgodnie z planem i Twoimi oczekiwaniami.  
                </p>
            </TextWrapper>
            <TextWrapper isVisible={isIntersecting}>
                <p>
                    W jednym miejscu zyskujesz kompleksową pomoc – przeprowadzę Cię przez cały proces projektowy, od uzyskania warunków zabudowy, przez pomoc w zdobyciu wszelkich wymaganych zgód i decyzji administracyjnych po uzyskanie pozwolenia na budowę. 
                </p>
            </TextWrapper>
            <TextWrapper isVisible={isIntersecting}>
                <p>
                   Wykonana przeze mnie profesjonalna wizualizacja, pomoże Ci w pełni wyobrazić sobie końcowy efekt.
                </p>
            </TextWrapper>
            </PresentationContent>
            
        </ContentWrapper>
	);
};