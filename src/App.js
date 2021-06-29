import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import ScrollButton from './component/ScrollButton.js';
import Nav from './component/nav.js';
import Footer from './component/footer.js';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './component/home.js';
import PageAbout from './component/pageAbout.js';
import PageServices from './component/pageServices.js';
import PageTestimonials from './component/pageTestimonials.js';
import PagePortfolio from './component/pagePortfolio.js';


function App() {
  return (    
        <div className="App">
            <BrowserRouter>
              <Nav/>
              <Route exact path="/" component={Home}/>
              <Route path="/pageAbout" component={PageAbout}/>
              <Route path="/pageServices" component={PageServices}/>
              <Route path="/pageTestimonials"component={PageTestimonials}/>
              <Route path="/pagePortfolio" component={PagePortfolio}/>
              <Footer />
              <Fragment>
                <ScrollButton />
              </Fragment>
            </BrowserRouter>
        </div>

    
  );
}

export default App;
