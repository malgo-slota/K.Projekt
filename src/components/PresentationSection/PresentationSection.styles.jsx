import styled, { keyframes, css }  from 'styled-components';
 
const displayContent = keyframes`
	0% {
    	opacity: 0;
			transform: translate3d(0, 60px, 0);
  	}
  	100% {
    	opacity: 1;
			transform: translate3d(0, 0 ,0);
  	}
`;

export const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    margin: 40vh 0.7rem;
    h2 {
        font-weight: 100;
        font-size: 2.25rem;
	    line-height: 2.875rem;
    }
    ${({ theme }) => theme.mq.tablet} {
        height: 100vh;
        margin: 0 0.7rem;
    }
    ${({ theme }) => theme.mq.desktop} {
        margin: 0 3.5rem;
    }
`;

export const PresentationContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;
        gap: 1.5rem;
        div {
           
        }
    }
    ${({ theme }) => theme.mq.desktop} {
        gap: 3.5rem;
    }
`;

export const TextWrapper = styled.div`
    opacity: 0;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.color.green};
    color: ${({ theme }) => theme.color.whiteSmoke};
    flex: 1 1 100%;
    padding: 2.5rem 1.5rem;
    box-shadow: 0px 16px 40px rgba(35, 68, 61, 0.3);
    ${({ isVisible }) =>
      isVisible &&
          css`
              animation: ${displayContent} 1s forwards;
    `}
    p {
      font-weight: 100;
      font-size: 1rem;
      line-height: 32px;
    }
    ${({ theme }) => theme.mq.desktop} {
            max-width: 670px;
            padding: 46px;
    }
`;