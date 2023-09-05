import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoaded: true,
            isLoggedIn: true,
        }
    }
    render() {
        return (
        <div>
            {/* If isLoaded = True, render 'Data Loaded' */}
            <h1>{this.state.isLoaded ? 'Data loaded!' : 'Loading....'}</h1>
            
            {/* If isLoggedIn = True, render 'welcome + list', else 'sign in' */}
            {this.state.isLoggedIn ? ( 
                <div>
                    <p>Welcome to the site! Please complete the steps below:</p>
                    <ol>
                        <li>Confirm your email</li>
                        <li>Complete your profile</li>
                        <li>Subscribe to the newsletter</li>
                    </ol>
                </div>
            ) : (
                <p>Please Sign In</p>
            )}
        </div>
        )
    }
}


export default ConditionalRenderingClass