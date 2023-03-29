import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isCounting: false
        }
    }

    componentDidMount() {
        const userCount = localStorage.getItem('timer')
        if(userCount) {
            this.setState({count : + userCount})
        }
    }

    componentDidUpdate() {
        localStorage.setItem('timer',this.state.count)
    }

    handleStart = () => {
        this.setState({ isCounting: true })

        this.countId = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)
    }
    handleStop = () => {
        this.setState({ isCounting: true })
        clearInterval(this.countId)
    }

    handleReset = () => {
        this.setState({ isCounting: false, count: 0 })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                {
                    !this.state.isCounting ? (
                        <button onClick={this.handleStart}>Start</button>
                    ) : (
                        <button onClick={this.handleStop}>Stop</button>
                    )
                }
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Counter