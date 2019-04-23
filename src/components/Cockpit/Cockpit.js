import React from "react";
import styled from "styled-components";
import "./Cockpit.css";

const Button = styled.button`
  background-color: ${props => (props.showPerson ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  :hover {
    background-color: ${props => (props.showPerson ? "salmon" : "lightgreen")};
    color: black;
  }
`;

const cockpit = props => {
  const assignedClasses = [];
  if (props.length <= 2) {
    assignedClasses.push("red");
  }
  if (props.length <= 1) {
    assignedClasses.push("bold");
  }
  return (
    <div className="Cockpit">
      <h1>Hi I'm a react app</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <Button onClick={props.click} showPerson={props.show}>
        Switch Name
      </Button>
    </div>
  );
};

export default cockpit;
