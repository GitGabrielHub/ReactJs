import React, { Component, useState } from 'react'

export default class Counter extends Component {

    state = {
        count: this.props.initValue || 0,
        pass: this.props.pass || 1
    }

    increment = () => {
        this.setState({ count: this.state.count + this.state.pass })
    }
    decrement = () => {
        this.setState({ count: this.state.count - this.state.pass })
    }

    render() {

        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <label htmlFor="passInput">Pass: </label>
                    <input id= "passInput" type="number" style = {{fontSize: '1.4rem', width: '60px'}} onChange={e => { this.setState({ pass: +e.target.value }) }}></input>
                </div>
                <h4>{this.state.count}</h4>

                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }

}