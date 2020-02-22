import React from 'react'
import styled from 'styled-components'

import Links from './Links'

const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background: #FFF;
    box-shadow: 0px 5px 8px 0px #A08D91;

    > div {
        max-width: 900px;
        padding: 0 2em;
    }
`

const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    margin: 0 auto;
    
    h1 {
        font-family: 'Rubik Mono One', Arial, Helvetica, sans-serif;
        margin: 0;
    }
    
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

function Navbar() {
    return (
        <NavbarWrapper className="Navbar">
            <NavbarContent>
                <h1>TRISTAN LANNIGAN</h1>
                <Links />
            </NavbarContent>
        </NavbarWrapper>
    );
}

export default Navbar;
