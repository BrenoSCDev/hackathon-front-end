import styled from "styled-components"

export const DropdownContent = styled.div`
    display: ${(dropdownOpen) => (dropdownOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    margin-left: 50px;
    background-color: #fff;
    color: black;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 1;
`