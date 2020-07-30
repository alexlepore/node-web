import React, {Component} from 'react';
import './GifSection.css';
import axios from 'axios';
import $ from 'jquery'; 

class GifSection extends Component{
    componentDidMount(){
        axios.get('/api/giphyimages')
        .then(response =>{
            let giphyURLs = response.data;
            let giphySection = $("#giphySection");

            for(let key in giphyURLs[0]){
                //Skip over document ID
                if(key === "_id"){
                    continue;
                }
                let imgs = $("<img>").attr("src", giphyURLs[0][key]).addClass("rounded");
                let rows = $("<div>").addClass("row justify-content-center");
                rows.append(imgs)
                giphySection.append(rows)
            }
        })
    }

    render(){
        return(
            <div className="row h-70 align-items-center">
                <div className="col-sm-6 col-xs-6 API-text">
                    <br></br>
                    <p>
                        I built this website using the MERN stack as listed in the marquee.

                        If you would like to learn more about this sites architecture follow to the Architecture + Experience page.
                    </p>
                    <p>
                        I am fully capable of working with complex third party APIS. For this web app I used resources from the Giphy and Github APIs.
                        The gifs section is set to automatically update every three hours. 
                    </p>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div id="giphySection">
                    </div>
                </div>
            </div>
        )
    }
}

export default GifSection;