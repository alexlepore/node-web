import React, {Component} from 'react';
import './BlogEntries.css';
import axios from 'axios';
import $ from 'jquery'; 

class BlogEntries extends Component {
    componentDidMount(){
        this.dbBlogsQuery();
    }

    componentDidUpdate(){
        document.addEventListener("click", this.switchHandler, false);
    }

    storageSwitch(){
        let themeStorage = localStorage.getItem("dark-theme");

        if(themeStorage === "true"){
            let darkCards = document.querySelectorAll(".card");
            let darkModal = document.querySelectorAll(".modal");

            for(let i = 0; i < darkCards.length; i++){
                darkCards[i].classList.add("cards-dark");
            }
            for(let j = 0; j < darkModal.length; j++){
                darkModal[j].classList.add("modals-dark");
            }
            document.addEventListener("click", this.switchHandler, false);
        }

        if(themeStorage === "false"){
            let darkCards = document.querySelectorAll(".card");
            let darkModal = document.querySelectorAll(".modal");

            for(let i = 0; i < darkCards.length; i++){
                darkCards[i].classList.remove("cards-dark");
            }
            for(let j = 0; j < darkModal.length; j++){
                darkModal[j].classList.remove("modals-dark");
            }
        }
    }

    switchHandler = (event) =>{
        const id = event.target.id;
        let themeStorage = localStorage.getItem("dark-theme");

        if(id === "customSwitch1"){
            let darkCards = document.querySelectorAll(".card");
            let darkModal = document.querySelectorAll(".modal");

            for(let i = 0; i < darkCards.length; i++){
                darkCards[i].classList.toggle("cards-dark");
            }
            for(let j = 0; j < darkModal.length; j++){
                darkModal[j].classList.toggle("modals-dark");
            }
        }

        if(id === "customSwitch1" && themeStorage === "false"){
            let darkCards = document.querySelectorAll(".card");
            let darkModal = document.querySelectorAll(".modal");

            for(let i = 0; i < darkCards.length; i++){
                darkCards[i].classList.remove("cards-dark");
            }
            for(let j = 0; j < darkModal.length; j++){
                darkModal[j].classList.remove("modals-dark");
            }
        }
    }

    dbBlogsQuery(){
        axios.get('/api/blogentries')
        .then(response =>{
            let entries = response.data;
            let blogSection = $("#blogposts");

            //throw loop in reverse to get descend newest to oldest
            for(let i = entries.length - 1; i >= 0; i--){
                //create vars
                let titles = entries[i]["post"]["blog_title"];
                let post = entries[i]["post"]["blog_entry"];
                let createDate = entries[i]["date"];

                /* Modal Build - Bootstrap */
                let modalFade = $("<div>").addClass("modal fade").attr("id", titles).attr("tabindex", "-1").attr("role", "dialog").attr("aria-hidden", "true");
                let modalDialog = $("<div>").addClass("modal-dialog modal-lg").attr("role", "document");
                let modalContent = $("<div>").addClass("modal-content");
                let modalHeader = $("<div>").addClass("modal-header").attr("id", titles);
                modalHeader.append(titles);
                let modalBody = $("<div>").addClass("modal-body");
                modalBody.append(post);
                let modalFooter = $("<div>").addClass("modal-footer");
                let modalFooterClose = $("<button>").addClass("btn btn-primary").attr("data-dismiss", "modal");
                modalFooterClose.html("Close");

                /* Modal Build Cont. */
                modalFooter.append(modalFooterClose);
                modalContent.append(modalHeader, modalBody, modalFooter);
                modalDialog.append(modalContent);
                modalFade.append(modalDialog);

                /* Card Title Button */
                let titleButtons=$("<button>").addClass("btn btn-outline-dark btn-lg").attr("data-toggle", "modal").attr("data-target", titles);
                titleButtons.html(titles)
                titleButtons.click(()=>{
                    $(modalFade).modal("show");
                });

                /* Dynamic Card Creation */
                let mainCard = $("<div>").addClass("card w-75");
                let cardBody = $("<div>").addClass("card-body");
                let cardText = $("<div>").addClass("card-text");
                let cardFooter = $("<div>").addClass("card-footer text-muted");

                /* Card Build */
                cardFooter.append(createDate);
                cardText.append(titleButtons);    
                cardBody.append(cardText); 

                /* Card Build Cont. */
                mainCard.append(cardBody, cardFooter);

                //Put it all together :D
                /***Add Row to make it responsive! */
                mainCard.append(modalFade)
                let rows = $("<div>").addClass("row");
                rows.append(mainCard);

                //Insert
                blogSection.append(rows, "<br>");
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
            <div className="row">
                <div className="col-xs-12 col-sm-9">
                    <div id="blogposts"></div>
                </div>
                {/*insert ads here */}
                <div className="col-sm-3">
                    
                </div>
                {/*insert ads here */}
            </div>
        )
    }
}

export default BlogEntries;
