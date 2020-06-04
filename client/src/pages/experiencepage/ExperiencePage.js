import React, {Component} from 'react';
import DarkMode from '../../components/darkmode/DarkMode';
import SideNav from '../../components/sidenav/SideNav';
import Architecture from '../../components/architecture/Architecture';
import Experience from '../../components/experience/Experience';
import Footer from '../../components/footer/Footer';

class BlogPage extends Component {
    render(){
        const styles={
            padding: "80px 0px 60px 0px",
            color: "cornflowerblue"
        }
        return(
            <div>
                <div className="container">
                    <DarkMode />
                    <SideNav />
                </div>
                <div className="row text-center">
                    <div className="col-sm-12">
                        <h1 style={styles} className="display-4">Site Architecture</h1>
                    </div>
                </div>
                <div className="container">
                    <Architecture />
                </div>
                <div className="container">
                    <Experience />
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogPage