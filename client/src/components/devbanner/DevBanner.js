import React, {Component} from 'react';
import './DevBanner.css'

class DevBanner extends Component{
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
            document.querySelector(".jumbotron").classList.add("jumbo-dark-2");
            document.addEventListener("click", this.switchHandler, false);
        }

        if(themeStorage === "false"){
            document.querySelector(".jumbotron").classList.remove("jumbo-dark-2");
        }
    }

    switchHandler = (event) =>{
        const id = event.target.id;
        let themeStorage = localStorage.getItem("dark-theme");

        if(id === "customSwitch1"){
            document.querySelector(".jumbotron").classList.toggle("jumbo-dark-2");
        }

        if(id === "customSwitch1" && themeStorage === "false"){
            document.querySelector(".jumbotron-fluid").classList.remove("jumbo-dark-2");
        }
    }

    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
                <div className="container-fluid text-center">
                    <h3 className="display-4">
                        <h1><i class="fas fa-folder-open"></i>&nbsp;Blog</h1>
                    </h3>
                </div>
            </div>
        )
    }
}

export default DevBanner;