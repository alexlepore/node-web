import React, {Component} from 'react';
import './HomePage.css';
import DarkMode from '../../components/darkmode/DarkMode';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import AboutIntro from '../../components/aboutintro/AboutIntro';
import TechStack from '../../components/techstack/TechStack';
import GifSection from '../../components/gifsection/GifSection';
import NextArrow from '../../components/nextarrow/NextArrow';
import Footer from '../../components/footer/Footer';
import MiniApps from '../../components/miniapps/MiniApps';

class HomePage extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <DarkMode />
                </div>
                <div className="container verticalHeight">
                    <Jumbotron />
                </div>
                <div className="container verticalHeight">
                    <AboutIntro />
                </div>
                <div className="container verticalHeight">
                    <TechStack />
                    <GifSection />
                </div>
                <div className="container verticalHeight">
                    <MiniApps />
                </div>
                <NextArrow />
                <Footer />
            </div>
        )
    }
}

export default HomePage;
