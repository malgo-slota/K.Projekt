import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'gatsby';
import { SectionWrapper, OfferWrapper } from './OfferSection.styles'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const OfferSection = () => {

 const { isIntersecting, elementRef } = useIntersectionObserver({
        threshold: 0.5,
        rootMargin: '0px',
      });

	return (
        <SectionWrapper>
            <h2>Jakie usługi Oferuję?</h2>
            <OfferWrapper ref={elementRef} isVisible={isIntersecting}>
                <div>
                    <h3>Projekty</h3>
                    <p>Opracowywanie od podstaw projektów budynków mieszkalnych, domów jednorodzinnych, wnętrz oraz budynków użytku publicznego, produkcyjnych i usługowych.</p>
                </div>
                <div>
                    <h3>Adaptacje</h3>
                    <p>Dostosowanie gotowych projektów do indywidualnych potrzeb klienta, zmiany sposobu użytkowania, przystosowywanie istniejących budynków do nowych funkcji i potrzeb.</p>
                </div>
                <div>
                    <h3>Doradztwo i pomoc</h3>
                    <p>Pomoc przy uzyskaniu niezbędnych pozwoleń, nawigowanie i fachowe doradztwo w zakresie architektury, konstrukcji i instalacji przez cały proces projektowy.</p>
                </div>
            </OfferWrapper>
            <p>Zobacz pełen zakres usług <Link to="/oferta">Oferta</Link></p>
        </SectionWrapper>
	);
};