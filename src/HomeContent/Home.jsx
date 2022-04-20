import React from 'react';

import Header from '../Pages/Header';
import Services from '../Pages/Services';
import Portfolio from '../Pages/Portfolio';
import About from '../Pages/About';
import Team from '../Pages/Team';
import Contact from '../Pages/Contact';
import Footer from '../Pages/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Portfolio />
            <About />
            <Team />
            <Contact />
            <Footer />
        </div>


    );
}

export default Home;