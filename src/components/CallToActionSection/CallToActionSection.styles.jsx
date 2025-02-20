import styled from 'styled-components';

export const ContentWrapper = styled.section`
    background-color: ${({ theme }) => theme.color.whiteSmoke};
    /* background-color: #303030; */
    font-weight: 100;
    height: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    gap: 36px;
    p {
        font-size: 36px;
        line-height: 36px;
        text-align: center;
        span {
            font-size: 26px;
        }
    }
`;