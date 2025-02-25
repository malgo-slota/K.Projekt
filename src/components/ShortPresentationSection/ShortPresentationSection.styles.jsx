import styled, { keyframes, css} from "styled-components";

const displayValues = keyframes`
    0% {
        opacity: 0;
            filter: blur(4px);
            transform: scale(1.5)''
    }
    100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
    }
`;

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.whiteSmoke};
    /* background-color: #E8EEEB; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 42px;
    padding: 78px 100px;
    font-weight: 100;
    text-align: center;
    font-size: 1.3rem;
    overflow: hidden;
    margin-top: 5rem;

    div:nth-child(1) { animation-delay: 0.5s; }
    div:nth-child(2) { animation-delay: 1s; }
    div:nth-child(3) { animation-delay: 1.5s; }
    div:nth-child(4) { animation-delay: 2s; }
    div:nth-child(5) { animation-delay: 2.5s; }

    div {
        opacity: 0;
         ${({ isVisible }) =>
                        isVisible &&
                            css`
                                animation: ${displayValues} 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) forwards;
                            `}
        
        height: 100%;
        width: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;     
       
        div {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.warmGrey};
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 36px;
                filter: invert(100%) sepia(5%) saturate(0%) hue-rotate(347deg) brightness(106%) contrast(104%);
            }
            ${({ theme }) => theme.mq.desktop} { 
                font-size: 42px;
                width: 70px;
                height: 70px;
            }
           
            color: ${({ theme }) => theme.color.whiteSmoke};
        }
        
    }
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        height: 450px;
        gap: 0px;
        font-size: 1.6rem;
    }
`;