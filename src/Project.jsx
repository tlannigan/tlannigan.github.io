import React from "react";
import styled from "styled-components";

const StyledProject = styled.div`
    margin-bottom: 3em;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: fit-content;
        max-height: unset;
        overflow: visible;
    }
`;

const StyledImg = styled.img`
    width: 100%;
    object-fit: contain;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.3);

    @media only screen and (max-width: 768px) {
        flex: 1 1 50%;
        width: 100%;
    }
`;

const StyledP = styled.p`
    flex: 0 1 0;
    align-self: center;
    font-size: 18px;
    margin: 0;
    padding-bottom: 1em;

    @media only screen and (max-width: 768px) {
        flex: 1 1 50%;
    }
`;

const StyledAnchor = styled.a`
    margin-right: 1em;
`

function Project(props) {
    return (
        <StyledProject class="Project">
            {props.src ? <StyledImg src={props.src} alt={props.alt} /> : ''}
            <h3>{props.title}</h3>
            <StyledP>{props.desc}</StyledP>
            {props.href ? <StyledAnchor href={props.href}>Link to site</StyledAnchor> : ''}
            {props.source ? <StyledAnchor href={props.source}>Link to source</StyledAnchor> : (props.href ? 'Private Source' : '')}
        </StyledProject>
    );
}

export default Project;
