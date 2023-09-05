import React from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>
      {/* If isLoggedIn = True, render 'welcome + list', else 'sign in' */}
      {props.isLoggedIn ? ( 
                <div>
                    <p>Welcome to the site! Please complete the steps below:</p>
                    <ol>
                        <li>Confirm your email</li>
                        <li>Complete your profile</li>
                        <li>Subscribe to the newsletter</li>
                    </ol>
                    <button onClick={props.handleSignOut}>Sign Out</button>
                </div>
            ) : (
              <div>
                <p>Please Sign In</p>
                <button onClick={props.handleSignIn}>Sign In</button>
              </div>
            )}
    </div>
  )
}

export default MethodsAsPropsChild