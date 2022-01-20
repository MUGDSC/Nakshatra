import classes from './CommunityPartners.module.css';
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const array = ["", ""];
const CommunityPartners = () => {
    return (
        <section className={classes.community}>
            <h2>Community Partners</h2>
            <div className={classes.wrapper}>
                <Marquee speed="100" gradient={false}>
                    <Image width={400} height={100} layout="fixed" src="/community/1.png" alt="MUGDSC" className={classes.image} />
                    <Image width={400} height={100} layout="fixed" src="/community/1.png" alt="MUGDSC" className={classes.image} />
                    <Image width={400} height={100} layout="fixed" src="/community/1.png" alt="MUGDSC" className={classes.image} />
                    <Image width={400} height={100} layout="fixed" src="/community/1.png" alt="MUGDSC" className={classes.image} />
                    <Image width={400} height={100} layout="fixed" src="/community/1.png" alt="MUGDSC" className={classes.image} />
                </Marquee>
            </div>
        </section>
    )
}
export default CommunityPartners;