import React, {Component} from 'react';
import './GithubRepos.css';
import axios from 'axios';
import $ from 'jquery'; 


class GithubRepos extends Component{
    componentDidMount(){
        this.dbGitQuery();
    }

    componentDidUpdate(){
        document.addEventListener("click", this.switchHandler, false);
    }

    storageSwitch(){
        let themeStorage = localStorage.getItem("dark-theme");

        if(themeStorage === "true"){
            let darkCards = document.querySelectorAll(".card");
            
            for(let i = 0; i < darkCards.length; i++){
                darkCards[i].classList.add("dark-cards");
            }
            document.addEventListener("click", this.switchHandler, false);
        }

        if(themeStorage === "false"){
            let darkCards = document.querySelectorAll(".card");
            
            for(let i = 0; i < darkCards.length; i++){
                darkCards[i].classList.remove("dark-cards");
            }
        }
    }

    switchHandler = (event) =>{
        const id = event.target.id;
        let themeStorage = localStorage.getItem("dark-theme");

        if(id === "customSwitch1"){
            let darkCards = document.querySelectorAll(".card");

            for(let i = 0; i < darkCards.length; i++){
                darkCards[i].classList.toggle("dark-cards");
            }
        }

        if(id === "customSwitch1" && themeStorage === "false" ){
            let darkCards = document.querySelectorAll(".card");
            
            for(let i = 0; i < darkCards.length; i++){
                darkCards[i].classList.remove("dark-cards");
            }
        }
    }

    dbGitQuery(){
        axios.get('/api/githubrepos')
        .then(response => {
            let githubSection = $("#githubSection");
            let nodes = response["data"];

            for(let i = 0; i < nodes.length; i++){
                let projectName = nodes[i]["name"];
                let projectDescription = nodes[i]["description"];
                let projectUrl = nodes[i]["url"];
                let projectAt = nodes[i]["createdAt"];

                /* dynmaic card creation */
                let mainCard = $("<div>").addClass("card w-100");
                let cardHeader = $("<div>").addClass("card-header");
                let ahref = $("<a>").attr({
                    "href": projectUrl,
                    "target": "_blank"
                });
                ahref.append('<i class="fab fa-github fa-2x"></i>&nbsp;')
                let cardBody = $("<div>").addClass("card-body");
                let cardTitle = $("<div>").addClass("card-title");
                let cardText = $("<div>").addClass("card-text");
                
                /* Card Build */
                /* Card Header */
                cardHeader.append(ahref, " ", projectName);
                /* Card Body */
                cardTitle.html("Created At: " + projectAt);
                cardText.html(projectDescription);
                /* Put Card Together */
                cardBody.append(cardTitle, cardText);
                mainCard.append(cardHeader, cardBody);

                //Made Responsive 2 per row
                let column = $("<div>").addClass("col-sm-6");
                column.append(mainCard)

                githubSection.append(column, "<br>");
            }

            /**************
             * DARK MODE PERSISTANCE CHECK
             */

            /***
             * Query, then storage check
             */
            
            let themeStorage = localStorage.getItem("dark-theme");

            if(themeStorage === "true"){
                this.storageSwitch();
            } else{
                this.componentDidUpdate();
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-12" id="portfolio-title">
                        <h1 className="text-left">Last 15 Repositories:</h1> 
                    </div>
                </div>
                <div className="row" id="portfolio-text">
                    <div className="col-sm-12">
                        <p>
                            These are the last 15 repositories from my Github Account.
                            The projects listed here vary in complexity, purpose and programming language.
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-9">
                        <div className="row" id="githubSection"></div>
                    </div>
                    <div className="col-sm-3">
                        <div class="ads">
                            
                        </div>
                    </div>
                    {/*insert ads here */}
                </div>
            </div>
        )
    }
}

export default GithubRepos;