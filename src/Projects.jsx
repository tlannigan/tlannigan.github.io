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
                src='./ordr.png'
                alt='Ordr app'
                title='Ordr Android App'
                desc='Food delivery app for sports stadiums, with integrated delivery service and third-party POS and inventory integrations.'
                href='https://play.google.com/store/apps/details?id=com.ordr.app' />
            <Project
                src='./apollo.jpg'
                alt='Apollo app'
                title='Apollo - Overwolf App'
                desc='Gaming app centered around providing new and unique audio experiences in games that don&apos;t already provide it, enhancing player experiences. Uses user preferences over time to recommend the best music in the moment for the player. Primarily worked frontend, audio streaming system, and database planning.'
                href='https://www.overwolf.com/app/Players_Republik-Apollo' />
            <Project
                src='./vidcruiter.png'
                alt='VidCruiter website'
                title='VidCruiter'
                desc='Home of VidCruiter&apos;s flagship product. Improved performance and SEO practices of VidCruiter&apos;s PHP site. Worked on custom WordPress theme, produced and implemented new frontend designs.'
                href='https://vidcruiter.com/' />
            <Project
                src='./bgcdieppe.png'
                alt='Boys &amp; Girls Club of Dieppe website'
                title='Boys &amp; Girls Club of Dieppe'
                desc='Home of Boys &amp; Girls Club of Dieppe for communicating schedules, updates, and other event info. Built from a skeleton theme for WordPress while I attended college.'
                href='http://bgcdieppe.ca'
                source='https://github.com/tigerwil/bgc-dieppe' />
            <Project
                src='./lannigandojo.png'
                alt='Lannigan Dojo website'
                title='Lannigan Dojo'
                desc='Planned website for Lannigan Dojo in Moncton, NB' />
            <Project
                title='License Plate OCR'
                desc='Developed for the specific needs of the police students at my college. Allows the user to easily scan a license plate in real-time video and know immediately whether the car belongs to a student.'
                source='https://github.com/tlannigan/license-plate-ocr' />
            <Project
                title='Minecraft OSRS Datapack'
                desc='The OSRS datapack is an attempt to recreate the popular MMORPG of Old School RuneScape. Datapacks are made using the rudimentary Minecraft "Command" language, allowing the developer to store and retrieve data at specific addresses.'
                source='https://github.com/tlannigan/osrs-progression' />
        </StyledProjects>
    );
}

export default Projects;