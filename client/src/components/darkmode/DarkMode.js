import React, {Component} from 'react';
import './DarkMode.css';

class DarkMode extends Component {
    constructor(){
        super();
        this.state = {
            colorLabel: false,
            checked: false
        };
    }

    componentDidMount(){
        let storage = localStorage.getItem("dark-theme");

        if(storage === "true")
        {
            this.setState({
                colorLabel: true
            });
        }
    }

    componentDidUpdate(){
        if(this.state.colorLabel === true){
            document.body.classList.add("dark-background");
            localStorage.setItem("dark-theme", true)
            document.getElementById("customSwitch1").checked = true;
        }

        if(this.state.colorLabel === false){
            document.body.classList.remove("dark-background");
            localStorage.setItem("dark-theme", false);
            document.getElementById("customSwitch1").checked = false;
        }
    }

    changeMode = () => {
        this.setState({
            colorLabel: !this.state.colorLabel
        });
    }

    render(){
        return(
            <div className="row justify-content-end">
                <div className="col-sm-12 text-right">
                    <div className="custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={this.changeMode}/>
                        <label className="custom-control-label" htmlFor="customSwitch1">{this.state.colorLabel ? '🌞' : '🌙'}</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default DarkMode;
