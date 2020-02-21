import React from 'react'
import styled from 'styled-components'

import Links from './Links'

const NavbarWrapper = styled.nav`
    position: sticky;
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
        margin: 0;
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
