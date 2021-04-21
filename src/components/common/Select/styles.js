import styled from "styled-components";

const Select = styled.select`
  display: inline-block;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #fff;
  transition: 0.3s;
  background: #fff;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: fit-content;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #000000;
  & + span {
    position: relative;
    top: -2px;
    right: 34px;
    color: #344563;
  }
`;

export default Select;
