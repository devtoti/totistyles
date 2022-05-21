
import footer from '../styles/Footer.module.css'
import { ArrowCircleUpIcon } from '@heroicons/react/outline'
import Link from 'next/link'
export default function Footer(){
    const currYear = new Date().getFullYear()


    return (
        <div className={footer.main}>
            <div className={footer.col} data-nav>
                <Link href='/'>
                <a>Home</a>
                </Link>
                <br></br>
                <Link href='/projects'>
                <a>Projects</a>
                </Link>
                <br></br>
                <Link href='/contact'>
                <a>Contact</a>
                </Link>
               
            </div>
            <div className={footer.col} data-location>
                <p>Talent</p>
                <p>Independent model</p>
                <p>Mexico City</p>
            </div>
            <div className={footer.col} data-rights>
                <p>&copy; Copyright {currYear} totistyles</p>
                <p>All rights reserved</p>
            </div>
            <div className={footer.col} data-to-top onClick={() => window.scrollTo(0, 0)}>
<ArrowCircleUpIcon />
            </div>
        </div>
    )
}