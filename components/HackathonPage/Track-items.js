import styles from './Track-items-card.module.css';
import classes from './flip.module.css';
const TrackItemsCard = (props) => {
    return (
        <>
            <div className={classes.card}>
                <div className={`${classes.card__side} ${classes["card__side--front"]} ${styles.card}`}>
                    <div className={styles.title}>
                        <h3>{props.title}</h3>
                    </div>
                    <div className={styles.image}>
                        <img src="/tracks/wisdom.png" alt={props.title} />
                    </div>

                    <div className={styles.subheading}>
                        <p>{props.subheading}</p>
                    </div>
                </div>
                <div className={`${classes.card__side} ${classes["card__side--back"]} ${classes["card__side--back"]}  ${styles.card_back}`}>
                    <div className={styles.bring}>
                        <h3>Bring On...</h3>
                    </div>
                    <ul>
                        {props.points.map((point, index) => <li key={index}><p>{point}</p></li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default TrackItemsCard;
