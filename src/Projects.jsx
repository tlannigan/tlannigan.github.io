import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Project = styled.div`
    flex: 0 1 50%;
    display: flex;
    flex-direction: row;
    background: red;
    overflow: hidden;
    transition: flex 1s ease-in-out;

    &:hover {
        flex: 0 1 100%;
    }

    img {
        display: block;
        width: 100%;
        object-fit: cover;
    }

    p {
        width: 100%;
    }
`

function Projects() {
    return (
        <ProjectsWrapper className="Projects">
            <Project>
                <img src="https://i.pcmag.com/imagery/lineups/06PiprC5eiYhlpaNS6N0sbP-1.fit_lim.v_1569492872.jpg" alt="First project" />
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </Project>
            <Project>
                <img src="https://www.bmmagazine.co.uk/wp-content/uploads/2018/10/shutterstock_537529714-e1540561978489.jpg" />
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </Project>
            <Project>
                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/09/4077bad7-e943-423c-a9f6-00ff35b9a664-760x400.jpeg" />
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </Project>
            <Project>
                <img src="https://i.insider.com/5aa15cc3aae57c301b8b4610?width=1125&format=jpeg" />
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </Project>
            <Project>
                <img src="https://cdn.arstechnica.net/wp-content/uploads/2017/12/goty-2017.jpg" />
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </Project>
            <Project>
                <img src="https://i.insider.com/58c1999e6e2004fa0e8b4f5e?width=750&format=jpeg&auto=webp" />
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </Project>
        </ProjectsWrapper>
    );
}

export default Projects;
