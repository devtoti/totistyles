import Image from 'next/image'
import landing from '../public/landing.JPG'
import Link from 'next/link'
import Head from 'next/head'
export default function HomePage(page) {
    return (
        <>
        <Head>
          
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />
      </Head>
        <div className="homepage">
            <Image src={landing}
            layout="fill"
            className="landing"
            // placeholder="blur"
            // blurDataURL='base64'
            />

            <div className="main-floating">
            <h1 className="landing-txt">Toti</h1>
            <h2 className="landing-txt">Modeling Book</h2>
            <Link href="/projects">
                <button className="landing-btn">ENTER</button>
                </Link>
            </div>
        </div>
            </>
    )
}

