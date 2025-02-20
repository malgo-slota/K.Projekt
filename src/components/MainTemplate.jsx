import * as React from 'react';
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import PropTypes from 'prop-types';
import { Navigation } from 'components/Navigation/Navigation';
import { Footer } from 'components/Footer/Footer';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from '@reach/router';
import styled, { keyframes } from 'styled-components';


const PageContainer = styled.div`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
`;


export const MainTemplate = ({ children }) => {

    const location = useLocation();

    return (
        <>
              <GlobalStyle />
              <ThemeProvider theme={theme}>
                <Navigation />
                <TransitionGroup>
                  <CSSTransition key={location.key} timeout={500} classNames="fade">
                    <PageContainer>
                      <main>
                        {children}
                      </main>
                    </PageContainer>
                  </CSSTransition>
                </TransitionGroup>
                <Footer />
            </ThemeProvider>
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};