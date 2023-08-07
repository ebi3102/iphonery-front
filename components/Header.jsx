'use client';

import Image from "next/image";
import Main_Menu from "./headers/main-menu";

const Header = () => {
    return ( 
        <div className="flex items-center justify-between p-24">
            <div className="emo-logo">
            <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="Iphonery online shop"
                />
            </div>
            <div className="emo-login">
                <Main_Menu />
            </div>
        </div>
     );
}
 
export default Header;