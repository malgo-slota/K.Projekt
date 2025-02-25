import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 12px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;  
    label {
      margin: 15px 0 0;
      font-size: small;
    }
    input {
      height: 54px;
    }

    input,
    textarea {
      background-color: #f5f5f5;
      border: none;
      border-radius: 16px;
      font-family: ${({ theme }) => theme.font.family.montserrat};
      resize: none;
      padding: 0 24px;
    }

    textarea {
      min-height: 200px;
      padding: 20px 24px;
    }
   
`;

export const DropdownField = styled.div`
 position: relative;
  input {
    width: 100%;
  }
`;

export const PrivacyPolicy = styled.div`
  font-size: 12px;
  line-height: normal;
  display: flex;
  align-items: center;
  a {
    text-decoration: underline;
  }
`;

export const StyledButton = styled.button`
    border-radius: 16px;
    align-self: center;
    background: ${({ theme }) => theme.color.green};
    border: none;
    box-shadow: 0px 16px 40px rgba(35, 68, 61, 0.2);
    padding: 1.25rem;
    color: white;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease-in-out;
    margin-top: 1.5rem;
    a, p {
      padding-left: 16px;
      color: white;
    }
    img {
      width: 18px;
			filter: invert(100%) sepia(5%) saturate(0%) hue-rotate(347deg) brightness(106%) contrast(104%);
      opacity: 0;
      transform: translate(100%);
      transition: opacity .15s ease;
    }
    &:hover {
      padding-right: 2rem;
      background: #165438;

      img {
        opacity: 1;
        transform: translate(50%);
        transition: .25s ease .1s;
      }
    }
`;
