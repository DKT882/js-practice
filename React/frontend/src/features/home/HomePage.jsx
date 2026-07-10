import React from 'react'
import HeroSection from './components/HeroSection.jsx'
import NavBar from './components/NavBar.jsx'
import CardSection from './components/CardSection.jsx'
import Footer from './components/Footer.jsx'

const HomePage = () => {
    return (
        <>
            <h1>
                Hello
            </h1>
            <div class="style-1">
                <NavBar></NavBar>
                <main class="style-18">
                    <section class="style-19">
                        <div class="style-20"></div>
                        <div class="style-21">
                            <HeroSection></HeroSection>
                            <CardSection></CardSection>
                            
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage
