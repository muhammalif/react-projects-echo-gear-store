import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import TopProducts from './components/products/TopProducts'
import Banner from './components/banner/Banner'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

function App () {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App