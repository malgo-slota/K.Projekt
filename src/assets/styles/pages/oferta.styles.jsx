import styled from "styled-components";

export const OfferContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubtitleText = styled.div`
    text-align: center;
    margin-top: 1.5rem;
    p {
        font-size: 1.5rem;
        line-height: 2.125rem;
        font-weight: 100;
    }
    p:nth-child(2) {
        font-size: 1rem;
        line-height: 1.625rem;
    }
    a {
        font-weight: 400;
        text-decoration: underline;
        padding: .5rem;
    }
    a:visited { 
        color: ${({ theme }) => theme.color.smoke};
    }
`;

export const OfferGrid = styled.div`

    margin: 0 12px;
    display: grid;
    ${({ theme }) => theme.mq.tablet} {
        padding: 0 100px;
        grid-template-columns: 1fr 1fr;
        gap: 36px;
    }
    ${({ theme }) => theme.mq.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 36px;
    }
`;

export const OfferWrapper = styled.div`
    min-height: 425px;
    border-bottom: 2px solid ${({ theme }) => theme.color.smoke};
    margin-bottom: 12px;
    h2 {
        margin-bottom: 16px;
        font-size: 18px;
        span {
            /* background-color: #6F8982; */
            /* padding: 8px 0px; */
        }
    }
    p {
      color: ${({ theme }) => theme.color.warmGrey};
    }
`;