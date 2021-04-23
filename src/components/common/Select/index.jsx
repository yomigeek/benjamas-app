import React from "react";
import Select from "./styles";
import ArrowDown from "../../../assets/images/arrow-down.svg";

const SelectDropdown = ({
  name,
  options,
  updateHandler,
  arrowClass,
  value,
  ...props
}) => {
  return (
    <>
      <div
        style={{
          position: "relative",
          float: props.boxPosition ? props.boxPosition : "",
        }}
      >
        <Select name={name} value={value} onChange={updateHandler}>
          {options.map((option) => {
            return (
              <option
                value={option.value}
                key={`select-dropdown-${option.value}`}
              >
                {option.text}
              </option>
            );
          })}
        </Select>
        <span>
          <img src={ArrowDown} alt="pic"/>
        </span>
      </div>
    </>
  );
};

export default SelectDropdown;
