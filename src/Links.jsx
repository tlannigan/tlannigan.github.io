import React from 'react';
import styled from 'styled-components';

const StyledLinks = styled.div`
    display: flex;
    
    a {
        color: #000;
        text-decoration: none;
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
