import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, idx) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        click={() => props.clicked(idx)}
        key={person.id}
        changed={e => props.changed(e, person.id)}
      />
    );
  });

export default persons;
