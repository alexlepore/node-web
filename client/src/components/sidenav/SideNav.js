import React, {Component} from 'react';

class SideNav extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-12 text-right">
                    <a href="/"><i className="fas fa-home fa-lg"></i></a>
                </div>
            </div>
        )
    }
}

export default SideNav;
