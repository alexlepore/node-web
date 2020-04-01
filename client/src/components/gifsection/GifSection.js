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
                        As the animation depicts, I built this site in the MERN stack. Besides the fact it was first stack I learned, it has been 
                        my favorite to use so far. I have dabbled in the LAMP and few other languages, but I mainly focus on higher level
                        programming languages, like JavaScript. 
                    </p>
                    <p>
                        I also enjoy building and consuming web API's varying in complexity, purpose, and technology types.
                        While, building this platform, I was able to successfully query data from a Graphql API for the first time!
                        I take my work seriously, but I also try not forget to have fun with it! The Gifs are powered by the last 
                        10 Gifs from Giphys Trending Section and is updated periodically every 3 hours. And yes, I use jQuery with React. I don't use it for everything, just some of 
                        the heavy lifting.
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