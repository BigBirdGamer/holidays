import React from 'react'

function Login() {
  return (
    <div>
        <fieldset>
        <form action="" method="post" >
        <input type="text" placeholder="Enter Username" name="uname" required />
        <input type="password" placeholder="Enter Password" name="psw" required></input>
        <button type="submit">Login</button>
        </form>
        </fieldset>
    </div>
  )
}

export default Login