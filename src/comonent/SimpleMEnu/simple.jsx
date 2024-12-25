import React from 'react';
import './simple.css';

function simpleMenu() {
    return(
        <div className="simple">
            <h3 className="name">SimpleMenu</h3>
            <nav className="navbar">
                <li className="simple-item">Bosh sahifa</li>
                <li className="simple-item">Biz Haqimizda</li>
                <li className="simple-item">Aloqa</li>
                <li className="simple-item">Yangliklar</li>
            </nav>
        </div>
    )
}
export default simpleMenu