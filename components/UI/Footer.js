import Image from 'next/image';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer id="Contact" className={classes.contact}>
                <div>
                    <div className={classes.social_media}>
                        <div className={classes.logo}>
                            <img src="/nakshatra.png" alt="Nakshatra" />
                        </div>
                        <div className={classes.social_media_logos}>
                            <div>
                                <a href="https://www.instagram.com/gdscmu/" target="_blank" rel="noopener noreferrer">
                                    <Image width={25} height={25} layout="fixed" src="/social/instagram.png" alt="Instagram Icon" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/company/gdscmu" target="_blank" rel="noopener noreferrer">
                                    <Image width={25} height={25} layout="fixed" src="/social/linkedin.png" alt="LinkedIn Icon" />
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.gg/ZNeAcpv66y" target="_blank" rel="noopener noreferrer">
                                    <Image width={25} height={25} layout="fixed" src="/social/discord.png" alt="Discord Icon" />
                                </a>
                            </div>
                            <div>
                                <a href="https://bit.ly/TelegramMUGDSC" target="_blank" rel="noopener noreferrer">
                                    <Image width={25} height={25} layout="fixed" src="/social/telegram.png" alt="Telegram Icon" />
                                </a>
                            </div>
                            <div>
                                <a href="https://twitter.com/mugdsc" target="_blank" rel="noopener noreferrer">
                                    <Image width={25} height={25} layout="fixed" src="/social/twitter.png" alt="Twitter Icon" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UCfRlm-qlPIv7GnCCLDFGYCw?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                                    <Image width={25} height={25} layout="fixed" src="/social/youtube.png" alt="Youtube Icon" />
                                </a>
                            </div>
                            <div>
                                <a href="https://bit.ly/ChapterMUGDSC" target="_blank" rel="noopener noreferrer">
                                    <Image width={25} height={25} layout="fixed" src="/social/google.png" alt="Google Icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.contact_details}>
                        <h2>Contact Us</h2>
                        <a href="https://www.google.com/maps/place/Medi-Caps+University/@22.6396852,75.7835985,13.3z/data=!4m9!1m2!2m1!1smedicaps+institute+of+science+and+technology+(mist)+indore+madhya+pradesh!3m5!1s0x3962f958dcb7169d:0xd877c12078e50f0f!8m2!3d22.6210224!4d75.8035907!15sCkltZWRpY2FwcyBpbnN0aXR1dGUgb2Ygc2NpZW5jZSBhbmQgdGVjaG5vbG9neSAobWlzdCkgaW5kb3JlIG1hZGh5YSBwcmFkZXNoSKXstXNaSSJHbWVkaWNhcHMgaW5zdGl0dXRlIG9mIHNjaWVuY2UgYW5kIHRlY2hub2xvZ3kgbWlzdCBpbmRvcmUgbWFkaHlhIHByYWRlc2hiCQlIFIV2KazjQ5IBCnVuaXZlcnNpdHmaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTm5NRFpNVDNCblJSQUI" target="_blank" rel="noopener noreferrer">
                            <div className={classes.contact_links}>
                                <Image width={25} height={25} layout="fixed" src="/social/map.png" alt="Google Map" />
                                <p>Medi-Caps University Indore</p>
                            </div>
                        </a>
                        <a href="mailto:mugdsc@gmail.com" target="_blank" rel="noopener noreferrer">
                            <div className={classes.contact_links}>
                                <Image width={25} height={25} layout="fixed" src="/social/mail.png" alt="mail" />
                                <p>mugdsc@gmail.com</p>
                            </div>
                        </a>
                    </div>
                </div>
            </footer >
            <div className={classes.footer_text}>
                <p> <span>Copyright © 2022 All rights reserved</span><span className={classes.bar}> | </span><span>MU-GDSC Team ❤️</span></p>
                {/* <p>🔴 Terms &#38; Conditions</p> */}
            </div>
        </>

    )
}
export default Footer;