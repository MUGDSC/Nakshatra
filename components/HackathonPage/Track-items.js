import classes from './Track-items-card.module.css';

const TrackItemsCard = (props) => {
    return (
        <>
            <div className={classes.card}>
                <h3>
                    {props.title}
                </h3>
                <div>
                    <p className={classes.subheading}>{props.subheading}</p>
                    {/* <p className={classes.bring}>Bring On...</p> */}
                </div>
                <ul>
                    {props.points.map((item, index) => {
                        return <li key={index}>
                            <p>{item}</p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
export default TrackItemsCard;