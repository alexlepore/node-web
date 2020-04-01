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
            <div className="row h-100 align-items-center">
                <div className="col-sm-6 text-center">
                    <div className="jumbotron" id="jumbo-home">
                        <h1 className="display-4">Alex Lepore</h1>
                        <hr className="my-4" />
                        <div className="row">
                            <div className="col-sm-12">
                                <a href="#techStack" target="" className="jump-link"><i className="fa fa-arrow-down fa-2x animated bounce"></i></a>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <a href="/" target=""><i className="fas fa-home fa-lg"></i></a>
                                    </div>
                                    <div className="col-sm-3">
                                    <a href="/experience" target="_blank"><i className="fa fa-file fa-lg"></i></a>
                                    </div>
                                    <div className="col-sm-3">
                                    <a href="/portfolio" target="_blank"><i className="fa fa-code fa-lg"></i></a>
                                    </div>
                                    <div className="col-sm-3">
                                        <a href="/blog" target="_blank"><i className="fa fa-comment fa-lg"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="col-sm-6 indexBio">
                    <p>
                    <span className="cursor">$</span>
                    <span className="cursor" id="blinking-cursor">_</span>
                    Welcome! I am a developer native to Massachusetts.
                    At the very core, I write code because I truly enjoy it.
                    Programming allows me to utilize both creativity and reason.
                    These two characteristics aid me in designing systems that both function well and look pretty.
                    </p>
                    <p>
                    While, I would like to consider myself technology agnostic, 
                    I tend to gravitate towards scripting languages and web technologies.  
                    I believe in writing code that is modular in design, but not abstract enough to be considered confusing.
                    Ultimately, I aim to write code that follows best practices. I also believe in using the best technology where applicable.
                    Have a look around, thanks!
                    </p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;