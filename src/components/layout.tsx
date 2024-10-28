import { HTMLAttributes } from 'react'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'

interface Props extends HTMLAttributes<HTMLElement> {}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  )
}
