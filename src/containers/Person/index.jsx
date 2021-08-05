import React, { Component } from 'react'

export default class Person extends Component {

    addPerson = () =>{
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        console.log(name,age)
    }

    render() {
        return (
            <div>
                <h2>the component of Person</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    <li>名字1 -- 年龄1</li>
                    <li>名字2 -- 年龄2</li>
                    <li>名字3 -- 年龄3</li>
                    <li>名字4 -- 年龄4</li>
                </ul>
            </div>
        )
    }
}
