import { lazy , Suspense } from 'react'
import { PropagateLoader } from 'react-spinners'
import LoadingFallback from './component/LoadingFallback'
// import Contact from './component/contact/Contact'
// import Hero from './component/hero/Hero'
// import Portfolio from './component/portfolio/Portfolio'
// import ServicesSection from './section/ServicesSection'

const Hero = lazy(()=> import("./component/hero/Hero"))
const Contact = lazy(()=> import("./component/contact/Contact"))
const Portfolio = lazy(()=> import("./component/portfolio/Portfolio"))
const ServicesSection = lazy(()=> import("./section/ServicesSection"))


const App = () => {
  return (
    <div className='container'>
      <section id='home'>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
      </section>

      <section id='services'>
        <Suspense fallback={<LoadingFallback />}>
          <ServicesSection />
        </Suspense>
      </section>

      {/* قسم Portfolio بارتفاع 500vh */}
      {/* <section id='portfolio'> */}
        <Suspense fallback={<LoadingFallback height="600vh" />}>
          <Portfolio />
        </Suspense>
      {/* </section> */}

      <section id='contact'>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </section>
    </div>
  )
}

export default App