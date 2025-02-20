import React from 'react';
import { Link } from 'gatsby';
import { ContentWrapper } from './CallToActionSection.styles'
import { StyledButton } from '../ContactForm/ContactForm.styles';
import { GoArrowRight } from "react-icons/go";

export const CallToActionSection = () => {
   
	return (
        <ContentWrapper>
            <p>Zrób pierwszy krok <span>– ja zajmę się resztą!</span></p>
            <StyledButton>
                <Link to="/kontakt">
					Skontaktuj się
				</Link>
                <GoArrowRight />
            </StyledButton>
        </ContentWrapper>
	);
};