import React, { Component } from "react";
import { nanoid } from "nanoid";
import { addPerson } from "../../redux/actions/person";
import { connect } from "react-redux";
import "./index.css";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    // console.log(personObj)
    this.props.addPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>
          the component of Person,
          <br />
          <small className="sum">
            the sum of Component Count : {this.props.sum}
          </small>
        </h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        &nbsp;&nbsp;
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        &nbsp;&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ol>
          {this.props.persons.map((p) => {
            return (
              <li key={p.id}>
                {p.name} --- {p.age}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default connect(
  (state) => ({ persons: state.persons, sum: state.count }),
  // mapDispatchToProps 简写
  {
    addPerson,
  }
)(Person);
