import Image from 'next/image';
import classes from './Prizes.module.css';

const Prizes = () => {
    return (
        <section className={classes.prizes}>
            <h2>Prizes</h2>
            <div className={classes.prizes_container}>
                <div className={classes.prize_card}>
                    <Image width={100} height={100} layout="fixed" src="/gold-1.png" alt="1st Prize" />
                    <img src="/coming_soon.png" alt="Coming soon" width={100} />
                </div>
                <div className={classes.prize_card}>
                    <Image width={100} height={100} layout="fixed" src="/silver-2.png" alt="2nd Prize" />
                    <img src="/coming_soon.png" alt="Coming soon" width={100} />
                </div>
                <div className={classes.prize_card}>
                    <Image width={100} height={100} layout="fixed" src="/bronze-3.png" alt="3rd Prize" />
                    <img src="/coming_soon.png" alt="Coming soon" width={100} />
                </div>
            </div>

        </section>
    )
}
export default Prizes;