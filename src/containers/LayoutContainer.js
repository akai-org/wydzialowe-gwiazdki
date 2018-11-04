import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './LayoutContainer.scss';

import Header from './../components/Header';
import Footer from './../components/Footer';
import TailContainer from './../containers/TailContainer';
import LectureContainer from './../containers/LectureContainer';

class LayoutContainer extends React.Component{
    render(){
        return(
            <div className="LayoutContainer">
                <Header title="WydziałoweGwizadki"/>
                <Router>
                    <Switch>
                        <Route exact path="/layout/" component={TailContainer} />
                        <Route path="/layout/lecture" component={() => <LectureContainer profId={this.props.match.params.id}/>}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default LayoutContainer