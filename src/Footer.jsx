import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    p {
        font-size: 12px;
        margin-top: 3em;
    }
`

function Footer() {
    return (
        <StyledFooter className="Footer">
            <p>Tristan Lannigan &copy; 2020 - brought to you in part by <a href="https://stackoverflow.com">Stack Overflow</a></p>
        </StyledFooter>
    );
}

export default Footer;