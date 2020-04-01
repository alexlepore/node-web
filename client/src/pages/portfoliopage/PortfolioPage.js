import React, {Component} from 'react';
import './PortfolioPage.css';
import DarkMode from '../../components/darkmode/DarkMode';
import SideNav from '../../components/sidenav/SideNav';
import GithubRepos from '../../components/githubrepos/GithubRepos';
import Footer from '../../components/footer/Footer';

class PortfolioPage extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <DarkMode />
                    <SideNav />
                </div>
                <div className="container">
                    <GithubRepos />
                </div>
                <Footer />
            </div>
        )
    }
}

export default PortfolioPage;