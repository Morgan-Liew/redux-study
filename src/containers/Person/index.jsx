import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {createAddPersonAction} from '../../redux/actions/person'
import { connect } from "react-redux";

class Person extends Component {

    addPerson = () =>{
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = {id:nanoid(),name,age}
        // console.log(personObj)
        this.props.addPerson(personObj)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>the component of Person</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ol>
                    {
                        this.props.persons.map((p) => {
                            return <li key={p.id}>{p.name} --- {p.age}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default connect(
    state => ({ persons: state.rens }),
    // mapDispatchToProps 简写
    {
      addPerson:createAddPersonAction
    }
  )(Person);
  
  