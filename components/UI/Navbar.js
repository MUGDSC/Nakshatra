import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import classes from './Navbar.module.css';
import throttle from '../../helpers/throttle';

const Navbar = ({ setPageTitle }) => {
    const [solidBackground, setSolidBackground] = useState(false);


    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', throttle(function () {
                if (window.scrollY > 300) {
                    setSolidBackground(true);
                } else {
                    setSolidBackground(false);
                }
            }, 300));
        }

        return (() => {
            window.removeEventListener('scroll', () => { })
        })
    }, [])

    return (
        <header className={classes.header} style={{
            background: `${solidBackground ? '#000A2B' : 'transparent'}`,
            boxShadow: `${solidBackground ? `1px 1px 1px #000A2B` : 'none'}`
        }}>
            <Link href="/">
                <a href="">
                    <div className={classes.header_logo}>
                        <Image width={350} height={85} layout="responsive" src="/nav_logo.png" alt="MU-GDSC LOGO" />
                    </div>
                </a></Link>
            <MobileNav setPageTitle={setPageTitle} />
            <nav className={classes.navbar}>
                <ul>
                    <li><Link href="/#Home" >Home</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('About – Nakshatra')}><Link href="/hackathon" >Hackathon</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Events – Nakshatra')}><Link href="/contests">Contests</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Events – Nakshatra')}><Link href="/sessions">Sessions</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Timeline – Nakshatra')}><Link href="/#Timeline">Timeline</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Contact – Nakshatra')}><Link href="/team">Team</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Contact – Nakshatra')}><Link href="#Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;