import React, { ReactNode } from 'react'
import Head from 'next/head'

type LayoutProps = {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Blog | The Frontend Guy</title>
      </Head>
      <main className="h-full flex items-center px-6 lg:px-32">
        {children}
      </main>
    </>
  )
}

export default Layout
