import React from 'react'
import styled from 'styled-components'

import Skills from './Skills'

const StyledAbout = styled.div`
    p {
        font-size: 18px;
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
                to learn something new. 
                My professional experiences heavily favour Android and JavaScript, however I have experience working with Python and
                C# on my own personal projects, as well as some unconventional languages. In my spare time I develop web apps, Discord and Slack bots, and video game mods.
            </p>
            <Skills />
        </StyledAbout>
    );
}

export default About;