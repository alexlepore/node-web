import React, {Component} from 'react';
import $ from "jquery";

class NotFoundPage extends Component {
    componentDidMount(){
        let wrongPath = $('#incorrectPath');
        let currentLocation = window.location.href;

        wrongPath.html(currentLocation);
    }

    render(){
        return(
            <div style={{
                color: 'rgb(174, 0, 255)',
                fontSize: '26px',
                }}>

                <div className="container verticalHeight NotFound">
                    <div class="row h-100 align-items-center">
                        <div class="col-sm-12">
                            <h1 class="text-center text-uppercase display-1">404</h1>
                            <p class="text-center text-uppercase">The requested url "<span id="incorrectPath"></span>" was not found.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFoundPage;