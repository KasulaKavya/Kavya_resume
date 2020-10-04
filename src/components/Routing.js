import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'


//components
import Header from './Header.js'
import Footer from './Footer.js'
import Home from './Home.js'
import About from './About.js'
import Profile from './Profile.js'
import Contact from './Contact.js'




const Routing=()=>
{
    return(
        <>

            <BrowserRouter>

                {/* header */}

                   <Header />

                {/* header */}



                {/* router path configuration */}
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />



                {/* footer */}

                  <Footer />

                {/* footer */}


            </BrowserRouter>

        </>
    )
}


export default Routing;