import React, {Component} from 'react';
import './AboutIntro.css'

class AboutIntro extends Component{
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
            document.addEventListener("click", this.switchHandler, false);
        }
    }

    switchHandler = (event) =>{
        const id = event.target.id;
        let themeStorage = localStorage.getItem("dark-theme");

        if(id === "customSwitch1"){
        } 

        if(id === "customSwitch1" && themeStorage === "false" ){
        }
    }

    render(){
        return(
            <div className="row h-100 align-items-center" id="about-intro">
                <div className="col-md-12 text-center">
                    <div className="row">
                        <div class="col-12 text-center">
                            <h1><b>About</b></h1>
                        </div>
                    </div>
                    <div className="indexBio">
                        <p>
                        <span className="cursor">$</span>
                        <span className="cursor" id="blinking-cursor">_</span>
                        I am Full Stack Developer native to Massachusetts.
                        I build websites that are not only fast and secure, but are also user-friendly.
                        I am javascript developer by default, but I use other programming languages when necessary. 
                        I enjoy solving complex problems using technologies either cloud-based, server-side or client-side.
                        </p>
                        <p>
                        When I am not coding I like to be with friends and family, play pc games, or go biking.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutIntro;