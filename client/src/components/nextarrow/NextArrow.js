import React, {Component} from 'react';
import 'animate.css';


class NextArrow extends Component{
    constructor(){
        super();
        this.state = {
            href: ""
        }
    }

    componentDidMount(){
        let url = window.location.pathname;

        if(url === "/"){
            this.setState({
                href: "/experience"
            })
        } else if(url === "/experience"){
            this.setState({
                href: "/portfolio"
            })
        } else if(url === "/portfolio"){
            this.setState({
                href: "/blog"
            })
        } else {
            this.setState({
                href: "/"
            })
        }
    }

    render(){
        return(
            <div className="row h-25">
                <div className="col-md-12 text-center pr-5">
                    <h1 className="font-weight-bold font-italic animate__animated animate__pulse animate__infinite">Click Here</h1>
                    <a href={this.state.href}><i class="fa fa-arrow-right fa-5x animate__animated animate__jackInTheBox animate__slower animate__infinite" aria-hidden="true"></i></a>
                </div>
            </div>
        )
    }
}

export default NextArrow;