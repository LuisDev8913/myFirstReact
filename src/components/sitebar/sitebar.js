import React from 'react';
import SiteCSS from './sitebar.module.css';
import Profile from '../../img/user.svg';
import Message from '../../img/conversation.svg';
import Gallery from '../../img/gallery.svg';
import News from '../../img/newspaper.svg';
import Settings from '../../img/settings.svg'
import SocialLinks from './SocialLinks/SocialLinks'
import {NavLink} from 'react-router-dom';

const Sitebar =()=>{
    return (
        <div className={SiteCSS.sitebar}>
            <div>
                <ul>
                   <li><NavLink to="/profile" activeClassName={SiteCSS.active}><img src={Profile} width="20" height="20" alt='profile'/>Profile</NavLink></li>
                    <li><NavLink to='/dialogs' activeClassName={SiteCSS.active}><img src={Message} width="20" height="20" alt="message"/>Dialogs</NavLink></li>
                    <li><img src={Gallery} width="20" height="20" alt='gallery'/>Gallery</li>
                    <li><img src={News} width="20" height="20" alt='news'/>News</li>
                    <li><img src={Settings} width="20" height="20" alt='settings'/>Settings</li>
                </ul>
            </div>
            <SocialLinks/>
        </div>
    );
};

export default Sitebar;
