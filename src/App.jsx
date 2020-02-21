import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Projects from './Projects'

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
                <Projects />
            </MainWrapper>
        </StyledApp>
    );
}

export default App;
