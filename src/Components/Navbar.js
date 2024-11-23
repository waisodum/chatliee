import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                Nutrii
            </div>
            <menu>
                <div>
                    <a className='menu-options' href='.'>Locate Store</a>
                </div>
                <div>
                    <a className='menu-options' href='.'>Community</a>
                </div>
                <div>
                    <a className='menu-options' href='.'>Consult Specialist</a>
                </div>
                <div>
                    <a className='menu-options' href=".">Profile</a>
                </div>
            </menu>
        </nav>
    )
}

export default Navbar