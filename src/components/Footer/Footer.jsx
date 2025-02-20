import React from "react";
import { Link } from "gatsby";
import Logo from 'src/assets/images/Logo.png'
import { StyledFooter, FooterLogo, FooterBottom } from "./Footer.styles";

export const Footer = () => {
    return (
            <StyledFooter>
                <div>
                    <Link to="/">
                            <FooterLogo src={Logo} />
                    </Link>
                    <ul>
                        <li>
                            <Link to="/pracownia">
                                Pracownia
                            </Link>
                        </li>
                        <li>
                            <Link to="/oferta">
                                Oferta
                            </Link>
                        </li>
                        <li>
                            <Link to="/kontakt">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
        
                <span><hr/></span>

                <FooterBottom>
                    <span>Projekt i realizacja M.Słota</span>
                    <span>©2025 K.Projekt. All rights reserved.</span>
                    <span>
                    <Link to="/privacypolicy">
                        Privacy Policy
                    </Link>
                   </span>
                </FooterBottom>
            </StyledFooter>
    );
}