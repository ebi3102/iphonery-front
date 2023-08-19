'use client';

import Image from "next/image";
import Main_Menu from "./headers/main-menu";

const Header = () => {
    return ( 
        <header className="emo-header flex items-center justify-between">
            <div className="emo-logo">
            <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="Iphonery online shop"
                />
            </div>
            <div className="emo-menu">
                <Main_Menu />
            </div>
            <div className="emo-login">
                <div>Login / Register</div>
            </div>
        </header>
     );
}
 
export default Header;