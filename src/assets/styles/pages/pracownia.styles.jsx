import styled from "styled-components";

export const SubpageContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 72px;
    ~p {
        border: 1px solid blue;
    }
`;

export const Content = styled.div`
    padding: 24px;
    background-color: hsl(0, 0%, 96%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        padding: 0;
    }
`;

export const StyledTitle = styled.div`
   text-align: center;
   margin-bottom: 24px;
`;

export const TextContent = styled.div`
    order: 1;
    color: hsl(48, 2%, 57%);
    h2 {
        color: hsl(0, 0%, 19%);
        font-size: 32px;
        font-weight: 400;
    }
    
    ${({ theme }) => theme.mq.desktop} {
        order: 0;
        width: 50%;
        padding: 108px;
    }
`;

export const ProfilePicture = styled.div`
    background-image: url('${({ imageSource }) => imageSource}');
	background-size: cover;
    width: 160px;
	height: 160px;
    ${({ theme }) => theme.mq.desktop} {
        width: 360px;
        height: 360px;
    }
`;
