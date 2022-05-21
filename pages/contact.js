import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Map from '../components/Map'
import githubSvg from '../public/icons/icons8-github.svg'
import googleSvg from '../public/icons/icons8-google.svg'
import instagramSvg from '../public/icons/icons8-instagram.svg'
import linkedinSvg from '../public/icons/icons8-linkedin.svg'
import whatsappSvg from '../public/icons/icons8-whatsapp.svg'
import SVG, { Props as SVGProps } from 'react-inlinesvg';




export default function Contact() {

  const [active, setActive] = useState(false)
  const router = useRouter()
  return (
    <div className='contact-container'>
      <FrontCard setActive={setActive} />
      <Map />
    </div>


  )
}
function FrontCard({ setActive }) {
  return (
    <>
      {/* <h3 maintitle="true">Contact</h3> */}
      <div className='flip-card' onClick={() => setActive(a => !a)}>
        <div className='personal-card' >
          <div className='front-card' >
            <h3>Antonio Ruiz</h3>
            {/* <h3>totistyles</h3> */}
            <h4>TALENT</h4>
            <div className="icons">
            <img src={instagramSvg.src} onClick={() => location.assign('https://instagram.com/totistyles')}/>
            <img src={googleSvg.src} />
            <img src={whatsappSvg.src}/>
            <img src={linkedinSvg.src} onClick={() => location.assign('https://linkedin.com/in/devtoti')}/>
            <img src={githubSvg.src} onClick={() => location.assign('https://github.com/devtoti')}/>
            </div>
            <div className='grid'>
              {/* <Link href='https://devtoti.github.io'>
                <a>devtoti.github.io</a>
              </Link> */}
              <p>This site was made with Nextjs</p>
            </div>
          </div>
          <div className='rear-card'>
            <h3></h3>
            <h4>CONTACT ME</h4>
            <div className='grid'>
              {/* <Link href='https://devtoti.github.io'>
                <a>devtoti.github.io</a>
              </Link>
              <p>totistyles@gmail.com</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}