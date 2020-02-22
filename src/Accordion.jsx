import React, { useState } from 'react'
import styled from 'styled-components'

const StyledAccordion = styled.div`
    margin-bottom: 1em;

    div {
        display: flex;
        align-items: center;
        cursor: pointer;

        i {
            margin-right: 1em;
        }

        h3 {
            margin: 0;
        }

        &:nth-child(2) {
            overflow: hidden;

            ol {
                margin: 0;
                padding-left: 1.9em;
            }
        }
    }
`

function Accordion(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <StyledAccordion className="Accordion">
            <div onClick={() => setExpanded(!expanded)}>
                <i className={`fas ${expanded ? 'fa-minus' : 'fa-plus'}`}></i>
                <h3>{props.name}</h3>
            </div>
            <div>
                <ol style={{maxHeight: expanded ? 'unset' : 0}}>
                    {props.items && props.items.map((item) => <p>{item}</p>)}
                </ol>
            </div>
        </StyledAccordion>
    );
}

export default Accordion;