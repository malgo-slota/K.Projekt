import styled from "styled-components";

export const DropdownWrapper = styled.div`
   
`;
  
export const DropdownBtn = styled.button`
    font-size: 26px;
    background: none;
    border: none;
    transform: rotate(-90deg);
    position: absolute;
    right: 15px;
    top: 25%;
`;

export const Menu = styled.ul`
    position: absolute;
    right: 0;
    list-style-type: none;
    margin: 5px 0;
    padding: 0;
    border: 1px solid grey;
    font-size: 14px;

  li {
    margin: 0;
    background-color: white;
    p {
        width: 100%;
        height: 100%;
        text-align: left;
        background: none;
        color: inherit;
        border: none;
        padding: 5px;
        margin: 0;
        font: inherit;
        cursor: pointer;
    }
  }
    li:hover {
        background-color: ${({ theme }) => theme.color.whiteSmoke};
    }
`;
 
