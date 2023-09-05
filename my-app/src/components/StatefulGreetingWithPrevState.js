import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    // handleClick() {
    //     this.setState({
    //         introduction: this.state.introduction === "Hello" ? "Goodbye" : "Hello", // Ternary Conditional Statement
    //         buttonText: this.state.buttonText === "Exit" ? " Enter" : "Exit",
    //         }, ()=>{
    //         console.log("new state", this.state.introduction);
    //         console.log("new state", this.state.buttonText);
    //         }
    //     );
    // }

    handleClick() {
        this.setState((prevState, prevProps)=>{
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello", // Ternary Conditional Statement
                buttonText: prevState.buttonText === "Exit" ? " Enter" : "Exit",
            }
        });
    }

    

    handleCount() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.handleCount()}>Click</button>
                <p>You have clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;