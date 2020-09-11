import React, {Component} from 'react';
import Friends from './images/friends.png';
import Code from './images/code.jpg';
import Perms from './images/home.PNG';

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
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                            <div className="card">
                                <img className="card-img-top" src={Friends} alt="friends app" class="img-fluid"/>
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <a href="https://hidden-ridge-95848.herokuapp.com/" target="_blank" className="btn btn-outline-primary" text-white>Friend Survey</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                            <div className="card">
                                <img className="card-img-top" src={Perms} alt="code" class="img-fluid"/>
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <a href="https://github.com/alexlepore/permutations" target="_blank" className="btn btn-outline-primary" text-white>Permutations</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                            <div className="card">
                                <img className="card-img-top" src={Code} alt="code" class="img-fluid"/>
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <a href="#" target="_blank" className="btn btn-outline-primary" text-white>Coming soon</a>
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