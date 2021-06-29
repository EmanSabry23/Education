import React from 'react';
// import Nav from './nav.js';
import Header from './header.js';
import About from './about.js';
import Services from './services.js';
import Testimonials from './testimonials.js';
import Portfolio from './portfolio.js';
import ContactUs from './contactus.js';
import Subscribe from './subscribe.js';
// import Footer from './footer.js';

function Home() {
    return(
        <> 

              {/* <Nav /> */}
              <Header />
              <About />
              <Services />
              <Testimonials />
              <Portfolio />
              <ContactUs />
              <Subscribe />
              {/* <Footer /> */}
        
        </>
    )
}
export default Home