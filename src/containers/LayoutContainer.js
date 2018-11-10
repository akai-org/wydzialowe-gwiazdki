import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './LayoutContainer.scss';

import Header from './../components/Header';
import Footer from './../components/Footer';
import TailContainer from './../containers/TailContainer';
import LectureContainer from './../containers/LectureContainer';

class LayoutContainer extends React.Component{
    // constructor(props){
    //     super();
    //     this.state = {
    //         paramId: ""
    //     }
    // }
    // shouldComponentUpdate() {
    //       this.setState({
    //         paramId: this.props.match.params.id
    //       });
    //       console.log(this.props.match.params.id);
    //   }
    test = () => {
        console.log(this.props)
    }
    render(){
        return(
            <div className="LayoutContainer">
                <Header title="WydziałoweGwizadki"/>
                <Router>
                    <Switch>
                        <Route exact path="/layout" component={TailContainer} />
                        <Route path="/layout/lecture/:id" component={LectureContainer}/>
                    </Switch>
                </Router>
                <Footer/>
                
            </div>
        )
    }
}

export default LayoutContainer