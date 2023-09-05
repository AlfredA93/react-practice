import React from 'react'

function UserMessage(props) {
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
                </div>
            ) : (
                <p>Please Sign In</p>
            )}
    </div>
  )
}

export default UserMessage