
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'


export default function NavLinks({ showNavMenu, css }) {
    let isShowing = showNavMenu
    const toLink = useRef(['/'])
    const router = useRouter()
    const [positionNav, setPositionNav] = useState('76%')

    function handleNav(e) {
        const { id: href } = e.target
        console.log(href)
        let currRoute = router.asPath
        console.log(currRoute)
        positionNav == '76%' ? setPositionNav('100%') : setPositionNav('76%')

        if (href == "/contact" && href !== currRoute)
            router.push(href)
        if (href == "/projects" && href !== currRoute)
            router.push(href);
            
    }

    return (
        <>
    {showNavMenu && <div className={css.links} style={{ top: `${positionNav}` }}>
            <ul onClick={(ev) => handleNav(ev)}>
                <li id="/">
                    home
                </li>
                <li id="/projects">
                    projects
                </li>
                <li id="/contact">
                    contact
                </li>
            </ul>
        </div>}
        </>
        
    
    )
    
}