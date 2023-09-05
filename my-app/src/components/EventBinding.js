import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",

        };
        this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState(
    //         {
    //         introduction: "Goodbye",
    //         buttonText: "Enter",
    //         }
    //     );
    //     console.log(this.state.introduction)
    // }

    handleClick = () => { // Use this method for all event handlers, unless you need to pass parameters to the function.
        this.setState(
            {
            introduction: "Goodbye",
            buttonText: "Enter",
            }
        );
        console.log(this.state.introduction)
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                {/* <button onClicl={() => this.handleClick()}></button>     // If you need to pass parameters use this method.*/}
                {/* <button onClick={this.handleClick.bind(this)}></button> */}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding;