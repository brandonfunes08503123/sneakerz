import React from 'react';
import { Link } from 'react-router-dom'


/**
 * Navbar should render the same links whether or not
 * they're logged in or not.
 * 
 * Actually, I don't think that's true
 * 
 *  if logged in, show sign out button
 *  if logged out, show in button
 * 
 *  everything else stays the same
 */

const Navbar = ({currentUser, logout}) => {
    
    const loggedIn = () => {
        return(
            <div>
               <button onClick={() => logout()}>Sign Out</button>
            </div>
        )
    }

    const loggedOut = () => {
        return(
            <div>
                <Link to="">Sign In</Link> 
                <Link to="">Sign Out</Link>
            </div>
        )
    }

    console.log(`Current User: ${currentUser}`)
    return currentUser === undefined ? loggedOut() : loggedIn();
}

export default Navbar;