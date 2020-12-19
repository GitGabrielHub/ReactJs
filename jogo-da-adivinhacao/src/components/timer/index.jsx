import React from 'react'
import { Span } from '../text'

export default class Timer extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            currentTime: 0
        }
    }

    tick = () => {
        this.setState((prevState, props) => ({
            currentTime: prevState.currentTime + 1
        }))
        this.props.getTime(this.getFormatTime(this.state.currentTime))
    }

    componentDidMount(){
        setInterval(() => this.tick(), 1000)
    }

    getFormatTime(seconds){
        const format = val => `0${Math.floor(val)}`.slice(-2)
        const hours = seconds / 3600
        const minutes = (seconds % 3600) / 60
      
        return [hours, minutes, seconds % 60].map(format).join(':')
    }

    render(){
        return (<Span fontSize = '2.2rem'>
            {this.getFormatTime(this.state.currentTime)}
        </Span>)
    }
}