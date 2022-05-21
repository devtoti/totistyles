import Navigation from './Navigation'
import Footer from './Footer'
import Head from 'next/head'
import React from 'react'

export default function Layout( {children} ) {
  return (
      <>
    <Navigation/>
    <Head>
    <title>Totistyles Modeling Book</title>
    </Head>
    <main>{children}</main>
    <Footer />
      </>
  )
}
