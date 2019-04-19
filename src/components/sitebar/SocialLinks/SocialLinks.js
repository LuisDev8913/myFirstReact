import React from 'react';
import SocialCSS from './social.module.css';
import Insta from '../../../img/instagram.svg';
import Facebook from '../../../img/facebook.svg';
import Youtube from '../../../img/youtube.svg';
import Twitter from '../../../img/twitter.svg';
import Network from '../../../img/network.svg'




const SocialLinks =()=>{
    return (
        <div className={SocialCSS.social}>
            <div>
                <h3><img src={Network} width="40" height="40" alt='network'/>My social networks</h3>
                <ul>
                    <li><img src={Insta} width="45" height="45" alt='instagram'/></li>
                    <li><img src={Facebook} width="45" height="45" alt='facebook'/></li>
                    <li><img src={Youtube} width="45" height="45" alt='youtube'/></li>
                    <li><img src={Twitter} width="45" height="45" alt='twitter'/></li>
                </ul>
            </div>
        </div>
    );
};

export default SocialLinks;
