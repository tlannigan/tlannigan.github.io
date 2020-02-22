import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 338px;
    margin-bottom: 2em;
    overflow: hidden;

    &:hover {
        img {
            flex: 0 1 75%;
        }
        
        p {
            flex: 1 0 25%;
        }
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: fit-content;
        max-height: unset;
        overflow: visible;
    }
`

const StyledImg = styled.img`
    flex: 1 0 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    transition: flex 1s ease-in-out;
    
    @media only screen and (max-width: 600px) {
        flex: 1 1 50%;
        width: 100%;
    }
`

const StyledP = styled.p`
    flex: 0 1 0;
    align-self: center;
    text-align: justify;
    margin: 0;
    padding: 2em 1em;
    transition: flex 1s ease-in-out;
    
    @media only screen and (max-width: 600px) {
        flex: 1 1 50%;
    }
`

function Project(props) {
    return (
        <StyledProject>
            <StyledImg src={props.src} alt={props.alt} />
            <StyledP>{props.desc}</StyledP>
        </StyledProject>
    );
}

export default Project;
