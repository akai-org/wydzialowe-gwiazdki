import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const TeamTail = ({ photo, name, email, github, linkedin }) => (
    <div className="team-tail">
        <p className="avatar">
            <img alt="avatar" src={photo} />
        </p>
        <p className="name">{name}</p>
        <p className="email">{email}</p>
        <p className="portals">
            <a href={github}>
                <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
            </a>
            <a href={linkedin}>
                <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />
            </a>
        </p>
    </div>
);

export default TeamTail;
