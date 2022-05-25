import { useEffect, useRef } from "react"
import Script from 'next/script'

export default function Map() {

   
    return (
        <div className="windowReference" >
            <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Calle%2024%20Mexico%20City+(Club%20de%20Golf%20Mexico)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.embedmap.net/'>adding a google map to my website</a> <Script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=907446ad749ddc3a4147cc343d936b511ddd8f64'></Script>
        </div >
    )
}
