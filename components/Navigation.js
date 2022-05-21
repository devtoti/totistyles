import NavLinks from './NavLinks'
import { useRouter, withRouter } from 'next/router'
import { MenuIcon } from '@heroicons/react/outline'
import { useRef, useState, useEffect } from 'react'
import css from '../styles/Navigation.module.css'

export default function Navigation(page) {
    const [showNavMenu, setShowNavMenu] = useState(false)
    const router = useRouter()

    function handleClick() {
        return setShowNavMenu(d => !d)
    }


    function handleNav(e) {
        const { id: href } = e.target
        let defaultName = e.target.textContent
        let currRoute = router.asPath
        console.log(e.target.style.color)
        if (href == "/contact" && href !== currRoute) {
            router.push(href)
            setShowNavMenu(false)
        } if (href == "/projects" && href !== currRoute) {
            router.push(href);
            setShowNavMenu(false)
        } if (href == "/" && href !== currRoute) {
            router.push(href);
            setShowNavMenu(false)
        } else {

            e.target.textContent = "ALREADY HERE"
            setTimeout(() => {
                e.target.textContent = defaultName
                e.target.style.color = "gray"
                e.target.style.backgroundColor = "rgba(0,0,0,.1)"
            }, 1000)
        }
    }


    function visibleLinks() {
        let winWidth = window.innerWidth
        let deviceNav = {}
        if (winWidth > 500) {
            console.log(winWidth)
            return { top: '8vh' }

        }
        else {
            { top: '2vh' }

        }

    }

    const hiddenLinks = {
        top: "-20vh"
    }

    return (
        <>
            <div className={css.main}>
                <div className={css.hamburger} onClick={handleClick}>
                    <MenuIcon />
                </div>
                <h3>totistyles</h3>
            </div>
            <div className={css.links} style={showNavMenu ? visibleLinks() : hiddenLinks}>
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
            </div>
            {showNavMenu && <div className={css.bnw} onClick={() => setShowNavMenu(false)}>heeey</div>}
        </>

    )
}