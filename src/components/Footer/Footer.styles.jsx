import styled from 'styled-components';

export const StyledFooter = styled.div`
    padding-bottom: 78px;
    padding-top: 40px;
    /* background-color: ${({ theme }) => theme.color.whiteSmoke}; */
    background-color:  hsl(51, 14%, 90%);
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
            padding-inline-start: 0px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            a {
                color: black;
            }
        }
    }
    div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 45px;
    }
`;

export const FooterLogo = styled.img`
    width: 45px;
`;

export const FooterBottom = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 11px;
    color: ${({ theme }) => theme.color.warmGrey};
    a {
        text-decoration: underline;
    }
    a:visited { 
                    color: ${({ theme }) => theme.color.warmGrey};
                }
    ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;
        gap: 40px;
    }
`;