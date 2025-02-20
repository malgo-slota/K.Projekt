import styled, {keyframes, css} from 'styled-components'

const slideIn = keyframes`
    to {
       transform: translateY(0%);
       opacity: 1;
       filter: blur(0);
    }
`;

export const SectionWrapper = styled.section`
    padding: 60px 0.7rem;
    h2 {
        font-size: 2.25rem;
	    line-height: 2.875rem;
        font-weight: 100;
        margin-bottom: 1.5rem;
    }
    a {
        text-decoration: underline;
    }
    a:visited { 
        color: ${({ theme }) => theme.color.smoke};
    }
    ${({ theme }) => theme.mq.desktop} {
        padding: 100px 5rem;
    }
`;

export const OfferWrapper = styled.div`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    gap: 55px;
    min-height: 920px;
    position: relative;
    overflow: hidden; 
    div {
            position: absolute;
           
            top: 0; 
            transform: translateY(100%);
            opacity: 0;
            filter: blur(5px);
            ${({ isVisible }) =>
            isVisible &&
                css`
                    animation: ${slideIn} 1s forwards;
            `}
        p {
            color: ${({ theme }) => theme.color.warmGrey};
        }
    }

    div:nth-child(1) {
            animation-delay: 0s;
            top: 0;
    }
    div:nth-child(2) {
            animation-delay: 0.2s;
            top: 30%;
    }
    div:nth-child(3) {
            animation-delay: 0.4s;
            top: 60%;
    }

    ${({ theme }) => theme.mq.tablet} {
        min-height: 320px;
        div {
            width: 250px;
        }
        div:nth-child(1) {
            animation-delay: 0s;
            left: 0;
    }
    div:nth-child(2) {
            animation-delay: 0.2s;
            left: 35%;
            top: 0;
    }
    div:nth-child(3) {
            animation-delay: 0.4s;
            left: 70%;
            top:0;
    }

       
    }
    ${({ theme }) => theme.mq.desktop} {
        div {
            width: 350px;
        }
    }
`;