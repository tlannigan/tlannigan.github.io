import React from 'react';
import styled from 'styled-components';

const StyledLinks = styled.div`
    display: flex;
    
    a {
        font-family: 'Rubik', Arial, Helvetica, sans-serif;
        font-size: 1.25em;
        text-decoration: none;
        color: #000;
        margin-left: 2em;

        &:hover {
            text-decoration: underline;
        }
    }
`

function Links() {
    return (
        <StyledLinks className="Links">
            <a href="/">about</a>
            <a href="/">github</a>
            <a href="/">linkedin</a>
            <a href="/">source</a>
        </StyledLinks>
    );
}

export default Links;
