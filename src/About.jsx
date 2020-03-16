import React from 'react'
import styled from 'styled-components'

import Skills from './Skills'

const StyledAbout = styled.div`
    max-width: 600px;
    margin: 0 auto;

    p {
        line-height: 1.5;
    }
`

function About() {
    return (
        <StyledAbout className="About" id="about">
            <h2>about</h2>
            <p>
                As a developer the most exciting part of my day is learning new things, whether it be a new technology,
                a new pattern, or just a deeper understanding of how something works. My most important goal everyday is
                to expand my personal toolset. 
                My professional experiences heavily favour JavaScript, however I have experience working with Python and
                Java on my own personal projects, as well as some unconventional languages.
            </p>
            <Skills />
        </StyledAbout>
    );
}

export default About;