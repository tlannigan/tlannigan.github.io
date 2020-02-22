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
                to expand my personal toolset. My professional experiences heavily favour JavaScript, however I have
                experience working with Python and Java on my own personal projects.
            </p>
            <p>
                I have always been that person in my family that everyone turns to for anything remotely IT related. I honed
                my craft over time, learning to do simple and then more complex things on my own. The fact that I always
                have more questions than answers in development has kept my going throughout the years.
            </p>
            <Skills />
        </StyledAbout>
    );
}

export default About;