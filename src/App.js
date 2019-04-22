import React, { Component } from "react";
// import { useState } from 'react';
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

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

class App extends Component {
  state = {
    persons: [
      { id: "aksldkljfla", name: "Max", age: 28 },
      { id: "qwpeopqiprwq", name: "Manu", age: 29 },
      { id: "zmlxvnlzxlbk", name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };
  // switchNameHandler = ( newName ) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 26 }
  //     ]
  //   })
  // }
  nameChangedHandler = (id, e) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = e.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, idx)}
                key={person.id}
                changed={this.nameChangedHandler.bind(this, person.id)}
              />
            );
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} key/> */}
          {/* Using bind is better for performance but this also works: */}
          {/* <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={() => this.switchNameHandler('Maximilian!')} 
            changed={this.nameChangedHandler}
          >My hobbies are: Racing</Person> 
          <Person name={this.state.persons[2].name} age={this.state.persons[1].age} /> */}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <Button
          onClick={this.togglePersonsHandler}
          showPerson={this.state.showPersons}
        >
          Switch Name
        </Button>
        {persons}
      </div>
      // This happens behind the scene: return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello friend."))
    );
  }
}

//Using hooks (Introduced in React 16+)
// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 }
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//       ]
//     });
//   };
//   return (
//     <div className="App">
//       <h1>Hi I'm a react app</h1>
//       <button onClick= {switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//     </div>
//   )
// }

export default App;
