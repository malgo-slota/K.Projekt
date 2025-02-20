import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from 'src/assets/images/Logo.png'

import {
	OuterWrapper,
    StyledLogo,
	StyledBurger,
	StyledNavigation,
	Wrapper,
} from './Navigation.styles';


export const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavigation = () => setIsOpen((prevState) => !prevState);
	  
	return (
		<OuterWrapper>
            <Link to="/">
                <StyledLogo src={Logo} />
			</Link>
            <StyledBurger onClick={toggleNavigation} isOpen={isOpen}>
				<span />
				<span />
				<span />
			</StyledBurger>
            <Wrapper isOpen={isOpen}>
				<StyledNavigation>
					<ul>
						<li>
							<Link onClick={toggleNavigation} to="/pracownia">
								Pracownia
							</Link>
						</li>
						<li>
							<Link onClick={toggleNavigation} to="/oferta">
								Oferta
							</Link>
						</li>
						<li>
							<Link onClick={toggleNavigation} to="/kontakt">
								Kontakt
							</Link>
						</li>
					</ul>
				</StyledNavigation>
			</Wrapper>
        </OuterWrapper>
	);
};