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
                <Tail title="Analiza Matematyczna" icon={mathIconOne} />
                <Tail title="Algebra" icon={mathIconTwo} />
                <Tail title="PTP" icon={ptpIcon} />
                <Tail title="WTD" icon={wdtIcon} />
                <Tail title="PST" icon={pstIcon} />
                <Tail title="WF" icon={wfIcon} />
                <Tail title="Socjoligia i etyka" icon={sieIcon} />
            </div>
    )}
}

export default TailContainer;