import React from 'react'
import styled from 'styled-components'

import Accordion from './Accordion'

const StyledSkills = styled.div`

`

function Skills() {
    return (
        <StyledSkills className="Skills">
            <p>
                If you're in love with keywords or from a recruiting agency, check out these skill lists
                that I've ranked from highest to least familiarity.
            </p>
            <Accordion name="Languages" items={['JavaScript', 'Java', 'Python', 'SQL', 'C++']} />
            <Accordion name="Frameworks" items={['React', 'jQuery', '']} />
        </StyledSkills>
    );
}

export default Skills;