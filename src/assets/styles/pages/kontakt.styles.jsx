import styled from "styled-components";

export const SubpageContact = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SecondaryText = styled.p`
   color: ${({ theme }) => theme.color.warmGrey};
   max-width: 830px;
   font-size: 18px;
   line-height: 28px;
   margin: 12px;
  text-align: center;
`;

export const ContactPhone = styled.div`
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;    
    a {
      color: ${({ theme }) => theme.color.smoke};
      text-decoration: underline;
    }
`;

export const FormContainer = styled.div`
  ${({ theme }) => theme.mq.desktop} {
      display: flex;
      justify-content: center;
      /* gap: 60px; */
    }
`;

export const MapWrapper = styled.div`
  width: 100%;
  margin: 64px 0;
  iframe {
    border: 0;
  }  
`;
