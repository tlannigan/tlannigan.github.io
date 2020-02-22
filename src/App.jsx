import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Projects from './Projects'
import About from './About'

const StyledApp = styled.div`

`

const MainWrapper = styled.main`
    max-width: 900px;
    margin: 6em auto 4em auto;
    padding: 0 2em;
    
    h2 {
        max-width: 600px;
        margin: 2em auto 1em auto;
    }
`

function App() {
    return (
        <StyledApp className="App">
            <Navbar />
            <MainWrapper>
                <Projects />
                <About />
            </MainWrapper>
        </StyledApp>
    );
}

export default App;
