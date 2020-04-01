import React, {Component} from 'react';
import './HomePage.css';
import DarkMode from '../../components/darkmode/DarkMode';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import TechStack from '../../components/techstack/TechStack';
import GifSection from '../../components/gifsection/GifSection';
import Footer from '../../components/footer/Footer';

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
                    <TechStack />
                    <GifSection />
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomePage;
