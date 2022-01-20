import styles from './Track-items-card.module.css';
import classes from './flip.module.css';
const TrackItemsCard = (props) => {
    return (
        <>
            <div className={`${classes.card} ${!props.points && classes.disable_card}`}>
                <div className={`${classes.card__side} ${classes["card__side--front"]} ${styles.card}`}>
                    <div className={styles.title}>
                        <h3>{props.title}</h3>
                    </div>
                    <div className={styles.image}>
                        {props.image && <img src={`/tracks/${props.image}`} alt={props.title} />}
                    </div>

                    <div className={styles.subheading}>
                        <p>{props.subheading}</p>
                    </div>
                </div>
                {props.points && <div className={`${classes.card__side} ${classes["card__side--back"]} ${classes["card__side--back"]}  ${styles.card_back}`}>
                    <div className={styles.bring}>
                        <h3>Bring On...</h3>
                    </div>
                    <ul>
                        {props.points.map((point, index) => <li key={index}><p>{point}</p></li>)}
                    </ul>
                </div>}
            </div>
        </>
    )
}
export default TrackItemsCard;
