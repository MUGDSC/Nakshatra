import classes from './Special-Prizes.module.css';

const SpecialPrizes = () => {
    return (
        <section className={classes.special_prizes}>
            <h2>Special Prizes</h2>
            <div className={classes.special_container}>
                <div className={classes.prizes_container}>
                    <div className={classes.prize_card}>
                        <div className={classes.card_title}>
                            <p>Celo</p>
                        </div>
                        <ul className={classes.card_details}>
                            <li><p>INR 20,000 for best Dapp built on Celo</p></li>
                            <li><p>Continuity Support</p></li>
                        </ul>
                    </div>
                    <div className={classes.prize_card}>
                        <div className={classes.card_title}>
                            <p>Tezos</p>
                        </div>
                        <ul className={classes.card_details}>
                            <li><p>INR 20,000 for best Dapp built on Tezos</p></li>
                            <li><p>Continuity grant opportunity upto $5,000 for outstanding project</p></li>
                        </ul>
                    </div>
                    <div className={classes.prize_card}>
                        <div className={classes.card_title}>
                            <p>Filecoin</p>
                        </div>
                        <ul className={classes.card_details}>
                            <li><p>INR 20,000 for best use of IPPS and/or Filecoin</p></li>
                        </ul>
                    </div>
                    <div className={classes.prize_card}>
                        <div className={classes.card_title}>
                            <p>Polygon</p>
                        </div>
                        <ul className={classes.card_details}>
                            <li><p>INR 10,000 for best hack built on Ethereum</p></li>
                            <li><p>INR 15,000 for best built on Ethereum + Polygon</p></li>
                            <li><p>Eligibility to apply for internship/full-time roles and seed funding of  up to 5,000 USD for winnders</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SpecialPrizes;