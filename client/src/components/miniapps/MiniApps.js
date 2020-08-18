import React, {Component} from 'react';
import Friends from './friends.png';

class MiniApps extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center font-italic font-weight-bold">Example Work</h1>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="card">
                                <img className="card-img-top" src={Friends}/>
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <a href="https://hidden-ridge-95848.herokuapp.com/" target="_blank" className="btn btn-primary">Friend Survey</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MiniApps;