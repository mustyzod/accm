import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleDoubleRight,
  faComment,
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faPhone,
  faEnvelope,
  faShoppingCart,
  faSearch,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'

// import Glexbox from './Glexbox'
import Header from './components/layout/header/Header'
import Home from './components/Home';
import Service from './components/Services';
import TopCourse from './components/TopCourse';
import Promotion from './components/Promotion';
import Footer from './components/layout/footer/Footer';
import Testimony from './components/Testimony'



library.add(
  fab,
  faAngleDoubleRight,
  faComment,
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faPhone,
  faEnvelope,
  faShoppingCart,
  faSearch,
  faChevronDown
)

const App = () => {
  return (
    <div>
      {/* <Glexbox /> */}
      <Header/>

      <Home />
      <Service />
      <TopCourse />
      <Testimony/>
      <Promotion />

      <Footer/>
      
    </div>
  )
}

export default App
