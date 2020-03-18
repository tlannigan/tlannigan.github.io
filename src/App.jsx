import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'

const StyledApp = styled.div`

`

const MainWrapper = styled.main`
    max-width: 900px;
    margin: 6em auto 0 auto;
    padding: 0 2em;
    
    h2 {
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
                <Footer />
            </MainWrapper>
        </StyledApp>
    );
}

export default App;
