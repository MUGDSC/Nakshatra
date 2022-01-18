import Link from 'next/link';
import { useState } from 'react';
import classes from './MobileNav.module.css';
import StarsBackground from './Stars';

const MobileNav = ({ setPageTitle }) => {
    const [active, setActive] = useState(false);

    function vibrate() {
        window.navigator.vibrate(50);
    }
    return (
        <nav className={`${classes.nav} ${active && classes['active']}`}>
            <div className={`${classes.nav_hamburger} ${active && classes['active']}`} onClick={() => { vibrate(); setActive(prev => !prev) }}>
                <div className={classes.bar}></div>
            </div>
            {active && <div className={classes.menu}>
                <div className={classes.nav_list}>
                    <ul>
                        <li><Link href="/#Home" >Home</Link></li>
                        <li onClick={() => { setActive(false); vibrate(); setPageTitle && setPageTitle('About – Nakshatra') }}><Link href="/hackathon" >Hackathon</Link></li>
                        <li onClick={() => { setActive(false); vibrate(); setPageTitle && setPageTitle('Events – Nakshatra') }}><Link href="/contests">Contests</Link></li>
                        <li onClick={() => { setActive(false); vibrate(); setPageTitle && setPageTitle('Events – Nakshatra') }}><Link href="/sessions">Sessions</Link></li>
                        <li onClick={() => { setActive(false); vibrate(); setPageTitle && setPageTitle('Timeline – Nakshatra') }}><Link href="/#Timeline">Timeline</Link></li>
                        <li onClick={() => { setActive(false); vibrate(); setPageTitle && setPageTitle('Contact – Nakshatra') }}><Link href="/team">Team</Link></li>
                        <li onClick={() => { setActive(false); vibrate(); setPageTitle && setPageTitle('Contact – Nakshatra') }}><Link href="#Contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={classes.footer}>
                    <span>MUGDSC</span>
                </div>
            </div>}
        </nav>
    )
}
export default MobileNav;