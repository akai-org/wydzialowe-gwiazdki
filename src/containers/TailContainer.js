import React, { Component } from 'react';
import './TailContainer.scss';
import Tail from './../components/Tail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mathIconOne = <FontAwesomeIcon icon="infinity" />
const mathIconTwo = <FontAwesomeIcon icon="superscript"/>
const ptpIcon = <FontAwesomeIcon icon="calculator"/>
const wdtIcon = <FontAwesomeIcon icon="broadcast-tower"/>
const pstIcon = <FontAwesomeIcon icon="wifi"/>
const wfIcon = <FontAwesomeIcon icon="running"/>
const sieIcon = <FontAwesomeIcon icon="book"/>


class TailContainer extends Component {
    render() {
        return(
            <div className="TailContainer">
                <Tail title="Analiza Matematyczna" icon={mathIconOne} id="AM" />
                <Tail title="Algebra" icon={mathIconTwo} id="ALG" />
                <Tail title="PTP" icon={ptpIcon} id="PTP" />
                <Tail title="WTD" icon={wdtIcon} id="WTD" />
                <Tail title="PST" icon={pstIcon} id="PST" />
                <Tail title="WF" icon={wfIcon} id="WF" />
                <Tail title="Socjoligia i etyka" icon={sieIcon} id="SIE" />
            </div>
    )}
}

export default TailContainer;