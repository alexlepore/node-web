import React, {Component} from 'react';
import './Jumbotron.css';
import $ from 'jquery';

class Jumbotron extends Component{
    componentDidMount(){
        //This does not refresh page on link click
        $('a[href*="#"]').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            }, 1000)
        });

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
            document.querySelector(".jumbotron").classList.add("jumbo-dark");
            document.querySelector("hr").classList.add("hr-dark");
            document.addEventListener("click", this.switchHandler, false);
        }

        if(themeStorage === "false"){
            document.querySelector(".jumbotron").classList.remove("jumbo-dark");
            document.querySelector("hr").classList.remove("hr-dark");
        }
    }

    switchHandler = (event) =>{
        const id = event.target.id;
        let themeStorage = localStorage.getItem("dark-theme");

        if(id === "customSwitch1"){
            document.querySelector(".jumbotron").classList.toggle("jumbo-dark");
            document.querySelector("hr").classList.toggle("hr-dark");
        } 

        if(id === "customSwitch1" && themeStorage === "false" ){
            document.querySelector(".jumbotron").classList.remove("jumbo-dark");
            document.querySelector("hr").classList.remove("hr-dark");
        }
    }

    render(){
        return(
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="jumbotron" id="jumbo-home">
                        <h1 className="display-4">Alex Lepore</h1>
                        <h5>Fullstack Web Developer</h5>
                        <hr className="my-4" />
                        <div className="row">
                            <div className="col-sm-12">
                                <a href="#about-intro" target="" className="jump-link"><i className="fa fa-arrow-down fa-2x animated bounce"></i></a>
                            </div>
                        </div>
                        <br></br>

                        <div className="row">
                            <div className="col-4">
                                <a href="/" target=""><i className="fas fa-home fa-2x"></i></a>
                            </div>
                            <div className="col-4">
                                <a href="https://github.com/alexlepore" target="_blank"><i className="fab fa-github-square fa-2x"></i></a>
                            </div>
                            <div className="col-4">
                                <a href="https://www.linkedin.com/in/alex-lepore-448321176/" target="_blank"><i className="fab fa-linkedin-in fa-2x"></i></a>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Jumbotron;