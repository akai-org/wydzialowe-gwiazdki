import React, { Component } from 'react';
import './TailContainer.css';
import Tail from './../components/Tail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mathIcon = <FontAwesomeIcon icon="star" />

class TailContainer extends Component {
    render() {
        return(
            <div className="TailContainer">
                <Tail title="Matematyka" icon={mathIcon} />
            </div>
    )}
}

export default TailContainer;