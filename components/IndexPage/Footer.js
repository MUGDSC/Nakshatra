import classes from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={classes.footer} id="Footer">
            <h2>Glimpse Of Campus</h2>
            <div className={classes.campus_images}>
                <Image src="/campus/1.png" width={256} height={171} layout="fixed" className={classes.campus_img} />
                <Image src="/campus/2.jpeg" width={256} height={171} layout="fixed" className={classes.campus_img} />
                <Image src="/campus/3.jpeg" width={256} height={171} layout="fixed" className={classes.campus_img} />
                <Image src="/campus/4.jpeg" width={256} height={171} layout="fixed" className={classes.campus_img} />
            </div>
            <div className={classes.footer_text}>
                <p> <span>Copyright © 2022 All rights reserved</span><span className={classes.bar}> | </span><span>MU-GDSC Team ❤️</span></p>
                {/* <p>🔴 Terms &#38; Conditions</p> */}
            </div>
        </footer>
    )
}
export default Footer;