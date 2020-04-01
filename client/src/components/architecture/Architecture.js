import React, {Component} from 'react';

class Architecture extends Component{
    render(){
        const styles={
            margin: "0px 0px 40px 0px"
        }
        return(
            <div className="row">
                <div class="col-sm-6 col-xs-12">
                    <h3>Frontend</h3>
                    <h5><em>React + Bootstrap</em></h5>
                    <ul style={styles}>
                        <li>A single page app built with create-react-app</li>
                        <li>Bootstrap to handle layout and media queries</li>
                    </ul>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <h3>Backend</h3>
                    <h5><em>Express + Nginx</em></h5>
                    <ul style={styles}>
                        <li>A single express server sitting behind a nginx reverse proxy</li>
                    </ul>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <h3>Database</h3>
                    <h5><em>MongoDB</em></h5>
                    <ul style={styles}>
                        <li>A pure mongo database, no mongoose here. I made this decision for speed and security</li>
                    </ul>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <h3>Deployment</h3>
                    <h5><em>Docker + Docker-Compose + CircleCI</em></h5>
                    <ul style={styles}>
                        <li>Docker and Docker-compose build my microservices in serperate containers</li>
                        <li>CircleCI keeps my source code up to date and is based on my commits. It eliminates the need for a dedicated development server</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Architecture;