import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "../pages/homepage/HomePage";
import ExperiencePage from "../pages/experiencepage/ExperiencePage";
import PortfolioPage from "../pages/portfoliopage/PortfolioPage";
import BlogPage from "../pages/blogpage/BlogPage";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";

class Routes extends Component {
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/experience" component={ExperiencePage} />
                        <Route exact path="/portfolio" component={PortfolioPage} />
                        <Route exact path="/blog" component={BlogPage} />
                        {/***** 404 *****/}
                        <Route component={NotFoundPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;
