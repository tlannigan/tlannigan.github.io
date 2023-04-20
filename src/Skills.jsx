import React from 'react'
import styled from 'styled-components'

import Accordion from './Accordion'

const StyledSkills = styled.div`
    p {
        font-size: 18px;
        margin-bottom: 2em;
    }
`

function Skills() {
    return (
        <StyledSkills className="Skills">
            <p>
                If you're in love with keywords or you are from a recruiting agency, check out these skill lists
                that I've ranked from highest to least familiarity.
            </p>
            <Accordion name="Languages" items={['JavaScript', 'Kotlin', 'Java', 'TypeScript', 'SQL', 'Python', 'PHP']} />
            <Accordion name="Technologies" items={['Android', 'Angular', 'React', 'Node.js', 'Git', 'Jira', 'jQuery', 'GraphQL', 'Docker']} />
            <Accordion name="Platforms" items={['AWS', 'GitHub', 'Atlassian', 'Azure']} hidden='Stack Overflow' />
        </StyledSkills>
    );
}

export default Skills;