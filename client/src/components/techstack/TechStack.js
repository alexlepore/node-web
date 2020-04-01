import React, {Component} from 'react';
import './TechStack.css';

class TechStack extends Component{
    componentDidMount(){
        /* On mount determine function to execute */
        let themeStorage = localStorage.getItem("dark-theme");

        if(themeStorage === "true"){
            this.storageSwitch();
        } else{
            this.componentDidUpdate();
        }

        this.techLoop();
    }

    componentDidUpdate(){
        document.addEventListener("click", this.switchHandler, false);
    }

    techLoop(){
        let counter = 0;
        let toolsText = ["MongoDB", "React", "Npm", "Bootstrap", "Node JS", "JavaScript", "Express", "jQuery", "Docker"];
        let bkgColors = ["#13aa52", "#61dafb", "#fb3e44", "#7952b3", "#026e00", "GoldenRod", "Gray", "#b3d4fc", "#007bff"];
        let techText = document.querySelector("#tech-section-text");
        let techDiv = document.querySelector("#tech-div");

        setInterval(function(){
            techText.style.color = "White";
            techText.innerHTML = toolsText[counter];
            techDiv.style.backgroundColor = bkgColors[counter];
            counter++;
            if(counter >= toolsText.length){
                counter = 0;
            }
        }, 2500)
    }

    storageSwitch(){
        let themeStorage = localStorage.getItem("dark-theme");

        if(themeStorage === "true"){
            document.querySelector("#techStack").classList.add("tech-dark");
            document.addEventListener("click", this.switchHandler, false);
        }

        if(themeStorage === "false"){
            document.querySelector("#techStack").classList.remove("tech-dark");
        }
    }

    switchHandler = (event) =>{
        const id = event.target.id;
        let themeStorage = localStorage.getItem("dark-theme");

        if(id === "customSwitch1"){
            document.querySelector("#techStack").classList.toggle("tech-dark");
        }

        if(id === "customSwitch1" && themeStorage === "false" ){
            document.querySelector("#techStack").classList.remove("tech-dark");
        }
    }

    render(){
        return(
            <div className="row h-30 align-items-center" id="techStack">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 col-xs-12 text-center" id="tech-div">
                    <div id="tech-section-text">
                        <h1 className="start">Tech</h1>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        )
    }
}

export default TechStack;
