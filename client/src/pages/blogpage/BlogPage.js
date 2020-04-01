import React, {Component} from 'react';
import './BlogPage.css';
import DarkMode from '../../components/darkmode/DarkMode';
import SideNav from '../../components/sidenav/SideNav';
import DevBanner from '../../components/devbanner/DevBanner';
import BlogEntries from '../../components/blogentries/BlogEntries';
import Footer from '../../components/footer/Footer';

class BlogPage extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <DarkMode />
                    <SideNav />
                </div>
                <DevBanner />
                <div className="container verticalHeight">
                    <BlogEntries />
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogPage;