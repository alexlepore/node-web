import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    componentDidMount(){
        /* On mount determine function to execute */
        let themeStorage = localStorage.getItem("dark-theme");

        if(themeStorage === "true"){
            this.storageSwitch();
        } else{
            this.componentDidUpdate();
        }
    }

    componentDidUpdate(){
        document.addEventListener("click", this.switchHandler, false);
    }

    storageSwitch(){
        let themeStorage = localStorage.getItem("dark-theme");

        if(themeStorage === "true"){
            document.querySelector("footer").classList.add("dark")
            document.addEventListener("click", this.switchHandler, false);
        }

        if(themeStorage === "false"){
            document.querySelector("hr").classList.remove("hr-dark");
        }
    }

    switchHandler = (event) =>{
        const id = event.target.id;
        let themeStorage = localStorage.getItem("dark-theme");

        if(id === "customSwitch1"){
            document.querySelector("footer").classList.toggle("dark")
        }

        if(id === "customSwitch1" && themeStorage === "false" ){
            document.querySelector("footer").classList.remove("dark")

        }
    }
    
    render(){
        return(
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 text-center">
                        <a href="/" target=""><i className="fas fa-home fa-2x"></i></a>
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-3 footer-mobile-helper">
                        <p><a href="/experience" target="_blank">Architecture + Experience</a></p>
                        <p><a href="/portfolio" target="_blank">Portfolio</a></p>
                        <p><a href="/blog" target="_blank">Blog</a></p>

                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-3 footer-mobile-helper">
                        <p><a href="https://github.com/alexlepore" rel="noopener noreferrer" target="_blank">Github</a></p>
                        <p><a href="https://www.linkedin.com/in/alex-lepore-448321176" rel="noopener noreferrer" target="_blank">Linkedin</a></p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <p></p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;