import React, {Component} from 'react';
import './Experience.css';

class Experience extends Component {
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

    switchHandler = (event) =>{
        const id = event.target.id;
        let themeStorage = localStorage.getItem("dark-theme");

        if(id === "customSwitch1"){
            document.querySelector("#title").classList.toggle("glow");
        } 

        if(id === "customSwitch1" && themeStorage === "false" ){
            document.querySelector("#title").classList.remove("glow");
        }
    }

    storageSwitch(){
        let themeStorage = localStorage.getItem("dark-theme");

        if(themeStorage === "true"){
            document.querySelector("#title").classList.add("glow");
            document.addEventListener("click", this.switchHandler, false);
        }

        if(themeStorage === "false"){
            document.querySelector("#title").classList.remove("glow");
        }
    }

    render(){
        const pstyles = {
            margin: "0px 0px 40px 0px"
        }
        return(
            <div className="row h-100" id="experience">
                <div className="col-sm-12">
                    <h1 className="text-left" id="title">
                        Experience
                    </h1>
                    <h4>World Congress</h4>
                    <p style={pstyles}>Present - I was hired as a web developer at World Congress. At WC, I build and maintain 40+ websites used in the production of conferences 
                        held across the United States. These conferences aim to gather c-suite and director level professionals representing some of the largest and most 
                        influential healthcare companies. This is all possible with the help of a 20 year-old custom CMS, currently on its third iteration.
                        The CMS uses Cold Fusion with a SQL database. We're also using Boostrap 3.3 and jQuery in the browser and a few other smaller libraries
                        to accomplish short order tasks. My main goal with WC is to bring my experience to the code base by making benefitial programming decisions 
                        and automating tedious business processes through scripting.
                    </p>
                    <h4>Trellis</h4>
                    <p style={pstyles}>09/18 - At Trellis I was hired as a Engineering Intern. Being an intern, I was able to remain agile and 
                        contribute to many projects. Most of the projects I've worked on were written in the LAMP stack using the Magento platform. 
                        I worked on eCommerce sites for companies all across the country that sold varying products.
                        One of the main reasons Trellis was such a valuable experience was that I was given exposure to
                        linux operating systems. I have since then used Linux quite extensively, and it has
                        broadened my understanding of finessing computer systems as a whole.
                    </p>
                    <h4>UMASS x Trilogy</h4>
                    <p style={pstyles}>12/17 - I graduated from a 6-month program teaching students how to code.
                    The program mainly focused on Javascript and topics related to Javascript including:
                    <br />
                    HTML/CSS/JS/jQuery/Git/Node.js/Express/React/Bootstrap/Heroku/Comp. Sci. Fundamentals/Java/REST/AJAX/MySQL/Git Workflows
                    </p>
                </div>
            </div>
        )
    }
}

export default Experience;