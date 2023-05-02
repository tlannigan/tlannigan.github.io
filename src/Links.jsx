import React from 'react';
import styled from 'styled-components';

const StyledLinks = styled.div`
    display: flex;
    
    a {
        box-sizing: content-box;
        font-family: 'Rubik', Arial, Helvetica, sans-serif;
        font-size: 1.25em;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        color: #000;
        margin-left: 2em;

        &:hover {
            border-bottom: 2px solid black;
        }
    }
    
    @media only screen and (max-width: 768px) {
        a {
            margin: 0 1em;
            font-size: 1.10em;
        }
    }
`

function Links() {
    return (
        <StyledLinks className="Links">
            <a href="#about" title="Learn a bit more about me">about</a>
            <a href="https://github.com/tlannigan" target="_blank" rel="noopener noreferrer" title="My GitHub profile">github</a>
            <a href="https://www.linkedin.com/in/tristanlannigan/" target="_blank" rel="noopener noreferrer" title="My LinkedIn profile">linkedin</a>
            <a href="https://github.com/tlannigan/tlannigan.github.io/tree/source">source</a>
        </StyledLinks>
    );
}

export default Links;
