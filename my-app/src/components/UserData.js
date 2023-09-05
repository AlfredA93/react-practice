import React from 'react'

function UserData(props) {
  return (
    <div>
      {/* If isLoaded = True, render 'Data Loaded' */}
      <h1>{props.isLoaded ? 'Data loaded!' : 'Loading....'}</h1>
    </div>
  )
}

export default UserData