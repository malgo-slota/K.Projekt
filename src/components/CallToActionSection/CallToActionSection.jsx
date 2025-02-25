import React from 'react';
import { Link } from 'gatsby';
import { ContentWrapper } from './CallToActionSection.styles'
import { StyledButton } from '../ContactForm/ContactForm.styles';
import arrowIcon from 'src/assets/images/free_icon_1.svg'

export const CallToActionSection = () => {
   
	return (
        <ContentWrapper>
            <p>Zrób pierwszy krok <span>– ja zajmę się resztą!</span></p>
            <StyledButton>
                <Link to="/kontakt">
					Skontaktuj się
				</Link>
               <img src={arrowIcon} />
            </StyledButton>
        </ContentWrapper>
	);
};