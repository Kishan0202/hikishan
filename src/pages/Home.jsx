import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Herosection from '../components/home_page/Herosection';
import Services from '../components/home_page/Services';
import Introduction from '../components/home_page/Introduction';
import Resume from '../components/home_page/Resume';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once
        });
    }, []);
    return (
        <>
            <Header></Header>
            <main>
                {/* HERO SECTION */}
                <Herosection />

                {/* SERVICES SECTION */}
                <Services />

                {/* INTRODUCTION SECTION */}
                <Introduction />

                {/* RESUME SECTION */}
                <Resume />
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home
