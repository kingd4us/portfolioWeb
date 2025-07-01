import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children, openMenu }: { children: React.ReactNode, openMenu: () => void }) => {
  return (
    <>
      <Header openMenu={openMenu} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout