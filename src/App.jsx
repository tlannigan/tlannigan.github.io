import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Project from './Project'

const StyledApp = styled.div`

`

const MainWrapper = styled.main`
    max-width: 900px;
    margin: 2em auto;
    padding: 0 2em;
`

function App() {
    return (
        <StyledApp className="App">
            <Navbar />
            <MainWrapper>
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
            </MainWrapper>
        </StyledApp>
    );
}

export default App;
