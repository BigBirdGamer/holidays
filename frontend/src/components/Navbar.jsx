import React from "react";
import { Link, useParams } from "react-router-dom";
import {useAtom} from "jotai"
import {userAtom} from "../App"

function Navbar() {
  const [user, setUser] = useAtom(userAtom);
  let {id} = useParams()
  return (
    <div className="navBar">
      <p>hi {user.name}</p>
      <Link to="/">Login</Link>
      <Link to="/holidays/main">Home</Link>
    
      {user.name ?  ( <Link to="/holidays/:id">Detail</Link>) :null}
    </div>
  );
}

export default Navbar;
