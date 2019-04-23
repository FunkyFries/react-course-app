import React, { Component } from "react";
// import { useState } from 'react';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import "./App.css";

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
  nameChangedHandler = (e, id) => {
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
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit
          length={this.state.persons.length}
          show={this.state.showPersons}
          click={this.togglePersonsHandler}
        />
        {persons}
      </div>
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
