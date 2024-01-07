import React, { Component } from "react";
// Spreading values when updating objects promotes immutability,
// helps prevent unintentional side effects,
// aligns with functional programming principles, and contributes to a more consistent and maintainable codebase.

export class Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        firstName: "",
        lastName: "",
      },
    };
  }

  printName = (event) => {
    const { name, value } = event.target;
    this.setState({
      name: {
        ...this.state.name,
        [name]: value,
      },
    });
  };

  render() {
    const { firstName, lastName } = this.state.name;
    return (
      <form>
        <input
          type="text"
          onChange={this.printName}
          value={firstName}
          name="firstName"
        />
        <input
          type="text"
          onChange={this.printName}
          value={lastName}
          name="lastName"
        />
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
      </form>
    );
  }
}

export default Class;
