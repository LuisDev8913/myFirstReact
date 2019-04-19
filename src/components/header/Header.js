import React from 'react';
import HeaderCSS from'./Header.module.css';

const Header =()=>{
    return (
        <div className={HeaderCSS.header}>
            <header>
                <p className={HeaderCSS.header_p}>
                    Fashion Social
                </p>
            </header>
        </div>
    );
};

export default Header;
