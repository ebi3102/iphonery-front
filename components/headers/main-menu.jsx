const Main_Menu = () => {
    return ( 
        <div className="menu-container">
            <nav className="main-menu">
                <ul className="flex items-center justify-between">
                    <li className="ml-2 mr-2"><Link href="/">Home</Link></li>
                    <li className="ml-2 mr-2"><Link href="/economic-calendar">Economic Calendar</Link></li>
                    <li className="ml-2 mr-2"><Link href="/crypto-live-price">Crypto Live Price</Link></li>
                    <li className="ml-2 mr-2"><Link href="/about">About Us</Link></li>
                    <li className="ml-2 mr-2"><Link href="/contact">Contact Us</Link></li>
                    <li className="ml-2 mr-2"><Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Main_Menu;