import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    faTasks,
    faKey,
    faEnvelope,
    faUser
} from "@fortawesome/free-solid-svg-icons";

import "../Styles/SideBare.css";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleTrigger = () => setIsOpen(!isOpen);

    return (
        <div className="App">
            <div className="page">


                <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
                    <div className="trigger" onClick={handleTrigger}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </div>

                    <div className="sidebar-position" onClick={() => navigate('/ajouterEmployee')}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>Ajoute Employeurs</span>
                    </div>
                    <div className="sidebar-position" onClick={() => navigate('/ajouterTask')}>
                        <FontAwesomeIcon icon={faTasks} />
                        <span>Assigner Une Tâche</span>
                    </div>
                    <div className="sidebar-position" onClick={() => navigate('/changePassword')}>
                        <FontAwesomeIcon icon={faKey} />
                        <span>Change Password</span>
                    </div>

                    <div className="sidebar-position" onClick={() => navigate('/changeEmail')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>change Email</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


