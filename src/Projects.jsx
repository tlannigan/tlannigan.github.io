import React from 'react'
import styled from 'styled-components'

import Project from './Project'

const StyledProjects = styled.div`

`

function Projects() {
    return (
        <StyledProjects className="Projects">
            <h2>projects</h2>
            <Project
                src='https://animatedanatomy.com/images/16-9-dummy-image6.jpg'
                alt='First project'
                desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
            />
            <Project
                src='https://animatedanatomy.com/images/16-9-dummy-image6.jpg'
                alt='First project'
                desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
            />
            <Project
                src='https://animatedanatomy.com/images/16-9-dummy-image6.jpg'
                alt='First project'
                desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
            />
            <Project
                src='https://animatedanatomy.com/images/16-9-dummy-image6.jpg'
                alt='First project'
                desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
            />
            <Project
                src='https://animatedanatomy.com/images/16-9-dummy-image6.jpg'
                alt='First project'
                desc='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
            />
        </StyledProjects>
    );
}

export default Projects;