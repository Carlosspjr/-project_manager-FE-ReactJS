import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.modules.css'
import React from 'react';
function Footer(){
    return (
        <div>
            <ul>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p>Nosso rodapé</p>
        </div>
    )
}

export default Footer